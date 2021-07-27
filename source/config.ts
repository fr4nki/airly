const config = {
  app: {
    isProduction: process.env.NODE_ENV === 'production',
    build: process.env.APP_BUILD ?? 'local',
    mode: process.env.APP_MODE ?? 'local',
    name: 'Airly',
  },
  sentry: {
    dsn: process.env.APP_SENTRY_DSN,
  },
};

export default config;
