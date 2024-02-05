import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Dropdown = ({ label, value, onChange, options, backgroundColor }) => (
  <div>
    <FormControl fullWidth style={{ backgroundColor: backgroundColor, borderRadius:'10px' }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} size="small" style={{borderRadius:'10px'}}>
        <MenuItem value="">Select an option</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);

export default Dropdown;
