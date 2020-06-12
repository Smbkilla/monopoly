import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const JailDialog = ({ open, setOpen, inside }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    // player has to pay certain amount of money to skip jail or get out of it
    // money goes to parking field ("bank")
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        {inside ? (
          <DialogContentText>You are in jail bruh.</DialogContentText>
        ) : (
          <DialogContentText>You are going to jail or pay $.</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          OK
        </Button>
        <Button onClick={handlePayment} color="primary">
          Get out!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JailDialog;
