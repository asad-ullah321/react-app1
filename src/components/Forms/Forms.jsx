import React from "react";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { actionCreators } from '../../state/index';


export const Forms = () => {
  const mail = useSelector(state=>state.boxEmail);
  const dispatch= useDispatch();
  const {emailBox, areaBox, newuser} = bindActionCreators(actionCreators, dispatch);
  const content = useSelector(state=>state.areabox)
  const users = useSelector(state=>state.newuser)

  

  const handlesubmit = (e) => {
    e.preventDefault();
    const temp = {mail, content};
    newuser(temp);
  }
  return (
    <div>
      
      <form onSubmit={handlesubmit}>
        <div class="form-group">
          <label >Email address</label>
          <input
            type="email"
            class="form-control"
           
            //placeholder="name@example.com"
            value={mail}
            onChange={(e)=>emailBox(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label >Example textarea</label>
          <textarea
            class="form-control"
            type="text"
        
            rows="3"

            value = {content}
            onChange={(a)=>areaBox(a.target.value)}
          ></textarea>
          <input type="submit" />
        </div>
      </form>
      {users.map((u)=>(<div><h1>{u.mail}</h1> <h2>{u.content}</h2></div>))}
    </div>
  );
};
