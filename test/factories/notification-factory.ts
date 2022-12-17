import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';

export function makeNotification(
  override: Partial<Notification> = {},
): Notification {
  return new Notification({
    category: 'social',
    content: new Content('Hello World'),
    recipientId: 'recipient_id',
    ...override,
  });
}
