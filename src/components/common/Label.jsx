import React from 'react';
import InputLabel from '@mui/material/InputLabel';

const Label = ({ text, htmlFor, color, fontSize,fontWeight,textAlign }) => {
    const labelStyle = {
        color: color || 'inherit',
        fontSize: fontSize || 'inherit',
        fontWeight:fontWeight,
        textAlign:textAlign
    };
    return (
        <InputLabel htmlFor={htmlFor} style={labelStyle}>
            {text}
        </InputLabel>
    );
};

export default Label;
