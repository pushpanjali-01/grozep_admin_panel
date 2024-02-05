import React from 'react';
import { Grid, Typography, IconButton, Input, InputAdornment } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const CustomFileInput = ({ label, onChange, value, placeholder, accept }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Input
          type="file"
          onChange={onChange}
          value={value}
          inputProps={{ accept: accept }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton color="primary" component="span">
                <ImageIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <Typography variant="caption">{placeholder}</Typography>
      </Grid>
    </Grid>
  );
};

export default CustomFileInput;
