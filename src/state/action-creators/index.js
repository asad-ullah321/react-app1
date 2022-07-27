export const increament = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: "incr",
            payload: amount
        })
    }
}

export const decreament =(amount) =>{
    return (dispatch)=>{
        dispatch({
            type: "dcr",
            payload: amount
        })
    }
}
