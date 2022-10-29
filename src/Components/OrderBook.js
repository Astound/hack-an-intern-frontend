import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography }from "@mui/material"; 
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function createData(user,   qty, price, status) {
  return { user,   qty, price, status };
} 

const OrderBook = () => {
  const [rowsBuyer,setRowsBuyer] = useState([]); 
  const [rowsSeller,setRowsSeller] = useState([]); 
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  const getOrders= () => {
    try {
      axios
        .get("http://localhost:5000/order/get-all", {
          headers: headers,
        })
        .then((response) => {
          console.log(response)
          let tempRowBuyer =[];
          response.data.buyOrders.forEach((order)=>{
            tempRowBuyer.push(createData(order.userId, order.quantity , order.price, order.status));
          })
          console.log(tempRowBuyer );
          setRowsBuyer(tempRowBuyer );
          let tempRowSeller =[];
          response.data.sellOrders.forEach((order)=>{
            tempRowSeller.push(createData(order.userId, order.quantity, order.price, order.status));
          })
          console.log(tempRowSeller );
          setRowsSeller(tempRowSeller );
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
    <> 
      <Navbar title= {"Order Book"}/>
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
          <Typography variant="h5" >Buy Orders</Typography> 
            <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
              <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell> 
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsBuyer.map((row) => (
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
          <Grid item>
          <Typography variant="h5" >Sell Orders</Typography> 
            <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
              <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell> 
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Status</TableCell>
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
    </>
  );
};

export default OrderBook;
