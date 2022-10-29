import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import LineGraph from "./LineGraph";
import MarketPriceDisplay from "./MarketPriceDisplay";

function createData(user, qty, price, status) {
  return { user, qty, price, status };
}

const OrderBook = () => {
  const [rowsBuyer, setRowsBuyer] = useState([]);
  const [rowsSeller, setRowsSeller] = useState([]);
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  const getOrders = () => {
    try {
      axios
        .get("http://localhost:5000/order/get-all", {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          let tempRowBuyer = [];
          response.data.buyOrders.forEach((order) => {
            tempRowBuyer.push(
              createData(
                order.userId,
                order.quantity,
                order.price,
                order.status
              )
            );
          });
          console.log(tempRowBuyer);
          setRowsBuyer(tempRowBuyer);
          let tempRowSeller = [];
          response.data.sellOrders.forEach((order) => {
            tempRowSeller.push(
              createData(
                order.userId,
                order.quantity,
                order.price,
                order.status
              )
            );
          });
          console.log(tempRowSeller);
          setRowsSeller(tempRowSeller);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", padding: "7px" }}>
      <Navbar title={"Order Book"} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid
          sx={{
            height: "100vh",
            width: "100%",
          }}
          container
          display="flex"
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center "
        >
          <Grid item>
            <Typography variant="h5">Buy Orders</Typography>
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
                      <Typography color="white">User</Typography>{" "}
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Qty.</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Price</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Status</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsBuyer.map((row) => (
                    <TableRow
                      key={row.user}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography color="white">{row.user}</Typography>
                      </TableCell>
                      <TableCell align="right"><Typography color="white">{row.qty}</Typography></TableCell>
                      <TableCell align="right"><Typography color="white">{row.price}</Typography></TableCell>
                      <TableCell align="right"><Typography color="white">{row.status}</Typography></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Typography variant="h5">Sell Orders</Typography>
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
                      <Typography color="white">User</Typography>{" "}
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Qty.</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Price</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Status</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsSeller.map((row) => (
                    <TableRow
                      key={row.user}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.user}
                      </TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <LineGraph />
      </Box>
      <MarketPriceDisplay />
    </Box>
  );
};

export default OrderBook;
