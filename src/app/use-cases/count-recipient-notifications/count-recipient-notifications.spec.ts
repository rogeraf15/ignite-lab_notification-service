import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('CountRecipientNotification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient1_id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient1_id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient2_id',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient1_id',
    });

    expect(count).toEqual(2);
  });
});
