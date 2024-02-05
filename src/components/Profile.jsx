import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Popover, Typography } from '@mui/material';

const Profile = ({ name, designation, profilePicture, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor:'#F6F7FB', borderRadius:'50px',justifyContent:'flex-end',paddingLeft:'20px', paddingRight:'5px', paddingTop:'5px',paddingBottom:'5px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 1, gap:'5px'}}>
        <Typography variant="subtitle1" style={{fontFamily:'Glory', fontWeight: 600, fontSize: '16px', lineHeight:'13.44px',display:'flex',justifyContent:'flex-end' }}>{name}</Typography>
        <Typography variant="body2" style={{fontFamily:'Poppins', fontWeight: 400, fontSize: '12px', lineHeight:'10.5px',display:'flex',justifyContent:'flex-end',color:'#00000080'}}>{designation}</Typography>
      </Box>
      <Avatar alt={name} src={profilePicture} sx={{ cursor: 'pointer',border:'#3D3D3D66',background:"#1e293a"}} onClick={handleClick} />

      <Popover
        id="profile-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ padding: 2, minWidth: 200 }}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body2">{designation}</Typography>
          <Button onClick={onLogout} sx={{ marginTop: 2 }} fullWidth>
            Logout
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Profile;
