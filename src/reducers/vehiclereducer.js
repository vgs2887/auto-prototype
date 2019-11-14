import _ from 'lodash'

const vehicles=[{
      "vin": "JTEBU5JR7B5039760",
      "year": "2019",
      "make": "TESLA",
      "model": "3",
      "id": 3,
      "miles":"16,000 miles",
      "primaryowner":"Alex"
    }]

export default (state=vehicles, action)=>{
    switch(action.type){
        case "VEHICLEUPDATE": return [...state, action.payload]
        case "DELETEVEHICLE": return state.filter(({id})=> id!==action.payload)
        default:return state
    }
}