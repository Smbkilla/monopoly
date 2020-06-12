import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const ParkingDialog = ({ open, setOpen, amount }) => {

  const handleClose = () => {
    setOpen(false);
    // player recieves a certain amount of money
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <DialogContentText>{`You recieved ${amount} $`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ParkingDialog;
