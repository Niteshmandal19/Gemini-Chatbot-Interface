import React from 'react'
import '../components/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCog, faDownLeftAndUpRightToCenter, faHistory, faMessage, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`box-navbar ${isOpen ? 'open' : ''}`}>
      <div className="top-navbar">
        <div className="nav-icon-boxes" id="menu-icon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
          <div className='expand-menu'>{isOpen ? 'Collapse-menu' : 'Expand-menu'}</div>
        </div>
        <div className='nav-icon-boxes' id="new-chat-icon">
          <FontAwesomeIcon icon={faPlus} />{isOpen && <span>New chat</span>}
          <div className='expand-new-chat'>New Chat</div>
        </div>
        {isOpen && <h4 className='recents'>Recent</h4>}

        {isOpen && (
          <div className="recent-history">
            <ul>
              <li><ChatBubbleOutlineIcon />Latest trends in frontend <MoreVertIcon className='vertIcon' /></li>
              <li><ChatBubbleOutlineIcon />Tips for debugging perfor...<MoreVertIcon className='vertIcon' /></li>
              <li><ChatBubbleOutlineIcon />File not found error<MoreVertIcon className='vertIcon' /></li>
              <li><ChatBubbleOutlineIcon />Frameworks for efficient ...<MoreVertIcon className='vertIcon' /></li>
              <li><ChatBubbleOutlineIcon />Advice on scaling Node.js <MoreVertIcon className='vertIcon' /></li>
              <li className='show-history'>
                <ExpandMoreIcon /> Show more
              </li>
            </ul>

          </div>

        )
        }

      </div>
      <div className="bottom-navbar">
        <div className='nav-icon-boxes' id="help-icon"><FontAwesomeIcon icon={faQuestionCircle} />{isOpen && <span>Help</span>}<div className='expand-help'>Help</div></div>
        <div className='nav-icon-boxes' id="activity-icon"><FontAwesomeIcon icon={faHistory} />{isOpen && <span>Activity</span>}<div className='expand-activity'>Gemini Apps activity</div></div>
        <div className='nav-icon-boxes' id="setting-icon"><FontAwesomeIcon icon={faCog} />{isOpen && <span>Settings</span>}<div className='expand-settings'>Settings</div></div>
        {isOpen && <div className='location'>
          <li></li>
          <li >
          IIT Area, Mumbai, Maharashtra, India
          <br />
          <small> <a href="#">From your IP address</a> • <a href="#">Update location</a></small>
        </li>
        </div>
        }
      </div>
    </div>
  );
};

export default Sidebar