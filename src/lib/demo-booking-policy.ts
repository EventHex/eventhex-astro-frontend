export const DEMO_HOST_TIME_ZONE = "Asia/Kolkata";

const APPROVAL_START_MINUTE = 23 * 60 + 30;
const APPROVAL_END_MINUTE = 8 * 60 + 30;

export function requiresDemoApproval(start: string | Date): boolean {
  const date = start instanceof Date ? start : new Date(start);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid demo start time");

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: DEMO_HOST_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  const minuteOfDay = hour * 60 + minute;

  // Guarded window is [23:30, 08:30): 23:30 requires approval; 08:30 does not.
  return minuteOfDay >= APPROVAL_START_MINUTE || minuteOfDay < APPROVAL_END_MINUTE;
}
