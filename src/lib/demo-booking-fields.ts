type DemoBookingFields = {
  company: string;
  role?: string;
  notes?: string;
};

export function buildCalBookingFieldsResponses({ company, role, notes }: DemoBookingFields): Record<string, string> {
  const fields: Record<string, string> = { company };
  if (role) fields.role = role;
  if (notes) fields.notes = notes;
  return fields;
}
