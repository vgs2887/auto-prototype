import React from 'react'
import { connect } from 'react-redux'
import { updatepremiumaction } from '../../actions'
import { updateCoverages } from '../../actions'
import { setQuoteObject } from "../../actions";
import { Divider, Paper, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaInfoCircle } from 'react-icons/fa';
import 'react-dropdown/style.css'
import { bool } from 'prop-types';
import { isNumber } from 'util';

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
        backgroundColor: 'rgb(239, 247, 252)',
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
const defaultOption = options[0];
var coveragesSelections = {
    bodilyInjury: 5,
    propertyDamage: 5,
    comprehensive: 20,
    collision: 20
};

class CoveragePanel extends React.Component {

    biCovAmnt = null;
    pdCovgAmnt = null;
    compCovgAmnt = null;
    collCovgAmnt = null;
    BICoverageAmntText = null;
    PDCoverageAmntText = null;
    compVehiCov = [];
    collVehiCov = [];
    quote = [];
    

    BIcoverages = [
        { id: "0", covgValue: "$15,000/$30,000", amnt: "5" },
    { id: "1", covgValue: ["$50,000/$100,000",<small style={{ color: "green" }}>(Recommended)</small>], amnt: "10" },
        { id: "2", covgValue: "$100,000/$250,000", amnt: "15" },
        { id: "3", covgValue: "$500,000/$1,000,000", amnt: "20" }
    ];

    PDcoverages = [
        { id: "0", covgValue: "$10,000", amnt: "5" },
        { id: "1", covgValue: ["$25,000", <small style={{ color: "green" }}>(Recommended)</small>], amnt: "10" },
        { id: "2", covgValue: "$50,000", amnt: "15" },
        { id: "3", covgValue: "$100,000", amnt: "20" }
    ];

    compCoverages = [
        { id: "0", covgValue: "$0", amnt: "20" },
        { id: "1", covgValue: ["$250", <small style={{ color: "green" }}>(Recommended)</small>], amnt: "15" },
        { id: "2", covgValue: "$500", amnt: "10" },
        { id: "3", covgValue: "$1000", amnt: "5" }
    ];

    collCoverages = [
        { id: "0", covgValue: "$0", amnt: "20" },
        { id: "1", covgValue: ["$250", <small style={{ color: "green" }}>(Recommended)</small>], amnt: "15" },
        { id: "2", covgValue: "$500", amnt: "10" },
        { id: "3", covgValue: "$1000", amnt: "5" }
    ];

    //Premium match
    BIcoverageValues = [
        { id: "0", covgValue: "$15,000/$30,000", amnt: "5" },
        { id: "1", covgValue: "$50,000/$100,000", amnt: "10" },
        { id: "2", covgValue: "$100,000/$250,000", amnt: "15" },
        { id: "3", covgValue: "$500,000/$1,000,000", amnt: "20" }
    ];

    PDcoverageValues = [
        { id: "0", covgValue: "$10,000", amnt: "5" },
        { id: "1", covgValue: "$25,000", amnt: "10" },
        { id: "2", covgValue: "$50,000", amnt: "15" },
        { id: "3", covgValue: "$100,000", amnt: "20" }
    ];

    compCoverageValues = [
        { id: "0", covgValue: "$0", amnt: "20" },
        { id: "1", covgValue: "$250", amnt: "15" },
        { id: "2", covgValue: "$500", amnt: "10" },
        { id: "3", covgValue: "$1000", amnt: "5" }
    ];

