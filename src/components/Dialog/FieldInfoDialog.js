import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const FieldInfoDialog = ({ fieldInfo }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Field name</DialogTitle>
      <DialogContent>
        <DialogContentText>Owner: </DialogContentText>
        <DialogContentText>Price: </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FieldInfoDialog;
