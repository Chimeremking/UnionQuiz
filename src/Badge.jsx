import React from 'react';

const Badge = ({ title, score, name }) => {
  return (
    <div
      id="result-badge"
      style={{
        width: '400px',
        height: '520px',
        background: 'linear-gradient(180deg, #18181b 0%, #23272f 100%)',
        borderRadius: '0.9rem',
        boxShadow: '0 2px 16px 0 #0ff2, 0 1px 4px 0 #fff1',
        fontFamily: 'Manrope, sans-serif',
        color: 'white',
        textAlign: 'center',
        padding: '2rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1.5px solid #0ff4',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated confetti background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.18,
        background: 'repeating-linear-gradient(135deg, #0ff2 0 2px, transparent 2px 20px)',
        animation: 'badgeConfetti 2.5s linear infinite',
      }} />
      <style>{`
        @keyframes badgeConfetti {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>
      <div style={{ width: '100%', marginBottom: '0.5rem', zIndex: 1 }}>
        <img src="/logo.png" alt="Union Logo" style={{ width: '40px', margin: '0 auto', display: 'block', borderRadius: '0.5rem' }} onError={e => e.target.style.display = 'none'} />
      </div>
      <div style={{ marginTop: '0.5rem', width: '100%', zIndex: 1 }}>
        <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem', filter: 'drop-shadow(0 0 8px #0ff)' }}>🎉</div>
        <img
          src="/union-icon.png"
          alt="Badge Icon"
          style={{ width: '70px', margin: '0 auto 1.2rem', display: 'block', filter: 'drop-shadow(0 0 8px #0ff)' }}
          onError={e => e.target.style.display = 'none'}
        />
        <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0ff', textShadow: '0 0 8px #0ff', marginBottom: '0.5rem', fontFamily: 'Manrope, sans-serif' }}>{title}</h1>
        <p style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.5rem 0', color: '#fff' }}>Believer Score: {score}/100</p>
        {name && <p style={{ fontSize: '1rem', margin: 0, color: '#fff', fontWeight: 500 }}>Name: {name}</p>}
      </div>
      <div style={{ width: '100%', marginTop: 'auto', zIndex: 1 }}>
        <p style={{ fontSize: '0.93rem', color: '#0ff', textShadow: '0 0 4px #0ff', margin: 0, fontFamily: 'Manrope, sans-serif' }}>
          🏴‍☠️ Follow <strong>@0xSerKing</strong> on X for more zk heat
        </p>
      </div>
    </div>
  );
};

export default Badge;
