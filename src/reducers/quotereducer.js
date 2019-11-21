import _ from 'lodash'

export default (state=null, action)=>{
    console.log("dharma inside setEmptyObject reducer ---- "+JSON.stringify(action.type)+JSON.stringify(action.payload) )
    switch(action.type){        
        case "PUSHQUOTEOBJECT" : return action.payload
        default:return state
    }
}