'use client';

import React from 'react';
import { MenuItem, TextField } from '@mui/material';

type AppSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const AppSelect = ({ label, value, options, onChange }: AppSelectProps) => {
  return (
    <TextField
      select
      fullWidth
      size="medium"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        '& .MuiInputBase-input': {
          fontSize: '18px',
          color: '#1f2937',
          fontWeight: 500,
        },
        '& .MuiInputLabel-root': {
          fontSize: '18px',
          color: '#6b7280',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#d1d5db',
          },
          '&:hover fieldset': {
            borderColor: '#d1d5db',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#d1d5db',
          },
        },
      }}
    >
      <MenuItem value="">Select {label}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AppSelect;
