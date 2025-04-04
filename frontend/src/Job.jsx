import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import SearchBar from './SearchBar'
import Content from './Content'

const Head = () => {
  return (
    <div id='jobs' className='pt-4 mt-4'>
                 <h1 className='fw-bold text-center' style={{zIndex:"10"}}>Jobs On Trend</h1>
           <Router>
          <SearchBar />
            </Router>
      <Content />
    </div>
  )
}

export default Head
