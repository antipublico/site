import React, { useEffect, useRef } from 'react';
import ASCIIText from './ASCIIText.jsx';
import BalatroBackground from './BalatroBackground.jsx';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.log('Audio autoplay blocked:', error);
        // Fallback: play on first user interaction
        const playOnInteraction = () => {
          audioRef.current?.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('keydown', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);
      }
    };

    playAudio();
  }, []);
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BalatroBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          flex: '0 0 auto',
          width: '100vw',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ASCIIText
            text="antipublic"
            enableWaves={false}
            asciiFontSize={11}
            textFontSize={180}
            textColor="#ffffff"
            planeBaseHeight={9}
          />
        </div>
        <div style={{
          marginTop: '20px',
          fontSize: '16px',
          fontFamily: 'IBM Plex Mono, monospace',
          color: '#374151',
          letterSpacing: '1px'
        }}>
          owner@antipublic.org
        </div>
      </div>
      <audio 
        ref={audioRef}
        src="./main.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default App;
