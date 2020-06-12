import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const BuyDialog = ({ fieldInfo }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
        <Button onClick={buyField} color="primary">
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
