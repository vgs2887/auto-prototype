import _ from 'lodash'

const initialState =[]

export default (state=initialState, action)=>{

    switch(action.type){
        case "ADDAGGREGATE":  return [...state, action.payload]
        default:return state
    }
}