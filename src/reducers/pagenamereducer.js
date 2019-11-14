import _ from 'lodash'

export default (state="coverage", action)=>{
    
    switch(action.type){
        case "SETPAGENAME": return action.payload
        default:return state
    }
}

