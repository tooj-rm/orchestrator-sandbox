import { cartTotal } from "./cart.ts";

/** Percentage discounts by coupon code. */
const COUPONS: Record<string, number> = {
  WELCOME10: 10,
  SPRING25: 25,
};

/** Checkout total in cents after an optional coupon. Never negative. */
export function checkoutTotal(sessionId: string | undefined, coupon?: string): number {
  const subtotal = cartTotal(sessionId);
  const percent = coupon ? (COUPONS[coupon.toUpperCase()] ?? 0) : 0;
  return Math.max(0, Math.round(subtotal * (1 - percent / 100)));
}
