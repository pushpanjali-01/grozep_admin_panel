import React, { useState, useRef } from 'react';
import appRoutes from '../../routes/appRoutes';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';
import PageHeader from '../../components/common/PageHeader';
import Dropdown from '../../components/common/DropDown';
import inventroy_list_icon from "../../assets/images/inventory_list.svg"
import submit from "../../assets/images/submit_icon.svg"
import CustomFileInput from '../../components/common/CustomFileInput';
type Props = {};

const DealerPage = (props: Props) => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleCard, setShowRoleCard] = useState(false);
  const roleCardRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Cashier', label: 'Cashier' },
    { value: 'Inventory Manager', label: 'Inventory Manager' },
  ];


  const handleField1Change = (event) => {
    setField1(event.target.value);
  };

  const handleField2Change = (event) => {
    setField2(event.target.value);
  };

  const handleFirstFormSubmit = () => {
    setIsFirstFormSubmitted(true);
    if (roleCardRef.current) {
      roleCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleRoleChange = (event) => {
    setShowRoleCard(false)
    setSelectedRole(event.target.value);
  };

  const handleRoleSubmit = () => {
    setShowRoleCard(true);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };
  return (
    <div>
      {/* <PageHeader icon={inventory_icon} title="Inventory Create" /> */}
      <Typography display="flex" gap="10px">
        <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Dealer</p>
      </Typography>
      <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px',borderRadius:'10px' }}>
        <Grid container display='flex' justifyContent="end" alignItems="center">
          <Buttons
            label="Dealer List"
            color="primary"
            variant="contained"
            icon={inventroy_list_icon}
          // onClick={handleButtonClick}
          />
        </Grid>
        <Grid container spacing={2} marginTop="20px">
          <Grid item xs={6}>
            <CustomTextField
              label="Dealer name"
              value={field1}
              onChange={handleField1Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="City"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Pincode"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Title"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>

          <Grid item xs={6}>
            <CustomTextField
              label="Primary Contact No:"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Secondary Contact No:"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Email:"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Address:"
              value={field2}
              onChange={handleField2Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>

          <Grid container justifyContent="center" marginTop="20px">
            <Buttons
              label="Submit"
              color="primary"
              variant="contained"
              onClick={handleFirstFormSubmit}
              icon={submit}
            />
          </Grid>
        </Grid>
      </Card>

    </div >
  );
};

export default DealerPage;
