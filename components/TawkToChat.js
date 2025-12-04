'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TawkToChat() {
  const pathname = usePathname();

  useEffect(() => {
    // Agar admin path hai toh return kar do, script load mat karo
    if (pathname.startsWith('/admin')) {
      return;
    }

    // This function loads Tawk.to script
    const loadTawkTo = () => {
      // Check if script already exists
      if (document.getElementById('tawk-to-script')) {
        return;
      }

      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      
      const script = document.createElement('script');
      script.id = 'tawk-to-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/692d6c7fa794f2197c4c968f/1jbcmvllu';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
      
      // Make Tawk_API globally accessible
      window.Tawk_API = Tawk_API;
      window.Tawk_LoadStart = Tawk_LoadStart;
    };

    loadTawkTo();

    // Cleanup function
    return () => {
      const tawkScript = document.getElementById('tawk-to-script');
      if (tawkScript) {
        tawkScript.remove();
      }
      // Remove Tawk widget
      const tawkWidget = document.getElementById('tawk-bubble');
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, [pathname]);

  return null;
}