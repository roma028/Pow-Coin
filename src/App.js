import React from 'react';
import PawCoin from './assets/PawCoin.png';
import fotofundo from './assets/fotofundo.png';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img src={fotofundo} alt="Minha foto" style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img src={PawCoin} alt="PawCoin" style={{ width: '100%', height: '100px', backgroundColor: '#282c34', padding: '10px', opacity: 0.8 }} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '9%',
          left: '34%',
          transform: 'translate(-10%, -50%)',
          zIndex: 1,
          color: 'white',
          textShadow: '5px 5px 7px black',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '10px',
          borderRadius: '10px',
          fontSize: '28px',
        }}
      >
        <button
          style={{
            display: 'inline-block',
            position: 'relative',
            paddingLeft: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '28px',
            textShadow: '5px 5px 7px black',
            color: 'white',
            
          }}
          onClick={() => console.log('Botão HOME clicado')}
        >
          <span>HOME</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px'}}></span>
        </button>

        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px' }}>
          <span>DAO</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px' }}></span>
        </span>
        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px'}}>
          <span>DONATIONS</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px'}}></span>
        </span>
        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px' }}>
          <span>NFT</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px'}}></span>
        </span>
        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px' }}>
          <span>TEAM</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px'}}></span>
        </span>
        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px' }}>
          <span>SERVICES</span>
          <span style={{ borderRight: '1px solid white', paddingRight: '10px'}}></span>
        </span>
        <span style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px' }}>
          <span>WHATEPAPER</span>
          <span style={{  paddingRight: '10px'}}></span>
        </span>       
      </div>
      <div style={{
          position: 'absolute',
          top: '9%',
          left: '87%',
          transform: 'translate(-1%, -50%)',
          zIndex: 1,
          color: 'white',
          textShadow: '5px 5px 7px black',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '1px',
          borderRadius: '5px',
          fontSize: '13px',
        }}>
        <h1 style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        Language
        </h1>
      </div>
    </div>
  );
}

export default App;