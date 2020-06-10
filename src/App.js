import React, {createContext, useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Board from "./components/Board/Board";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import NewGame from "./components/NewGame/NewGame";

import "./App.css";

const newGame = () => ({
  players: [],
});

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
  const [game, setGame] = useState(newGame());

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GameContext.Provider value={{game, setGame}}>
          <BrowserRouter>
            <NavBar/>
            <Route path='/home' component={Home}/>
            <Route path='/newGame' component={NewGame}/>
            <Route path='/currentGame' component={Board}/>
          </BrowserRouter>
        </GameContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
