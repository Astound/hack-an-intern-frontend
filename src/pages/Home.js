import React from "react";
import { Box, Button, Grid } from "@mui/material";
import LineGraph from "../Components/LineGraph";
import UserPorfolio from "../Components/UserPortfolio";
import { Link } from "react-router-dom";
const Home = () => {
  const styleButton = {
    width: 400,
    fontSize: "14px",
    bgcolor: "#000",
    color: "#fff",
    border: "none",
    boxShadow: 5,
    p: 1,
    m : '1rem',
    "&:hover": {
          backgroundColor: "red",
          opacity: [0.9, 0.8, 0.7],
        },
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LineGraph />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <UserPorfolio />
        <Box sx={{ m : '1rem', display: "flex", justifyContent: "center" ,flexDirection: 'column' }}>
          <Link style={{ textDecoration: "none" }} to="/transaction-history">
            <Button sx={styleButton}>Transaction History</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/order-book">
            <Button sx={styleButton}>Order Book</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/place-order">
            <Button sx={styleButton}>Place Order</Button>
          </Link>
        </Box>
      </Box>


    </Box>
  );
};

export default Home;
