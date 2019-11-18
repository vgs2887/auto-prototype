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
    },
    covgText:
    {
        padding: "0px",
        paddingTop: "10px",
        fontSize: "1.3rem",
        fontWeight: "bold"
    },
    childCovgText:
    {
        padding: "0px",
        paddingTop: "10px",
        fontSize: "1.0rem",
        fontWeight: "bold"
    },

    covgHelperText:
    {
        fontSize: "12px"
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

    BICoverageAmntText = null;
    PDCoverageAmntText = null;
    compVehiCov = [];
    collVehiCov = [];

    BIcoverages = [        
        {id: 0, covgValue: "$15,000/$30,000", amnt: 5},
        {id: 1, covgValue: "$50,000/$100,000", amnt: 10},
        {id: 2, covgValue: "$100,000/$250,000", amnt: 15},
        {id: 3, covgValue: "$500,000/$1,000,000", amnt: 20}
    ];

    PDcoverages = [
        {id: 0, covgValue: "$10,000", amnt: 5},
        {id: 1, covgValue: "$25,000", amnt: 10},
        {id: 2, covgValue: "$50,000", amnt: 15},
        {id: 3, covgValue: "$100,000", amnt: 20}
    ];    

    compCoverages = [
        {id: 0, covgValue: "$0", amnt: 20},
        {id: 1, covgValue: "$250", amnt: 15},
        {id: 2, covgValue: "$500", amnt: 10},
        {id: 3, covgValue: "$1000", amnt: 5}
    ];

    collCoverages = [
        {id: 0, covgValue: "$0", amnt: 20},
        {id: 1, covgValue: "$250", amnt: 15},
        {id: 2, covgValue: "$500", amnt: 10},
        {id: 3, covgValue: "$1000", amnt: 5}
    ];

    vehicles_hardcoded = [
        { vin: "123", year: "2016", make: "ABC", model: "BBC" },
        { vin: "456", year: "2019", make: "XYZ", model: "420" }
    ]

    constructor(props) {
        super(props)

        this.BICoverageAmntText = "$" + 5; //Initial display text for the Coverage amount
        this.PDCoverageAmntText = "$" + 5;

        var vehicles = this.props.vehicles;
        //var vehicles = this.vehicles_hardcoded;
        var compVehicles = null;
        var collVehicles = null;

        for (var vehicle of vehicles) {            
            compVehicles = {
                vin: vehicle.vin,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                coverAmnt: 20,
                coverAmntText : "$"+20
            };
            collVehicles = {
                vin: vehicle.vin,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                coverAmnt: 20,
                coverAmntText : "$"+20
            };
            this.compVehiCov.push(compVehicles);
            this.collVehiCov.push(collVehicles);
        }
        //assuming base premium as $10 + inidividual coverage premium for first value of each coverage
        //coverage coverge except comp/coll which are added based on number of vehicles
        //2*20 = comp 20 + coll 20
        var premiumConst = 30 + (vehicles.length * (2 * 20));
        //alert('premiumConst = '+premiumConst );

        this.state = {
            didMount: false,
            premium: premiumConst,   
            prevBICovAmnt: 5,
            prevPDCovAmnt: 5,
            coverage: "$500,000/$1000,000", //not used in this file
            coverageamt: premiumConst    //not used in this file
        };
        this.props.updatepremiumaction(premiumConst);

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ didMount: true })
        }, 0)
    }
    


    onChangeCovForBI = (e) => {
        
        var premium = this.state.premium;
        var prevSel = this.state.prevBICovAmnt;
        var BICoverageAmnt = parseInt(e.target.value);
        
        //State has previously selected value, remove the previously added amount and add the new amount for this coverage selection.
        
        premium = premium - prevSel + BICoverageAmnt;        

        this.BICoverageAmntText = "$" + BICoverageAmnt;
        this.setState({ premium: premium, prevBICovAmnt: BICoverageAmnt });
        this.props.updatepremiumaction(premium);
    }


    onChangeCovgForPD = (e) => {
        
        var premium = this.state.premium;
        var prevSel = this.state.prevPDCovAmnt;
        var pdCoverageAmnt = parseInt(e.target.value);        

        //State has previously selected value, remove the previously added amount and add the new amount for this coverage selection.
        
        premium = premium - prevSel + pdCoverageAmnt;

        this.PDCoverageAmntText = "$" + pdCoverageAmnt;
        this.setState({ premium: premium, prevPDCovAmnt: pdCoverageAmnt });
        this.props.updatepremiumaction(premium);
    }

    onChangeCovgForComp = (e) => {
        //console.log(e.target.value );
        
        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        var CompCoverageAmnt = parseInt(inputArr[1]);
        var vin = inputArr[0];
        var prevCompCoverageAmnt = 0;        
        

        for(var obj of this.compVehiCov){            
            //console.log('vin = '+obj.vin+', obj.coverAmnt ='+obj.coverAmnt );
            if(obj.vin === vin){
                prevCompCoverageAmnt = obj.coverAmnt ;
                obj.coverAmnt = CompCoverageAmnt;
                obj.coverAmntText = "$"+CompCoverageAmnt;
            }            
        }
        
        premium = premium - prevCompCoverageAmnt + CompCoverageAmnt;        

        this.setState({ premium: premium});
        this.props.updatepremiumaction(premium);
    }

    onChangeCovgForColl = (e) => {    

        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        var collCoverageAmnt = parseInt(inputArr[1]);        
        var vin = inputArr[0];
        var prevCollCoverageAmnt = 0;        
        var collCoverageAmntText = "$" + collCoverageAmnt ;
        

        for(var obj1 of this.collVehiCov){            
            console.log('Coll : vin = '+obj1.vin+', obj.coverAmnt ='+obj1.coverAmnt );
            if(obj1.vin === vin){
                prevCollCoverageAmnt = obj1.coverAmnt ;
                obj1.coverAmnt = collCoverageAmnt;
                obj1.coverAmntText = collCoverageAmntText;
            }            
        }        
        
        premium = premium - prevCollCoverageAmnt + collCoverageAmnt;        

        this.setState({ premium: premium});
        this.props.updatepremiumaction(premium);
        
    }



    render() {
        
        const { didMount } = this.state;        
        
        var compVehiCovItems = this.compVehiCov.map((vehicle, key) =>        
        <div key={vehicle.vin}>
            <p style={ useStyles.childCovgText }>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.vin}</p>
            <table>
                <tr>
                    <td style={{ width: "100%" }}>
                        <select onChange={this.onChangeCovgForComp} multiple="" class="ui fluid dropdown">
                            {this.compCoverages.map((coverage,key) => {                                
                                var compCovKey = vehicle.vin + ":" + coverage.amnt ;
                                var CompCoverageAmntText_ind = this.CompCoverageAmntText ;
                                return <option key={coverage.id}
                                    value={compCovKey}>
                                    {coverage.covgValue}</option>
                            })}
                        </select>
                        <p style={useStyles.covgHelperText}>per occurence</p>
                    </td>
                    <td >
                        <div class="ui input" style={{ width: "100%", float: "right" }} >                            
                            <input type="text" readOnly value={vehicle.coverAmntText} />
                        </div>
                    </td>
                </tr>
            </table>
        </div>                         
        );

        var collVehiCovItems = this.collVehiCov.map((vehicle, key) =>        
        <div key={vehicle.vin}>
            <p style={ useStyles.childCovgText }>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.vin}</p>
            <table>
                <tr>
                    <td style={{ width: "100%" }}>
                        <select onChange={this.onChangeCovgForColl} multiple="" class="ui fluid dropdown">
                            {this.compCoverages.map((coverage,key) => {                                
                                var collCovKey = vehicle.vin + ":" + coverage.amnt ;                                
                                return <option key={coverage.id}
                                    value={collCovKey}>
                                    {coverage.covgValue}</option>
                            })}
                        </select>
                        <p style={useStyles.covgHelperText}>per occurence</p>
                    </td>
                    <td >
                        <div class="ui input" style={{ width: "100%", float: "right" }} >                            
                            <input type="text" readOnly value={vehicle.coverAmntText} />
                        </div>
                    </td>
                </tr>
            </table>
        </div>                         
        );

        return (
            <div>
                <Paper >                    
                    <Grid >
                        {/* Bodily Injury Section */}
                        <div className="coveragetext" style={useStyles.covgText}>Bodily Injury Liability Coverage</div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovForBI} multiple="" class="ui fluid dropdown">
                                        {this.BIcoverages.map((coverage,key) => {
                                            return <option key = {coverage.id}
                                                value={coverage.amnt}>
                                                {coverage.covgValue}
                                                </option>
                                        })}
                                    </select>
                                    <p style={useStyles.covgHelperText}>per person/per accident</p>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <input type="text" readOnly value={this.BICoverageAmntText} />                                        
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <Divider />

                        {/* Property Damage Section */}
                        <div className="coveragetext" style={useStyles.covgText}>Property Damage Liability Coverage</div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovgForPD} multiple="" class="ui fluid dropdown">
                                        {this.PDcoverages.map((coverage,key) => {
                                            return <option key = {coverage.id}
                                                value={coverage.amnt}>
                                                {coverage.covgValue}
                                                </option>
                                        })}
                                    </select>
                                    <p style={useStyles.covgHelperText}>per accident</p>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <       input type="text" readOnly value={this.PDCoverageAmntText} />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <Divider />

                        {/* Comp Section */}
                        <div>
                            <div className="coveragetext" style={ useStyles.covgText }>Comprehensive</div>
                            {compVehiCovItems}
                        </div>
                        <Divider />
                        
                        {/* Coll Section */}
                        <div>
                            <div className="coveragetext" style={ useStyles.covgText }>Collision</div>
                            {collVehiCovItems}
                        </div>
                        <Divider />
                        

                        {/* Coll Section */}
                        {/* <div className="coveragetext" style={useStyles.covgText}><b>Collision</b></div>
                        <Divider />
                        <table>
                            <tr>
                                <td style={{ width: "100%" }}>
                                    <select onChange={this.onChangeCovgForColl} multiple="" class="ui fluid dropdown">
                                        {this.collCoverages.map(coverage => {
                                            return <option value={coverage}>{coverage}</option>
                                        })}
                                    </select>
                                    <p style={useStyles.covgHelperText}>per occurence</p>
                                </td>
                                <td >
                                    <div class="ui input" style={{ width: "100%", float: "right" }} >
                                        <       input type="text" value={this.CollCoverageAmntText} />
                                    </div>
                                </td>
                            </tr>
                        </table> */}
                        <Divider />

                    </Grid>
                </Paper>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        vehicles: state.vehicles,
        vehicleNos: state.vehicles.length
    };
};

export default connect(mapStateToProps, { updatepremiumaction })(CoveragePanel)