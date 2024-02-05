import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { Box } from "@mui/material";
import { RouteType } from "../../routes/config";
import online_icon from "../../assets/images/online_icon.svg"
import connected_icon from "../../assets/images/connected_icon.svg"
type Props = {
  item: RouteType;
};

const SidebarFooter = ({ item }: Props) => {
    return(
<Box sx={{ borderTop: '1px solid #D9D9D9', p: 2, marginLeft: "15px", marginRight: '15px' }}>
    <Typography variant="caption" sx={{ textAlign: 'center' }}>
        Server : Online<img src={online_icon} />
    </Typography>
    <br />
    <Typography variant="caption" sx={{ textAlign: 'center' }}>
        Network : Connected<img src={connected_icon} />
    </Typography>
</Box>
    )
}
export default SidebarFooter