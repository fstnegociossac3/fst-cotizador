const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Variable de entorno faltante: ${key}`);
  }

  return value;
};

export const env = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME ?? "FST Cotizador",

    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  },

  get required() {
    return {
      get: getEnv,
    };
  },
};
