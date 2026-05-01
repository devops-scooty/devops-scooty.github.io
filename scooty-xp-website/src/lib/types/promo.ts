// lib/types/promo.ts
export type PromoCodeValidationRequest = {
  code: string;
  orderTotal: number;
  userId?: string;
}

export type PromoCodeValidationResponse = {
  valid: boolean;
  discountType: "fixed" | "percentage" | "free_delivery";
  discountValue: number;
  message: string;
}