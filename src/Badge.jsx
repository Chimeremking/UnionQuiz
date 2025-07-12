import React from 'react';

const getInitial = (name) => (name && name.length > 0 ? name[0].toUpperCase() : '?');

const Badge = ({ title, score, name, isLive }) => {
  return (
    <div
      id="result-badge"
      style={{
        width: '100%',
        maxWidth: '400px',
        minHeight: '380px',
        background: '#0A0808',
        borderRadius: '1.1rem',
        boxShadow: '0 2px 16px 0 #0008, 0 1px 4px 0 #0ff2',
        fontFamily: 'Manrope, sans-serif',
        color: '#fff',
        textAlign: 'center',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid #0ff',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top logo and Union Build */}
      <div style={{ width: '100%', marginBottom: '0.5rem', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <img src="/union-logo.png.jpg" alt="Union Logo" style={{ width: '32px', height: '32px', borderRadius: '0.5rem', background: '#fff', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
        <span style={{ fontWeight: 700, fontSize: '1rem', color: '#0ff', letterSpacing: '0.01em', fontFamily: 'Manrope, sans-serif' }}>Union Build</span>
      </div>
      <div style={{ marginTop: '0.5rem', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Avatar placeholder */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0ff 40%, #222 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          fontWeight: 800,
          color: '#222',
          marginBottom: 12,
          boxShadow: '0 0 8px #0ff6',
          lineHeight: 1,
          textAlign: 'center',
        }}>
          {getInitial(name)}
        </div>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0ff', textShadow: '0 0 8px #0ff', marginBottom: '0.5rem', fontFamily: 'Manrope, sans-serif' }}>{title}</h1>
        <p style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0.5rem 0', color: '#fff' }}>Believer Score: {score}/100</p>
        {name && <p style={{ fontSize: '0.9rem', margin: 0, color: '#fff', fontWeight: 500 }}>Name: {name}</p>}
      </div>
      <div style={{ width: '100%', marginTop: 'auto', zIndex: 1, position: 'relative' }}>
        {isLive ? (
          <a
            href="https://x.com/0xSerKing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.85rem', color: '#0ff', textShadow: '0 0 4px #0ff', margin: 0, fontFamily: 'Manrope, sans-serif', textDecoration: 'underline', display: 'inline-block' }}
          >
            🏴‍☠️ Follow <strong>@0xSerKing</strong> on X for more zk heat
          </a>
        ) : (
          <p style={{ fontSize: '0.85rem', color: '#0ff', textShadow: '0 0 4px #0ff', margin: 0, fontFamily: 'Manrope, sans-serif' }}>
            🏴‍☠️ Follow <strong>@0xSerKing</strong> on X for more zk heat
          </p>
        )}
        {/* Union Build logo watermark */}
        <img src="/union-logo.png.jpg" alt="Union Build Logo" style={{ position: 'absolute', bottom: 0, right: 0, width: '50px', opacity: 0.13, pointerEvents: 'none', zIndex: 2 }} onError={e => e.target.style.display = 'none'} />
      </div>
    </div>
  );
};

export default Badge;
