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
      return (
        <FieldInfoDialog
          open={showDialog}
          setOpen={setShowDialog}
          fieldInfo={field}
          propertyInfo={property}
        />
      );
    case fieldType.ROOMATE_AGREEMENT:
      return (
        <FieldInfoDialog
          open={showDialog}
          setOpen={setShowDialog}
          fieldInfo={field}
          propertyInfo={property}
        />
      );
    case fieldType.START:
      return <StartDialog open={showDialog} setOpen={setShowDialog} />;
    case fieldType.JAIL:
      return (
        <JailDialog open={showDialog} setOpen={setShowDialog} visit={visit} />
      );
    case fieldType.GO_TO_JAIL:
      return (
        <GoToJailDialog open={showDialog} setOpen={setShowDialog} />
      );
    case fieldType.CHILL:
      return <ParkingDialog open={showDialog} setOpen={setShowDialog} />;
    default:
      // check owner and current player
      if (field.owner !== null) {
        if (currentPlayer === field.owner) {
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
        return <PayDialog open={showDialog} setOpen={setShowDialog} fieldInfo={field} propertyInfo={property} />;
      }
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
