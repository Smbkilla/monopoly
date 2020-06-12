import React from "react";

import Switch, {Case, Default} from "react-switch-case";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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

import fieldType from "../../constants/fieldType";
import playerIcons from "../../constants/playerIcon";
import useGetFieldPlayers from "../../hooks/useGetFieldPlayers";

import "./Field.css";
import Avatar from "@material-ui/core/Avatar";


const iconStyle = {
  width: "100%",
  height: "100%",
};

const avatarStyle = (color) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  borderColor: color,
  height: "30px",
  width: "30px",
});

export default function Field(props) {
  const {property} = props;

  const players = useGetFieldPlayers(property.NAME);

  return (
    <Card className="Card">
      <Switch condition={property.TYPE}>
        <Case value={fieldType.PROPERTY}>
          <PropertyFieldContent {...props}/>
        </Case>
        <Case value={fieldType.FORTUNE_COOKIE}>
          <IconFieldContent {...props} icon={<NotListedLocationIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.ROOMATE_AGREEMENT}>
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
      <div className="players">
        {players.map(player => (
          <Avatar alt={player.name} src={playerIcons[player.name]}
                  style={avatarStyle(player.color)} className="player"/>
        ))}
      </div>
    </Card>
  )
}

function PropertyFieldContent({property}) {
  return (
    <React.Fragment>
      <CardHeader style={{backgroundColor: property.COLOR}}/>
      <CardContent className="cardContent">
        <Typography className="title" variant="button" component="h6">
          {property.TITLE}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Typography className="price" variant="button" component="h6">
          {property.PRICE.PROPERTY}
        </Typography>
      </CardActions>
    </React.Fragment>
  )
};

function IconFieldContent({property, icon}) {
  return (
    <React.Fragment>
      <CardContent className="cardContent">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={4} container justify="center">
            <Typography className="title" variant="button" component="h6">
              {property.TITLE}
            </Typography>
          </Grid>
          <Grid item xs={8} container justify="center">
            {icon}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="cardActions">
        <Typography className="title" variant="button" component="h6">
          {property.PRICE ? property.PRICE.PROPERTY : ""}
        </Typography>
      </CardActions>
    </React.Fragment>
  )
};