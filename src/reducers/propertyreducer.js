
import _ from 'lodash'

const properties=[{
        "location":"FBRoad",
        "apartment": "9400",
        "state": "Texas",
        "city": "San Antonio",
        "zipcode":"1000895"
}]
export default (state=properties, action)=>{
    switch(action.type){
        case "PROPERTYUPDATE": return  [...state, action.payload]
        case "DELETEPROPERTY": return state.filter(({id})=> id!==action.payload)
   
        default:return state
    }
}