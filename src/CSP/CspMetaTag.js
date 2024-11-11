import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
       script-src 'self' 'sha256-5+YTmTcBwCYdJ8Jetbr6kyjGp0Ry/H7ptpoun6CrSwQ=' 'sha256-/5Guo2nzv5n/w6ukZpOBZOtTJBJPSkJ6mhHpnBgm3Ls=' https://js.stripe.com https://m.stripe.network;
      style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css;
      font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
      img-src 'self' blob: data: https://res.cloudinary.com;
      connect-src 'self' https://api.stripe.com https://m.stripe.network https://rest-api2-three.vercel.app https://newapiimagenes.onrender.com https://www.google-analytics.com;
      frame-src 'self' https://js.stripe.com https://proyecto-accr.onrender.com https://www.google.com.mx;
      form-action 'self';
    `;

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
