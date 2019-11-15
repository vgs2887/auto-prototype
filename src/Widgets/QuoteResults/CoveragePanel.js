import React from 'react'
import { connect } from 'react-redux'
import { updatepremiumaction } from '../../actions'
import { Divider, Paper, Grid } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dropdown from 'react-dropdown'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'react-dropdown/style.css'

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
const options = [
    { value: 'one', label: '25,000/30,000' },
    { value: 'two', label: '50,000/100,000' },
    { value: 'three', label: '100,000/200,000' },
    { value: 'four', label: '200,000/300,000' },
    { value: 'five', label: '300,000/500,000' }]
const defaultOption = options[0]

class CoveragePanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            didMount: false,
            premium: 150,   //assuming first value of each coverage
            selectedBI: 0,
            selectedPD: 0,
            selectedComp: 0,
            selectedColl: 0,
            coverage: "$500,000/$1000,000",
            coverageamt: 150    //assuming first value of each coverage

        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ didMount: true })
        }, 0)
    }
    BIcoverages = [
        "$1,000,000",
        "$2,000,000",
        "$3,000,000",
        "$4,000,000"
    ];

    PDcoverages = [
        "$10,000",
        "$25,000",
        "$50,000",
        "$100,000"
    ];

    compCoverages = [
        "$0",
        "$50",
        "$100",
        "$150"
    ];

    collCoverages = [
        "$50",
        "$100",
        "$150",
        "$200"
    ];

    BICovPremium = [5, 10, 15, 20];
    PDCovPremium = [5, 10, 15, 20];
    CompCovPremium = [20, 15, 10, 0];
    CollCovPremium = [20, 15, 10, 0];

    
    onChangeCovForBI = (e) => {
        console.log(e.target.value)
        var index = 0;
        if (e.target.value == "$1,000,000") {
            index = 0;            
        }
        if (e.target.value == "$2,000,000") {
            index = 1;            
        }
        if (e.target.value == "$3,000,000") {
            index = 2;
        }
        if (e.target.value == "$4,000,000") {
            index = 3;
        }

        var premium = this.state.premium;
        var prevSel = this.state.selectedBI ;
        
        //State has previously selected value, remove the previously added amount and add the new amount for this coverage selection.
        console.log('premium = '+premium+" "+prevSel+" "+index);
        premium = premium - this.BICovPremium[prevSel] + this.BICovPremium[index] ;
        console.log('premium = '+premium);        
        
        this.setState({ coverageamt: premium, premium: premium, selectedBI: index })
        this.props.updatepremiumaction("40.5")
    }



    onChangeCovgForPD = (e) => {
        console.log(e.target.value)
        var index = 0;
        if (e.target.value == "$10,000") {
            index = 0;        
        }
        if (e.target.value == "$25,000") {
            index = 1;
        }
        if (e.target.value == "$50,000") {
            index = 2;
        }
        if (e.target.value == "$100,000") {
            index = 3;
        }

        var premium = this.state.premium;
        var prevSel = this.state.selectedPD ;
                
        console.log('premium = '+premium+" "+prevSel+" "+index);
        premium = premium - this.PDCovPremium[prevSel] + this.PDCovPremium[index] ;
        console.log('premium = '+premium);        
        
        this.setState({ coverageamt: premium, premium: premium, selectedPD: index })
        this.props.updatepremiumaction("40.5")
    }

    onChangeCovgForComp = (e) => {
        console.log(e.target.value)
        var index = 0;
        if (e.target.value == "$0") {
            index = 0;
        }
        if (e.target.value == "$50") {
            index = 1;
        }
        if (e.target.value == "$100") {
            index = 2;
        }
        if (e.target.value == "$150") {
            index = 3;
        }

        var premium = this.state.premium;
        var prevSel = this.state.selectedComp ;
                
        console.log('premium = '+premium+" "+prevSel+" "+index);
        premium = premium - this.CompCovPremium[prevSel] + this.CompCovPremium[index] ;
        console.log('premium = '+premium);        
        
        this.setState({ coverageamt: premium, premium: premium, selectedComp: index })
        this.props.updatepremiumaction("40.5")
    }

    onChangeCovgForColl = (e) => {
        console.log(e.target.value);
        var index = 0;
        if (e.target.value == "$50") {
            index = 0;
        }
        if (e.target.value == "$100") {
            index = 1;
        }
        if (e.target.value == "$150") {
            index = 2;
        }
        if (e.target.value == "$200") {
            index = 3;
        }

        var premium = this.state.premium;
        var prevSel = this.state.selectedColl ;
                
        console.log('premium = '+premium+" "+prevSel+" "+index);
        premium = premium - this.CollCovPremium[prevSel] + this.CollCovPremium[index] ;
        console.log('premium = '+premium);        
        
        this.setState({ coverageamt: premium, premium: premium, selectedColl: index })
        this.props.updatepremiumaction("40.5")
    }



    render() {
        console.log(this.state)
        const { didMount } = this.state

        return (
            <div>
                <Paper >
                    <Grid content>
                        {/* Bodily Injury Section */}
                        <div className="coveragetext" style={{ padding: "0px", paddingTop: "10px" }}><b>Bodily Injury Liability Coverage</b></div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovForBI} multiple="" class="ui fluid dropdown">
                                        {this.BIcoverages.map(coverage => {
                                            return <option value={coverage}>{coverage}</option>
                                        })}
                                    </select>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        {/* <       input type="text" value={this.state.coverageamt} /> */}
                                        <p>${Number.parseFloat(this.state.coverageamt).toFixed(2)}</p>
                                    </div>
                                </td>
                            </tr>
                        </table>                        
                        <Divider />

                        {/* Property Damage Section */}
                        <div className="coveragetext" style={{ padding: "0px", paddingTop: "10px" }}><b>Property Damage Liability Coverage</b></div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovgForPD} multiple="" class="ui fluid dropdown">
                                        {this.PDcoverages.map(coverage => {
                                            return <option value={coverage}>{coverage}</option>
                                        })}
                                    </select>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <       input type="text" value={this.state.coverageamt} />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <Divider />

                        {/* Comp Section */}
                        <div className="coveragetext" style={{ padding: "0px", paddingTop: "10px" }}><b>Comprehensive</b></div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovgForComp} multiple="" class="ui fluid dropdown">
                                        {this.compCoverages.map(coverage => {
                                            return <option value={coverage}>{coverage}</option>
                                        })}
                                    </select>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <       input type="text" value={this.state.coverageamt} />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <Divider />

                        {/* Coll Section */}
                        <div className="coveragetext" style={{ padding: "0px", paddingTop: "10px" }}><b>Collision</b></div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovgForColl} multiple="" class="ui fluid dropdown">
                                        {this.collCoverages.map(coverage => {
                                            return <option value={coverage}>{coverage}</option>
                                        })}
                                    </select>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <       input type="text" value={this.state.coverageamt} />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <Divider />

                    </Grid>
                </Paper>
            </div>

        )
    }
}
export default connect(null, { updatepremiumaction })(CoveragePanel)