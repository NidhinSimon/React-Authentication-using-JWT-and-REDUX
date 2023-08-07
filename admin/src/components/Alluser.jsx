import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { getUsers ,deleteUser} from "../services/api";

import { RiEdit2Line } from 'react-icons/ri';
import {MdOutlineDeleteOutline} from 'react-icons/md'

import {MdOutlineEdit} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const StyledTable = styled(Table)`
margin:auto;
margin:50px auto 0 auto;

`


const Thead=styled(TableRow)
`
background:#000000;
& > th{
  color:#fff;
  font-size:20px;
}
`

const TBody=styled(TableRow)
`
& > td {
    font-size:20px;
}
`


const Alluser = () => {
  const iconSize = 30;
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    getAllusers();
  },[]);

  const getAllusers = async () => {
    try {
      let res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      toast.error("Error while fetching users:", error);
    }
  };

  const deleteuserDetails = async (id) => {
    try {
      setDeleteUserId(id);
      setShowDeleteConfirmation(true);
    } catch (error) {
      console.log("Error while deleting user:", error);
    }
  };

  const handleDeleteConfirmation = async () => {
    try {
      await deleteUser(deleteUserId);
      setShowDeleteConfirmation(false);
      getAllusers();
      toast.success("User deleted successfully!");
    } catch (error) {
      console.log("Error while deleting user:", error);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>ACTION</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TBody key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/edit/${user._id}`} sx={{ marginRight: '10px' }}>
                  edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => deleteuserDetails(user._id)}>
                  DELETE
                </Button>
                
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>

    {/* //dialog to show coonfirmation to the admin */}
      <Dialog open={showDeleteConfirmation}>
        <DialogTitle>Confirm Delete ?</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

  
  
    </>
  );
};

export default Alluser;