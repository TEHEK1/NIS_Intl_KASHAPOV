import { describe, expect, it } from 'vitest';

import { formatTimestamp, totalUnread } from '../utils/messages';

describe('message utilities', () => {
  it('formats timestamp with expected structure', () => {
    const result = formatTimestamp(new Date('2025-02-01T12:34:56Z'));

    expect(result).toMatch(/\d{2}.*\d{2}:\d{2}:\d{2}/);
  });

  it('sums unread counts', () => {
    expect(totalUnread([1, 2, 3, 4])).toBe(10);
  });
});
