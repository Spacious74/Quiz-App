// import React, { useState } from 'react'
import Question from './Components/Question'
import {data} from './data'
import './QuizPage.css'

function QuizPage() {
    return (
        <div className='Container'>
            <div className="header">
            </div>
            <div className="heading">
                <div className="line"></div>
                Questions for Quiz
            </div>
            {data.map((ques) => (
                <Question key={ques.sr} {...ques} />
            ))}
            <button className='subBtn'>Submit</button>
        </div>
    )
}

export default QuizPage
