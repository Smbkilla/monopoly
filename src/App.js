import React, {createContext, useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Board from "./components/Board/Board";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import NewGame from "./components/NewGame/NewGame";
import destinations from "./constants/destination";
import {getNewGame} from "./util/gameUtil";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  status: {
    danger: 'orange',
  }
});

export const GameContext = createContext(null);

function App() {
  const [game, setGame] = useState(getNewGame());

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GameContext.Provider value={{game, setGame}}>
          <BrowserRouter>
            <NavBar/>
            <Route exact path={destinations.HOME} component={Home}/>
            <Route path={destinations.NEW_GAME} component={NewGame}/>
            <Route path={destinations.CURRENT_GAME} component={Board}/>
          </BrowserRouter>
        </GameContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
