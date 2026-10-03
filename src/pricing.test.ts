import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { addItem, clearCarts } from "./cart.ts";
import { checkoutTotal } from "./pricing.ts";

beforeEach(() => clearCarts());

test("applies a known coupon case-insensitively", () => {
  addItem("s1", { sku: "mug", unitPrice: 1000, quantity: 2 });
  assert.equal(checkoutTotal("s1", "welcome10"), 1800);
});

test("ignores unknown coupons", () => {
  addItem("s1", { sku: "mug", unitPrice: 1000, quantity: 1 });
  assert.equal(checkoutTotal("s1", "BOGUS"), 1000);
});
