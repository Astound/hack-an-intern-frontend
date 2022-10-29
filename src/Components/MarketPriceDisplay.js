import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MarketPriceDisplay = () => {
  return (
    <>
      <Box>
         <span style={{background: "white", color: "black ", padding: "7px"}}> Current Market </span>

        <Box
          sx={{ backgroundColor: "orange", width: "700px", height: "150px" }}
          display="flex"
          justifyContent="center"
          flexDirection="column "
          alignItems="center"
        >
          <Typography variant="h3">$ 250 </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MarketPriceDisplay;
