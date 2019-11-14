import React from 'react'
import history from '../../utils/history'
import DisplayDriver from './DisplayDriver'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car-driver.png'
import { connect } from 'react-redux';

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
     }


    onAddDriverClick = () => {
        history.push('/adddriver')
    }
    goToNextPage = () => {
        history.push('/vehicledetails')
    }

    render() {
        const {didMount} = this.state
        return (
            <Paper style={useStyles.root}>
                <div className={`drivers fade-in ${didMount && 'visible'}`}>
                <Grid container >
                <Grid item xs={1}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3}>
                    <span className="drivertext"><b>Drivers</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                    <button className="driveradd" onClick={this.onAddDriverClick}>Add+</button>
                    </Grid>
                 </Grid>
                </div>
                <Divider/>
                <DisplayDriver />
                <Grid item xs={4}>
                    <button className="driveradd" onClick={this.goToNextPage}>Next>></button>
                </Grid>
            </Paper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        "drivers": state.drivers
    }
}
export default connect(mapStateToProps,null)(DriverDetails)