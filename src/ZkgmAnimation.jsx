import React, { useMemo } from 'react';

const ZkgmAnimation = () => {
  // Use useMemo so the floats are generated only once per mount
  const floats = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 20;
        const neon = Math.random() < 0.3;
        return (
          <span
            key={i}
            className={`zkgm-float${neon ? ' zkgm-neon' : ''}`}
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              fontSize: '1.1rem', // smaller size
              textTransform: 'lowercase',
            }}
          >
            zkgm
          </span>
        );
      }),
    []
  );

  return <div className="zkgm-bg">{floats}</div>;
};

export default ZkgmAnimation;
