import React, { useState } from 'react';
import { Card, Grid, Typography} from '@mui/material';
import CustomTextField from '../../components/common/TextField';
import Buttons from '../../components/common/Button';
import Dropdown from '../../components/common/DropDown';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";

const UpdateVariant = (props: Props) => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    const [openUpdate, setOpenupdate] = useState(false);

    const handleFirstFormSubmit = () => {
        setOpenupdate(true)
    }
    return (
        <div>
            {!openUpdate ? (
                <div>
                    <Typography display="flex" gap="10px">
                        <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Update Variant</p>
                    </Typography>
                    <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px',borderRadius:'10px' }}>
                        <Grid container spacing={2} marginTop="20px">
                            <Grid item xs={8}>
                                <Dropdown label="Search product by name/category/subcategory/productVariantId/brand.." value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                            </Grid>
                            <Grid item xs={8}>
                                <CustomTextField
                                    label="Barcode"
                                    // value={field2}
                                    // onChange={handleField2Change}
                                    fullWidth
                                    variant="outlined"
                                    backgroundColor="#FFFFFF"
                                    borderRadius='5px'
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <CustomTextField
                                    label="Packing"
                                    // value={field2}
                                    // onChange={handleField2Change}
                                    fullWidth
                                    variant="outlined"
                                    backgroundColor="#FFFFFF"
                                    borderRadius='5px'
                                />
                            </Grid>
                            <Grid container justifyContent="justify" marginTop="20px" marginLeft="20px">
                                <Buttons
                                    label="Update"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleFirstFormSubmit}
                                    // icon={submit}
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

export default UpdateVariant;