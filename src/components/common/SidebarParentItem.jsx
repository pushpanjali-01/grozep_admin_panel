import React from 'react';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import { useSelector } from 'react-redux';
import appRoutes from '../../routes/appRoutes';

const SidebarParentItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState);

  const filteredRoutes = appRoutes.filter(
    (route) => route.state === 'dashboard' || route.state === 'store' || route.state === 'inventory'
  );

  const isActive = appState === item.state;

  return (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        '&:hover': {
          textDecoration: 'underline',
          color: isActive ? '#FF9800' : '#1C6074',
          backgroundColor: 'unset',
        },
        backgroundColor: 'unset',
        paddingY: '12px',
        paddingX: '24px',
      }}
    >
      <ListItemText
        disableTypography
        primary={
          <Typography
            sx={{
              color: isActive ? '#1c6074' : '#1c6074',
              fontWeight: isActive ? 'bold' : 'normal',
              // textDecoration:  isActive ? 'underline': 'normal'
            }}
          >
            {item.sidebarProps.displayText}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default SidebarParentItem;