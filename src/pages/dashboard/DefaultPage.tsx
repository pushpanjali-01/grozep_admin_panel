import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import CustomCard from '../../components/common/CustomCard';
import pending from "../../assets/images/default_icon1.svg"
import profile_icon from "../../assets/images/default_icon4.svg"
import total_icon from "../../assets/images/default_icon3.svg"
import rupee from "../../assets/images/default_icon2.svg"
import SidebarParentItem from '../../components/common/SidebarParentItem';
import appRoutes from '../../routes/appRoutes';
type Props = {};

const DefaultPage = (props: Props) => {

  return (
    <div style={{ overflow: 'hidden' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom display="flex" gap="10px">
          Activity
        </Typography>
      </Grid>

      <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', borderRadius:'10px' }}>
        <Grid container spacing={2}>
          <CustomCard icon={<img src={profile_icon} />} content="Total No:of Employee" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={rupee} />} content="Total No:of Sale" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={total_icon} />} content="Total No:of Orders recieved in this month" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={pending} />} content="Total Payment due for this month pending" cardColor="#4CA0CE" />
          <CustomCard icon={<img src={profile_icon} />} content="Total No:of Employee" cardColor="#4CA0CE" />
          <CustomCard icon={<img src={rupee} />} content="Total No:of Sale" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={total_icon} />} content="Total No:of Orders recieved in this month" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={pending} />} content="Total Payment due for this month pending" cardColor="#4CA0CE" />
          <CustomCard icon={<img src={profile_icon} />} content="Total No:of Employee" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={rupee} />} content="Total No:of Sale" cardColor="#4CA0CE" />
          <CustomCard icon={<img src={total_icon} />} content="Total No:of Orders recieved in this month" clickable cardColor="#1C4E74" />
          <CustomCard icon={<img src={pending} />} content="Total Payment due for this month pending" clickable cardColor="#1C4E74" />
        </Grid>
      </Card>
    </div >
  );
};

export default DefaultPage;
