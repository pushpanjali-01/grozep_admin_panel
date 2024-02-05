import React, { useState } from 'react';
import { Card, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import CustomTextField from '../../components/common/TextField';
import Buttons from '../../components/common/Button';
import Dropdown from '../../components/common/DropDown';
import inventory_icon from "../../assets/images/inventory_icon_dark.svg";
import submit from "../../assets/images/submit_icon.svg"
const UpdateInventoryPrice = () => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    const [openUpdate, setOpenupdate] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // You can adjust the number of rows per page
    const [totalRows, setTotalRows] = useState(0); // Total number of rows

    const handleFirstFormSubmit = () => {
        setOpenupdate(true);
        // Fetch data and set totalRows
        // For now, let's assume you set the totalRows after fetching data
        setTotalRows(20); // Replace 20 with the actual total number of rows
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const dummyData = [
        { sno: 1, supplyId: '123', costPrice: 10, mrp: 20, storePrice: 15, rate: 18, stock: 100, batch: 'B001', sku: 'SKU001', mfgDate: '2022-01-01', expDate: '2022-12-31' },
        { sno: 2, supplyId: '456', costPrice: 15, mrp: 25, storePrice: 20, rate: 22, stock: 150, batch: 'B002', sku: 'SKU002', mfgDate: '2022-02-01', expDate: '2022-11-30' },
    ];

    return (
        <div>
            <Typography display="flex" gap="10px">
                <img src={inventory_icon} alt="inventory icon" /> <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Update Price Inventory</p>
            </Typography>
            <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
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

            {openUpdate && (
                <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px' }}>
                    <Typography display="flex" gap="10px" marginBottom="10px">
                        <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Supply Items</p>
                    </Typography>
                    <Grid container spacing={2} marginBottom="10px" display="flex" justifyContent="end">
                        <Grid item xs={4}>
                            <CustomTextField
                                label="Search"
                                // value={field1}
                                // onChange={handleField1Change}
                                fullWidth
                                variant="outlined"
                                backgroundColor="#FFFFFF"
                                borderRadius='5px'
                            />
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sno</TableCell>
                                    <TableCell>SupplyId</TableCell>
                                    <TableCell>Cost Price</TableCell>
                                    <TableCell>MRP</TableCell>
                                    <TableCell>Store Price</TableCell>
                                    <TableCell>Rate</TableCell>
                                    <TableCell>Stock</TableCell>
                                    <TableCell>Batch</TableCell>
                                    <TableCell>SKU</TableCell>
                                    <TableCell>Mfg Date</TableCell>
                                    <TableCell>Exp Date</TableCell>
                                    <TableCell>Update Stock</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dummyData.map((row) => (
                                    <TableRow key={row.sno}>
                                        <TableCell>{row.sno}</TableCell>
                                        <TableCell>{row.supplyId}</TableCell>
                                        <TableCell>{row.costPrice}</TableCell>
                                        <TableCell>{row.mrp}</TableCell>
                                        <TableCell>{row.storePrice}</TableCell>
                                        <TableCell>{row.rate}</TableCell>
                                        <TableCell>{row.stock}</TableCell>
                                        <TableCell>{row.batch}</TableCell>
                                        <TableCell>{row.sku}</TableCell>
                                        <TableCell>{row.mfgDate}</TableCell>
                                        <TableCell>{row.expDate}</TableCell>
                                        <TableCell><Buttons label="Update" color="primary" variant="contained" /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={totalRows}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            )}
        </div>
    );
};

export default UpdateInventoryPrice;
