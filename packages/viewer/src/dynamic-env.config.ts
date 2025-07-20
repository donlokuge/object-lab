export const API_URI = import.meta.env.PROD
  ? window.location.origin.replace('://', '://api.')
   : import.meta.env['VITE_DEV_API_URI'];