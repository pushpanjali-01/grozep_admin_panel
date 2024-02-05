import React from 'react';
import '../../assets/global.css';
import { Drawer, Toolbar, Badge, Avatar } from "@mui/material";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import logo from "../../assets/images/grozep_logo.svg";
import Profile from '../../components/Profile';
import Notification from '../Notification';
import SidebarFooter from './sidebarfooter';
import { useMediaQuery, useTheme } from '@mui/material';
const drawerWidth = 240;
// const Notification = ({ count }) => (
//   <Box sx={{ position: 'relative', marginRight: '16px' }}>
//     <Badge badgeContent={count} color="error" sx={{ position: 'relative', top: 0, left: 0 }}>
//       <Avatar alt="Notification" src={notification_icon} sx={{ width: 30, height: 30, border: '2px solid #fff' }} />
//     </Badge>
//   </Box>
// );

function Topbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar>
        <img src={logo} className='logo' alt='logo' />
        <Divider orientation="vertical" flexItem />
        <span className='logo-text'> Admin Panel</span>
      </Toolbar>
      <Divider />
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '5px',  // Adjust the width as needed
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#D9D9D9',  // Scrollbar color
        },
      }}>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </Box>
      <SidebarFooter />
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: '16px',backgroundColor:'#eeeeee' }}>
          {/* Left side content */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Typography variant={isMobile ? '10px' : 'h5'} noWrap component="div">
                Welcome to grozep admin panel
              </Typography>
            )}
          </div>

          {/* Right side content */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Notification count={1} />
            <Profile
              name="Akash"
              designation="Inventory garhwa"
              profilePicture="path/to/profile-picture.jpg"
              onLogout={() => console.log('Logout clicked')}
            />
          </div>
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Topbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Topbar;
