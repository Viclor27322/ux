import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://apis.google.com https://www.gstatic.com https://www.google.com https://cdn.jsdelivr.net https://js.stripe.com;
      style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css;
      font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
      img-src 'self' blob: data: https://res.cloudinary.com;
      connect-src 'self' https://www.google-analytics.com https://rest-api2-three.vercel.app https://newapiimagenes.onrender.com https://api.stripe.com https://m.stripe.network;
      frame-src 'self' https://proyecto-accr.onrender.com https://www.google.com.mx https://js.stripe.com;
      form-action 'self';
    `;

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
