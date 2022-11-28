import isRunningNodeVersion from '../isRunningNodeVersion';

describe('isRunningNodeVersion', () => {
  it('should set exitCode', () => {
    expect.hasAssertions();

    const log = jest.fn();
    jest.spyOn(console, 'log').mockImplementationOnce(log);

    const set = jest.fn();
    Object.defineProperty(process, 'exitCode', {
      set,
    });

    isRunningNodeVersion(Infinity);
    expect(log).toHaveBeenCalledTimes(1);
    expect(set).toHaveBeenCalledTimes(1);
  });

  it('should return true', () => {
    expect.hasAssertions();

    expect(isRunningNodeVersion(-Infinity)).toBe(true);
  });
});
