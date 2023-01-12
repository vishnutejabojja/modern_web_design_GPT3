import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Navbar, Brand, CTA} from './components';
const App = () => {
  return (
    <div className="App">
        <div className='gradient_bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
    </div>
  )
}

export default App