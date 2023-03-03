import { createContext, useState } from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';



const ThemeContext = createContext();

function App() {

  const [light, changeLight] = useState(() => {
    const storedTheme = localStorage.getItem('light');
    return storedTheme ? JSON.parse(storedTheme) : 'light';
  });

  const styles = {
    backgroundColor: light ? "#ffffff" : "#191f27",
    color : light ? "#000000" : "#ffffff"
  }
  const iconStyle = {
    backgroundColor: light ? "#0000002a" : "#ffffff2a",
  }

  const handleTheme = ()=> {
    localStorage.setItem('light', JSON.stringify(!light));
    changeLight(!light);
  }

  return (
    <ThemeContext.Provider value= {{light}}>

        <div style={styles} className="appContainer">
            <FirstPage />
            <button className="mode" onClick={handleTheme}>
              {light ?
              <img style={iconStyle} src="https://img.icons8.com/glyph-neue/30/191f27/bright-moon.png" className='icon' alt='icon'/> : 
              <img style={iconStyle} src="https://img.icons8.com/material-rounded/30/ffffff/smiling-sun.png" className='icon' alt="icon"/>}
            </button>
        </div>

   </ThemeContext.Provider>
  );
}

export default App;
export {ThemeContext} ;
