import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LockIcon from '@material-ui/icons/Lock';
import TrainIcon from '@material-ui/icons/Train';
import RedeemIcon from "@material-ui/icons/Redeem";
import Switch, {Case, Default} from "react-switch-case";

import fieldType from "../../constants/fieldType";

import "./Field.css";

const iconStyle = {
  width: "70%",
  height: "60%",
};

export default function Field({type, players = [], ...props}) {
  return (
    <div className="Card">
      <Card>
        <Switch condition={type}>
          <Case value={fieldType.PROPERTY}>
            <PropertyFieldContent {...props}/>
          </Case>
          <Case value={fieldType.CHANCE}>
            <IconFieldContent {...props} icon={<NotListedLocationIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.COMMUNITY_CHEST}>
            <IconFieldContent {...props} icon={<RedeemIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.START}>
            <IconFieldContent {...props} icon={<KeyboardArrowRightIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.JAIL}>
            <IconFieldContent {...props} icon={<LockIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.GO_TO_JAIL}>
            <IconFieldContent {...props} icon={<ExitToAppIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.CHILL}>
            <IconFieldContent {...props} icon={<LocalParkingIcon style={iconStyle}/>}/>
          </Case>
          <Case value={fieldType.CHOO_CHOO}>
            <IconFieldContent {...props} icon={<TrainIcon style={iconStyle}/>}/>
          </Case>
          <Default>
            null
          </Default>
        </Switch>
      </Card>
      <div className="players">
        {players.map(player => (
          <div className="player" style={{color: player.color}}>
            {player.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

function PropertyFieldContent({title, price, color}) {
  return (
    <React.Fragment>
      <CardHeader style={{backgroundColor: color}}/>
      <CardContent>
        <Typography className="title" variant="button" component="h6">
          {title}
        </Typography>
        <Typography className="price" variant="button" component="h6">
          {price}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
};

function IconFieldContent({icon, title, price}) {
  return (
    <React.Fragment>
      <CardHeader/>
      <CardContent>
        <Typography className="title" variant="button" component="h6">
          {title}
        </Typography>
        <div className="icon">
          {icon}
        </div>
        <Typography className="title" variant="button" component="h6">
          {price}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
};