import React from 'react'
import "./Feedback.css"
import { useState } from 'react';
import star from "../../images/star-free-icon-font.png"
import profile from "../../images/download.png"
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { actionCreators } from '../../state/index';
import { bindActionCreators } from 'redux';

export const Comment = ({index}) => {
  const amount = useSelector(state=>state.rating)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch)
  const stars = ()=>{
    let elemnts=[];
    const index1 = amount.findIndex(c => c.id===index);
    console.log(amount[index1]);
    for (let i = 0; i < amount[index1].count; i++) {
      elemnts.push(<img src={star}/>)
      
    }
    return elemnts;
  }
  return (
    <div className="mb-5 d-flex flex-column justify-content-center align-items-center">
        <div>
            {stars()}
            <button onClick={()=> actions.increament(index)} className="btn btn-warning">Increament Star</button>
        </div>
        <br />
        <p className="text-center fst-italic fs-3">
            Donec id elit non mi porta gravida at eget Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla tellusper nulla tellus ac cursus commodo tortor mauris condimentum nibh
          </p>
          <img className="profilepic" src={profile} alt="" />

    </div>
  )
}
