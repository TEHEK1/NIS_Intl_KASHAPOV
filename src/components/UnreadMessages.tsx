import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function UnreadMessages() {
  const { t } = useTranslation();
  const count = useMemo(() => Math.floor(Math.random() * 10) + 1, []);
  const date = useMemo(
    () =>
      new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date()),
    []
  );

  return (
    <section className="card">
      <h2>Непрочитанные сообщения</h2>
      <p>
        {t('messages', { count })} ({date})
      </p>
    </section>
  );
}

export default UnreadMessages;
