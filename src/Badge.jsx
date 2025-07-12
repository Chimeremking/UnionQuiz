import React from 'react';
import badgeBg from './assets/badge-bg.jpg'; // Optional: Add a badge background image

const Badge = ({ title, score, name }) => {
  return (
    <div
      id="result-badge"
      className="badge-container"
      style={{
        width: '1080px',
        height: '1920px',
        position: 'relative',
        background: `linear-gradient(to bottom, #000, #888)`,
        fontFamily: 'Orbitron, sans-serif',
        color: 'white',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}
    >
      <div style={{ position: 'absolute', top: '40px', left: '40px' }}>
        <img src="/logo.png" alt="Union Logo" style={{ width: '100px' }} />
      </div>
      <div style={{ marginTop: '200px' }}>
        <img
          src="/union-icon.png"
          alt="Badge Icon"
          style={{ width: '250px', marginBottom: '2rem', filter: 'drop-shadow(0 0 30px white)' }}
        />
        <h1 style={{ fontSize: '48px', textShadow: '0 0 10px cyan' }}>{title}</h1>
        <p style={{ fontSize: '32px', marginTop: '1rem' }}>Believer Score: {score}/100</p>
        {name && <p style={{ fontSize: '24px', marginTop: '0.5rem' }}>Name: {name}</p>}
      </div>
      <div style={{ position: 'absolute', bottom: '60px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', color: '#0ff', textShadow: '0 0 8px #0ff' }}>
          🏴‍☠️ Follow <strong>@0xSerKing</strong> on X for more zk heat
        </p>
      </div>
    </div>
  );
};

export default Badge;
