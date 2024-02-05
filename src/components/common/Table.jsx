import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const cellStyle = {
  textAlign: 'center',
};

const MaterialTable = ({ columns, data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id} style={{ fontWeight: 'bold', ...cellStyle }}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.id} style={cellStyle}>
                {row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default MaterialTable;
