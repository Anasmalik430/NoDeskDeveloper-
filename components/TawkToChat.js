'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TawkToChat() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Agar admin path hai, toh widget ko hide/remove karo aur exit
    if (pathname.startsWith('/admin')) {
      if (window.Tawk_API && window.Tawk_API.hide) {
        window.Tawk_API.hide();
      }
      return;
    }

    // 2. Agar admin nahi hai, toh widget show karo
    if (window.Tawk_API && window.Tawk_API.show) {
      window.Tawk_API.show();
    }

    // 3. Load script function
    const loadTawkTo = () => {
      if (document.getElementById('tawk-to-script')) return;

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement('script');
      script.id = 'tawk-to-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/6996bb9473d8cb1c357e5bb7/1jhqcpiv3'; // Updated Link
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    loadTawkTo();

    // Cleanup: Jab component unmount ho (optional but good practice)
    return () => {
       // Note: Aksar Next.js mein hum widget ko sirf hide karte hain 
       // kyunki script baar-baar reload karna heavy ho sakta hai.
    };
  }, [pathname]);

  return null;
}