import React, { useState } from 'react'
import './HomePage.css'
import QuizPage from './QuizPage';


import {data} from './data/data'
import {answer} from './data/answers'
import { sceince } from './data/sceince';
import {scanswer} from './data/scAnswers'
import {math} from './data/math'
import {maanswer} from './data/maAnswer'
import {computer} from  './data/computer'
import {coanswer} from './data/coAnswer'

function HomePage() {

  const [home, setHome] = useState('');
  return (
    <div >
          {
            (home === 'gk') ? (
              <QuizPage data={data} answer={answer} name="General Knowledge"/>
            ) : (home === 'science') ? (
                <QuizPage data={sceince} answer={scanswer} name="Science" />
            ):  (home === 'math') ? (
              <QuizPage data={math} answer={maanswer} name="Mathematics" />
            ):  (home === 'computer') ? (
              <QuizPage data={computer} answer={coanswer} name="Computer" />
            ):  (
                  <div class="containerHome">
                <button className="backtoHomeBtn" onClick={()=>{window.location.reload()}} > <img src="https://img.icons8.com/ios-filled/25/808080/long-arrow-left.png" alt='icon' className='picon'/> Back to Home </button>
                <div class="headingHome">
                    Select your topic
                </div>
                <div class="types">
                  <button class="imtype" onClick={()=> { window.confirm("Want to start the GK's quiz ?") && setHome("gk")}}>General Knowledge</button> <br />
                  <button class="imtype" onClick={()=> {window.confirm("Want to start the Science's quiz ?") && setHome("science")}}>Science</button> <br />
                  <button class="imtype" onClick={()=> { window.confirm("Want to start the Math's quiz ?") && setHome("math")}}>Mathematics</button> <br />
                  <button class="imtype" onClick={()=> {window.confirm("Want to start the Computer's quiz ?") && setHome("computer")}}>Computer</button><br />
                </div>
              </div>
            )
          }
    </div>
  )
}

export default HomePage
