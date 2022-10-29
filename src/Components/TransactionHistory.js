import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import MarketPriceDisplay from "./MarketPriceDisplay";
import LineGraph from "./LineGraph";

function createData(b_user, s_user, qty, price) {
  return { b_user, s_user, qty, price };
}

const rows = [
  createData("A", "B", 6, 24),
  createData("B", "E", 6, 24),
  createData("C", "A", 3, 24),
  createData("D", "B", 2, 24),
  createData("E", "A", 6, 14),
];

const TransactionHistory = () => {
  return (
    <Box sx={{ backgroundColor: "#000", padding: "7px" }}>
      <Navbar title={"Transaction History"} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: "flex",
            width: "600px",
            m: 8, 
            border: "3px solid black",
            justifyContent: "center",
          }}
        >
          <TableContainer
            sx={{
              maxWidth: 650, 
              border: "3px solid white",
              backgroundColor: "#000",
            }}
            component={Box}
          >
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography style={{ color: "white" }}>Buyer</Typography>{" "}
                  </TableCell>
                  <TableCell align="right">
                    <Typography style={{ color: "white" }}>Seller</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography style={{ color: "white" }}>Qty.</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography style={{ color: "white" }}>Price</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.b_user}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography style={{ color: "white" }}>
                        {" "}
                        {row.b_user}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography style={{ color: "white" }}>
                        {row.s_user}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography style={{ color: "white" }}>
                        {row.qty}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography style={{ color: "white" }}>
                        {row.price}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <LineGraph />
      </Box>
      <MarketPriceDisplay />
    </Box>
  );
};

export default TransactionHistory;
