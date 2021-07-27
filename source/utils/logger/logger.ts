import config from '@/config';

const logger = () => {
  const call = (method: 'error' | 'info' = 'info', ...text: string[]) => {
    const date = new Date();
    const hours = `00${date.getHours()}`.slice(-2);
    const minutes = `00${date.getMinutes()}`.slice(-2);
    const seconds = `00${date.getSeconds()}`.slice(-2);

    /* eslint-disable no-console */
    console[method](`[${config.app.name} ${hours}:${minutes}:${seconds}]`, ...text);
    /* eslint-enable no-console */
  };

  const info = (...text: string[]) => {
    call('info', ...text);
  };
  const error = (...text: string[]) => {
    call('error', ...text);

    if (config.app.isProduction) {
      // TODO: send to Sentry
    }
  };

  return {
    info,
    error,
  };
};

export default logger();
