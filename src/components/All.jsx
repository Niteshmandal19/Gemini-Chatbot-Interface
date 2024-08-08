import React, { useState } from 'react'
import '../components/All.css'

const All = () => {

    const [isVisible, setIsVisible] = useState(true);

    const dismissMessage = () => {
        setIsVisible(false);
    }

    return (
        <div className='mid-section'>
            <div className="box-all">
                <div className="intro">
                    <h1 id='gradient-name1'>Hello, Enem</h1>
                    <h1 id='gradient-name2'>How can i help you today?</h1>
                </div>
                <div className="boxes">
                    <div className="mini">
                        <p>Walk me through how to apply for a new role</p>
                        <div className="icon-boxes">A</div>
                    </div>
                    <div className="mini">
                        <p>Walk me through how to apply for a new role</p>
                        <div className="icon-boxes">B</div>
                    </div>
                    <div className="mini">
                        <p>Walk me through how to apply for a new role</p>
                        <div className="icon-boxes">C</div>
                    </div>
                    <div className="mini">
                        <p>Walk me through how to apply for a new role</p>
                        <div className="icon-boxes">D</div>
                    </div>
                </div>
                <div className="bottom-all">
                    <div>
                        <p className='text'>Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps activity. If this setting is on, don't enter info that you wouldn't want reviewed or used. <a href="#">how it works</a></p>
                    </div>
                    <div className='bottom-all-last'>
                        <div id='manage'>Manage activity</div>
                        <div id='dismiss' onClick={dismissMessage}>Dismiss</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All
