import _ from 'lodash'

export default (state=25.12, action)=>{
    
    switch(action.type){
        case "UPDATEPREMIUM": return action.payload
        default:return state
    }
}

