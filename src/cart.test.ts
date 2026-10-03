import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { addItem, cartTotal, clearCarts } from "./cart.ts";

beforeEach(() => clearCarts());

test("sums unit price times quantity", () => {
  addItem("s1", { sku: "mug", unitPrice: 1200, quantity: 2 });
  addItem("s1", { sku: "tea", unitPrice: 450, quantity: 1 });
  assert.equal(cartTotal("s1"), 2850);
});

test("keeps carts separate per session", () => {
  addItem("s1", { sku: "mug", unitPrice: 1200, quantity: 1 });
  addItem("s2", { sku: "tea", unitPrice: 450, quantity: 3 });
  assert.equal(cartTotal("s2"), 1350);
});
