export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

export function totalUnread(counts: number[]): number {
  return counts.reduce((sum, value) => sum + value, 0);
}

export function fetchUnreadCount(target = 3, delay = 50): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(target), delay);
  });
}
