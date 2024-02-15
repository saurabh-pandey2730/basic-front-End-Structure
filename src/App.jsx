import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

import Header from './components/Header'
 import Slider from './components/Slider'
import FooterComponent from './components/Footer'
function App() {
  

  return (
    <BrowserRouter>
<Header/>
<Slider/>
<FooterComponent/>
    <Routes>

    



    </Routes>

    </BrowserRouter>
  )
}

export default App
