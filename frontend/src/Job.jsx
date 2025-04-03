import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import SearchBar from './SearchBar'
import Content from './Content'

const Head = () => {
  return (
    <div>
                 <h1 id='jobs' className='fw-bold text-center pt-4 mt-4' style={{zIndex:"10"}}>Jobs On Trend</h1>
           <Router>
          <SearchBar />
            </Router>
      <Content />
    </div>
  )
}

export default Head
