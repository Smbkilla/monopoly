import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const FieldInfoDialog = ({ open, setOpen, fieldInfo }) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Field name</DialogTitle>
      <DialogContent>
        <DialogContentText>Owner: </DialogContentText>
        <DialogContentText>Price: </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FieldInfoDialog;
