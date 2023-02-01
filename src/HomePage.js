import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div class="container">
        <div class="heading">
            Select your topic
        </div>
        <div class="types">
            <button class="imtype">General Knowledge</button> <br />
            <button class="imtype">Science</button>
        </div>
    </div>
  )
}

export default HomePage
