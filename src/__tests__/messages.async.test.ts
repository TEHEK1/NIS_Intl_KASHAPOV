import { describe, expect, it, vi } from 'vitest';

import { fetchUnreadCount } from '../utils/messages';

describe('fetchUnreadCount', () => {
  it('resolves with the provided value after delay', async () => {
    vi.useFakeTimers();

    const pending = fetchUnreadCount(7, 20);

    vi.advanceTimersByTime(20);
    await expect(pending).resolves.toBe(7);

    vi.useRealTimers();
  });
});
