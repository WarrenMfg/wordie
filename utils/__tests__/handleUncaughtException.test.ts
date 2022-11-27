import handleUncaughtException, {
  uncaughtExceptionListener,
} from '../handleUncaughtException';

describe('handleUncaughtException', () => {
  it('should use uncaughtExceptionListener', async () => {
    expect.hasAssertions();

    jest.spyOn(process, 'on').mockImplementationOnce(jest.fn());

    handleUncaughtException();
    expect(process.on).toHaveBeenCalledWith(
      'uncaughtException',
      uncaughtExceptionListener
    );
  });

  it('should log the error message', () => {
    expect.hasAssertions();

    const log = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(log);

    uncaughtExceptionListener(new Error('Yikes!'));

    expect(log).toHaveBeenCalledTimes(3);
  });
});
