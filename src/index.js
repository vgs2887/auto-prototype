import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Widgets/Home/Home';
import Login from './Widgets/Login/Login';
import * as serviceWorker from './serviceWorker';
import QuoteResultsPage from './Widgets/QuoteResults/QuoteResultsPage'
import {Router,Route, Switch} from 'react-router-dom' 
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
import PageTransition from 'react-router-page-transition';

import './index.css'
import ConfirmationPage from './Widgets/QuoteResults/ConfirmationPage';
import QuoteHistory from './Widgets/QuoteHistory/QuoteHistory';
import paymentPage from './Widgets/paymentPage/paymentPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, enhancer(applyMiddleware(thunk)))


class App extends React.Component{
    render(){
        return(
            <div>            
            <Router history={history}>
                <div>
                <Route render={({location}) => (
                    <TransitionGroup>
                    <CSSTransition
                    in={true}
                    appear={false}
                    key={location.key}
                    timeout={500}
                    classNames="slide"
                    >
                    <Switch location = {location} >
                    <Route exact path="/auto/" component={QuoteHistory} />
                     <Route exact path="/auto/getstarted" component={Home} />
                     <Route path="/auto/quoteresults" exact component={QuoteResultsPage} />
                     <Route path="/auto/adddriver" exact component={AddDriver} />
                     <Route path="/auto/driver" exact component={DriverDetails} />
                     <Route path="/auto/vehicle" exact component={VehicleDetails} />
                     <Route path="/auto/addvehicle" component={AddVehicle} />
                     <Route path='/auto/addproperty' component={AddProperty}/>
                     <Route path='/auto/payment' component={paymentPage}/>
                     <Route path='/auto/confirm' component={ConfirmationPage}/>
                     </Switch>
                        </CSSTransition>
                </TransitionGroup> 
        )} />
                </div>
            </Router></div>
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
