'use client'; // Ensure the code runs on the client side

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // Check if the script already exists
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      document.body.appendChild(script);

      // Define the initialization function
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ur',
          },
          'google_translate_element'
        );
      };
    }
  }, []);

  return (
    <span>
      <div id="google_translate_element" className="translate"></div>
    </span>
  );
}
