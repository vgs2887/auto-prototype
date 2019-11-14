import React from 'react'
import { connect } from 'react-redux'
import {updatepremiumaction} from '../../actions'
import {Divider,Paper,Grid} from '@material-ui/core';


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

class CoveragePanel extends React.Component{

    constructor(props) {
        super(props)
        this.state = { 
            didMount: false,
            premium:0,
            coverage:"$500,000/$1000,000",
            coverageamt:"$25.2"
           
        };
    }
    componentDidMount(){
        setTimeout(() => {
             this.setState({didMount: true})
         }, 0)
     }
     coverages =[
        "$1,000,000",
        "$2,000,000",
        "$3,000,000",
        "$4,000,000"
    ]

    onCoverageSelected = (e)=>{
        console.log(e.target.value)
        if(e.target.value=="$1,000,000"){
            this.setState({coverageamt:"$25.2"});
            this.props.updatepremiumaction("25.2")
        }
        if(e.target.value=="$2,000,000"){
            this.setState({coverageamt:"$30.0"})
            this.props.updatepremiumaction("30.0")
        }
        if(e.target.value=="$3,000,000"){
            this.setState({coverageamt:"$35.4"})
            this.props.updatepremiumaction("35.4")
        }
        if(e.target.value=="$4,000,000"){
            this.setState({coverageamt:"$40.5"})
            this.props.updatepremiumaction("40.5")
        }
    }

    
    render(){
        console.log(this.state)
        const {didMount} = this.state
        
        return(
                <div>
                    <Paper >
                     <Grid  content>
                         <div className="coveragetext" style={{padding:"0px", paddingTop:"10px"}}><b>Bodily Injury Coverage</b></div> 
                         <Divider/>
                         <table>
                             <tr>
                                 <td style={{width:"100%"}}>
                                 <select onChange={this.onCoverageSelected} multiple="" class="ui fluid dropdown">
                                     {this.coverages.map(coverage=>{
                                     return <option value={coverage}>{coverage}</option>
                                     })}
                                 </select>
                                 </td>
                                 <td >
                                 <div class="ui input" style={{width:"100%", float:"right"}} >
                            <       input type="text" value={this.state.coverageamt}/>
                                </div> 
                                 </td>
                             </tr>
                         </table>
                         
                           
                     </Grid>
                    </Paper>
                </div>
          
        )
    }
}
export default connect(null, {updatepremiumaction})(CoveragePanel)