import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return (
    item.sidebarProps ? (
      <>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{
            "&:hover": {
              backgroundColor: colorConfigs.sidebar.hoverBg,
              borderRadius:'10px'
            },
            paddingY: "12px",
            paddingX: "24px"
          }}
        >
          <ListItemIcon sx={{
            color: colorConfigs.sidebar.color,
            // minWidth:'35px'
          }}>
            {item.sidebarProps.icon && item.sidebarProps.icon}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography>
                {item.sidebarProps.displayText}
              </Typography>
            }
          />
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List sx={{ paddingLeft: "20px" }}>
            {item.child?.map((route, index) => (
              route.sidebarProps ? (
                <SidebarItem item={route} key={index} />
              ) : null
            ))}
          </List>
          {open && <Divider style={{ marginLeft: "15px", marginRight: '15px', background: '#D9D9D9', height: '1px' }} />}
        </Collapse>
      </>
    ) : null
  );
};

export default SidebarItemCollapse;
