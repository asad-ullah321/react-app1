const content="abcd";



const areaBox = (state=content, action) => {

    if (action.type==="newcontent")
        {
            state = action.payload;
        
            return state;
        }
    else
        return state;
}

export default areaBox;