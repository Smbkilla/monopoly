import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const BuyDialog = ({ open, setOpen, fieldInfo }) => {

  const handleClose = () => {
    setOpen(false);
  };

  // check if player is not owner so that he cannot buy house or hotel
  // otherwise, if player is already an owner, he can buy house or hotel

  const buyField = () => {
      // money goes to parking field and player becomes an owner
      // 4 different methods or 1 for them all
  }

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Field name</DialogTitle>
      <DialogContent>
        <DialogContentText>Field price: </DialogContentText>
        <DialogContentText>House price: </DialogContentText>
        <DialogContentText>Hotel price: </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={buyField} color="primary" variant="contained">
          Buy field
        </Button>
        <Button onClick={buyField} color="primary">
          Buy house
        </Button>
        <Button onClick={buyField} color="primary">
          Buy hotel
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyDialog;
