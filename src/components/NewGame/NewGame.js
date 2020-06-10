import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";

import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import {GameContext} from "../../App";
import playerColors from "../../constants/playerColor";
import playerIcons from "../../constants/playerIcon";
import playerNames from "../../constants/playerName";

import "./NewGame.css"
import {getNewGamePlayers} from "../../util/gameUtil";

const player = () => ({
  name: "",
  color: "",
});


export default function NewGame() {
  const [newPlayer, setNewPlayer] = useState(player());
  const [players, setPlayers] = useState([]);
  const disableAddNewPlayer = newPlayer.name === "" || newPlayer.color === "";
  const gameContext = useContext(GameContext);
  const history = useHistory();

  const names = [];
  const colors = [];

  _.mapKeys(playerNames, (value, key) => {
    names.push(value);
  });

  _.mapKeys(playerColors, (value, key) => {
    colors.push(value);
  });

  const onPlayerNameChange = (e) => {
    const value = _.get(e, "target.value", "");
    setNewPlayer({
      ...newPlayer,
      name: value,
    });
  };

  const onPlayerColorChange = (e) => {
    const value = _.get(e, "target.value", "");
    setNewPlayer({
      ...newPlayer,
      color: value,
    });
  };

  const onAdd = () => {
    setPlayers([...players, newPlayer]);
    setNewPlayer(player());
  };

  const onNewGame = () => {
    const {game, setGame} = gameContext;

    setGame({
      ...game,
      players: getNewGamePlayers(players),
    });

    history.push("/currentGame");
  };

  return (
    <Grid container alignContent="space-between" spacing={2} className="NewGame">
      <Grid item xs={12}>
        <Typography className="title" variant="h3">
          New game
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item xs={12} container justify="flex-start">
          <Typography className="title" variant="h5">
            New player
          </Typography>
        </Grid>
        <Grid item xs={4} container>
          <TextField label="Player name"
                     required
                     variant="outlined"
                     select
                     fullWidth
                     value={newPlayer.name}
                     onChange={onPlayerNameChange}>
            {names.map(name => <MenuItem value={name} key={name}>{name}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={4} container>
          <TextField label="Player color"
                     required
                     variant="outlined"
                     select
                     fullWidth
                     value={newPlayer.color}
                     onChange={onPlayerColorChange}>
            {colors.map(color => <MenuItem value={color} key={color}>{color}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={4} container>
          <Button onClick={onAdd} color="primary" variant="contained" disabled={disableAddNewPlayer}>{"Add"}</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="flex-start">
        <Typography className="title" variant="h5">
          Players
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Player icon</TableCell>
                <TableCell align="left">Player name</TableCell>
                <TableCell align="left">Player color</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((addedPlayer) => (
                <TableRow key={`${addedPlayer.name}-${addedPlayer.color}`}>
                  <TableCell align="center">
                    <img className="playerIcon" alt={addedPlayer.name} src={playerIcons[addedPlayer.name]}
                         style={{borderColor: addedPlayer.color}}/>
                  </TableCell>
                  <TableCell align="left">{addedPlayer.name}</TableCell>
                  <TableCell align="left">{addedPlayer.color}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Button onClick={onNewGame} color="primary" variant="contained" disabled={players.length < 2}>Start new
          Game</Button>
      </Grid>
    </Grid>
  );
}