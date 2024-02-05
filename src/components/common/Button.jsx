import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Buttons = ({ onClick, isLoading, disabled, label, color, variant, bgColor, icon,width,border,borderRadius,height }) => {
  return (
    <Button
      variant={variant || 'contained'}
      onClick={onClick}
      disabled={isLoading || disabled}
      startIcon={
        isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CircularProgress size={20} style={{ color: color }} />
          </div>
        ) : (
          icon && <img src={icon} alt="Icon" style={{ height: '20px' }} />
        )
      }
      style={{
        backgroundColor: bgColor,
        color: color || 'primary',
        textTransform: 'none',
        width : width,
        border: border,
        borderRadius:"12px", // Preserve the original case of the label
        height: height
      }}
    >
      {label}
    </Button>
  );
};

export default Buttons;
