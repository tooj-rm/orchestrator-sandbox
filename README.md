# orchestrator-sandbox

A tiny shop pricing module used to test the AI orchestrator end to end.
It is intentionally small and contains one known bug. Do not use it for
anything else.

## Scripts

```bash
npm ci
npm test          # node --test (Node >= 22.18 runs .ts files directly)
npm run lint
npm run typecheck
npm run build
```

## Known bug (for the orchestrator to fix)

Guests have no session. `cartTotal()` and therefore `checkoutTotal()` throw
`TypeError: Cannot read properties of undefined (reading 'items')` when called
without a session id, instead of returning `0` for an empty cart.

Suggested Trello card for the test run:

> **Title:** Checkout crashes for guest users
>
> **Description:** Calling `checkoutTotal(undefined)` (guest checkout, no
> session) throws "TypeError: Cannot read properties of undefined (reading
> 'items')" from `cartTotal` in `src/cart.ts`. Guests should get a total of 0
> when they have no cart. Please add a regression test.
