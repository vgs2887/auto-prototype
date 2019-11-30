import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Checkbox from '@material-ui/core/Checkbox';
import Slide from '@material-ui/core/Slide';
import ReactDOM from "react-dom";
import "./UserConsent.css";


const useStyles = {
    root: {
        width: 'auto', 
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 3px rgba(0,0,0,0.12)'
    },
    leftAlign: {
        align: 'left'
    }   
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class UserConsent extends React.Component {

    constructor(){
        super();
        this.state = { isChecked: false,
                isHidden: true
        };
      }
    state = {
        open:false,
    };
    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
        console.log(this.context);
      };

      handleAdd= () =>{
        this.setState(
            {
              isChecked: !this.state.isChecked
              
            }            
          );
          
      }

      toggleAgree = () =>{
        if(this.state.isChecked == false){
            
            this.setState({
                isHidden: false
              })
            
                }
      }
render(){
  return (
    <div className = "quote-button">
      <Button variant="outlined" color="primary" onClick={this.handleOpen} style={{backgroundColor:'#041c3d',color:'white',}}>
        GET A NEW QUOTE
      </Button>
      
      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Start a family tradition of saving with Auto Insurance."}</DialogTitle>
        <DialogContent>        
          <DialogContentText id="alert-dialog-slide-description">    
          <div class="row">      
                        <div class="avatar-container">
                          <div class="photo">
                          <Typography  > <img src={require("../../assets/carlogo.png")} width = "100%" className = "vehicle-img"/> </Typography>
                          </div>
                        </div>
                        
            <div class="details-container" style={{flex: 1, flexDirection: 'row'}}>
                        <div class="content">
                         
                       <div className = "top-row">
                        <div className = "item">
                            What you need to do?
                        </div>  
                        
                        </div>                                             
                        
                        <div className = "select-text">
                            Your quote will be populated with information gathered from legally authorized sources. That will help us 
                            find the best available rates for you and to provide quotes for related insurance products.
                        </div> 
                    
                                                              
                      </div>
                  </div>
                  
                <div>
                <Checkbox
         checked={this.state.isChecked}
         onChange={this.handleAdd}
         onClick = {this.toggleAgree}
        inputProps={{
          "aria-label": "primary checkbox"
        }}
      />        
                
                  By selecting this, you have read and agreed to the information above and you agree to receive the decision about your request for insurance and any related
                  documents and disclosures electronically.
                </div>
          </div>
            
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
        {!this.state.isHidden ? <Link align="left" to='/getstarted' ><Button onClick={this.handleClose} color="primary">
            Continue
          </Button>
        </Link>: ""}
        </DialogActions>
      </Dialog>
    </div>
  );

}
}



