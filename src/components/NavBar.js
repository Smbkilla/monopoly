import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import destination from "../constants/destination";
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
          <ListItem button key="Home" onClick={onNavigationButtonClick(destination.HOME)}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button key="New game" onClick={onNavigationButtonClick(destination.NEW_GAME)}>
            <ListItemIcon><AddToQueueIcon/></ListItemIcon>
            <ListItemText primary={"New game"}/>
          </ListItem>
          <ListItem button key="Current game" onClick={onNavigationButtonClick(destination.CURRENT_GAME)}>
            <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
            <ListItemText primary={"Current game"}/>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}