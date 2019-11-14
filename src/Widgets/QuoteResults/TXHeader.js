import React from 'react'
import Header from './Header'
import { Grid } from '@material-ui/core';

class TXHeader extends React.Component{

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
                    <Header title="Auto Insurance Quote" /><br /><br />
                </Grid>
                </Grid>
            </div>
        )
    }
}
export default TXHeader