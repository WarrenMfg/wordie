import alert from '../alert';

describe('alerts', () => {
  it('should alert', () => {
    expect.hasAssertions();

    const msg = 'test';

    const log = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(log);

    expect(true).toBeTruthy();
    (Object.keys(alert) as (keyof typeof alert)[]).forEach((key, i) => {
      alert[key](msg);
      expect(log).toHaveBeenCalledTimes(3 * (i + 1));
    });
  });
});
