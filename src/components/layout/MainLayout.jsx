import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import "./style.css";

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row' }}>
      <Topbar />
      {!isMobile && (
        <Box
          component="nav"
          sx={{
            width: '0px',
            flexShrink: 0,
          }}
        >
          {/* <Sidebar /> */}
        </Box>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: isMobile ? '100%' : `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: '#eeeeee',
          overflowY: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
