import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatNGN = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
    }).format(amount);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
