// src/config/env.ts
export const ENV = {
  BASE_PATH: import.meta.env.VITE_BASE_URL || '',
  API_URL: import.meta.env.VITE_API_URL || 'https://your-mockapi-endpoint.com'
};