export type BasketItem = {
  id: string;
  name: string;
  vendorId: string;
  vendorName: string;
  category: "grocery" | "medicine" | "food" | "fashion";
  price: number;
  quantity: number;
  image: string;
}

export type BasketState = {
  items: BasketItem[];
  subtotal: number;
  deliveryFee: number;
  discount?: number;
  total: number;
  promoCode?: string;
  addItem: (item: BasketItem) => void;
  // ... other actions
}