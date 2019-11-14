import React from 'react'
import Header from './Header'
import { Grid } from '@material-ui/core';
import {connect} from 'react-redux'
class AddHeader extends React.Component{

    render(){
        const useStyles = {
             root: {
                flexGrow: 1,
            },
             paper: {
            textAlign: 'center',
            },
        }

        return(
            <div style={useStyles.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header title="Auto Insurance Quote" premium={this.props.premium}/><br /><br />
                </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        "premium": state.premium
    }
}
export default connect(mapStateToProps)(AddHeader)