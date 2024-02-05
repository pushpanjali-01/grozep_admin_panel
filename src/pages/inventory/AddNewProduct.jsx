import React, { useState, useRef } from 'react';
import { Card, CardContent, Grid, Typography ,FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';
import Dropdown from '../../components/common/DropDown';
import Label from '../../components/common/Label';

const AddNewProduct = (props: Props) => {
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
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    return (
        <div>
            {/* <PageHeader icon={inventory_icon} title="Inventory Create" /> */}
            <Typography display="flex" gap="10px">
                <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Product Basic Details</p>
            </Typography>
            <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px',borderRadius:'10px' }}>
                <Grid container spacing={2} marginTop="20px">
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Product name*(Ex:Masala Munch)"
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
                            label="CGST*(Ex:18)"
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
                            label="Description (Ex:India'a favourite snacks)(optional)"
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
                            label="SGST*(Ex:18)"
                            value={field2}
                            onChange={handleField2Change}
                            fullWidth
                            variant="outlined"
                            backgroundColor="#FFFFFF"
                            borderRadius='5px'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown label="Brand (optional)" value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Family (Ex:Chilli Chatka/Green Chutney Style)(Optional)"
                            value={field2}
                            onChange={handleField2Change}
                            fullWidth
                            variant="outlined"
                            backgroundColor="#FFFFFF"
                            borderRadius='5px'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown label="Category*" value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Gender (Ex:Woman/Man/Unisex)(Optional)"
                            value={field2}
                            onChange={handleField2Change}
                            fullWidth
                            variant="outlined"
                            backgroundColor="#FFFFFF"
                            borderRadius='5px'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown label="Subcategory*" value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Group (Ex:Teen/kid/Adult)(Optional)"
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
                            label="Tag*(Ex:Chini,cini,sugr,...)"
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
                            label="Classs (Ex:Summer)(Optional)"
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
                            label="Hsncode*(Ex:1234567890)"
                            value={field2}
                            onChange={handleField2Change}
                            fullWidth
                            variant="outlined"
                            backgroundColor="#FFFFFF"
                            borderRadius='5px'
                        />
                    </Grid>
                    <Grid item xs={6} textAlign="justify">
                        <Label text="Is Adult(+18)" htmlFor="username" color="black" fontSize="16px" fontWeight="600"/>
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="isAdult"
                                name="isAdult"
                                // value={isAdult}
                                // onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio style={{ borderRadius: '50%', color: 'green' }} />}
                                    label="Yes"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio style={{ borderRadius: '50%', color: 'red' }} />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center" marginTop="20px">
                        <Buttons
                            label="Next"
                            color="primary"
                            variant="contained"
                            onClick={handleFirstFormSubmit}
                            // icon={next_icon}
                        />
                    </Grid>
                </Grid>
            </Card>

        </div >
    );
};

export default AddNewProduct;
