import { useEffect, useState, useLayoutEffect } from 'react';

const FacebookPagePlugin = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecter la taille de l'écran
  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      window.FB && window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      maxWidth: '1000px',
      margin: '1.5rem auto',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#f9f9f9',
      padding: isMobile ? '1rem' : '0',
    }}>
      {/* Bande latérale */}
      {!isMobile && (
        <div style={{
          backgroundColor: '#4267B2',
          color: 'white',
          padding: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          minWidth: '60px'
        }}>
          Facebook
        </div>
      )}

      {/* Contenu principal */}
      <div style={{
        flex: 1,
        padding: isMobile ? '0' : '2rem',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: isMobile ? '1rem' : '1rem',
          fontSize: isMobile ? '1.4rem' : '1.6rem',
          color: '#333'
        }}>
          Suivez notre page Facebook
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61568953924546&locale=fr_FR"
          data-tabs="timeline"
          data-width={isMobile ? "320" : "700"}
          data-height={isMobile ? "400" : "600"}
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
        />
      </div>
    </div>
  );
};

export default FacebookPagePlugin;
