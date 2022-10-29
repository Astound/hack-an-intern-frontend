import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import UserEdit from "./shared/UserEdit";
 

function createData(user, userId, stocks, fiat) {
  return { user, userId, stocks, fiat };
}

const UserPorfolio = () => {
  const [rows, setRows] = useState();
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",

    Authorization: localStorage.getItem("token"),
  };
  const getUsers = () => {
    try {
      axios
        .get("http://localhost:5000/user/get-all", {
          headers: headers,
        })
        .then((response) => {
          let tempRow = [];
          response.data.users.forEach((user) => {
            tempRow.push(
              createData(user.userName, user.userId, user.stockCount, user.fiat)
            );
          });
          console.log(tempRow);
          setRows(tempRow);
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
  }, []);
  return (
    <>
      <TableContainer sx={{ maxWidth: 450 }} component={Paper}>
        <Table sx={{ maxWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Stocks</TableCell>
              <TableCell align="right">Fiat</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead> 
          
            {rows &&
              rows.map((row) => <UserEdit row={row} getUsers={getUsers} />)}
          
        </Table>
      </TableContainer>
    </>
  );
};

export default UserPorfolio;
