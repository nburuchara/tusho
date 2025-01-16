import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'; 

const Styles = styled.div `


    // - - FULL PAGE - - //

.fullPage {
    width: 98%;
    height: 100vh;
    margin: auto;
}

    // - - NAVBAR - - //

.navbar {
    width: 100%;
    background-color: #FF5733;
    height: 60px;
    margin-top: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-option-icon {
    width: 5.5%;
    border: 1px solid white;
    height: 100%;
}

`

export default class LandingPg extends Component {

    constructor () {
        super()
        this.state = {
            
        }
    }

    render () {
        return (
            <Styles>
                <div className='fullPage'>
                    <div className='navbar'>
                        <div className='navbar-option-icon'>
                            
                        </div>
                        <div className='navbar-logo-icon'>

                        </div>
                        <div className='navbar-search-bar'>

                        </div>
                        <div className='navbar-shopping-cart'>

                        </div>
                    </div>
                </div>
                
            </Styles>
        )
    }
}