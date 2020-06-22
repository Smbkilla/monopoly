import React from "react";

import Switch, {Case, Default} from "react-switch-case";

import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BusinessIcon from "@material-ui/icons/Business";
import HouseIcon from "@material-ui/icons/House";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LockIcon from '@material-ui/icons/Lock';
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import RedeemIcon from "@material-ui/icons/Redeem";
import TelegramIcon from '@material-ui/icons/Telegram';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DriveEtaIcona from '@material-ui/icons/DriveEta';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import WifiIcon from '@material-ui/icons/Wifi';
import TrainIcon from '@material-ui/icons/Train';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import fieldType from "../../constants/fieldType";
import playerIcons from "../../constants/playerIcon";
import useGetFieldPlayers from "../../hooks/useGetFieldPlayers";
import useGetFieldRealEstate from "../../hooks/useGetFieldRealEstate";

import "./Field.css";

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
        <Case value={fieldType.TRAIN}>
          <IconFieldContent {...props} icon={<TrainIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.SCOOTER}>
          <IconFieldContent {...props} icon={<MotorcycleIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.CAR}>
          <IconFieldContent {...props} icon={<DriveEtaIcona style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.ROCKET}>
          <IconFieldContent {...props} icon={<TelegramIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.WIFI}>
          <IconFieldContent {...props} icon={<WifiIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.WINE}>
          <IconFieldContent {...props} icon={<LocalBarIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.RING}>
          <IconFieldContent {...props} icon={<TrainIcon style={iconStyle}/>}/>
        </Case>
        <Case value={fieldType.BOOK}>
          <IconFieldContent {...props} icon={<MenuBookIcon style={iconStyle}/>}/>
        </Case>
        <Default>
          null
        </Default>
      </Switch>
      <div className="players">
        {players.map((player, index) => (
          <Avatar key={index} alt={player.name} src={playerIcons[player.name]}
                  style={avatarStyle(player.color)} className="player"/>
        ))}
      </div>
    </Card>
  )
}

function PropertyFieldContent({property}) {
  const [numberOfHouses, numberOfHotels] = useGetFieldRealEstate(property.NAME);

  const getRealEstate = () => {
    return (
      <div className="realEstate">
        {numberOfHouses > 0 &&
        <Badge badgeContent={numberOfHouses} color="error">
          <HouseIcon/>
        </Badge>
        }
        {numberOfHotels > 0 &&
        <Badge badgeContent={numberOfHotels} color="error">
          <BusinessIcon/>
        </Badge>
        }
      </div>
    );
  };

  return (
    <React.Fragment>
      <CardHeader style={{backgroundColor: property.COLOR, height: "40px", padding: "0"}} title={getRealEstate()}
                  disableTypography={true}/>
      <CardContent className="cardContent" style={{height: "80px", padding: "0"}}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={5} container justify="center">
            <Typography className="title" variant="button" style={{fontSize: "12px", fontWeight: "600"}}>
              {property.TITLE}
            </Typography>
          </Grid>
          <Grid item xs={7} container justify="space-around" direction="row" spacing={3}>
            <Grid item xs={6} container justify="center">
            </Grid>
            <Grid item xs={6} container justify="center">
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="cardActions" style={{height: "40px", padding: "0"}}>
        <Typography className="price" variant="button" component="h6" style={{fontSize: "12px", fontWeight: "600"}}>
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
          <Grid item xs={6} container justify="center">
            <Typography className="title" variant="button" component="h6" style={{fontSize: "12px", fontWeight: "600"}}>
              {property.TITLE}
            </Typography>
          </Grid>
          <Grid item xs={8} container justify="center">
            {icon}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="cardActions" style={{height: "30px", padding: "0"}}>
        <Typography className="title" variant="button" component="h6" style={{fontSize: "12px", fontWeight: "600"}}>
          {property.PRICE ? property.PRICE.PROPERTY : ""}
        </Typography>
      </CardActions>
    </React.Fragment>
  )
};