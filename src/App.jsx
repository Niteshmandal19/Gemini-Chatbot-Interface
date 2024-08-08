import { useState } from 'react'
import './App.css'
import All from './components/All'
import Sidebar from './components/Sidebar'
import Base from './components/Base'
import Top from './components/Top'

function App() {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="two-box">
        <div className={`div1 ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="div2">
          <Top />
          <All />
          <Base />
        </div>
      </div>
    </>
  )
}

export default App
