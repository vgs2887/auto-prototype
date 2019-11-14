import { combineReducers } from 'redux'
import driverreducer from './driverreducer';
import vehiclereducer from './vehiclereducer';
import premiumreducer from './premiumreducer';
import propertyreducer from './propertyreducer'
import pagenamereducer from './pagenamereducer'

export default combineReducers({
    "drivers":driverreducer,
    "vehicles": vehiclereducer,
    "premium": premiumreducer,
    "custproperties":propertyreducer,
    "pagename":pagenamereducer

})