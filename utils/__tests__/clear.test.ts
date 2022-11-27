import clear from '../clear';

describe('clear', () => {
  it('should clear for win32', () => {
    expect.hasAssertions();

    const write = jest.fn();
    jest.spyOn(process.stdout, 'write').mockImplementationOnce(write);
    Object.defineProperty(process, 'platform', {
      get: () => 'win32',
    });

    clear();
    expect(write).toHaveBeenCalledTimes(1);
  });

  it('should clear for linux', () => {
    expect.hasAssertions();

    const write = jest.fn();
    jest.spyOn(process.stdout, 'write').mockImplementationOnce(write);
    Object.defineProperty(process, 'platform', {
      get: () => 'linux',
    });

    clear();
    expect(write).toHaveBeenCalledTimes(1);
  });
});
