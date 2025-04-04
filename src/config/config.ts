export const getApiUrl = () =>
  import.meta.env.VITE_API_URL_PROD ||
  import.meta.env.VITE_API_URL ||
  'http://localhost:5000'
