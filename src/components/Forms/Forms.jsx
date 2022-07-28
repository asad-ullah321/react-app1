import React from "react";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { actionCreators } from '../../state/index';


export const Forms = () => {
  const mail = useSelector(state=>state.boxEmail);
  const dispatch= useDispatch();
  const {emailBox, areaBox} = bindActionCreators(actionCreators, dispatch);
  const content = useSelector(state=>state.areabox)

  const temp =(actions)=>{
    console.log();
    return "<div>done</div>"
  }
  return (
    <div>
      {temp()};
      <form>
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
        </div>
      </form>
    </div>
  );
};
