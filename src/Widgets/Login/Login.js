import React from 'react';
class Login extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state={username:""};
    this.changeHandler=this.changeHandler.bind(this);
 
  }
  changeHandler=(e)=>this.setState({username: e.target.value})


  
render(){
  return (
    <div >
     <h1 className="App-header" >Auto Insurance Quote</h1>

    </div>
  );
}
}


export default Login;
