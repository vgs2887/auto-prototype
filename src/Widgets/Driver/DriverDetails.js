import React from 'react'
import history from '../../utils/history'
import DisplayDriver from './DisplayDriver'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car-driver.png'
import { connect } from 'react-redux';
import Header from '../../Widgets/Header/Header'
import {Button} from '@material-ui/core';
import axios from 'axios'
const useStyles = {
    root: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 3px rgba(0,0,0,0.12)'
    },
    aligning:
    {
        display: 'inline-block',
        padding: 10,
    }
};

class DriverDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            didMount: false
        };
    }
    componentDidMount(){
        setTimeout(() => {
             this.setState({didMount: true})
         }, 0)
         this.setupBeforeUnloadListener();
     }

    goToNextPage = () => {
        history.push('/vehicledetails')
    }
    doSomethingBeforeUnload = (ev) => {
        console.log("SEE YOU SOON WITH A NEW quote")
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi', this.props.quote)
        .then(response => {console.log("Response"+JSON.stringify(response))})
        .catch(error =>{console.log("ERROR"+error)})
        return ev.returnValue="Are you sure want to exit?"
    }
      setupBeforeUnloadListener = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            console.log("GOOD BYE")
            return this.doSomethingBeforeUnload(ev);
        });
    };
    render() {
        const {didMount} = this.state
        return (
            <div style={{backgroundColor:'#F5F5F5'}}><Header headerText="Auto Insurance Quote"/>
            <Paper style={useStyles.root}>
                <div className={`drivers fade-in ${didMount && 'visible'}`}>
                <Grid container >
                <Grid item xs={1}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3}>
                    <span className="drivertext"><b>Drivers</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                 </Grid>
                </div>
                <Divider/>
                <DisplayDriver />
                <Grid container>
                    <Grid sm={2} />
                    <Grid xs={12} sm={8}>
                        <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.goToNextPage}>NEXT</Button>
                    </Grid>
                    <Grid sm={2} />
                </Grid>
            </Paper>
<br/><br/><br/><br/></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        "drivers": state.drivers,
        "quote":state.quote
    }
}
export default connect(mapStateToProps,null)(DriverDetails)