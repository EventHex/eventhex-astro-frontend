export const DEMO_HOST_TIME_ZONE = "Asia/Kolkata";

const APPROVAL_START_MINUTE = 22 * 60;
const APPROVAL_END_MINUTE = 2 * 60 + 30;
const SAME_DAY_LAST_VISIBLE_MINUTE = 22 * 60 + 30;
const NEXT_DAY_FIRST_VISIBLE_MINUTE = 8 * 60 + 30;

type HostDateParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

function parseDate(value: string | Date, label: string): Date {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid ${label}`);
  return date;
}

function hostDateParts(date: Date): HostDateParts {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: DEMO_HOST_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);
  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: value("hour"),
    minute: value("minute"),
  };
}

function localClock(parts: HostDateParts, hour = parts.hour, minute = parts.minute): number {
  return Date.UTC(parts.year, parts.month - 1, parts.day, hour, minute);
}

export function requiresDemoApproval(start: string | Date): boolean {
  const parts = hostDateParts(parseDate(start, "demo start time"));
  const minuteOfDay = parts.hour * 60 + parts.minute;

  // Guarded window is [22:00, 02:30): 22:00 through 02:00 require approval.
  return minuteOfDay >= APPROVAL_START_MINUTE || minuteOfDay < APPROVAL_END_MINUTE;
}

export function isDemoSlotBookable(start: string | Date, now: string | Date = new Date()): boolean {
  const startDate = parseDate(start, "demo start time");
  const nowDate = parseDate(now, "current time");
  if (startDate <= nowDate) return false;

  const slot = hostDateParts(startDate);
  const current = hostDateParts(nowDate);
  const slotClock = localClock(slot);

  // Sunday is closed in the EventHex host timezone.
  if (new Date(localClock(slot, 0, 0)).getUTCDay() === 0) return false;

  const currentMinute = current.hour * 60 + current.minute;
  const currentDay = localClock(current, 0, 0);
  const dayMs = 24 * 60 * 60 * 1000;
  const blackoutDay = currentMinute < NEXT_DAY_FIRST_VISIBLE_MINUTE ? currentDay - dayMs : currentDay;
  const blackoutStart = blackoutDay + SAME_DAY_LAST_VISIBLE_MINUTE * 60 * 1000;
  const blackoutEnd = blackoutDay + dayMs + NEXT_DAY_FIRST_VISIBLE_MINUTE * 60 * 1000;

  // 22:30 and 08:30 remain visible. Only the nearest overnight window is hidden;
  // later overnight slots stay available with the existing approval policy.
  return slotClock <= blackoutStart || slotClock >= blackoutEnd;
}
