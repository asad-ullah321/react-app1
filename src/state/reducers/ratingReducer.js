const states = 
    [{id: 0, count:5},{id: 2, count:5}]



const reducer = (state=states, action) => {

    if (action.type==="incr")
        {
            
           
            const index = state.findIndex(c => c.id===action.payload);
            console.log(index); 
            const newarray = [...state];
            newarray[index].count=newarray[index].count+1;
            state = [...newarray];
            return state;
        }
    else
        return state;
}

export default reducer;