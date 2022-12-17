import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a content', () => {
    const content = new Content('Hello World');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow('Content length is invalid');
  });

  it('should not be able to create a content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(
      'Content length is invalid',
    );
  });
});
