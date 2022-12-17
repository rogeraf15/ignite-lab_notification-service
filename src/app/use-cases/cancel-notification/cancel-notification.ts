import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications-repository';
import { NotificationNotFound } from '../errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

@Injectable()
export class CancelNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute({ notificationId }: CancelNotificationRequest): Promise<void> {
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
