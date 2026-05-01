// lib/types/tracking.ts
export type OrderStatus = "placed" | "confirmed" | "preparing" | "rider_assigned" | "picked_up" | "in_transit" | "delivered";

export type TrackingData = {
  orderId: string;
  status: OrderStatus;
  estimatedArrival: string; // ISO datetime
  riderLocation: { lat: number; lng: number };
  destinationLocation: { lat: number; lng: number };
}