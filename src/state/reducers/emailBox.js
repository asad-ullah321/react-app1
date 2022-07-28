const email="asad@gmail.com";



const emailBox = (state=email, action) => {

    if (action.type==="new")
        {
            state = action.payload;
            return state;
        }
    else
        return state;
}

export default emailBox;