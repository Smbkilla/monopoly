import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const PayDialog = ({ fieldInfo }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const payField = () => {
      // money goes to owner of the field
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
        <Button onClick={payField} color="primary">
          Pay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
