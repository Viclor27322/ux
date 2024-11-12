import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://vercel.live https://js.stripe.com https://m.stripe.network https://apis.google.com https://www.gstatic.com https://www.google.com https://d3fxnri0mz3rya.cloudfront.net https://cdn.conekta.io https://notify.bugsnag.com;
      style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css https://vercel.live;
      font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
      img-src 'self' blob: data: https://res.cloudinary.com https://vercel.live;
      connect-src 'self' https://vercel.live https://cdn.jsdelivr.net https://api.stripe.com https://m.stripe.network https://rest-api2-three.vercel.app https://newapiimagenes.onrender.com https://www.google-analytics.com https://api.conekta.io https://notify.bugsnag.com http://localhost:3001/;
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
