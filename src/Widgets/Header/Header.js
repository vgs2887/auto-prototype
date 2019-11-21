import React from 'react';
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
        <div><AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="center" display="inline">
                {this.props.headerText}
            </Typography>                                        
        </Toolbar>
    </AppBar>
    <br />
    </div>    
    );
  }
}

export default Header;

