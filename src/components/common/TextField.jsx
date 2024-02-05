import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ImageIcon from '@mui/icons-material/Image';
import "./style.css"

const CustomTextField = ({ label, value, onChange, fullWidth, width, variant, maxheight, backgroundColor, borderRadius, border, display, gap, outline, type, ...props }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="TextField-without-border-radius">
      {type === 'file' ? (
        <>
          <Input
            type="file"
            onChange={onChange}
            style={{ display: 'none',borderRadius:'10px' }}
            ref={fileInputRef}
            {...props}
            {...(props.accept ? {} : { accept: 'image/*' })}
          />
          <TextField
            value={value}
            fullWidth={fullWidth || false}
            variant={variant || 'outlined'}
            maxheight={maxheight || false}
            borderRadius='10px'
            style={{ backgroundColor: backgroundColor, maxHeight: maxheight, border: border, width: width, outline: outline, display: display, gap: gap,borderRadius:'10px' }}
            disabled
            size="small"
            InputProps={{
              style: {
                borderRadius: "12px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="outlined" component="label" onClick={handleButtonClick} style={{ borderRadius: '12px', border: border, display: display, gap: gap }}>
                    <ImageIcon />
                    {label}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </>
      ) : (
        <TextField
          type={type || 'text'} 
          label={label}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth || false}
          variant={variant || 'outlined'}
          maxheight={maxheight || false}
          style={{ backgroundColor: backgroundColor, maxHeight: maxheight, border: border, width: width, outline: outline, borderRadius: '12px' }}
          size="small"
          {...props}
        />
      )}
    </div>
  );
};

export default CustomTextField;


