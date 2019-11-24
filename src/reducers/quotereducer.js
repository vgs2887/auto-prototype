import _ from 'lodash'
import { updateObject } from './utility';

export default (state=null, action)=>{
    console.log("inside setEmptyObject reducer quote"+action)
    switch(action.type){        
        case "PUSHEMPTYOBJECT":  return action.payload
        case "PUSHQUOTEOBJECT" : return action.payload
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
        default:return state
    }
}