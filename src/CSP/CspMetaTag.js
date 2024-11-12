import { useEffect } from 'react';

export function CSPMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src * 'unsafe-inline' 'unsafe-eval';
      script-src * 'unsafe-inline' 'unsafe-eval';
      style-src * 'unsafe-inline';
      img-src * data: blob:;
      font-src *;
      connect-src *;
      frame-src *;
      media-src *;
      object-src *;
      form-action *;
    `;

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
