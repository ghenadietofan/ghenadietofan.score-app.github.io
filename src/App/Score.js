import React,{useState} from 'react'
import './score.css';
const Score = (props) => {
    
    const increment=()=>{
      props.setScore(props.score+1);
      let x=props.check()
      if(x==1)props.reset(1);
      if(x==2)props.reset(2);
    }
    const decrement=()=>{
      if(props.score>0)props.setScore(props.score-1);
      else props.setScore(0);   
      let x=props.check() 
      if(x==1)props.reset(1);
      if(x==2)props.reset(2);
    }
  return (
    <div className="score">
      <button className="btn" onClick={decrement}>-</button>
      <h3 className="score">{props.score}</h3>
      <button className="btn" onClick={increment}>+</button>
      </div>
  )
}
export default Score;