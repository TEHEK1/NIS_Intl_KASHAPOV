import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatTimestamp } from '../utils/messages';

function UnreadMessages() {
  const { t } = useTranslation();
  const count = useMemo(() => Math.floor(Math.random() * 10) + 1, []);
  const date = useMemo(() => formatTimestamp(new Date()), []);

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
