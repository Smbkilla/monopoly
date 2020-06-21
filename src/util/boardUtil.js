import React from "react";
import fieldType from "../constants/fieldType";
import properties from "../constants/properties";

import BuyDialog from "../components/Dialog/BuyDialog";
import PayDialog from "../components/Dialog/PayDialog";
import StartDialog from "../components/Dialog/StartDialog";
import JailDialog from "../components/Dialog/JailDialog";
import GoToJailDialog from "../components/Dialog/GoToJailDialog";
import ParkingDialog from "../components/Dialog/ParkingDialog";
import FieldInfoDialog from "../components/Dialog/FieldInfoDialog";

import useGetCurrentPlayer from "../hooks/useGetCurrentPlayer";

export function getDialog(
  field,
  property = properties.START,
  showDialog,
  setShowDialog,
  currentPlayer,
  visit
) {
  switch (property.TYPE) {
    case fieldType.FORTUNE_COOKIE:
      console.log("FieldInfoDialog");
      return (
        <FieldInfoDialog
          open={showDialog}
          setOpen={setShowDialog}
          fieldInfo={field}
          propertyInfo={property}
        />
      );
    case fieldType.ROOMATE_AGREEMENT:
      console.log("FieldInfoDialog");
      return (
        <FieldInfoDialog
          open={showDialog}
          setOpen={setShowDialog}
          fieldInfo={field}
          propertyInfo={property}
        />
      );
    case fieldType.START:
      console.log("StartDialog");
      return <StartDialog open={showDialog} setOpen={setShowDialog} />;
    case fieldType.JAIL:
      console.log("JailDialogVisit");
      return (
        <JailDialog open={showDialog} setOpen={setShowDialog} visit={visit} />
      );
    case fieldType.GO_TO_JAIL:
      console.log("JailDialog");
      return (
        <GoToJailDialog open={showDialog} setOpen={setShowDialog} />
      );
    case fieldType.CHILL:
      console.log("ParkingDialog");
      return <ParkingDialog open={showDialog} setOpen={setShowDialog} />;
    default:
      // check owner and current player
      if (field.owner !== null) {
        console.log("Owner exists", field.owner)
        if (currentPlayer === field.owner) {
          console.log("Player is owner", currentPlayer, field.owner);
          console.log("BuyDialog");
          return (
            <BuyDialog
              open={showDialog}
              setOpen={setShowDialog}
              fieldInfo={field}
              propertyInfo={property}
              property={property.TYPE === fieldType.PROPERTY ? true : false}
              owner={true}
            />
          );
        }
        console.log("Player is NOT owner", currentPlayer, field.owner);
        console.log("PayDialog");
        return <PayDialog open={showDialog} setOpen={setShowDialog} fieldInfo={field} propertyInfo={property} />;
      }
      console.log("There is no owner", field.owner)
      console.log("BuyDialog");
      return (
        <BuyDialog
          open={showDialog}
          setOpen={setShowDialog}
          fieldInfo={field}
          propertyInfo={property}
          property={property.TYPE === fieldType.PROPERTY ? true : false}
        />
      );
  }
}
