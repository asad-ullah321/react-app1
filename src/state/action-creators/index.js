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

export const emailBox = (value)=>{
    return (dispatch)=>{
        dispatch({
            type:"new",
            payload: value
        })
    }
}



export const areaBox = (value1) => {
    return (dispatch) => {
        dispatch({
            type:"newcontent",
            payload: value1
        })
    }
}

export const newuser = (value)=>{
    return (dispatch)=> {
        dispatch({
            type:"newuser",
            payload: value
        })
    }
}
