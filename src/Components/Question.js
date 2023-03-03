import React, { useContext } from 'react';
import './Question.css'
import { ThemeContext } from '../App';


function Question({deleteResponse,sr,question,options,increaseCounter,selected}) {

    const {light} = useContext(ThemeContext); 
    const questionStyle = {
        backgroundColor: light ? "#F5F5F5" : "#252e3a",
        color : light ? "#1c2b3f" : "#ffffff",
    }


  return (
    <div className='questionContainer' style={questionStyle}>
        <div className="question">{sr}. {question}</div>
        <div className="options">
            <div className="opt">

                <div className='imoption'>
                    <input type="radio" name={"o" + sr} className="radio" id={"i" + (sr)}  onChange={()=>{increaseCounter("a",sr)}} checked={"a" === selected} />
                    <label htmlFor={"i"+ (sr)} className="answer_option">{options[0]}</label> <br />
                </div> 

                <div className='imoption'>
                    <input type="radio" name={"o" + sr} className="radio" id={"i" + (sr+1)}  onChange={()=>{increaseCounter("b",sr)}} checked={"b" === selected} />
                    <label htmlFor={"i"+ (sr+1)} className="answer_option">{options[1]}</label> <br />
                </div> 

                <div className='imoption'>
                    <input type="radio" name={"o" + sr} className="radio" id={"i" + (sr+2)}  onChange={()=>{increaseCounter("c",sr)}} checked={"c" === selected} />
                    <label htmlFor={"i"+ (sr+2)} className="answer_option">{options[2]}</label> <br />
                </div> 

                <div className='imoption'>
                    <input type="radio" name={"o" + sr} className="radio" id={"i" + (sr+3)}  onChange={()=>{increaseCounter("d",sr)}} checked={"d" === selected} />
                    <label htmlFor={"i"+ (sr+3)} className="answer_option">{options[3]}</label> <br />
                </div> 
                
            </div>
            <button className="clearResponse" onClick={()=>{deleteResponse(sr)}}>
                Clear Response
            </button>
        </div>
    </div>
  )
}

export default Question
