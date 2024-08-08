import React from 'react'
import '../components/Base.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload, faFileUpload, faMicrophone, faUpDown, faUpload } from '@fortawesome/free-solid-svg-icons'

const Base = () => {
    return (
        <div className="base-box">
            <div className="prompt-box">
                <div className='input-box'>
                    <input id='input-value' type="text" placeholder='Enter a prompt here' />
                    <div className="icon-base">
                        <p className="upload-icon">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='white'>
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                        </svg></p>
                        <p className="mic-icon">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='white'>
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg></p>
                    </div>
                </div>
                <p id='copyright'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. <a href="#">Your privacy and Gemini Apps</a>
                </p>
            </div>
        </div>

    )
}

export default Base
