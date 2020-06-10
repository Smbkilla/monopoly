import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import {ElevationScroll} from "./ElevationScroll"

export default function NavBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();

  const onMenuClicked = () => {
    setOpenDrawer(!openDrawer);
  };

  const onNavigationButtonClick = (path) => () => {
    history.push(path);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" className="toolbar-icon" color="inherit" aria-label="menu" onClick={onMenuClicked}>
              <MenuIcon/>
            </IconButton>
            <Typography className="toolbar-title">
              Monopoly
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer open={openDrawer}
              anchor="left">
        <div className="drawer-header">
          <IconButton onClick={onMenuClicked}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button key="Home" onClick={onNavigationButtonClick("/home")}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button key="New game" onClick={onNavigationButtonClick("/newGame")}>
            <ListItemIcon><AddToQueueIcon/></ListItemIcon>
            <ListItemText primary={"New game"}/>
          </ListItem>
          <ListItem button key="Current game" onClick={onNavigationButtonClick("/currentGame")}>
            <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
            <ListItemText primary={"Current game"}/>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}