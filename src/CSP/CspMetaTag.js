import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' https://apis.google.com https://www.gstatic.com https://www.google.com https://cdn.jsdelivr.net http://localhost:3001;
      style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css;
      font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
      img-src 'self' https://res.cloudinary.com data:; 
      connect-src 'self' http://localhost:3001 https://www.google-analytics.com https://rest-api2-three.vercel.app https://newapiimagenes.onrender.com;
      frame-src 'self' https://proyecto-accr.onrender.com/;
      form-action 'self';
    `;

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
