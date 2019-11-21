import React from 'react';
import {Drawer,SwipeableDrawer,AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const theme = null
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open:false}
  }
  
  handleDrawerOpen = () => {
    this.setState({open:true})
  };

  handleDrawerClose = () => {
    this.setState({open:false})
  };
  render() {

    return (
        <div><AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>          
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon onClick={this.handleDrawerOpen}/>
            </IconButton>
            <Typography variant="h6" align="center" display="inline">
                {this.props.headerText}
            </Typography>                                        
        </Toolbar>
    </AppBar>
    <br />
    <SwipeableDrawer 
        variant="persistent"
        anchor="left"
        open={this.state.open}
      >
        <div >
          <IconButton onClick={this.handleDrawerClose}>
            {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </SwipeableDrawer>
    </div>    
    );
  }
}

export default Header;

