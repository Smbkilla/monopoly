import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import playerName from "../../constants/playerName";
import playerColor from "../../constants/playerColor";
import playerIcons from "../../constants/playerIcon";
import properties from "../../constants/properties";
import fieldType from "../../constants/fieldType";
import Divider from '@material-ui/core/Divider';
import getPropertyMap from "../../hooks/getPropertyMap";
import Switch, {Case, Default} from "react-switch-case";

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LockIcon from '@material-ui/icons/Lock';
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import RedeemIcon from "@material-ui/icons/Redeem";
import TrainIcon from '@material-ui/icons/Train';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./PlayerData.css";

const player = {
    name: playerName.LEONARD,
    color: playerColor.BLUE,
    cash: 20000000,
    properties: [
        properties.AMY_APARTMENT, 
        properties.HOWARD_SCOOTER, 
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT, 
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT, 
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT,
        properties.RAJ_APARTMENT
    ]
};

const props = getPropertyMap(player.properties);

const PlayerData = () => {
    return (
        <div className="Card" style={{margin: '20px'}}>
            <Card>
                <CardHeader style={{backgroundColor: player.color}} 
                avatar={
                    <img className="player-avatar" alt={player.name} src={playerIcons[player.name]}/>
                }
                title={
                    <Typography className="player-name" variant="button" component="h5">
                        {player.name}
                    </Typography>}/>
                <CardContent>
                    <Grid container direction="column" alignItems="center">
                        <Grid item container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <Typography className="property" variant="body1" component="h6">
                                    CASH
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="value" variant="overline" component="h6" style={{marginLeft: '10px'}}>
                                    {player.cash}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center">
                            <Divider style={{width: '100%'}}/>
                        </Grid>
                        <Grid item container justify="center">
                            <Typography className="title" variant="body1" component="h6" style={{marginTop: '5px'}}>
                                PROPERTIES
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Grid container direction="row" alignItems="center" justify="center">
                                {props.map((property) => {  
                                    return (
                                        <Grid item xs={3}>
                                            <Card style={{margin: '5px'}}>
                                                {property.TYPE == fieldType.PROPERTY ? <CardHeader style={{backgroundColor: property.COLOR, padding: '10px'}}/> : <CardHeader style={{padding: '10px'}}/>}
                                                <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '8px', padding: '8px'}}>
                                                    <Switch condition={property.TYPE}>
                                                        <Case value={fieldType.CHANCE}>
                                                            <NotListedLocationIcon/>
                                                        </Case>
                                                        <Case value={fieldType.COMMUNITY_CHEST}>
                                                            <RedeemIcon/>
                                                        </Case>
                                                        <Case value={fieldType.START}>
                                                            <KeyboardArrowRightIcon/>
                                                        </Case>
                                                        <Case value={fieldType.JAIL}>
                                                            <LockIcon/>
                                                        </Case>
                                                        <Case value={fieldType.GO_TO_JAIL}>
                                                            <ExitToAppIcon/>
                                                        </Case>
                                                        <Case value={fieldType.CHILL}>
                                                            <LocalParkingIcon/>
                                                        </Case>
                                                        <Case value={fieldType.CHOO_CHOO}>
                                                            <TrainIcon/>
                                                        </Case>
                                                    </Switch>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ) 
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default PlayerData;