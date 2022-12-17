import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const noitification = new Notification({
      content: new Content('Hello World'),
      category: 'social',
      recipientId: 'example_recipient_id',
    });

    expect(noitification).toBeTruthy();
  });
});
