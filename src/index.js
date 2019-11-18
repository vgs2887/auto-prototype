import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Widgets/Home/Home';
import QuoteHistory from './Widgets/QuoteHistory/QuoteHistory';
import Login from './Widgets/Login/Login';
import * as serviceWorker from './serviceWorker';
import QuoteResultsPage from './Widgets/QuoteResults/QuoteResultsPage'
import {Router,Route} from 'react-router-dom' 
import history from './utils/history'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import AddDriver from './Widgets/AddDriver/AddDriver'
import DriverDetails from './Widgets/Driver/DriverDetails'
import VehicleDetails from './Widgets/Vehicles/VehicleDetails'
import AddVehicle from './Widgets/AddVehicle/AddVehicle'
import AddProperty from './Widgets/AddProperty/AddProperty'
import TxHeader from './Widgets/QuoteResults/TXHeader'

import './index.css'
import ConfirmationPage from './Widgets/QuoteResults/ConfirmationPage';
import PaymentPage from './Widgets/PaymentPage/PaymentPage';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, enhancer(applyMiddleware(thunk)))


class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div>
                     <Route exact path="/" component={QuoteHistory} />
                     <Route path="/quoteresults" exact component={QuoteResultsPage} />
                     <Route path="/adddriver" exact component={AddDriver} />
                     <Route path="/driverdetails" exact component={DriverDetails} />
                     <Route path="/vehicledetails" exact component={VehicleDetails} />
                     <Route path="/addvehicle" component={AddVehicle} />
                     <Route path='/addproperty' component={AddProperty}/>
                     <Route path='/payment' component={PaymentPage}/>
                     <Route path='/confirm' component={ConfirmationPage}/>
                     <Route path='/getstarted' component={Home}/>
                </div>
            </Router>
        )

    }
}


ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
