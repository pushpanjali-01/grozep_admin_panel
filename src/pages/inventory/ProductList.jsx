import React, { useState } from 'react';
import { Card, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';
import edit from "../../assets/images/edit_icon.svg"
import del from "../../assets/images/delete.svg"
import "./style.css"
const ProductList = (props: Props) => {
  const dummyData = [
    { sno: 1,id:'001', Image: '123', name: 'tea',brand:'catch', action: 'y/n' },
    { sno: 2,id:'001', Image: '456', name: 'tea',brand:'catch', action: 'y/n' },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // You can adjust the number of rows per page
  const [totalRows, setTotalRows] = useState(0); // Total number of rows

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
      <Grid container spacing={2} marginBottom="10px" display="flex" justifyContent="space-between">
        <Grid item xs={6} display="flex">
            <Buttons
              label="Add Brands +"
              color="primary"
              variant="contained"
              bgColor="#2e7d32"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Search"
              // value={searchTerm}
              // onChange={handleSearchChange}
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
              <TableCell>SL No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.sno}>
                <TableCell>{row.sno}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Image}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell style={{display:'flex', gap:'15px'}}><img src={edit} alt="edit" className='edit_img'/><img src={del} alt="edit" className='del_img'/></TableCell>
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
  );
};

export default ProductList;