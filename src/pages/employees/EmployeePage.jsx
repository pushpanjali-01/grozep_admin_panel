import React, { useState, useRef } from 'react';
import { Card, Grid, Typography, useMediaQuery } from '@mui/material';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';
import Dropdown from '../../components/common/DropDown';
import inventroy_list_icon from "../../assets/images/inventory_list.svg"
import submit from "../../assets/images/submit_icon.svg"
import CustomFileInput from '../../components/common/CustomFileInput';
import edit_icon from "../../assets/images/edit_icon.svg"
import Profile from '../../components/Profile';
import profile_img from "../../assets/images/profile_icon.svg"
import "./style.css"
import EditableSelect from '../../components/common/Select';

type Props = {};

const EmployeePage = (props: Props) => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleCard, setShowRoleCard] = useState(false);
  const roleCardRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);
  const [employeeName,setEmployeeName] = useState('')
  const [employeeNameError,setEmployeeNameError] = useState('')
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const selectedImageSrc = reader.result;
      setImage(selectedImageSrc);
    };
  };


  const roleOptions = [
    { label: 'Cashier', value: 'cashier' },
    { label: 'Admin', value: 'admin' },
    { label: 'Store Manager', value: 'store_manager' },
    { label: 'Inventory Manager', value: 'inventory_manager' },
  ];


  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div style={{ padding: '20px' }}>
      <Card style={{ padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        <Grid container spacing={2} display="flex">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} textAlign="justify">
            <Typography display="flex" gap="10px" color="#1976D2">
              <img src={inventory_icon} alt="inventory icon" />
              <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Employee</p>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} container justifyContent={isMobile ? 'center' : 'flex-end'} marginBottom={isMobile ? '10px' : '0px'}>
            <Buttons
              label="Employee List"
              color="primary"
              variant="contained"
              icon={inventroy_list_icon}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <div className="profile-image-container">
            {image ? (
              <img
              src={image}
              alt="Profile"
              className="profile-image-profile-page"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          ) : (
            <img
              src={profile_img}
              alt="Profile"
              className="profile-image-profile-page"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
            )}
            <input
              type="file"
              id="imageUpload"
              className="profile-image-upload"
              onChange={handleImageUpload}
            />
            <label htmlFor="imageUpload" className="profile-image-edit">
              <img src={edit_icon} alt="Edit" />
            </label>
          </div>
        </Grid>

        <Grid container spacing={2} marginTop="20px">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Employee name"
              value={field1}
              onChange={handleField1Change}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            {/* <Dropdown
              label="Add Role"
              value={selectedRole}
              onChange={handleRoleChange}
              options={roles}
              backgroundColor='white'
            /> */}
            <EditableSelect
            placeholder="Add role"
              value={selectedRole}
              options={roleOptions}
              onChange={handleRoleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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

          <Grid container justifyContent="end" marginTop="20px" >
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
    </div>
  );
};

export default EmployeePage;

