import React from 'react'
import history from '../../utils/history'
import DisplayProperty from './DisplayProperty';
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/building.png'
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

class PropertyDetails  extends React.Component {

    onAddPropertyClick=()=>{
        history.push('/addproperty')
    }

    render() {
        return (
            <Paper style={useStyles.root}>
                <div className="drivers">
                <Grid container >
                <Grid item xs={1}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3}>
                    <span className="drivertext"><b>Properties</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                    <button className="vehicleadd" onClick={this.onAddPropertyClick}>Add+</button>
                    </Grid>
                 </Grid>
                </div>
                <Divider/>
                <DisplayProperty />
            </Paper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        "custproperties": state.custproperties
    }
}
export default connect(mapStateToProps)(PropertyDetails)