import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, deleteRow) {
  return { name, deleteRow };
}

export default function DenseTable(props) {
  // here we are generating individual rows per chosen food category
  const rows = props.foodCategories.map((category) => (createData(category, "delete")))

  // this is the actual table - the width at the top limits the entire table's width
  return (
    <TableContainer component={Paper} sx={{ width: '25%' }}>
      <Table sx={{ maxWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Food Category</TableCell>
            <TableCell align="right">Delete Row</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.deleteRow}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}