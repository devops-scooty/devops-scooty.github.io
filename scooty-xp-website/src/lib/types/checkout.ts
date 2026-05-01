export type ScheduledDelivery = {
  scheduledFor: Date;
  timeSlot: "morning" | "afternoon" | "evening";
  recurring: boolean;
  recurrencePattern?: "daily" | "weekly" | "monthly";
}

export type GiftDeliveryOptions = {
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  giftMessage?: string;
  hidePrice: boolean;
}