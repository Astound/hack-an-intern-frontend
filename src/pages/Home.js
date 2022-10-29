import React from "react";
import { Box, Button, Grid } from "@mui/material";
import LineGraph from "../Components/LineGraph";
import UserPorfolio from "../Components/UserPortfolio";
import MarketPriceDisplay from "../Components/MarketPriceDisplay";
import { Link } from "react-router-dom";

const Home = () => {
  const styleButton = { 
    width: 400, 
    fontSize: "14px",
    bgcolor: "orange",
    color: "#000",
    border: "3px solid orange",
    p: 1,
    m: "5px",
    borderRadius: 0,
    "&:hover": {
      bgcolor: "#fff",
      color: "#000",
      border: "3px solid #000",
      opacity: [0.9, 0.8, 0.7],
    },
  };

  return (
    <Box sx={{backgroundColor: "#000", padding: "7px", }}>
      <Box sx={{ display: "flex", justifyContent: "center"  }}>
        <UserPorfolio />
        <LineGraph />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-start" ,alignItems: "center"  }}>
        <MarketPriceDisplay/>
        <Box 
          sx={{ 
            m: "1rem",
            display: "flex",
            width: "400px", height: "150px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems:"center"
          }}
        >
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
