const users = [];

const newUser=(state=users, action)=>{
    if(action.type==="newuser")
    {

        var newarray = [...state];
        newarray.push(action.payload)
        state = [...newarray];
        return state;
    }
    else
        return state;
}
export default newUser;