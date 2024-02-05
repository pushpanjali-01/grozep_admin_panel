import React, { useState, useRef } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';
import cloud from "../../assets/images/cloud.svg"
import inventroy_list_icon from "../../assets/images/inventory_list.svg"
import submit from "../../assets/images/submit_icon.svg"
import { useNavigate } from 'react-router-dom';
import CustomSnackbar from '../../components/common/Snackbar';

const CreateInventory = (props: Props) => {
  const [inventory, setInventory] = useState('');
  const [stateValue, setStateValue] = useState('');
  // Add state variables for other fields
  const [inventoryError, setInventoryError] = useState('');
  const [stateValueError, setStateValueError] = useState('');
  const [cityValue, setCityValue] = useState('')
  const [cityError, setCityError] = useState('')
  const [pincodeValue, setPincodeValue] = useState('')
  const [pincodeError, setPincodeError] = useState('')
  const [titleValue, setTitleValue] = useState('')
  const [titleError, setTitleError] = useState('')
  const [longiValue, setLongiValue] = useState('')
  const [longiError, setLongiError] = useState('')

  const [latiValue, setLatiValue] = useState('')
  const [latiError, setLatiError] = useState('')  // Add error state variables for other fields
  const [PriConValue, setPriConValue] = useState('')
  const [priConError, setPriConError] = useState('')
  const [secConValue, setSecConValue] = useState('')
  const [secConError, setSecConError] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [emailError, setEmailError] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [addressError, setAddressError] = useState('')
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleCard, setShowRoleCard] = useState(false);
  const roleCardRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const [imageFile, setImageFile] = useState(null);

  const fileInputRef = useRef(null);
  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Cashier', label: 'Cashier' },
    { value: 'Inventory Manager', label: 'Inventory Manager' },
  ];

  const validateFields = () => {
    let isValid = true;

    if (!inventory.trim()) {
      setInventoryError('Please enter Inventory code');
      isValid = false;
    } else {
      setInventoryError('');
    }

    // Validate field2
    if (!stateValue.trim()) {
      setStateValueError('Please enter State');
      isValid = false;
    } else {
      setStateValueError('');
    }
    if (!cityValue.trim()) {
      setCityError('Please enter City');
      isValid = false;
    } else {
      setCityError('');
    }
    if (!pincodeValue.trim()) {
      setPincodeError('Please enter City');
      isValid = false;
    } else {
      setPincodeError('');
    }
    if (!PriConValue.trim()) {
      setPriConError('Please enter primary contact number');
      isValid = false;
    } else {
      setPriConError('');
    }
    if (!secConValue.trim()) {
      setSecConError('Please enter secondary contact number');
      isValid = false;
    } else {
      setSecConError('');
    }
    if (!longiValue.trim()) {
      setLongiError('Please enter longititude value');
      isValid = false;
    } else {
      setLongiError('');
    }
    if (!latiValue.trim()) {
      setLatiError('Please enter latitude value');
      isValid = false;
    } else {
      setLatiError('');
    }
    if (!addressValue.trim()) {
      setAddressError('Please enter address');
      isValid = false;
    } else {
      setAddressError('');
    }
    if (!emailValue.trim()) {
      setEmailError('Please enter email');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!titleValue.trim()) {
      setTitleError('Please enter titlw');
      isValid = false;
    } else {
      setTitleError('');
    }
    return isValid;
  };

  const handleInventoryChange = (event) => {
    setInventory(event.target.value);
    setInventoryError('');
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
    setStateValueError('');
  };
  const handleCityValueChange = (event) => {
    setCityValue(event.target.value);
    setCityError('');
  };
  const handlePincodeValueChange = (event) => {
    setPincodeValue(event.target.value);
    setPincodeError('');
  };
  const handleAddressValueChange = (event) => {
    setAddressValue(event.target.value);
    setAddressError('');
  };
  const handleLongititudeValueChange = (event) => {
    setLongiValue(event.target.value);
    setLongiError('');
  };
  const handleLatitudeValueChange = (event) => {
    setLatiValue(event.target.value);
    setLatiError('');
  };
  const handleEmailValueChange = (event) => {
    setEmailValue(event.target.value);
    setEmailError('');
  };
  const handleTitleValueChange = (event) => {
    setTitleValue(event.target.value);
    setTitleError('');
  };
  const handlePrimaryContactValueChange = (event) => {
    setPriConValue(event.target.value);
    setPriConError('');
  };
  const handleSecondaryContactValueChange = (event) => {
    setSecConValue(event.target.value);
    setSecConError('');
  };


  const imageIsRequired = true;

  const resetFields = () => {
    setInventory('');
    setStateValue('');
    setInventoryError('');
    setStateValueError('');
    setCityValue('');
    setCityError('');
    setPincodeValue('');
    setPincodeError('');
    setTitleValue('');
    setTitleError('');
    setLongiValue('');
    setLongiError('');
    setLatiValue('');
    setLatiError('');
    setPriConValue('');
    setPriConError('');
    setSecConValue('');
    setSecConError('');
    setEmailValue('');
    setEmailError('');
    setAddressValue('');
    setAddressError('');
    setSelectedRole('');
    setShowRoleCard(false);
    setSnackbarOpen(false);
    setSelectedImage(null);
  };

  const handleFirstFormSubmit = () => {
    if (validateFields()) {
      if (imageIsRequired && !selectedImage) {
        setSnackbarMessage('Please select an image.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      } else {
        setIsFirstFormSubmitted(true);
        if (roleCardRef.current) {
          roleCardRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        setSnackbarMessage('Submit successful!');
        setSnackbarSeverity('success');
        // Delay the opening of the success snackbar
        setTimeout(() => {
          setSnackbarOpen(true);
          resetFields();
        }, 500); // You can adjust the delay time as needed
      }
    } else {
      setSnackbarMessage('Please fill in all the required fields.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
    displayImage(file);
  };


  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/inventory/productlist');
  }
  const [selectedImage, setSelectedImage] = useState(null);

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const displayImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    displayImage(file);
  };

  const handleCloudImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div>

      <Card style={{ backgroundColor: '#FFFFFF', paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px', marginTop: '20px', borderRadius: '10px' }}>
        <Typography display="flex" gap="10px">
          <img src={inventory_icon} alt="inventory icon" /> <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1976D2' }}>Inventory Create</p>
        </Typography>
        <CustomSnackbar
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} textAlign="justify">
            <CustomTextField
              label="Inventory code"
              value={inventory}
              width='250px'
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
              onChange={handleInventoryChange}
              type="number" 
            />
            {inventoryError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {inventoryError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} display="flex" justifyContent="end">
            <Buttons
              label="Inventory List"
              color="primary"
              variant="contained"
              // width='250px'
              icon={inventroy_list_icon}
              height="40px"
              onClick={handleButtonClick}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="State"
              value={stateValue}
              onChange={handleStateChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {stateValueError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {stateValueError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="City"
              value={cityValue}
              onChange={handleCityValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {cityError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {cityError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Pincode"
              value={pincodeValue}
              onChange={handlePincodeValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {pincodeError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {pincodeError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Title"
              value={titleValue}
              onChange={handleTitleValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {titleError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {titleError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Longititude"
              value={longiValue}
              onChange={handleLongititudeValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {longiError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {longiError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Latitude"
              value={latiValue}
              onChange={handleLatitudeValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {latiError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {latiError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Primary Contact No:"
              value={PriConValue}
              onChange={handlePrimaryContactValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {priConError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {priConError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Secondary Contact No:"
              value={secConValue}
              onChange={handleSecondaryContactValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {secConError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {secConError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Email:"
              value={emailValue}
              onChange={handleEmailValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {emailError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {emailError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomTextField
              label="Address:"
              value={addressValue}
              onChange={handleAddressValueChange}
              fullWidth
              variant="outlined"
              backgroundColor="#FFFFFF"
              borderRadius='5px'
            />
            {addressError && (
              <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                {addressError}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Card
              style={{
                paddingRight: '10px',
                paddingLeft: '10px',
                marginTop: '20px',
                borderRadius: '20px',
                height: '175px',
                position: 'relative',
              }}
            >
              <Grid item xs={12} padding="10px" borderRadius="10px">

                {selectedImage && (
                  <button
                    style={{
                      position: 'absolute',
                      top: '18px',
                      right: '10px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={handleRemoveImage}
                  >
                    X
                  </button>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="selected"
                      style={{
                        width: '200px',
                        height: '120px'
                      }}
                    />
                  ) : (
                    <div>
                      <div
                        style={{ border: '2px dotted #3B3B3B', width: '140px', padding: '20px', textAlign: 'center', borderRadius: '10px' }}
                        onClick={handleCloudImageClick}
                      >
                        <img src={cloud} alt="upload" />
                      </div>
                      <div>

                        <div style={{ fontSize: '20px', fontWeight: '600' }}>

                          <input type="file" onChange={handleImageChange} style={{ display: 'none' }} ref={fileInputRef} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography display="flex" gap="10px">
              <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Inventory Image File</p>
            </Typography>
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

export default CreateInventory;
