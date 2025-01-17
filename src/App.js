import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './CSS/GlobalStyle';
import LandingPg from './landing-pg/LandingPg'
import './App.css';

const Styles = styled.div `

`

class App extends Component {


  constructor () {
    super() 
    this.state = {
      user: false
    }

    
  }

  render () {
    return (
      <>
        <GlobalStyles/>
        {this.state.user ? (
          <Router>
            <Routes>
              {/* <Route exact path = "/" element = {<Homepage/>}/> */}

              {/* <Route path = {`selected-article/:link`} element = {<SelectedArticle/>}/>
              <Route path = {`selected-article/`} element = {<SelectedArticle/>}/>
              <Route path = "/resources" element = {<Resources/>}/>
              <Route path = "/bulletin" element = {<Bulletin/>}/>
              <Route path = "/sign-up" element = {<SignUp/>}/> */}
              {/* <Route path = "/home" element = {<Homepage/>}/> */}
            </Routes>
          </Router>
          ) : (
          <Router>
            <Routes>
              <Route exact path = "/" element = {<LandingPg/>}/>
              {/* <Route path = {`selected-article/:link`} element = {<SelectedArticle/>}/>
              <Route path = {`selected-article/`} element = {<SelectedArticle/>}/>
              <Route path = "/resources" element = {<Resources/>}/>
              <Route path = "/bulletin" element = {<Bulletin/>}/>
              <Route path = "/sign-up" element = {<SignUp/>}/>
              <Route path = "/home" element = {<Homepage/>}/> */}
            </Routes>
          </Router>
        )}
      </>
    )
  }}


export default App;
