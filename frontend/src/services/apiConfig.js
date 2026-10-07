// Automatically resolve BACKEND_URL:
// 1. If VITE_BACKEND_URL is explicitly set in env, prioritize it.
// 2. When accessed on localhost/private IP without VITE_BACKEND_URL, connect to local Express server on port 4000.
// 3. In unified production deployments (such as Vercel multi-service where /api rewrites to backend),
//    default to current origin (or empty string for relative paths).
const isLocalhost =
  typeof window !== 'undefined' &&
  Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.')
  );

export const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_URL ||
  (isLocalhost ? 'http://localhost:4000' : (typeof window !== 'undefined' ? window.location.origin : ''))
).replace(/\/+$/, '');
