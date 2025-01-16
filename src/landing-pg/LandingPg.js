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
    justify-content: space-between;
}

    // - NAVBAR OPTIONS ICON - //

.navbar-option-icon {
    width: 5%;
    border: 1px solid white;
    height: 100%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: right;
}

.navbar-option-icon img {
    width: 35%;
    padding-right: 10.5%;
}

    // - NAVBAR LOGO - //

.navbar-logo-icon {
    width: 10%;
    border: 1px solid black;
}

.navbar-logo-icon img {
    width: 45%;
}

    // - NAVBAR SEARCH BAR - //

.navbar-search-bar {
    width: 75%;
    border: 1px solid white;
}

    // - NAVBAR SHOPPING CART - //

.navbar-shopping-cart {
    width: 10%;
    border: 1px solid black;
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
                            <img src='./assets/icons/navbar/menu-icon.png'/>
                        </div>
                        <div className='navbar-logo-icon'>
                            <img src='./assets/icons/navbar/tusho-logo2.png'/>
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