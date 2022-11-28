import alert from './alert';

/**
 * Listener for uncaught exceptions
 */
const handleUncaughtException = () => {
  process.on('uncaughtException', uncaughtExceptionListener);
};

export const uncaughtExceptionListener = (error: Error) => {
  alert.error(`uncaughtException: ${error.message}`);
};

export default handleUncaughtException;
