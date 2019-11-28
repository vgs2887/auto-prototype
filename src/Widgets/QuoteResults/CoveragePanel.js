import React from 'react'
import { connect } from 'react-redux'
import { updatepremiumaction } from '../../actions'
import { updateCoverages } from '../../actions'
import { setQuoteObject } from "../../actions";
import { Divider, Paper, Grid } from '@material-ui/core';
import './CoveragePanel.css';
//import Select from 'react-select';


import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dropdown from 'react-dropdown'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
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
        fontSize: "16px",
        fontWeight: "bold",
        color: "#041C3D",
        textAlign: "center"
    },
    childCovgText:
    {
        padding: "0px",
        paddingTop: "10px",
        fontSize: "1.0rem",
        fontWeight: "bold",
        color: "#041C3D"
    },
    childtext: {
        padding: "0px",
        paddingTop: "10px",
        fontSize: "1.0rem",
        color: "#041C3D",
        textAlign: "lfet"
    },
    leftAlign: {
        textAlign: "left !important",
    },
    tableStyle: {
        width: '99%',
        backgroundColor: 'rgb(222, 237, 245)',
        borderRadius: '2px !important'
    },
    covgHelperText:
    {
        fontSize: "12px"
    },
    button: {
        display: 'block'
    },
    formControl: {
        minWidth: '61%',
        marginLeft: '1%'
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

    biCovAmnt = null;
    pdCovgAmnt = null;
    BICoverageAmntText = null;
    PDCoverageAmntText = null;
    compVehiCov = [];
    collVehiCov = [];
    quote = [];


    BIcoverages = [
        { id: "0", covgValue: "$15,000/$30,000", amnt: "5" },
        { id: "1", covgValue: "$50,000/$100,000", amnt: "10" },
        { id: "2", covgValue: "$100,000/$250,000", amnt: "15" },
        { id: "3", covgValue: "$500,000/$1,000,000", amnt: "20" }
    ];

    PDcoverages = [
        { id: "0", covgValue: "$10,000", amnt: "5" },
        { id: "1", covgValue: "$25,000", amnt: "10" },
        { id: "2", covgValue: "$50,000", amnt: "15" },
        { id: "3", covgValue: "$100,000", amnt: "20" }
    ];

    compCoverages = [
        { id: "0", covgValue: "$0", amnt: "20" },
        { id: "1", covgValue: "$250", amnt: "15" },
        { id: "2", covgValue: "$500", amnt: "10" },
        { id: "3", covgValue: "$1000", amnt: "5" }
    ];

    collCoverages = [
        { id: "0", covgValue: "$0", amnt: "20" },
        { id: "1", covgValue: "$250", amnt: "15" },
        { id: "2", covgValue: "$500", amnt: "10" },
        { id: "3", covgValue: "$1000", amnt: "5" }
    ];

    vehicles_hardcoded = [
        { vin: "123", year: "2016", make: "ABC", model: "BBC" },
        { vin: "456", year: "2019", make: "XYZ", model: "420" }
    ]

    constructor(props) {
        super(props)

        this.quote = this.props.quote;

        this.biCovAmnt = 5;
        this.pdCovgAmnt = 5;

        this.BICoverageAmntText = "$" + this.biCovAmnt; //Initial display text for the Coverage amount
        this.PDCoverageAmntText = "$" + this.pdCovgAmnt;

        var vehicles = this.quote.vehicles;

        //var vehicles = this.vehicles_hardcoded;
        var compVehicles = null;
        var collVehicles = null;
        var compCollInitialCovAmnt = (20 * vehicles.length);

        for (var vehicle of vehicles) {
            compVehicles = {
                vin: vehicle.vin,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                coverAmnt: 20,
                coverAmntText: "$" + 20,
                value: vehicle.vin + ":" + 20
            };
            collVehicles = {
                vin: vehicle.vin,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                coverAmnt: 20,
                coverAmntText: "$" + 20,
                value: vehicle.vin + ":" + 20
            };
            this.compVehiCov.push(compVehicles);
            this.collVehiCov.push(collVehicles);
        }
        //assuming base premium as $10 + inidividual coverage premium for first value of each coverage
        //coverage coverge except comp/coll which are added based on number of vehicles
        //2*20 = comp 20 + coll 20
        var premiumConst = 30 + (vehicles.length * (2 * 20));
        //alert('premiumConst = '+premiumConst );        



        if (this.quote == null) {
            var coverages = {
                bodilyInjury: 5,
                propertyDamage: 5,
                comprehensive: 20,
                collision: 20
            }
            var quote = {
                premium: premiumConst,
                coverages,
            }
            this.quote = quote;
        }

        this.quote.coverages.bodilyInjury = "5";
        this.quote.coverages.propertyDamage = "5";
        this.quote.coverages.comprehensive = "20";
        this.quote.coverages.collision = "20";
        this.quote.premium = premiumConst;

        //this.props.setQuoteObject(this.quote);
        this.props.updateCoverages(this.quote);

        this.state = {
            didMount: false,
            premium: premiumConst,
        };


    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ didMount: true })
        }, 0)
    }

    onChangeCovForBI = (e) => {

        var premium = this.state.premium;
        var prevSel = this.biCovAmnt;
        var biCoverageAmnt = parseInt(e.target.value);
        console.log("BI value-" + biCoverageAmnt);

        premium = premium - prevSel + biCoverageAmnt;

        this.biCovAmnt = biCoverageAmnt;
        this.BICoverageAmntText = "$" + biCoverageAmnt;

        console.log("BI 2 value-" + biCoverageAmnt);
        this.quote.coverages.bodilyInjury = biCoverageAmnt;

        this.quote.premium = premium;

        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote);
        //this.props.updatepremiumaction(premium);
        this.props.updateCoverages(this.quote);
        console.log(this.quote.coverages.bodilyInjury);

    }


    onChangeCovgForPD = (e) => {

        var premium = this.state.premium;
        var prevSel = this.pdCovgAmnt; //fix state var
        var pdCoverageAmnt = parseInt(e.target.value);

        premium = premium - prevSel + pdCoverageAmnt;

        this.pdCovgAmnt = pdCoverageAmnt;
        this.PDCoverageAmntText = "$" + pdCoverageAmnt;

        this.quote.coverages.propertyDamage = pdCoverageAmnt;
        this.quote.premium = premium;

        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote);
        this.props.updateCoverages(this.quote);

    }

    onChangeCovgForComp = (e) => {

        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        var compCoverageAmnt = parseInt(inputArr[1]);

        var vin = inputArr[0];
        var prevCompCoverageAmnt = 0;

        for (var obj of this.compVehiCov) {

            if (obj.vin === vin) {
                prevCompCoverageAmnt = obj.coverAmnt;
                obj.coverAmnt = compCoverageAmnt;
                obj.coverAmntText = "$" + compCoverageAmnt;
                obj.value = obj.vin + ":" + compCoverageAmnt;
            }
        }

        premium = premium - prevCompCoverageAmnt + compCoverageAmnt;

        this.quote.coverages.comprehensive = compCoverageAmnt;
        this.quote.premium = premium;

        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote); 
        this.props.updateCoverages(this.quote);
    }

    onChangeCovgForColl = (e) => {

        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        var collCoverageAmnt = parseInt(inputArr[1]);
        var vin = inputArr[0];
        var prevCollCoverageAmnt = 0;
        var collCoverageAmntText = "$" + collCoverageAmnt;


        for (var obj1 of this.collVehiCov) {
            console.log('Coll : vin = ' + obj1.vin + ', obj.coverAmnt =' + obj1.coverAmnt);
            if (obj1.vin === vin) {
                prevCollCoverageAmnt = obj1.coverAmnt;
                obj1.coverAmnt = collCoverageAmnt;
                obj1.coverAmntText = collCoverageAmntText;
                obj1.value = obj1.vin + ":" + collCoverageAmnt;
            }
        }

        premium = premium - prevCollCoverageAmnt + collCoverageAmnt;

        //this.quote.coverages.collision = vin+":"+collCovAmt;
        this.quote.coverages.collision = collCoverageAmnt;
        this.quote.premium = premium;

        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote);
        this.props.updateCoverages(this.quote);

    }



    render() {

        const { didMount } = this.state;

        var compVehiCovItems = this.compVehiCov.map((vehicle, key) =>
            <table key={vehicle.vin} style={useStyles.tableStyle}>
                <tr><p style={useStyles.childCovgText}>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.vin}</p></tr>
                <tr>
                    <td style={{ width: "80%" }}>
                        <Grid item sm="12" xs="12" >
                            <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                <Select
                                    value={vehicle.value}
                                    onChange={this.onChangeCovgForComp}
                                >
                                    {this.compCoverages.map((coverage, key) => {
                                        var compCovKey = vehicle.vin + ":" + coverage.amnt;
                                        return <MenuItem key={coverage.id}
                                            value={compCovKey}>{coverage.covgValue}</MenuItem>
                                    })}

                                </Select>
                            </FormControl>
                            <FormHelperText style={{ color: "black", marginTop: 0 }}>per occurence</FormHelperText>
                        </Grid>
                    </td>
                    <td style={{ width: "20%" }}>
                        <Grid item sm="12" xs="12" >
                            <div class="ui input" style={{ width: "100%", float: "right" }} >
                                {/* <input type="text" readOnly value={100} /> */}
                                <input type="text" style={{ width: "100%" }} readOnly value={vehicle.coverAmntText} />
                            </div>
                        </Grid>
                    </td>
                </tr>
            </table>
        );

        var collVehiCovItems = this.collVehiCov.map((vehicle, key) =>
                 <table key={vehicle.vin} style={useStyles.tableStyle}>
                    <tr><p style={useStyles.childCovgText}>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.vin}</p></tr>
                    <tr>
                        <td style={{ width: "80%" }}>
                            <Grid item sm="12" xs="12" >
                                <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                    <Select
                                        value={vehicle.value}
                                        onChange={this.onChangeCovgForColl}
                                    >
                                        {this.collCoverages.map((coverage, key) => {
                                            var collCovKey = vehicle.vin + ":" + coverage.amnt;
                                            return <MenuItem key={coverage.id}
                                                value={collCovKey}>{coverage.covgValue}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>
                                <FormHelperText style={{ color: "black", marginTop: 0 }}>per occurence</FormHelperText>
                            </Grid>
                        </td>
                        <td style={{ width: "20%" }}>
                            <Grid item sm="12" xs="12" >
                                <div class="ui input" style={{ width: "100%", float: "right" }} >
                                    {/* <input type="text" readOnly value={100} /> */}
                                    <input type="text" style={{ width: "100%" }} readOnly value={vehicle.coverAmntText} />
                                </div>
                            </Grid>
                        </td>
                    </tr>
                </table>
        );

        return (
            <div>


                <Paper square="true" >
                    <Grid container justify="flex-start" alignItems="flex-start" style={{ marginLeft: "0px !important" }}>

                        <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
                            <div className="coveragetext" style={useStyles.covgText}> Bodily Injury Liability Coverage</div>
                        </Grid>
                        <Grid item sm="12" xs="12"  >
                            <div className="coveragetext" style={useStyles.childtext}>Covers medical expenxes for other injured when you cause an accident</div>
                        </Grid>
                        <table style={useStyles.tableStyle}>
                            <tr>
                                <td style={{ width: "80%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                            <Select
                                                value={this.biCovAmnt}
                                                onChange={this.onChangeCovForBI}
                                            >
                                                {this.BIcoverages.map(coverage => {
                                                    return <MenuItem value={coverage.amnt}>{coverage.covgValue}</MenuItem>
                                                })}

                                            </Select>
                                        </FormControl>
                                        <FormHelperText style={{ color: "black", marginTop: 0 }}>per person/per accident</FormHelperText>
                                    </Grid>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <div class="ui input" style={{ width: "100%", float: "right" }} >
                                            {/* <input type="text" readOnly value={100} /> */}
                                            <input type="text" style={{ width: "100%" }} readOnly value={this.BICoverageAmntText} />
                                        </div>
                                    </Grid>
                                </td>
                            </tr>
                        </table>
                    </Grid>
                </Paper>
                <br />
                <Paper square="true" >
                    <Grid container justify="flex-start" alignItems="flex-start" style={{ marginLeft: "0px !important" }}>
                        <Grid item sm="12" xs="12" >
                            <div className="coveragetext" style={useStyles.covgText}> Property Damage</div>
                        </Grid>
                        <Grid item sm="12" xs="12"  >
                            <div className="coveragetext" style={useStyles.childtext}>Covers damage to other vehicle or property when you cause an accident.</div>
                        </Grid>
                        <table style={useStyles.tableStyle}>
                            <tr>
                                <td style={{ width: "80%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                            <Select
                                                value={this.pdCovgAmnt}
                                                onChange={this.onChangeCovgForPD}
                                            >
                                                {this.PDcoverages.map(coverage => {
                                                    return <MenuItem value={coverage.amnt}>{coverage.covgValue}</MenuItem>
                                                })}

                                            </Select>
                                        </FormControl>
                                        <FormHelperText style={{ color: "black", marginTop: 0 }}>per accident</FormHelperText>
                                    </Grid>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <div class="ui input" style={{ width: "100%", float: "right" }} >
                                            {/* <input type="text" readOnly value={100} /> */}
                                            <input type="text" style={{ width: "100%" }} readOnly value={this.BICoverageAmntText} />
                                        </div>
                                    </Grid>
                                </td>
                            </tr>
                        </table>
                    </Grid>
                </Paper>
                <br />
                <Paper square="true" >
                    <Grid container justify="flex-start" alignItems="flex-start" style={{ marginLeft: "0px !important" }}>
                        <Grid item sm="12" xs="12" >
                            <div className="coveragetext" style={useStyles.covgText}> Comprehensive</div>
                        </Grid>
                        <Grid item sm="12" xs="12"  >
                            <div className="coveragetext" style={useStyles.childtext}>Covers repairs your car if it is damaged from fire, vandalism or falling objects (like a tree or hail).</div>
                        </Grid>
                        {compVehiCovItems}
                    </Grid>
                </Paper>
                <br></br>
                <Paper square="true" >
                    <Grid container justify="flex-start" alignItems="flex-start" style={{ marginLeft: "0px !important" }}>
                        <Grid item sm="12" xs="12" >
                            <div className="coveragetext" style={useStyles.covgText}> Collision</div>
                        </Grid>
                        <Grid item sm="12" xs="12"  >
                            <div className="coveragetext" style={useStyles.childtext}>Covers repairs your car if it is damaged in an accident with another vehicle or object, such as a fence or a tree.</div>
                        </Grid>
                        {collVehiCovItems}
                    </Grid>
                </Paper>

            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        vehicles: state.vehicles,
        quote: state.quote,
        premium: state.premium
    };
};


export default connect(mapStateToProps, { updateCoverages })(CoveragePanel)
//export default connect(mapStateToProps, { updatepremiumaction })(CoveragePanel)
// export default connect(mapStateToProps, { setQuoteObject })(CoveragePanel)
