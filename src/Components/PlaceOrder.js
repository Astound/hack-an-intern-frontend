import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PlaceOrder = () => {
  const [type, setType] = React.useState("");
  const [option, setOption] = React.useState("");
  const [user, setUser] = React.useState("");
  const [price, setPrice] = React.useState();
  const [qty, setQty] = React.useState();

  const handleChange1 = (event) => {
    setType(event.target.value);
  };
  const handleChange2 = (event) => {
    setOption(event.target.value);
  };
  const handleChange3 = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Option</InputLabel>
          <Select value={option} label="Option" onChange={handleChange2}>
            <MenuItem value={"buy"}>Buy</MenuItem>
            <MenuItem value={"sell"}>Sell</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Select User</InputLabel>
          <Select value={user} label="User" onChange={handleChange3}>
            <MenuItem value={"a"}>A</MenuItem>
            <MenuItem value={"b"}>B</MenuItem>
            <MenuItem value={"c"}>C</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Type</InputLabel>
          <Select value={type} label="Type" onChange={handleChange1}>
            <MenuItem value={"market"}>Market</MenuItem>
            <MenuItem value={"limit"}>Limit</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
        sx={{ m: 1, minWidth: 120 }} size="small"
          type="number"
          name="quantity"
          label="Quantity"
          variant="filled"
          value={qty}
          onChange={(event) => setQty(event.target.value)}
        />
        <TextField
        sx={{ m: 1, minWidth: 120 }} size="small"
          type="number"
          name="price"
          label="Price"
          variant="filled"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <Button variant="contained">Place Order</Button>
      </div>
    </>
  );
};

export default PlaceOrder;
