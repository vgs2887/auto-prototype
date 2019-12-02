import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { isNumber, isString } from 'util';
/*import imgIcon from '../public/icons/piggy-bank.svg';*/

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: '#0E2E4952',
  m: 1,
  border: 1,
  style: { width: '145px', 
           height: '145px',
           boxShadow: '-3px 0 11px #0E2E4952',
           opacity: '100%'
         },
};

const sup = {
    verticalAlign:'super',
    fontSize:'20px'
}

const content = {
    fontSize:'41px'
}

/*const useStyles = makeStyles(theme => ({
    cbStyle: {
        bgcolor: 'background.paper',
        borderColor: '#0E2E4952',
        m: 1,
        border: 1,
        style: { width: '145px', 
                 height: '145px',
                 boxShadow: '-3px 0 11px #0E2E4952',
                 opacity: '100%'
               }
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      color: '#0e2e49',
      backgroundColor: '#f4f4f4'
    },
  }));*/

const useStyles = makeStyles(theme => ({
    sup : {
        verticalAlign:'super',
        fontSize:'20px'
    },
    content : {
        fontSize:'41px',
        fontWeight :'bold'
    }
}));
//<svg xmlns="http://www.w3.org/2000/svg" width="32.381" height="32.371" viewBox="0 0 32.381 32.371"><defs><style>.a{opacity:0.872;}.b{fill:#e64c3c;}.c{fill:#f09372;}.d{fill:#f0785a;}.e{fill:#fac702;}.f{fill:#804537;}.g{fill:#b19046;}</style></defs><g class="a"><path class="b" d="M106.017,135.063a7.358,7.358,0,0,1,.05-2.054.558.558,0,0,1,.558-.463c.96.005,3.136.179,4.308,1.529l-2.742,3.494Zm0,0" transform="translate(-99.269 -124.173)"/><path class="c" d="M21.207,165.629a20.479,20.479,0,0,1-2.484.061c-.664-.022-1.323-.045-1.981-.084l-6.139-.8a7.056,7.056,0,0,1-3.778-1.992c-.095-.112-.184-.223-.268-.34a6.434,6.434,0,0,0-2.132-1.859,24.519,24.519,0,0,1-2.551-1.172c-.19-.128-.9-.558-.943-.809l-.91-4.576a1.178,1.178,0,0,1,.993-1.4,5.142,5.142,0,0,0,2.824-1.083c.552-.558,1.066-1.155,1.6-1.736l3.689-3.36a19.066,19.066,0,0,1,1.886-1.222,14.741,14.741,0,0,1,2.584-1.144l10.537.368c.43.167.848.346,1.261.547,4.085,1.97,7.2,5.927,6.976,10.654a10,10,0,0,1-5.023,8.114Zm0,0" transform="translate(0.001 -135.005)"/><path class="b" d="M173.881,455.691v.743a1.116,1.116,0,0,1-1.116,1.116h-3.907a1.116,1.116,0,0,1-1.116-1.116v-1.451a1.116,1.116,0,0,1,1.316-1.1l3.907.71A1.116,1.116,0,0,1,173.881,455.691Zm0,0" transform="translate(-157.137 -425.18)"/><path class="b" d="M335.469,449.145v.822a1.116,1.116,0,0,0,1.116,1.116h3.907a1.116,1.116,0,0,0,1.116-1.116V448.08A1.116,1.116,0,0,0,340.2,447l-3.907,1.065A1.116,1.116,0,0,0,335.469,449.145Zm0,0" transform="translate(-314.26 -418.713)"/><path class="d" d="M70.636,173a.558.558,0,0,1,.455-.566c1.087-.215,3.795-.536,5.115,1.223,1.674,2.232-.558,3.907-2.232,3.907C72.379,177.57,70.783,176.048,70.636,173Zm0,0" transform="translate(-66.171 -161.383)"/><path class="e" d="M206.023,11.48a6.139,6.139,0,1,1,5.7.363Zm0,0" transform="translate(-190.239 -0.099)"/><path class="f" d="M215.323,173.162a.554.554,0,0,1-.335-.112c-4.2-3.15-11.189-1.593-11.259-1.577a.558.558,0,1,1-.251-1.088c.307-.07,7.561-1.692,12.18,1.772a.558.558,0,0,1-.335,1Zm0,0" transform="translate(-190.208 -159.208)"/><path class="g" d="M259.368,30.677V28.445c.642.16,1.116.577,1.116,1.057a.558.558,0,1,0,1.116,0,2.436,2.436,0,0,0-2.232-2.2v-.131a.558.558,0,1,0-1.116,0V27.3a2.436,2.436,0,0,0-2.232,2.2,2.436,2.436,0,0,0,2.232,2.2v2.232c-.642-.16-1.116-.577-1.116-1.057a.558.558,0,0,0-1.116,0,2.857,2.857,0,0,0,5.581,0A2.435,2.435,0,0,0,259.368,30.677Zm-2.232-1.172c0-.48.474-.9,1.116-1.057v2.114c-.642-.162-1.116-.579-1.116-1.059Zm2.232,4.43V31.82c.642.159,1.116.576,1.116,1.056s-.474.9-1.116,1.057Zm0,0" transform="translate(-239.834 -24.937)"/></g></svg>  
//<img src='../public/icons/piggy-bank.svg'/>
export default function CicularDiv(props) {
  const classes = useStyles();
  if(props.quote.premiums)
  {
    console.log("Vignesh Prints the bodily Injury coverage premium from circular DIV : "+JSON.stringify(props.quote.premiums.bodilyInjuryPremium));
    console.log("Vignesh Prints the bodily Injury coverage premium from circular DIV: " +JSON.stringify(props.quote.premiums.propertyDamagePremium));
    console.log("Vignesh Prints the bodily Injury coverage premium from circular DIV: " +JSON.stringify(props.quote.premiums.comprehensivePremium));
    console.log("Vignesh Prints the bodily Injury coverage premium from circular DIV: " +JSON.stringify(props.quote.closestMonthlyPremium));
  }
  
  var preamt=String(props.quote && props.quote.userEnteredPremium  && props.quote.userEnteredPremium > 0 ? props.quote.closestMonthlyPremium : props.premium).split(".");

  var premiumwithoutdecimal=preamt[0];
  var premdec="00";
  if((Math.abs(Number(preamt[1]).toFixed(1)))){
    premdec=Math.abs(Number(preamt[1]).toFixed(1));
  }
  var decimal= "." + premdec;
  //<img src={require("../../assets/piggy-bank.svg")} height="22" width="22" style ={{margin: '13px 57px -3px 60px;'}}></img>
  return (
    <Box style={useStyles.circularbox} display="flex" justifyContent="center">
      
      <Box style={{overflow:"hidden"}} borderRadius="50%" {...defaultProps}> 
        <Box justifyContent="center" style={{marginTop: '24px'}}>
        <Typography justifyContent="center">
          </Typography>
       <Typography style={{marginRight: '46px',marginLeft: '-9px'}}>
      <span style ={{marginLeft: '28px', fontWeight :'bold', color:'#fac724', fontSize : '25px'}}>$</span>
        <span className={classes.content}>
        {premiumwithoutdecimal}<span className={classes.sup}>{decimal.charAt(0)+decimal.charAt(1)+(decimal.charAt(2))}</span>
        </span>
       
         </Typography>
       <Typography style ={{marginLeft: '11px'}}>
         Per Month
         </Typography>
      
        </Box>    
      </Box>
    </Box>
  );
}
