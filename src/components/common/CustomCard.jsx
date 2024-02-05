import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const CustomCard = ({ icon, content, clickable = false, cardColor }) => {
  return (
    <Grid item xs={12} sm={6} md={3} style={{ marginBottom: '20px' }}>
      <Card style={{ backgroundColor: cardColor || 'white', borderRadius: '10px', color: '#FFFFFF',height:'100px'}}>
        <CardContent style={{ display: 'flex', alignItems: 'center', fontSize: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '16px' }}>
              {icon}
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h6" style={{ fontSize: '11px' }}>{content}</Typography>
            </div>
          </div>
        </CardContent>
        {clickable && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '16px', paddingBottom: '16px' }}>
            <IconButton style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', marginLeft: '8px', width:'20px', height:'20px' }}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </Card>
    </Grid>
  );
};

export default CustomCard;
