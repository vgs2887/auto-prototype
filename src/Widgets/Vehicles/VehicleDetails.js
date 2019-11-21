import React from 'react'
import history from '../../utils/history'
import DisplayVehicle from './DisplayVehicle'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car.png'
import { connect } from 'react-redux';
import Header from '../../Widgets/Header/Header'

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

class VehicleDetails  extends React.Component {

    onAddVehicalClick=()=>{
        history.push('/addvehicle')
    }
    goToNextPage = () => {
        history.push('/quoteresults')
    }

    render() {
        return (
            <div style={{backgroundColor:'#F5F5F5'}}><Header headerText="Auto Insurance Quote"/>   <Paper style={useStyles.root}>
                <div className="drivers">
                <Grid container >
                <Grid item xs={1}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3}>
                    <span className="drivertext"><b>Vehicles</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                    <button className="vehicleadd" onClick={this.onAddVehicalClick}>Add+</button>
                    </Grid>
                 </Grid>
                </div>
                <Divider/>
                <DisplayVehicle />
                <Grid container>
                    <Grid sm={2} />
                    <Grid xs={12} sm={8}>
                        <button className="add-driver" onClick={this.goToNextPage}>NEXT</button>
                    </Grid>
                    <Grid sm={2} />
                </Grid>
            </Paper></div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        "vehicals": state.vehicals
    }
}
export default connect(mapStateToProps,null)(VehicleDetails)