    collCoverageValues = [
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
        console.log("RAJMOHAN printing.......");
        this.quote = this.props.quote;
        // this.biLimit = ["$50,000/$100,000",<small>(Recommended)</small>];
        // this.pdLimit = ["$25,000",<small>(Recommended)</small>];
        // this.compSelect = ["$250",<small>(Recommended)</small>];
        // this.collSelect = ["$250",<small>(Recommended)</small>];

        this.biLimit = "$15,000/$30,000";
        this.pdLimit = "$10,000";
        this.compSelect = "$500";
        this.collSelect = "$500";

        this.biCovAmnt = 5;
        this.pdCovgAmnt = 5;
        this.compCovgAmnt = 5;

        this.biLimitPrev = "";
        this.pdLimitPrev = "";
        this.compSelectPrev = "";
        this.collSelectPrev = "";

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
                coverAmnt: 10,
                coverAmntText: "$" + 10,
                value: vehicle.vin + ":" + 10,
                label: this.compSelect
            };
            collVehicles = {
                vin: vehicle.vin,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                coverAmnt: 10,
                coverAmntText: "$" + 10,
                value: vehicle.vin + ":" + 10,
                label: this.collSelect
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
            isPriorInsMatch: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ didMount: true })
        }, 0)
    }
    // calcPremium = (no_of_veh) => {
    //     var tot_premium = () => 30 + coveragesSelections.bodilyInjury + coveragesSelections.propertyDamage + (no_of_veh * coveragesSelections.comprehensive)+
    //     (no_of_veh * coveragesSelections.collision);
    //     return tot_premium();
        
    //     };

     calcPremium(no_of_veh) {
        var tot_premium = 30 + coveragesSelections.bodilyInjury + coveragesSelections.propertyDamage + (no_of_veh * coveragesSelections.comprehensive)+
        (no_of_veh * coveragesSelections.collision);
        return tot_premium;
        }
       
    onChangeCovForBI = (e) => {
        this.resetPrevSelection();
        // console.log("This in BI "+this.state.toString());
        // console.log("Target"+ JSON.stringify(e.target.label));
        //this.biLimit = this.BIcoverages.filter(coverage => coverage.amnt== e.target.value.toString);
        var premium = this.state.premium;
        console.log("RAJ BI1-  Premium-",premium);
        var prevSel = this.biCovAmnt;
        var biCoverageAmnt = parseInt(e.target.value);
        this.setState({isPriorInsMatch:""});
        

        premium = premium - prevSel + biCoverageAmnt;
        console.log("RAJ BI2-  Premium-",premium);
        console.log("Vignesh Prints The calculated Premium"+this.calcPremium(this.quote.vehicles.length)) ;
        this.biCovAmnt = biCoverageAmnt;
        let biSelected = this.BIcoverages.filter(coverage => coverage.amnt== this.biCovAmnt.toString());
        console.log("Vig Prints : "+JSON.stringify(biSelected[0]))
        this.biLimit = biSelected[0].covgValue;
        console.log("Vigi : this.biLimit "+this.biLimit);

        this.BICoverageAmntText = "$" + biCoverageAmnt;

        console.log("BI 2 value-" + biCoverageAmnt);
        this.quote.coverages.bodilyInjury = biCoverageAmnt;

        this.quote.premium = premium;
        
        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote);
        //this.props.updatepremiumaction(premium);
        this.props.updateCoverages(this.quote);
        console.log(this.biCovAmnt);
        
    }


    onChangeCovgForPD = (e) => {
        this.resetPrevSelection();
        var premium = this.state.premium;
        var prevSel = this.pdCovgAmnt; //fix state var
        var pdCoverageAmnt = parseInt(e.target.value);
        this.setState({isPriorInsMatch:""});
        premium = premium - prevSel + pdCoverageAmnt;

        this.pdCovgAmnt = pdCoverageAmnt;

        let pdSelected = this.PDcoverages.filter(coverage => coverage.amnt== this.pdCovgAmnt.toString());
        this.pdLimit = pdSelected[0].covgValue;

        this.PDCoverageAmntText = "$" + pdCoverageAmnt;

        this.quote.coverages.propertyDamage = pdCoverageAmnt;
        this.quote.premium = premium;

        this.setState({ premium: premium });
        //this.props.setQuoteObject(this.quote);
        this.props.updateCoverages(this.quote);

    }
    
    onChangeCovgForComp = (e) => {

        this.resetPrevSelection();
        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        console.log("#####COMP inputArr0-" + inputArr[0]);
        console.log("#####COMP inputArr1-" + inputArr[1]);
        var compCoverageAmnt = parseInt(inputArr[1]);
        console.log("#####COMP compCoverageAmnt-" + compCoverageAmnt);
        this.setState({isPriorInsMatch:""});
        var vin = inputArr[0];
        var prevCompCoverageAmnt = 0;

        this.compCovgAmnt = compCoverageAmnt;
        let compSelected = this.compCoverages.filter(coverage => coverage.amnt== this.compCovgAmnt.toString());
        this.compSelect = compSelected[0].covgValue;

        for (var obj of this.compVehiCov) {

            if (obj.vin === vin) {
                prevCompCoverageAmnt = obj.coverAmnt;
                obj.coverAmnt = compCoverageAmnt;
                obj.coverAmntText = "$" + compCoverageAmnt;
                obj.value = obj.vin + ":" + compCoverageAmnt;
                obj.label = this.compSelect;
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

        this.resetPrevSelection();
        var premium = this.state.premium;
        var inputArr = e.target.value.split(":");
        var collCoverageAmnt = parseInt(inputArr[1]);
        var vin = inputArr[0];
        var prevCollCoverageAmnt = 0;
        var collCoverageAmntText = "$" + collCoverageAmnt;
        this.setState({isPriorInsMatch:""});

        this.collCovgAmnt = collCoverageAmnt;
    
        let collSelected = this.collCoverages.filter(coverage => coverage.amnt== this.collCovgAmnt.toString());
        console.log("#####compSelected Prints : "+JSON.stringify(collSelected[0]))
        this.collSelect = collSelected[0].covgValue;
        
        for (var obj1 of this.collVehiCov) {
            console.log('Coll : vin = ' + obj1.vin + ', obj.coverAmnt =' + obj1.coverAmnt);
            if (obj1.vin === vin) {
                prevCollCoverageAmnt = obj1.coverAmnt;
                obj1.coverAmnt = collCoverageAmnt;
                obj1.coverAmntText = collCoverageAmntText;
                obj1.value = obj1.vin + ":" + collCoverageAmnt;
                obj1.label = this.collSelect;
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

    handleDialogOpen = covType => () => {
        this.props.quote.closestMonthlyPremium = "";
        this.props.quote.userEnteredPremium = "";
        this.setState({ open: true });
        this.setState({ covType: covType });
     };

    handleDialogClose = () => {
        this.setState({ open: false });
    };

    resetPrevSelection = () => {
        this.biLimitPrev = "";
        this.pdLimitPrev = "";
        this.compSelectPrev = "";
        this.collSelectPrev = "";
    };
    handleOnRender = () => {
        console.log("RAJ printing inside handleOnRender.... ");
            
        if(this.props.quote.coverages.bodilyInjurySuggested !=undefined && this.props.quote.coverages.bodilyInjurySuggested != "" && this.props.quote.coverages.bodilyInjurySuggested !="Please enter monthly premium over 30 USD" && this.props.quote.coverages.bodilyInjurySuggested !="Please contact help desk for your coverage needs"
        && this.props.quote.coverages.propertyDamageSuggested !=undefined && this.props.quote.coverages.propertyDamageSuggested != "" && this.props.quote.coverages.propertyDamageSuggested !="Please enter monthly premium over 30 USD" && this.props.quote.coverages.propertyDamageSuggested !="Please contact help desk for your coverage needs")
        {
            this.setState({isPriorInsMatch:false});
            
            console.log("RAJ printing inside biLimitP:  : "+this.biLimit)
            if(this.biLimitPrev == "")
            {
                this.biLimitPrev = this.biLimit;
                this.pdLimitPrev = this.pdLimit;
                this.compSelectPrev = this.compSelect;
                this.collSelectPrev = this.collSelect;
            }

            console.log("RAJ printing inside biLimitPrev:  : "+this.biLimitPrev)

            this.biLimit =  "$" + this.props.quote.coverages.bodilyInjurySuggested;
            this.pdLimit =  "$" + this.props.quote.coverages.propertyDamageSuggested;
            this.compSelect = "$" + this.props.quote.coverages.comprehensiveSuggested;
            this.collSelect = "$" + this.props.quote.coverages.collisionSuggested;

            let biSelected = this.BIcoverageValues.filter(coverage => coverage.covgValue== this.biLimit.toString());
            let pdSelected = this.PDcoverageValues.filter(coverage => coverage.covgValue== this.pdLimit.toString());
            console.log("RAJ printing inside handleOnRender:  : "+JSON.stringify(pdSelected[0]))
            var biCoverageAmnt = biSelected[0].amnt;
            var pdCoverageAmnt = pdSelected[0].amnt;

            let collSelected = this.collCoverageValues.filter(coverage => coverage.covgValue== this.collSelect.toString());
            let compSelected = this.compCoverageValues.filter(coverage => coverage.covgValue== this.compSelect.toString());
            var collCoverageAmnt = collSelected[0].amnt;
            var compCoverageAmnt = compSelected[0].amnt;

            console.log("RAJ printing inside handleOnRender: this.biLimit "+this.biLimit);
            console.log("BI 2 value-" + biCoverageAmnt);
            this.BICoverageAmntText = "$" + this.props.quote.premiums.bodilyInjuryPremium;
            this.PDCoverageAmntText = "$" + this.props.quote.premiums.propertyDamagePremium;
            var compCoverageAmntText = "$" + this.props.quote.premiums.comprehensivePremium;
            var collCoverageAmntText = "$" + this.props.quote.premiums.collisionPremium;
            this.biCovAmnt = biCoverageAmnt;
            this.pdCovgAmnt = pdCoverageAmnt;

            for (var obj1 of this.collVehiCov) {
                console.log('Coll : vin = ' + obj1.vin + ', obj.coverAmnt =' + obj1.coverAmnt);
                obj1.coverAmnt = collCoverageAmnt;
                obj1.coverAmntText = collCoverageAmntText;
                obj1.value = obj1.vin + ":" + collCoverageAmnt;
                obj1.label = this.collSelect;
            }

            for (var obj of this.compVehiCov) {
                obj.coverAmnt = compCoverageAmnt;
                obj.coverAmntText = compCoverageAmntText;
                obj.value = obj.vin + ":" + compCoverageAmnt;
                obj.label = this.compSelect;            
            }

            console.log("RAJ printing inside handleOnRender: this.biLimit "+this.biLimit);
            console.log("BI 2 value-" + biCoverageAmnt);
            this.BICoverageAmntText = "$" + this.props.quote.premiums.bodilyInjuryPremium;
            this.PDCoverageAmntText = "$" + this.props.quote.premiums.propertyDamagePremium;
            this.compCoverageAmntText = "$" + this.props.quote.premiums.comprehensivePremium;
            this.collCoverageAmntText = "$" + this.props.quote.premiums.collisionPremium;
            this.biCovAmnt = biCoverageAmnt;
            this.pdCovgAmnt = pdCoverageAmnt;

            this.quote.coverages.bodilyInjury = biCoverageAmnt;
            this.quote.coverages.propertyDamage = pdCoverageAmnt;
            this.quote.coverages.collision = collCoverageAmnt;
            this.quote.coverages.comprehensive = compCoverageAmnt;

            var premium = this.props.quote.closestMonthlyPremium;
            console.log("RAJ on render premium-",premium);
            
            this.setState({ premium: premium });
            this.props.updateCoverages(this.quote);
        }
        
     };
    
// calcPremium(no_of_veh) => {
// var tot_premium = () => 30 + coveragesSelections.bodilyInjury + coveragesSelections.propertyDamage + (no_of_veh * coveragesSelections.comprehensive)+
// (no_of_veh * coveragesSelections.collision);
// return tot_premium();
// }


  
  

    render() {

        const { didMount } = this.state;
        {this.handleOnRender()}
        var compVehiCovItems = this.compVehiCov.map((vehicle, key) =>
            <table key={vehicle.vin} style={useStyles.tableStyle}>
                <tr><p style={useStyles.childCovgText}>{vehicle.year} {vehicle.make} {vehicle.model} {[<small>(VIN: {vehicle.vin})</small>]}</p></tr>
                <tr>
                    <td style={{ width: "85%" }}>
                        <Grid item sm="12" xs="12" >
                            {vehicle.label}
                            <Button style={{color:'#041c3d', padding:'10px'}} color="primary" onClick={this.handleDialogOpen(vehicle.vin+':COMP')}>Edit</Button>
                            <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open && this.state.covType == vehicle.vin+':COMP'}>
                            <DialogTitle>Select the limit</DialogTitle>
                            <DialogContent><form>
                            <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                <RadioGroup
                                    value={vehicle.value}
                                    onChange={this.onChangeCovgForComp}
                                >
                                    {this.compCoverages.map((coverage, key) => {
                                        var compCovKey = vehicle.vin + ":" + coverage.amnt;
                                        return <FormControlLabel control={<Radio color="default"/>} label={coverage.covgValue} value={compCovKey}></FormControlLabel>
                                    })}

                                </RadioGroup>
                            </FormControl>
                            <FormHelperText style={{ color: "black", marginTop: 0 }}>per occurence</FormHelperText>
                            <br></br>
                            <FormHelperText style={{ color: "green", marginTop: 0 }}><sup>***</sup>Recommended based on the most popular selection based on your zipcode, vehicle age and whether you own or lease your vehicle.</FormHelperText>
                                        
                            </form></DialogContent>
                                <DialogActions>
                                <Button onClick={this.handleDialogClose} color="primary">
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </td>
                    <td style={{ width: "15%" }}>
                        <Grid item sm="12" xs="12" >
                            <div class="ui input" style={{ width: "100%", float: "right" }} >
                                {/* <input type="text" readOnly value={100} /> */}
                                {/* <input type="text" style={{ width: "100%" }} readOnly value={vehicle.coverAmntText} /> */}
                                <Box component="span" display="block">{vehicle.coverAmntText}</Box>
                                
                            </div>
                        </Grid>
                    </td>
                </tr>
                <tr>
                    <td style={{ width: "85%" }}>
                    <Grid justify="flex-start" item sm="12" xs="12" >
                        <Box component="span" style={{color: "#FF5500"}} display={this.compSelectPrev === "" ? "none": "block"}>Prior selection - {this.compSelectPrev}</Box>
                    </Grid>
                    </td>                                        
                </tr>
            </table>
        );

        var collVehiCovItems = this.collVehiCov.map((vehicle, key) =>
                 <table key={vehicle.vin} style={useStyles.tableStyle}>
                    <tr><p style={useStyles.childCovgText}>{vehicle.year} {vehicle.make} {vehicle.model} {[<small>(VIN: {vehicle.vin})</small>]}</p></tr>
                    <tr>
                        <td style={{ width: "85%" }}>
                            <Grid justify="flex-start" item sm="12" xs="12" >
                            {vehicle.label}
                            <Button style={{color:'#041c3d', padding:'10px'}} color="primary" onClick={this.handleDialogOpen(vehicle.vin+':COLL')}>Edit</Button>
                            <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open && this.state.covType == vehicle.vin+':COLL'}>
                            <DialogTitle>Select the limit</DialogTitle>
                            <DialogContent><form>
                                <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                    <RadioGroup
                                        value={vehicle.value}
                                        onChange={this.onChangeCovgForColl}
                                    >
                                        {this.collCoverages.map((coverage, key) => {
                                            var collCovKey = vehicle.vin + ":" + coverage.amnt;
                                            return <FormControlLabel control={<Radio color="default"/>} label={coverage.covgValue} value={collCovKey}></FormControlLabel>
                                        })}

                                    </RadioGroup>
                                </FormControl>
                                <FormHelperText style={{ color: "black", marginTop: 0 }}>per occurence</FormHelperText>
                                <br></br>
                                        <FormHelperText style={{ color: "green", marginTop: 0 }}><sup>***</sup>Recommended based on the most popular selection based on your zipcode, vehicle age and whether you own or lease your vehicle.</FormHelperText>
                                        
                                </form></DialogContent>
                                <DialogActions>
                                <Button onClick={this.handleDialogClose} color="primary">
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </Grid>
                        </td>
                        <td style={{ width: "15%" }}>
                            <Grid item sm="12" xs="12" >
                                <div class="ui input" style={{ width: "100%", float: "right" }} >
                                    {/* <input type="text" readOnly value={100} /> */}
                                    {/* <input type="text" style={{ width: "100%" }} readOnly value={vehicle.coverAmntText} /> */}
                                    <Box component="span" display="block">{vehicle.coverAmntText}</Box>
                                </div>
                            </Grid>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "85%" }}>
                        <Grid justify="flex-start" item sm="12" xs="12" >
                            <Box component="span" style={{color: "#FF5500"}} display={this.collSelectPrev === "" ? "none": "block"}>Prior selection - {this.collSelectPrev}</Box>
                        </Grid>
                        </td>                                        
                     </tr>
                </table>
        );

        return (
            <div>
                 {/* {((typeof this.props.quote.userEnteredPremium != "undefined" && !this.props.quote.userEnteredPremium)&&this.state.isPriorInsMatch==null) ? <h5 className = "info-message" style={{ color: "#1A3258" }}> <FaInfoCircle color="#1A3258" /> These are your coverage selections based on your Prior Insurance, you can edit them and choose the selection that best caters your needs. </h5>)
                if()
                { <h5 className = "info-message" style={{ color: "#1A3258" }}> <FaInfoCircle color="#1A3258" /> These are your coverage selections for a price that you wanted.</h5>}
                } */}
                {(() => {
                switch(this.state.isPriorInsMatch) {
                case true:
                {
                    console.log("Inside the switch Case true ");
                    return <h5 className = "info-message" style={{ color: "#1A3258" }}> <FaInfoCircle color="#1A3258" /> These are your coverage selections based on your Prior Insurance, you can edit them and choose the selection that best caters your needs. </h5>;
                }
                case false:
                {
                    console.log("Inside the switch Case false ");
                    return <h5 className = "info-message" style={{ color: "#1A3258" }}> <FaInfoCircle color="#1A3258" /> These are your coverage selections for a price that you wanted.</h5>
                }
                default:
                    return null;
                }
                })()}

                <Paper square="true" >
                
                     <Grid container justify="flex-start" alignItems="flex-start" style={{ marginLeft: "0px !important" }}>

                        <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
                            <div className="coveragetext" style={useStyles.covgText}> Bodily Injury Liability Coverage</div>
                        </Grid>
                        <Grid item sm="12" xs="12"  >
                            <div className="coveragetext" style={useStyles.childtext}>Covers medical expenses for other injured when you cause an accident.</div>
                        </Grid>
                        <table style={useStyles.tableStyle}>
                            <tr>
                                <td style={{ width: "85%" }}>
                                    <Grid justify="flex-start" item sm="12" xs="12" >
                                    {this.biLimit}
                                    <Button style={{color:'#041c3d', padding:'10px'}} color="primary" onClick={this.handleDialogOpen('BI')}>Edit</Button>
                                    <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open && this.state.covType == 'BI'}>
                                        <DialogTitle>Select the limit</DialogTitle>
                                        <DialogContent><form>
                                        <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                            <RadioGroup
                                                value={this.biCovAmnt.toString()}
                                                onChange={this.onChangeCovForBI}
                                            >
                                                {this.BIcoverages.map(coverage => {
                                                    console.log("Vignesh Prints COverage.amnt2"+coverage.amnt);
                                                    return <FormControlLabel control={<Radio color="default"/>} label={coverage.covgValue} value={coverage.amnt}></FormControlLabel>
                                                })}

                                            </RadioGroup>
                                        </FormControl>
                                        <FormHelperText style={{ color: "black", marginTop: 0 }}>per person/per accident</FormHelperText>
                                        <br></br>
                                        <FormHelperText style={{ color: "green", marginTop: 0 }}><sup>***</sup>Recommended based on the most popular selection based on your zipcode, vehicle age and whether you own or lease your vehicle.</FormHelperText>
                                        </form></DialogContent>
                                    <DialogActions>
                                    <Button onClick={this.handleDialogClose} color="primary">
                                        Ok
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                    </Grid>
                                </td>
                                <td style={{ width: "15%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <div class="ui input" style={{ width: "100%", float: "right" }} >
                                            {/* <input type="text" readOnly value={100} /> */}
                                            <Box component="span" display="block">{this.BICoverageAmntText}</Box>
                                            {/* <input type="text" style={{ width: "100%" }} readOnly value={this.BICoverageAmntText} /> */}
                                        </div>
                                    </Grid>
                                </td>
                            </tr>
                            <tr>
                                 <td style={{ width: "85%" }}>
                                    <Grid justify="flex-start" item sm="12" xs="12" >
                                        <Box component="span" style={{color: "#FF5500"}} display={this.biLimitPrev === "" ? "none": "block"}>Prior selection - {this.biLimitPrev}</Box>
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
                                <td style={{ width: "85%" }}>
                                    <Grid justify="flex-start" item sm="12" xs="12" >
                                     {this.pdLimit}
                                    <Button style={{color:'#041c3d', padding:'10px'}} color="primary" onClick={this.handleDialogOpen('PD')}>Edit</Button>
                                 
                                    <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open && this.state.covType == 'PD'}>
                                        <DialogTitle>Select the limit</DialogTitle>
                                        <DialogContent><form>
                                        <FormControl className={useStyles.formControl} style={{ width: "100%" }}>
                                            <RadioGroup
                                                value={this.pdCovgAmnt.toString()}
                                                onChange={this.onChangeCovgForPD}
                                            >
                                                {this.PDcoverages.map(coverage => {
                                                    return <FormControlLabel control={<Radio color="default"/>} label={coverage.covgValue} value={coverage.amnt}></FormControlLabel>
                                                })}

                                            </RadioGroup>
                                        </FormControl>
                                        <FormHelperText style={{ color: "black", marginTop: 0 }}>per accident</FormHelperText>
                                        <br></br>
                                        <FormHelperText style={{ color: "green", marginTop: 0 }}><sup>***</sup>Recommended based on the most popular selection based on your zipcode, vehicle age and whether you own or lease your vehicle.</FormHelperText>
                                         </form></DialogContent>
                                        <DialogActions>
                                    <Button onClick={this.handleDialogClose} color="primary">
                                        Ok
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                    </Grid>
                                </td>
                                <td style={{ width: "15%" }}>
                                    <Grid item sm="12" xs="12" >
                                        <div class="ui input" style={{ width: "100%", float: "right" }} >
                                            {/* <input type="text" readOnly value={100} /> */}
                                            <Box component="span" display="block">{this.PDCoverageAmntText}</Box>
                                            {/* <input type="text" style={{ width: "100%" }} readOnly value={} /> */}
                                        </div>
                                    </Grid>
                                </td>
                            </tr>
                            <tr>
                                 <td style={{ width: "85%" }}>
                                    <Grid justify="flex-start" item sm="12" xs="12" >
                                        <Box component="span" style={{color: "#FF5500"}} display={this.pdLimitPrev === "" ? "none": "block"}>Prior selection - {this.pdLimitPrev}</Box>
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
                            <div className="coveragetext" style={useStyles.childtext}>Covers repairs for your car if it is damaged from fire, vandalism or falling objects (like a tree or hail).</div>
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
                            <div className="coveragetext" style={useStyles.childtext}>Covers repairs for your car if it is damaged in an accident with another vehicle or object, such as a fence or a tree.</div>
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
