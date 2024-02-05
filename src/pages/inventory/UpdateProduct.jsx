import React, { useState } from 'react';
import { Card, Grid, Typography} from '@mui/material';
import Buttons from '../../components/common/Button';
import Dropdown from '../../components/common/DropDown';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import submit from "../../assets/images/submit_icon.svg"
type Props = {};

const UpdateProduct = (props: Props) => {
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
                        <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Product Update</p>
                    </Typography>
                    <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px',borderRadius:'10px' }}>
                        <Grid container spacing={2} marginTop="20px">
                            <Grid item xs={8}>
                                <Dropdown label="Search product by name/category/subcategory/productVariantId/brand.." value="" onChange={() => { }} options={dropdownOptions} backgroundColor="#FFFFFF" />
                            </Grid>
                            <Grid container justifyContent="justify" marginTop="20px" marginLeft="20px">
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
            ) : (
                <p>hiii</p>
            )}
        </div>
    );
};

export default UpdateProduct;