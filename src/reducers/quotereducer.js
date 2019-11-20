import _ from 'lodash'

export default (state=null, action)=>{
    console.log("inside setEmptyObject reducer quote"+action)
    switch(action.type){        
        case "PUSHEMPTYOBJECT":  return action.payload
        case "PUSHQUOTEOBJECT" : return action.payload
        default:return state
    }
}