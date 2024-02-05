import React, { useState, useRef } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import CustomTextField from '../../components/common/TextField';
import home_icon from "../../assets/images/home_icon.svg"
import Label from '../../components/common/Label';
import cloud from "../../assets/images/cloud.svg"
import Buttons from '../../components/common/Button';
import submit from "../../assets/images/submit_icon.svg"
import CustomSnackbar from '../../components/common/Snackbar';
const GeneralSettings = (props: Props) => {

  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [showRoleCard, setShowRoleCard] = useState(false);
  const roleCardRef = useRef(null);


  const fileInputRef1 = useRef(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const fileInputRef2 = useRef(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Cashier', label: 'Cashier' },
    { value: 'Inventory Manager', label: 'Inventory Manager' },
  ];

  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [address, setAddress] = useState('')
  const [addressError, setAdressError] = useState('')
  const [phoneno, setPhoneNo] = useState('')
  const [PhonenoError, setPhonenoError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [whatsappError, setWhatsappError] = useState('')
  const [facebook, setFacebook] = useState('')
  const [facebookError, setFacebookError] = useState('')
  const [google, setGoogle] = useState('')
  const [googleError, setGoogleError] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [linkedinError, setLinkedinError] = useState('')
  const [instagram, setInstagram] = useState('')
  const [instagramError, setInstagramError] = useState('')
  const [twitter, setTwitter] = useState('')
  const [twitterError, setTwitterError] = useState('')
  const [youtube, setYoutube] = useState('')
  const [youtubeError, setYoutubeError] = useState('')
  const [staffidprefix, setStaffIdPrefix] = useState('')
  const [staffidprefixError, setStaffidprefixError] = useState('')
  const [staffidauto, setStaffIdauto] = useState('')
  const [staffidautoError, setStaffidautoError] = useState('')
  const [staffidstart, setStaffIdstart] = useState('')
  const [staffidstartError, setStaffidstartError] = useState('')
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [field1Error, setField1Error] = useState('');
  const [field2Error, setField2Error] = useState('');
  const [cloudImageError, setCloudImageError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const resetFields = () => {
    setTitle('')
    setTitleError('')
    setAddress('')
    setAdressError('')
    setEmail('')
    setEmailError('')
    setPhoneNo('')
    setPhonenoError('')
    setWhatsapp('')
    setWhatsappError('')
    setFacebook('')
    setFacebookError('')
    setGoogle('')
    setGoogleError('')
    setLinkedin('')
    setLinkedinError('')
    setInstagram('')
    setInstagramError('')
    setTwitter('')
    setTwitterError('')
    setYoutube('')
    setYoutubeError('')
    setStaffIdPrefix('')
    setStaffidprefixError('')
    setStaffIdauto('')
    setStaffidautoError('')
    setStaffIdstart('')
    setStaffidautoError('')
    setSelectedImage('')
    setSelectedImage1('')
    setSelectedImage2('')
  }
  const fileInputRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setTitleError('')
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setAdressError('')
  };
  const handlePhonenoChange = (event) => {
    setPhoneNo(event.target.value);
    setPhonenoError('')
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('')
  };
  const handleWhatsappChange = (event) => {
    setWhatsapp(event.target.value);
    setWhatsappError('')
  };
  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
    setFacebookError('')
  };
  const handleGoogleChange = (event) => {
    setGoogle(event.target.value);
    setGoogleError('')
  };
  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
    setLinkedinError('')
  };
  const handleInstagramChange = (event) => {
    setInstagram(event.target.value);
    setInstagramError('')
  };
  const handleTwitterChange = (event) => {
    setTwitter(event.target.value);
    setTwitterError('')
  };
  const handleYoutubeChange = (event) => {
    setYoutube(event.target.value);
    setYoutubeError('')
  };
  const handleStaffIdPrefixChange = (event) => {
    setStaffIdPrefix(event.target.value);
    setStaffidprefixError('')
  };
  const handleStaffIdAutoChange = (event) => {
    setStaffIdauto(event.target.value);
    setStaffidautoError('')
  };
  const handleStaffIdStartChange = (event) => {
    setStaffIdstart(event.target.value);
    setStaffidstartError('')
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

  const handleDownload = () => {
    console.log("Download button clicked!");
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    displayImage(file);
  };

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
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleImageChange1 = (event) => {
    const file = event.target.files[0];
    displayImage1(file);
  };

  const handleRemoveImage1 = () => {
    setSelectedImage1(null);
  };

  const displayImage1 = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    displayImage1(file);
  };

  const handleCloudImageClick1 = () => {
    // Trigger the hidden file input
    if (fileInputRef1.current) {
      fileInputRef1.current.click();
    }
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    displayImage2(file);
  };

  const handleRemoveImage2 = () => {
    setSelectedImage2(null);
  };

  const displayImage2 = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop2 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    displayImage2(file);
  };

  const handleCloudImageClick2 = () => {
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };

  const handleSubmit = () => {
    let valid = true;

    if (!address.trim()) {
      setAdressError('Please fill address');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!title.trim()) {
      setTitleError('Please fill title');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }

    if (!whatsapp.trim()) {
      setWhatsappError('Please fill Whatsapp number');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }

    if (!phoneno.trim()) {
      setPhonenoError('Please fill phone number');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!email.trim()) {
      setEmailError('Please fill email');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }

    if (!facebook.trim()) {
      setFacebookError('Please fill facebook Id');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }

    if (!linkedin.trim()) {
      setLinkedinError('Please fill linkedin acc');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!google.trim()) {
      setGoogleError('Please fill google acc');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!instagram.trim()) {
      setInstagramError('Please fill instagram id');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!twitter.trim()) {
      setTwitterError('Please fill twitter acc');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!youtube.trim()) {
      setYoutubeError('Please fill youtube link');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!staffidprefix.trim()) {
      setStaffidprefixError('Please fill staffId prefix');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!staffidauto.trim()) {
      setStaffidautoError('Please fill staff id auto');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!staffidstart.trim()) {
      setStaffidstartError('Please fill staffid start');
      handleSnackbarError('Please fill in all required fields');
      valid = false;
    }
    if (!selectedImage) {
      setCloudImageError('Cloud image is required');
      handleSnackbarError('Please select a cloud image');
      valid = false;
    }
    if (!selectedImage1) {
      setCloudImageError('Cloud image is required');
      handleSnackbarError('Please select a cloud image');
      valid = false;
    }
    if (!selectedImage2) {
      setCloudImageError('Cloud image is required');
      handleSnackbarError('Please select a cloud image');
      valid = false;
    }
    if (valid) {
      handleSuccess(); 
      resetFields();
    }
  };

  const handleSuccess = () => {
    setSnackbarSeverity('success');
    setSnackbarMessage('Successfully submitted!');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSnackbarError = (errorMessage) => {
    setSnackbarSeverity('error');
    setSnackbarMessage(errorMessage);
    setSnackbarOpen(true);
  };


    
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography display="flex" gap="10px" backgroundColor='white' height='44px' alignItems='center' paddingLeft='20px' color="#1976D2">
        <img src={home_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>General Setting</p>
      </Typography>
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      <Grid container spacing={2} style={{ flex: 1 }}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Card
            style={{
              padding: '20px',
              marginTop: '10px',
              borderRadius: '10px',
              height: '100%', // Adjusted to take full height
              position: 'relative',
            }}
          >
            {selectedImage && (
              <button
                style={{
                  position: 'absolute',
                  top: '30px',
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
                    width: '300px',
                    height: '210px'
                  }}
                />
              ) : (
                <div>
                  <div
                    style={{ border: '2px dotted', width: '155px', marginLeft: '20px', padding: '20px', textAlign: 'center', borderRadius: '10px' }}
                    onClick={handleCloudImageClick}
                  >
                    <img src={cloud} alt="upload" />
                  </div>
                  <div>
                    <p>Choose a file or drag it here.</p>
                    <div style={{ fontSize: '20px', fontWeight: '600' }}>
                      <p>Print Logo</p>
                      <input type="file" onChange={handleImageChange} style={{ display: 'none' }} ref={fileInputRef} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card style={{ padding: '20px', marginTop: '10px', borderRadius: '10px', alignItems: 'center', height: '100%' }}>
            <Grid container display='flex' justifyContent="space-between" alignItems="center">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Title" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Title name"
                  value={title}
                  onChange={handleTitleChange}
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
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Address" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Address"
                  value={address}
                  onChange={handleAddressChange}
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
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Phone No" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Phone No"
                  value={phoneno}
                  onChange={handlePhonenoChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {PhonenoError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {PhonenoError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Email" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
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
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="WhatsApp" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="00000 00000"
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {whatsappError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {whatsappError}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Typography display="flex" gap="10px" backgroundColor='white' height='44px' alignItems='center' paddingLeft='20px' color="#1976D2" marginTop="20px">
        <img src={home_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Social links</p>
      </Typography>

      <Grid container spacing={2} style={{ flex: 1 }}>
        <Grid item xs={12} md={4}>
          <Card
            style={{
              padding: '20px',
              marginTop: '10px',
              borderRadius: '10px',
              height: '100%', // Adjusted to take full height
              position: 'relative',
            }}
          >
            {selectedImage1 && (
              <button
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '5px',
                  cursor: 'pointer',
                }}
                onClick={handleRemoveImage1}
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
              onDrop={handleDrop1}
              onDragOver={(e) => e.preventDefault()}
            >
              {selectedImage1 ? (
                <img
                  src={selectedImage1}
                  alt="selected"
                  style={{
                    width: '300px',
                    height: '210px'
                  }}
                />
              ) : (
                <div>
                  <div
                    style={{ border: '2px dotted', width: '155px', marginLeft: '20px', padding: '20px', textAlign: 'center', borderRadius: '10px' }}
                    onClick={handleCloudImageClick1}
                  >
                    <img src={cloud} alt="upload" />
                  </div>
                  <div>
                    <p>Choose a file or drag it here.</p>
                    <div style={{ fontSize: '20px', fontWeight: '600' }}>
                      <p>Admin Logo</p>
                      <input type="file" onChange={handleImageChange1} style={{ display: 'none' }} ref={fileInputRef1} />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card style={{ padding: '20px', marginTop: '10px', borderRadius: '10px', alignItems: 'center', height: '100%' }}>
            <Grid container display='flex' justifyContent="space-between" alignItems="center">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Facebook" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Facebook link"
                  value={facebook}
                  onChange={handleFacebookChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {facebookError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {facebookError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Google" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="@gmail.com"
                  value={google}
                  onChange={handleGoogleChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {googleError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {googleError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Linkedin" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Linkedin link"
                  value={linkedin}
                  onChange={handleLinkedinChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {linkedinError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {linkedinError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Instagram" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Instagram link"
                  value={instagram}
                  onChange={handleInstagramChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {instagramError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {instagramError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Twitter" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Twitter link"
                  value={twitter}
                  onChange={handleTwitterChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {twitterError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {twitterError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="20px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Youtube" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="Youtube link"
                  value={youtube}
                  onChange={handleYoutubeChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {youtubeError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {youtubeError}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Typography display="flex" gap="10px" backgroundColor='white' height='44px' alignItems='center' paddingLeft='20px' color="#1976D2" marginTop="20px">
        <img src={home_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Staff ID Auto Generation</p>
      </Typography>

      <Grid container spacing={2} style={{ flex: 1 }}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Card
            style={{
              padding: '20px',
              marginTop: '10px',
              borderRadius: '10px',
              height: '100%', // Adjusted to take full height
              position: 'relative',
            }}
          >
            {selectedImage2 && (
              <button
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '5px',
                  cursor: 'pointer',
                }}
                onClick={handleRemoveImage2}
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
              onDrop={handleDrop2}
              onDragOver={(e) => e.preventDefault()}
            >
              {selectedImage2 ? (
                <img
                  src={selectedImage2}
                  alt="selected"
                  style={{
                    width: '300px',
                    height: '210px'
                  }}
                />
              ) : (
                <div>
                  <div
                    style={{ border: '2px dotted', width: '155px', marginLeft: '20px', padding: '20px', textAlign: 'center', borderRadius: '10px' }}
                    onClick={handleCloudImageClick2}
                  >
                    <img src={cloud} alt="upload" />
                  </div>
                  <div>
                    <p>Choose a file or drag it here.</p>
                    <div style={{ fontSize: '20px', fontWeight: '600' }}>
                      <p>Small Logo</p>
                      <input type="file" onChange={handleImageChange2} style={{ display: 'none' }} ref={fileInputRef2} />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card style={{ padding: '20px', marginTop: '10px', borderRadius: '10px', alignItems: 'center', height: '100%' }}>
            <Grid container display='flex' justifyContent="space-between" alignItems="center">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Staff ID Prefix" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="EWGS"
                  value={staffidprefix}
                  onChange={handleStaffIdPrefixChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {staffidprefixError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {staffidprefixError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Staff ID Start From" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="0000"
                  value={staffidstart}
                  onChange={handleStaffIdStartChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {staffidstartError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {staffidstartError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container display='flex' justifyContent="space-between" alignItems="center" marginTop="10px">
              <Grid item xs={2} style={{ textAlign: 'end', paddingRight: '15px' }}>
                <Label text="Staff No Digit" htmlFor="username" color="black" fontSize="15px" fontWeight="600" />
              </Grid>
              <Grid item xs={10}>
                <CustomTextField
                  label="6"
                  value={staffidauto}
                  onChange={handleStaffIdAutoChange}
                  fullWidth
                  variant="outlined"
                  backgroundColor="#FFFFFF"
                  borderRadius='5px'
                />
                {staffidautoError && (
                  <Typography color="red" fontSize="12px" variant="caption" style={{ display: 'flex', marginTop: '8px', marginLeft: '8px' }}>
                    {staffidautoError}
                  </Typography>
                )}
              </Grid>
              <Grid container justifyContent="flex-end" marginTop="20px">
                <Buttons
                  label="Submit"
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                  icon={submit}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
};

export default GeneralSettings;
