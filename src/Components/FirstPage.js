import React, {useState} from 'react'
import './Firstpage.css'
import logo from '../images/brain.png'
import quizGif from '../images/quiz.gif'
import Homepage from '../HomePage'

function FirstPage() {

    const [state, setState] = useState(true);

    return (
        <div>
        {
            (state) ? (
               <div>
                    <nav className="navbar">
                        <img src={logo} alt="logo" className='logo' /> Quiz App
                        <div className="line"></div>
                    </nav>
                    <div className="mainContainer">
                        
                        <img src={quizGif} alt="logoimg" className='mainImage'/>
                        <div className="text">
                            Let's Start the quiz <br/>
                            <button className="start" onClick={()=>{setState(false)}}><img src="https://img.icons8.com/ios-glyphs/30/ffffff/play--v1.png"/> &nbsp; Start Quiz</button>
                        </div>
                    </div>
               </div>
            ) : (
                <Homepage />
            )
        }
        </div>
    )
}

export default FirstPage
