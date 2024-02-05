import React, { useRef } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Dropdown from '../../components/common/DropDown';
import CustomTextField from '../../components/common/TextField';
import Buttons from '../../components/common/Button';
import home_icon from "../../assets/images/home_icon.svg"
import submit from "../../assets/images/submit_icon.svg"
const AddInventoryListing = () => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];

    const handleSubmit = () => {
        // Implement your form submission logic here
        console.log('Form submitted!');
    };

    return (
        <div>
            <Typography display="flex" gap="10px">
                <img src={home_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Add Inventory Listing</p>
            </Typography>
            <Card style={{ padding: '20px', marginTop: '20px', borderRadius: '10px', backgroundColor: '#D9D9D94D',borderRadius:'10px' }}>
                <Grid container spacing={2}>
                    {/* First Grid with Two Dropdowns */}
                    <Grid item xs={6}>
                        <Dropdown label="Serach product by name/category/subcategory/productvariantId/brand.." value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown label="Select Dealer*" value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                    </Grid>

                    {/* Second Grid with Two Text Inputs */}
                    <Grid item xs={6}>
                        <CustomTextField label="Max Capacity" value="" onChange={() => { }} backgroundColor="#FFFFFF" fullWidth type="number"/>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField label="Min Caapacity" value="" onChange={() => { }} backgroundColor="#FFFFFF" fullWidth type="number"/>
                    </Grid>

                    {/* Third Grid with Submit Button */}
                    <Grid item xs={12}>
                        <Buttons label="Submit" onClick={handleSubmit} bgColor="#1976D2" color="#FFFFFF" icon={submit}/>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default AddInventoryListing;
