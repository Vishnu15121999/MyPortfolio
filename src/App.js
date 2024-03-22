import React from 'react';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import AllProjects from './components/AllProjects';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App