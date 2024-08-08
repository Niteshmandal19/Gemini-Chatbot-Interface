import React from 'react'
import '../components/Top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCrop, faCross, faTh, faThLarge, faX } from '@fortawesome/free-solid-svg-icons'

const Top = () => {
    return (
        <div className="box-Top">
            <div className="top-fixed">
                <h4 id='Gemini'>Gemini <div class="custom-caret"></div></h4>
                <div className="profile">
                    <a href="#" className="new">
                        <img className='gemini-logo' src="https://lh3.googleusercontent.com/Xtt-WZqHiV8OjACMMMr6wMdoMGE7bABi-HYujupzevufo1kiHUFQZukI1JILhjItrPNrDWLq6pfd=s600-w600" alt="Gemini-icon" />
                        Try Gemini Advanced
                    </a>
                    <div><FontAwesomeIcon icon={faTh} className='google-apps-icon' /><div className='expand-google-apps'>Google Apps</div></div>
                    <a href="#"><img id='Profile-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHw-DTkkUNCT3o68DaOR-9iZB0PbdzxHj0nQiVtVRR8Q5VJYz1lLnhRCNRQ&s" alt="profile-icon" /></a>
                </div>
            </div>
            <div className="top-cross">
                <p><FontAwesomeIcon icon={faCheckCircle} className='tick'/></p>
                <p>Gemini has just been updated.</p>
                <a href="#">See update</a>
                <p id='cross' ><FontAwesomeIcon icon={faX}/></p>
            </div>
        </div>


    )
}

export default Top
