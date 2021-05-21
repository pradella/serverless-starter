export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi from Public API",
      // how to get env variables, from .env or custom (serverless.yml)
      API_GATEWAY_DOMAIN: process.env.API_GATEWAY_DOMAIN,
      STAGE: process.env.STAGE,
    }),
  };
}
