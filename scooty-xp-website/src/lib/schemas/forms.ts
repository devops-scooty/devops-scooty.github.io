// lib/schemas/forms.ts
import { z } from "zod";

export const vendorSignupSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z.string().regex(/^\+234\d{10}$/, "Must be a valid Nigerian number (+234...)"),
  email: z.string().email(),
  businessType: z.enum(["Restaurant", "Grocery", "Pharmacy", "Fashion", "Other"]),
  location: z.string(),
  message: z.string().optional()
});

export const riderSignupSchema = z.object({
  fullName: z.string(),
  phone: z.string().regex(/^\+234\d{10}$/),
  email: z.string().email(),
  vehicleType: z.enum(["Motorcycle", "Bicycle", "Car", "Van"]),
  area: z.string(),
  availability: z.enum(["Full-time", "Part-time", "Weekends"]),
});