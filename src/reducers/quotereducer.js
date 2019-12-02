import _ from 'lodash'
import { updateObject, calculateCoveragesbasedOnEnteredPremium} from './utility';

let defaultObject = {
    userEnteredPremium : 0
};

export default (state=defaultObject, action)=>{
    switch(action.type){        
        case "PUSHEMPTYOBJECT":  return {...state, ...action.payload}
        case "PUSHQUOTEOBJECT" : return {...state, ...action.payload}
        case "UPDATECOVERAGES" :
            return updateObject (state,{
                coverages:{
                    "bodilyInjury": action.payload.coverages.bodilyInjury, 
                    "propertyDamage": action.payload.coverages.propertyDamage, 
                    "comprehensive": action.payload.coverages.comprehensive, 
                    "collision": action.payload.coverages.collision
                },
                premium: action.payload.premium
            })
        case "DELETEDRIVERSTATE" :
            return updateObject (state,{
                drivers:action.payload.drivers
            })
        case "DELETEVEHICLESTATE" :
        return updateObject (state,{
            vehicles:action.payload.vehicles
        })
        case "UPDATEPREMIUMANDCOVERAGES": return calculateCoveragesbasedOnEnteredPremium(state, action.userEnteredPremium);
        default:return state
    }
}