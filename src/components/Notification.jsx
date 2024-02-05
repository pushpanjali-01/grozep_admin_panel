import React from 'react';
import { Badge, Avatar,Box } from "@mui/material";
import notification_icon from "../assets/images/notification_icon.svg"
const Notification = ({count, onClickNotification}) => {
    return (
        <Box sx={{ position: 'relative', marginRight: '16px', backgroundColor: '#F6F7FB', borderRadius: '50px', padding: '10px' }}>
            <Badge badgeContent={count} color="error" sx={{ position: 'relative', top: 0, left: 0 }}>
                <Avatar alt="Notification" onClick={onClickNotification} src={notification_icon} sx={{ width: 30, height: 30, border: '2px solid #fff' }} />
            </Badge>
        </Box>
    )
}
export default Notification