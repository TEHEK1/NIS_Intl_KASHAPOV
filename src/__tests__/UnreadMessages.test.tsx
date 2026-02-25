import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import UnreadMessages from '../components/UnreadMessages';
import { formatTimestamp } from '../utils/messages';

describe('UnreadMessages', () => {
  it('renders translated unread count with timestamp', () => {
    vi.useFakeTimers();
    const fixedDate = new Date('2025-02-01T10:30:15Z');
    vi.setSystemTime(fixedDate);
    vi.spyOn(Math, 'random').mockReturnValue(0.4);

    render(<UnreadMessages />);

    const formatted = formatTimestamp(new Date());
    expect(
      screen.getByText((content) => content.includes('У вас 5 непрочитанных сообщений'))
    ).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes(formatted))).toBeInTheDocument();

    vi.useRealTimers();
    vi.restoreAllMocks();
  });
});
