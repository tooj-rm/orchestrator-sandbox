export interface CartItem {
  sku: string;
  unitPrice: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

/** Carts of signed-in customers, keyed by session id. */
const carts = new Map<string, Cart>();

export function addItem(sessionId: string, item: CartItem): void {
  const cart = carts.get(sessionId) ?? { items: [] };
  cart.items.push(item);
  carts.set(sessionId, cart);
}

/** Guests have no session, so they have no stored cart. */
export function getCart(sessionId?: string): Cart | undefined {
  return sessionId ? carts.get(sessionId) : undefined;
}

/** Order total in cents, before discounts. */
export function cartTotal(sessionId?: string): number {
  const items = getCart(sessionId)?.items ?? [];
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function clearCarts(): void {
  carts.clear();
}
