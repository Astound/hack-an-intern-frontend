import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import Select from "react-select";
import { useEffect, useState } from "react";
import { Box, Input } from "@mui/material";
import Navbar from "./Navbar";
import MarketPriceDisplay from "./MarketPriceDisplay";
import LineGraph from "./LineGraph";

const PlaceOrder = () => {
  const [orderType, setOrderType] = useState("");
  const [priceType, setPriceType] = useState("");
  const [user, setUser] = useState("");
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [userOptions, setUserOptions] = useState([]);

  const orderOptions = [
    { value: "BUY", label: "BUY" },
    { value: "SELL", label: "SELL" },
  ];

  const priceTypeOptions = [
    { value: "MARKET", label: "MARKET" },
    { value: "LIMIT", label: "LIMIT" },
  ];

  let tempOptions = [];
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  const getMarketValue = () => {
    try {
      axios
        .get("http://localhost:5000/transactions/current-price", {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          setPrice(response.data.currentPrice);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getUsers = () => {
    try {
      axios
        .get("http://localhost:5000/user/get-all", {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          if (tempOptions.length === 0) {
            response.data.users.forEach((user) => {
              tempOptions.push({
                value: user.userId,
                label: user.userName,
              });
            });
          }
          setUserOptions(tempOptions);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const placeOrder = () => {
    const orderObj = {
      userId: user.value,
      type: orderType.value,
      price: price,
      quantity: qty,
    };
    console.log(orderObj);
    try {
      axios
        .post("http://localhost:5000/order/create", orderObj, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    getMarketValue();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", padding: "7px" }}>
      <Navbar title="Place order" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            width: "600px",
            m: 8,
            border: "3px solid black",
          }}
        >
          <div>
            <Box>
              <div>
                <FormControl
                  sx={{ m: 1, minWidth: 400, maxWidth: 400, }}
                  size="small"
                >
                  <Select
                    placeholder="Order Type"
                    value={orderType}
                    onChange={setOrderType}
                    options={orderOptions}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl
                  sx={{ m: 1, minWidth: 400, maxWidth: 400, }}
                  size="small"
                >
                  <Select
                    placeholder="User"
                    value={user}
                    onChange={setUser}
                    options={userOptions}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl
                  sx={{ m: 1, minWidth: 400, maxWidth: 400 ,}}
                  size="small"
                >
                  <Select
                    placeholder="Price type"
                    value={priceType}
                    onChange={setPriceType}
                    options={priceTypeOptions}
                  />
                </FormControl>
              </div>
            </Box>
            <Box>
              <div>
                <Input
                  sx={{ m: 1, minWidth: 400, maxWidth: 400, background: "white" , p:1}}
                  size="small"
                  type="number"
                  placeholder="Quantity"
                  value={qty}
                  onChange={(event) => setQty(event.target.value)}
                />
              </div>
              <div>
                <Input
                  sx={{ m: 1, minWidth: 400, maxWidth: 400 , background: "white", p:1 }}
                  size="small"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </Box>
            <Box>
              <Button
                sx={{m: 1, minWidth: 400, maxWidth: 400 , background: "orange", p:1 }}
                onClick={placeOrder}
                variant="contained"
              >
                Place Order
              </Button>
            </Box>
          </div>
        </Box>

          <LineGraph/>

      </Box>
      <MarketPriceDisplay />
    </Box>
  );
};

export default PlaceOrder;
