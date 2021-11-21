import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, deleteRow) {
  return { name, deleteRow };
}

// props.deleteFoodCategory(event.target.id)

export default function DenseTable(props) {
  // here we are generating individual rows per chosen food category in addition to the delete button showing for each
  const rows = props.foodCategories.map((category) => (createData(
    category, 
    <IconButton aria-label="delete" id={category} onClick={(event) => props.deleteFoodCategory(event.target.id)}>
      <DeleteIcon/>
    </IconButton>
)))

  // this is the actual table - the width at the top limits the entire table's width
  return (
    <TableContainer component={Paper} sx={{ width: '22.5%' }}>
      <Table sx={{ maxWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Food Category</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name} 
              </TableCell>
              <TableCell align="center">{row.deleteRow}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}