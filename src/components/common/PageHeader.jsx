import React from "react";
import SidebarParentItem from "./SidebarParentItem";
import appRoutes from '../../routes/appRoutes';
import { Grid, Typography } from '@mui/material';
const PageHeader = ({ icon = false, title }) => {
    const filteredRoutes = appRoutes.filter(
        (route) => route.state === 'dashboard' || route.state === 'store' || route.state === 'inventory'
    );
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6" gutterBottom display="flex" gap="10px">
                {icon && <img src={icon} alt="inventory icon" />} {title}
            </Typography>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
                {filteredRoutes.map((route) => (
                    <SidebarParentItem key={route.state} item={route} />
                ))}
            </Grid>
        </Grid>
    )
}

export default PageHeader