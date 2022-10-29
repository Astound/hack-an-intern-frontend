import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  let navigate = useNavigate();
  const redirect = () => {
    let url = "/";
    navigate(url, { replace: true });
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu" 
            onClick={redirect}
          >
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
          <Typography variant="h6" sx={{textTransform: "uppercase"}}>{props.title}</Typography>
          <Button sx={{ mx: 3}}  >
            <Link style={{ textDecoration: 'none' ,color : 'white' }} to="/order-book"> Order Book</Link>
          </Button>
          <Button sx={{ mx: 3}}>
            <Link style={{ textDecoration: 'none' ,color : 'white' }} to="/transaction-history"> Transaction History</Link>
          </Button>
          <Button sx={{ mx: 3}}  >
            <Link style={{ textDecoration: 'none' ,color : 'white' }}  to="/place-order"> Place Order</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
