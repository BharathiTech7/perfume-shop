import axios from 'axios';

/**
 * Pre-configured Axios instance pointing at the backend API.
 * Base URL is read from the VITE_API_URL environment variable.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
