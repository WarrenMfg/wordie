import alert from './alert.js';

/**
 * Listener for uncaught exceptions
 */
const handleUncaughtException = () => {
  process.on('uncaughtException', error => {
    alert.error(`uncaughtException: ${error.message}`);
  });
};

export default handleUncaughtException;
