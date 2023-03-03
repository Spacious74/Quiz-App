import React, {useContext, useState} from 'react'
import './Firstpage.css'
import logo from '../images/brain.png'
import quizGif from '../images/Exams-amico.png'
import Homepage from '../HomePage';
import { ThemeContext } from '../App';

function FirstPage() {

    const [state, setState] = useState(true);

    const {light} = useContext(ThemeContext);

    const navstyles = {
        backgroundColor: light ? "#F5F5F5" : "#182024",
        color : light ? "#1c2b3f" : "#ffffff",
    }

    const btnStyle = {
        boxShadow : light ? "none" : "0px 0px 15px #2099c2, 0px 0px 3px #ffffff"
    }
    return (
        <div>
        {
            (state) ? (
               <div>
                    <nav className="navbar" style={navstyles}>
                        <img src={logo} alt="logo" className='logo' /> Quiz App
                        <div className="line"></div>
                    </nav>
                    <div className="mainContainer">
                        
                        <img src={quizGif} alt="logoimg" className='mainImage'/>
                        <div className="text" style={{color : light ? "#1c2b3f" : "#ffffff"}}>
                            Let's Start the quiz <br/>
                            <button className="start" style={btnStyle} onClick={()=>{setState(false)}}><img src="https://img.icons8.com/ios-glyphs/30/ffffff/play--v1.png" alt="icons"/> &nbsp; Start Quiz</button>
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
