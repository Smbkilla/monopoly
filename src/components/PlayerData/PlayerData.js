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
import Tooltip from '@material-ui/core/Tooltip';

import TelegramIcon from '@material-ui/icons/Telegram';
import MotorcycleIcon  from '@material-ui/icons/Motorcycle';
import DriveEtaIcona from '@material-ui/icons/DriveEta';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import WifiIcon from '@material-ui/icons/Wifi';
import TrainIcon from '@material-ui/icons/Train';

import "./PlayerData.css";
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer";

const PlayerData = () => {
    const player = useGetCurrentPlayer();

    const props = getPropertyMap(player.properties);

    return (
        <div className="Card" style={{margin: '20px'}}>
            <Card>
                <CardHeader style={{backgroundColor: player.color}} 
                avatar={
                    <img className="player-avatar" alt={player.name} src={playerIcons[player.name]}/>
                }
                title={
                    <Typography className="player-name" variant="button" component="h5" style={{color: player.color == playerColor.YELLOW ? '#000' : '#fff'}}>
                        {/* {player.name} */}
                        current player
                    </Typography>}/>
                <CardContent>
                    <Grid container direction="column" alignItems="center">
                        <Grid item container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <Typography className="property" variant="body1" component="h6">
                                    NAME
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="value" variant="overline" component="h6" style={{marginLeft: '10px'}}>
                                    {player.name}
                                </Typography>
                            </Grid>
                        </Grid>
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
                                {
                                    props.length == 0 ?                                     
                                            <Grid item>
                                                <Typography className="value" variant="overline" component="h6" style={{marginTop: '5px'}}>
                                                    You currently have no properties
                                                </Typography>
                                            </Grid> :
                                props.map((property, index) => {  
                                    return (
                                        <Grid key={index} item xs={3}>
                                            <Tooltip title={property.TITLE} placement='top'>
                                                <Card style={{margin: '5px'}}>
                                                    {property.TYPE == fieldType.PROPERTY ? <CardHeader style={{backgroundColor: property.COLOR, padding: '10px'}}/> : <CardHeader style={{padding: '10px'}}/>}
                                                    <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '8px', padding: '8px'}}>
                                                        <Switch condition={property.TYPE}>
                                                            <Case value={fieldType.SCOOTER}>
                                                                <MotorcycleIcon/>
                                                            </Case>
                                                            <Case value={fieldType.CAR}>
                                                                <DriveEtaIcona/>
                                                            </Case>
                                                            <Case value={fieldType.ROCKET}>
                                                                <TelegramIcon/>
                                                            </Case>
                                                            <Case value={fieldType.TRAIN}>
                                                                <TrainIcon/>
                                                            </Case>
                                                            <Case value={fieldType.WIFI}>
                                                                <WifiIcon/>
                                                            </Case>
                                                            <Case value={fieldType.WINE}>
                                                                <LocalBarIcon/>
                                                            </Case>
                                                            <Case value={fieldType.RING}>
                                                                {/* <LocalParkingIcon/> */}
                                                            </Case>
                                                        </Switch>
                                                    </CardContent>
                                                </Card>
                                            </Tooltip>
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