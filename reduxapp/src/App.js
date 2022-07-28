import React from 'react';
import './App.css';
import { FaCaretUp,FaCaretDown } from "react-icons/fa";
import {BsToggles} from 'react-icons/bs'
import {incNum,decNum,mulNum,devNum,blaCk,whiTe} from "./action/action";
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const mystate = useSelector((state)=>state.changeNum);
  const mstate = useSelector((state)=>state.multNum);
  const state = useSelector((state)=>state.changeColor);
  const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
      <input type={'checkbox'} className='btn' onClick={()=>state=="white"?dispatch(blaCk()):dispatch(whiTe())}/><span>Use dark theme</span>
      <div className="container_div">
        <h1 className='header'>{mystate}</h1>
      </div>
      <div className="container_div">
        <button className='btn' onClick={()=>dispatch(incNum())}><FaCaretUp /></button>
        <button className='btn' onClick={()=>dispatch(decNum())}><FaCaretDown /></button>
      </div>
    </div>

    <div className='container'>
      <div className="container_div">
        <h1 className='header'>{mstate}</h1>
      </div>
      <div className="container_div">
        <button className='btn' onClick={()=>dispatch(mulNum())}><FaCaretUp /></button>
        <button className='btn' onClick={()=>dispatch(devNum())}><FaCaretDown /></button>
      </div>
    </div>

    </>
  )
}

export default App;
