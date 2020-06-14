import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const FieldInfoDialog = ({
  open,
  setOpen,
  fieldInfo,
  propertyInfo,
  property = false,
}) => {

  const handleClose = () => {
    setOpen(false);
    // manipulate with cash
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>
        {property ? (
          ((<DialogContentText>Owner: {fieldInfo.owner}</DialogContentText>),
          (
            <DialogContentText>
              Price: {propertyInfo.PRICE["PROPERTY"]}
            </DialogContentText>
          ))
        ) : (
          <DialogContentText>That's BS</DialogContentText>
        )}
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
