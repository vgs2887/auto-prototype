import {drivers,vehicals,custproperties}  from './staticData'

export const adddriveraction=(driver)=>async dispatch =>{
    dispatch({
        type:"DRIVERUPDATE",
        payload:driver
    })
}

export const addvehicleaction=(vehicle)=> async dispatch => {   
    dispatch({
        type:"VEHICLEUPDATE",
       payload:vehicle
    })
}

export const addpropertyaction=(property)=> async dispatch => {   
    dispatch({
        type:"PROPERTYUPDATE",
       payload:property
    })
}

export const updatepremiumaction=(premium) => async dispatch => {
    console.log(premium)
    dispatch({
        type:"UPDATEPREMIUM",
        payload:premium
    })
}

export const deletedriveraction=(driverid)=>async dispatch =>{
    dispatch({
        type:"DELETEDRIVER",
        payload:driverid
    })
}

export const deletevehicleaction=(vehicleid)=>async dispatch =>{
    dispatch({
        type:"DELETEVEHICLE",
        payload:vehicleid
    })
}

export const deletepropertyaction=(propertyid)=>async dispatch =>{
    dispatch({
        type:"DELETEPROPERTY",
        payload:propertyid
    })
}

export const setPageNameAction=(pageName) => async dispatch => {
    console.log("setPageNameAction"+pageName)
    dispatch({
        type:"SETPAGENAME",
        payload:pageName
    })
}
export const setPolicyAgg=(aggregate) => async dispatch => {
    dispatch({
        type:"ADDAGGREGATE",
        payload:aggregate
    })
}