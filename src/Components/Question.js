import React from 'react';
import './Question.css'

function Question({sr,question,options}) {

  const correctOptions = [];

  function optionSelected(id){
      // alert("checked" + id);
      correctOptions.push(id);
  }
  console.log("render runs...");
  return (
    <div className='questionContainer'>
        <div className="question">{sr}. {question}</div>
        <div className="options">
            <div className="opt">
              {
                options.map((option,index) => (
                  <div className='imoption'>
                    <input type="radio" name={"o" + sr} className="radio" id={"i" + (sr+index)}  onChange={()=>{optionSelected(sr+index)}}/>
                    <label htmlFor={"i"+ (sr+index)} className="answer_option">{option}</label> <br />
                  </div> 
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Question
