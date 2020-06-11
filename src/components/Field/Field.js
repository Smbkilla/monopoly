import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LockIcon from '@material-ui/icons/Lock';
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import RedeemIcon from "@material-ui/icons/Redeem";
import TrainIcon from '@material-ui/icons/Train';
import Switch, {Case, Default} from "react-switch-case";

import fieldType from "../../constants/fieldType";
import playerIcons from "../../constants/playerIcon";
import useGetFieldPlayers from "../../hooks/useGetFieldPlayers";

import "./Field.css";


const iconStyle = {
  width: "70%",
  height: "60%",
};

export default function Field(props) {
  const {property} = props;

  const players = useGetFieldPlayers(property.NAME);

  return (
    <div className="Card">
      <Card>
        <Switch condition={property.TYPE}>
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
          <img className="player" alt={player.name} src={playerIcons[player.name]} style={{borderColor: player.color}}/>
        ))}
      </div>
    </div>
  )
}

function PropertyFieldContent({property}) {
  return (
    <React.Fragment>
      <CardHeader style={{backgroundColor: property.COLOR}}/>
      <CardContent>
        <Grid container direction="column" alignItems="center" justify="space-between">
          <Grid item xs={3} container justify="center">
            <Typography className="title" variant="button" component="h6">
              {property.TITLE}
            </Typography>
          </Grid>
          <Grid item xs={6} container justify="center">
          </Grid>
          <Grid item xs={3} container justify="center">
            <Typography className="price" variant="button" component="h6">
              {property.PRICE.PROPERTY}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  )
};

function IconFieldContent({property, icon}) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={3} container justify="center">
        <Typography className="title" variant="button" component="h6">
          {property.TITLE}
        </Typography>
      </Grid>
      <Grid item xs={6} container justify="center">
        {icon}
      </Grid>
      <Grid item xs={3} container justify="center">
        <Typography className="title" variant="button" component="h6">
          {property.PRICE.PROPERTY}
        </Typography>
      </Grid>
    </Grid>
  )
};