import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About';
import Documentation from './Components/Documentation';
import Problems from './Components/Problems';
import Visualizers from './Components/Visualizers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/About' element={<About/>} />
            <Route path='/Documentation' element={<Documentation/>}/>
            <Route path='/Problems' element={<Problems/>}/>
            <Route path='/Visualizers' element={<Visualizers/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}
