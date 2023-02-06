import React, { useState } from 'react'
import Question from './Components/Question'
// import {data} from './data'
// import {answer} from './data/answers'
import loadGif from './images/loading-files.gif'
import confettiGif from './images/confetti.gif'
import './QuizPage.css'

function QuizPage({data, answer, name}) {

    const [current,setCurrent] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [result, setResult] = useState({
        marks : 0,
        render : false,
        stars : Array(0).fill(1)
    });
    const [loading, setLoading] = useState(true);

    // console.log(data[current]);
    function nextQuestion() {
        if(current < data.length){
            setCurrent(current+1)
        }
    }
    function prevQuestion() {
        if(current > 0){
            setCurrent(current-1)
        }
    }

    const handleOptionSelection = (option,index) => {
        // console.log("Options clicked ",option);
        // console.log("Question no. ",index);
        setSelectedOptions({ ...selectedOptions, [index]: option });
    }

    const deleteResponse = (index) => {
        delete selectedOptions[index];
        setSelectedOptions({ ...selectedOptions});
    }


    // let keys = Object.keys(selectedOptions);
    // console.log(keys);
    const makeResult = () => {

        let yesOrNo = window.confirm("Are your sure you want to submit ?");
        if(yesOrNo){
            let correct = 0;
            for (const sr in selectedOptions) {
                if(selectedOptions[sr] === answer[sr]){
                    correct++;
                }
            }
            console.log("Correct answers : ", correct);
            let noOfStars = parseInt(correct/2);
            setResult({
                marks : correct,
                render : true,
                stars : Array(noOfStars).fill(1)
            });
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }else{
            return
        }
    }

    const resetEverything = () => {
        setCurrent(0);
        setSelectedOptions({});
        setResult({
            marks : 0,
            render : false
        })
        setLoading(true);
    }

    return (
        <div>
        { result.render ? (


            <div className="result">
                {loading ? (
                        <div className='loadpage'>
                            <div className="tagline">Preparing your Result...</div>
                            <img src={loadGif} alt="Gif" />
                        </div>
                    ) : (
                        <div className='resultPage'>
                            {(result.marks === data.length) && (
                            <img src={confettiGif} alt="Gif" className='cgif'/>
                            )}
                            
                            <div className="resultLine">
                                <div className='resultText'>You scored <br /> <div className="score">{result.marks}/{data.length}</div></div>
                                <div className="stars">
                                    
                                    {
                                        result.stars.map((value) => {
                                            return (<div className='imstar'>
                                                &#9733;
                                            </div>)
                                        })  
                                    }
                                </div>
                                <button className="subBtn playAgain" onClick={()=>{resetEverything()}}><img src="https://img.icons8.com/ios-filled/25/ffffff/recurring-appointment.png" alt="icons" /> &nbsp; Play Again</button>
                                <button className="subBtn homeBtn" onClick={()=>{window.location.reload()}}><img src="https://img.icons8.com/ios-glyphs/25/ffffff/home-page--v1.png" alt="icons" /> &nbsp; Go to Homepage</button>
                            </div>
                        </div>
                )}
            </div>


        ) : (
            <div className='Container'>

            {/* <div className="header"></div> */}
            <div className="heading">
                <div className="line"></div>
                {name} Quiz
            </div>

            {/* <div className="status">
                <div className="statusLine">Questions Attempted - </div>
                <div className='indexes'>
                    {data.map((ques,index) => {
                        
                        return (
                            (Number(keys[index]) === index+1) ? (
                                <div className='index'>a</div>
                            ) : (
                                <div className='index'>{index+1}</div>
                            )
                        )
                    })}
                </div>
            </div> */}

            <Question deleteResponse={deleteResponse} key={data[current].sr} sr={data[current].sr} question={data[current].question} options={data[current].options} increaseCounter={handleOptionSelection} selected={selectedOptions[current+1]} />
           
            { (current+1 === data.length) ?                  
                (<div className='btnContainer'>
                    <button className='subBtn' onClick={()=>{prevQuestion()}}><img src="https://img.icons8.com/ios-filled/25/ffffff/long-arrow-left.png" alt='icon' className='picon'/>Previous</button>
                    <button className='subBtn submitTest' onClick={()=>{makeResult()}}>Submit Test <img src="https://img.icons8.com/material-outlined/24/ffffff/checked--v1.png" alt='icon' className='icon'/></button>
                </div>)

                : (current > 0) ?
                           
                (<div className='btnContainer'>
                    <button className='subBtn' onClick={()=>{prevQuestion()}}><img src="https://img.icons8.com/ios-filled/25/ffffff/long-arrow-left.png" alt='icon' className='picon'/> Previous</button>
                    <button className='subBtn' onClick={()=>{nextQuestion()}}>Save & Next <img src="https://img.icons8.com/ios-filled/25/ffffff/long-arrow-right.png" alt='icon' className='icon'/></button>
                </div>)
                        
                :

                (<div className='btnContainer'>
                    <button className='subBtn' onClick={()=>{nextQuestion()}}>Save & Next <img src="https://img.icons8.com/ios-filled/25/ffffff/long-arrow-right.png" alt='icons' className='icon'/></button>
                </div>)   
            }
    
        </div>       
            ) }
        </div>
        
    )
}

export default QuizPage
