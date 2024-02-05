import React from 'react';
import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import CustomTextField from '../../components/common/TextField';
import create_icon from "../../assets/images/create_role_icon.svg";
import tag from "../../assets/images/tag.svg";
import edit from "../../assets/images/edit_icon_pen.svg";
import del from "../../assets/images/delete.svg";
import excel from "../../assets/images/excel.svg";
import pdf from "../../assets/images/pdf.svg";
import print from "../../assets/images/print.svg";
import Buttons from '../../components/common/Button';
import EnhancedTable from '../../components/common/TableCom';  
const CreateRole = (props) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const handleSave = () => {
        console.log("Save button clicked!");
    };

    const handleExportPDF = () => {
        // Implement your PDF export logic here
        console.log("Export to PDF");
    };

    const handleExportExcel = () => {
        // Implement your Excel export logic here
        console.log("Export to Excel");
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px', borderRadius: '12px' }}>
            <Grid container alignItems="center">
                <Grid item>
                    <img src={create_icon} alt="create_icon" />
                </Grid>
                <Grid item>
                    <Typography style={{ marginLeft: '10px', fontSize: '20px', fontWeight: 'bold', color: '#1976D2' }}>Add Role</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {/* Left Section */}
                <Grid item xs={12} md={4} style={{ paddingRight: isDesktop ? '0' : '0', paddingBottom: '20px' }}>
                    <Card style={{ marginTop: '20px', borderRadius: '10px', border: '1px solid #3B3B3B5E' }}>
                        <CardContent>
                            <Typography style={{ fontSize: '15px', textAlign: 'left', marginBottom: '5px' }}>Name</Typography>
                            <CustomTextField
                                placeholder="Enter name..."
                                fullWidth
                                variant="outlined"
                                backgroundColor="#FFFFFF"
                                borderRadius="5px"
                            />
                            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
                                <Buttons
                                    label="SAVE"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleSave}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={8} style={{ paddingLeft: '0', paddingRight: '0' }}>
                    {/* Replace the existing table with the EnhancedTable component */}
                    <EnhancedTable />
                </Grid>
            </Grid>
        </Card>
    );
};

export default CreateRole;
