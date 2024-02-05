import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import Buttons from '../../components/common/Button';
import CustomTextField from '../../components/common/TextField';

const CategorySetup = (props: Props) => {
  const dummyData = [
    { sno: 1, Image: '123', name: 'tea', action: 'y/n' },
    { sno: 2, Image: '456', name: 'coffee', action: 'y/n' },
  ]
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([...dummyData]); // Initially set to the original data
  const [totalRows, setTotalRows] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    // Update the filtered data when the search term changes
    const newData = dummyData.filter((row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(newData);
    setPage(0); // Reset page when the filtered data changes
  }, [searchTerm]);
  return (
    <div>
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
              value={searchTerm}
              onChange={handleSearchChange}
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
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.sno}>
                    <TableCell>{row.sno}</TableCell>
                    <TableCell>{row.Image}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell><Buttons label="Update" color="primary" variant="contained" /></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
      <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        <Grid container spacing={2} marginBottom="10px" display="flex" justifyContent="space-between">
          <Grid item xs={6} display="flex">
            <Buttons
              label="Add Category +"
              color="primary"
              variant="contained"
              // onClick={handleFirstFormSubmit}
              // icon={submit}
              bgColor="#2e7d32" />
          </Grid>
          <Grid item xs={6}>
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
                <TableCell>SL No</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((row) => (
                <TableRow key={row.sno}>
                  <TableCell>{row.sno}</TableCell>
                  <TableCell>{row.Image}</TableCell>
                  <TableCell>{row.name}</TableCell>
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
      <Card style={{ backgroundColor: '#D9D9D94D', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        <Grid container spacing={2} marginBottom="10px" display="flex" justifyContent="space-between">
          <Grid item xs={6} display="flex">
            <Buttons
              label="Add Subcategory +"
              color="primary"
              variant="contained"
              // onClick={handleFirstFormSubmit}
              // icon={submit}
              bgColor="#2e7d32" />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
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
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((row) => (
                <TableRow key={row.sno}>
                  <TableCell>{row.sno}</TableCell>
                  <TableCell>{row.Image}</TableCell>
                  <TableCell>{row.name}</TableCell>
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
    </div>
  );
};

export default CategorySetup;