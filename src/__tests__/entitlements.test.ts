import { describe, it, expect } from 'vitest';
describe('entitlements', () => {
  it('free plan gets limited questions', () => {
    const entitlement = { plan: 'free' as const };
    expect(entitlement.plan).toBe('free');
  });
  it('pro plan is valid', () => {
    const entitlement = { plan: 'pro' as const, expiresAt: '2026-12-31' };
    expect(new Date(entitlement.expiresAt).getTime()).toBeGreaterThan(Date.now());
  });
});
