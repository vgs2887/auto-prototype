import _ from 'lodash'

const drivers =[{
    "username": "Alex",
    "age": "34",
    "relationship": "Self",
    "gender": "Male",
    "usernameError": "",
    "ageError": "",
    "relationshipError": "",
    "genderError": "",
    "id": 2,
    "model":"2010 Nissan",
    "reg":'OH0000002'
  }]

export default (state=drivers, action)=>{
    switch(action.type){
        case "DRIVERUPDATE": return [...state, action.payload]
        // case "FETCHDRIVERS": return action.payload
        case "DELETEDRIVER": return state.filter(({id})=> id!==action.payload)
        default:return state
    }
}