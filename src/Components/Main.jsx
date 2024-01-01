import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Feedback from './Feedback'

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <Router>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/feedback" element={<Feedback/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
