import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";

function createData(b_user,s_user, qty, price ) {
  return { b_user, s_user , qty, price };
}

const rows = [
  createData("A", "B", 6, 24 ),
  createData("B", "E" , 6, 24),
  createData("C", "A" , 3, 24),
  createData("D", "B" , 2, 24),
  createData("E", "A" , 6, 14),
];

const TransactionHistory = () => {
  return (
    <>
    <Navbar/>
      <TableContainer sx={{ maxWidth: 650 }}  component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Buyer</TableCell> 
              <TableCell align="right">Seller</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.b_user}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.b_user}
                </TableCell>
                <TableCell align="right">{row.s_user}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.price}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
    </>
  );
};

export default TransactionHistory;
