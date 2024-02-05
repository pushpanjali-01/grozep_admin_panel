import React, { useState, useRef } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Buttons from '../../components/common/Button';
import Dropdown from '../../components/common/DropDown';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";

const UpdateImage = () => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    const [openUpdate, setOpenupdate] = useState(false);
    const fileInputRef = useRef(null);

    const handleFirstFormSubmit = () => {
        setOpenupdate(true);
    };

    const handleChooseImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            {!openUpdate ? (
                <div>
                    <Typography display="flex" gap="10px">
                        <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Update Price Inventory</p>
                    </Typography>
                    <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px',borderRadius:'10px' }}>
                        <Grid container spacing={2} marginTop="20px">
                            <Grid item xs={8}>
                                <Dropdown label="Search product by name/category/subcategory/productVariantId/brand.." value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                            </Grid>
                            <Grid container justifyContent="justify" marginTop="20px" marginLeft="20px">
                                <Buttons
                                    label="Choose Image"
                                    color="#1976d2"
                                    variant="contained"
                                    onClick={handleChooseImage}
                                    bgColor="#FFFFFF"
                                    
                                />
                                <input type="file" onChange={() => { }} style={{ display: 'none' }} ref={fileInputRef} />
                            </Grid>
                            <Grid container justifyContent="justify" marginTop="20px" marginLeft="20px">
                                <Buttons
                                    label="Upload"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleFirstFormSubmit}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            ) : (
                <p>hiii</p>
            )}
        </div>
    );
};

export default UpdateImage;
