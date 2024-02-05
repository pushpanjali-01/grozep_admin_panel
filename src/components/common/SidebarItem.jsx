import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&:hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
            borderRadius:'10px'
          },
          backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: "8px", // Adjust the vertical padding
          paddingX: "24px",
        }}
      >
        <ListItemIcon sx={{
          color: colorConfigs.sidebar.color,
          // marginLeft: "10px", // Adjust the space between icon and text
          // minWidth:'35px'
          
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <Typography variant="body1">
          {item.sidebarProps.displayText}
        </Typography>
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;
