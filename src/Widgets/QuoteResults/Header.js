import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    header:
    {
      backgroundColor: '#f4f4f4',
        width:'100%',
        overflow: "hidden",
        position: "fixed",
        top: 0,
        zIndex:1
      
    },
    text:{
        color:'#0e2e49',
        float: 'left',
        paddingTop: '5px',
        fontWeight: '600',
        fontSize:"15px"
    },
    container:{
        height:'40px'
    },
    menu:{
        float: 'left'
    }
  };
  
  let addPremium=(props)=>{
      if(props.premium){
          return(
            <div style={{marginRight:"10%", paddingTop:"5px",float:"right"}}><span style ={{marginLeft: '20px', marginRight: '5px', fontWeight :'bold', color:'#fac724', fontSize : '18px'}}>$</span ><b>{(props.premium)}</b><span style={{fontSize:"10px"}}><b>/Month</b></span></div>
          )
      }
  }

const Header = (props) => (
    <nav  style={styles.header}>
        <div style={styles.container}>
            {/* <div className="row m-auto">
                <i className="my-auto"></i>
                <div className="h4 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div> */}
            <IconButton edge="start" style={styles.menu}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <div style={styles.text} href="/">{props.title}</div>
            {addPremium(props)}
            
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;