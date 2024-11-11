import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' https://js.stripe.com 'unsafe-inline';
      style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css;
      font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
      img-src 'self' blob: data: https://res.cloudinary.com;
      connect-src 'self' https://api.stripe.com https://m.stripe.network https://rest-api2-three.vercel.app https://newapiimagenes.onrender.com;
      frame-src 'self' https://js.stripe.com https://proyecto-accr.onrender.com;
      form-action 'self';
    `;

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
