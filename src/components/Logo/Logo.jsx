import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';

export const Logo = ({
  className,
  src = '',
  height = '60px',
  width,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`logo RestLogo ${className ?? ''}`}
      onClick={() => navigate('/')}
      style={{ height, width }}
      role="banner"
    >
      <img src={src} alt="logo" title="Inicio" />
    </div>
  );
};
