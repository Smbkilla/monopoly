import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const PayDialog = ({ open, setOpen, fieldInfo }) => {

  const handleClose = () => {
    setOpen(false);
  };

  // check if player is owner so that he cannot pay himself
  // otherwise player has to pay

  const payField = () => {
      // money goes to owner of the field
      // amount is calculated based on a number of houses/hotels
      handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Field name</DialogTitle>
      <DialogContent>
        <DialogContentText>Owner: </DialogContentText>
        <DialogContentText>Price: </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={payField} color="primary" variant="contained">
          Pay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
