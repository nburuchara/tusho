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
    height: 70px;
    margin-top: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}

    // - NAVBAR OPTIONS ICON - //

.navbar-option-icon {
    width: 5%;
    // border: 1px solid white;
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
    // border: 1px solid black;
}

.navbar-logo-icon img {
    width: 90px;
    margin-top: -8px;
    margin-left: 5%;
}

    // - NAVBAR SEARCH BAR / PROMO TEXT AREA - //

.navbar-search-bar-area {
    width: 75%;
    // border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-search-bar {
    margin-left: 2.5%;
    width: 60%;
    height: 58.5%;
    border: 1px solid black;
    background-color: white;
    border-radius: 20px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
}

    // # SEARCH BAR SEARCH ICON

.navbar-search-bar-icon {
    width: 6%;
    // border: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-search-bar-icon img {
    width: 18.5px;
}

    // # SEARCH BAR TEXTAREA

.navbar-search-bar-textarea {
    width: 88%;
    // border: 1px solid black;
}

.navbar-search-bar-textarea input { 
    width: 98.5%;
    height: 88.5%;
    outline: none;
    font-size: 100%;
    border: 1px solid transparent;
}   

    // # SEARCH BAR CLEAR SEARCH ICON

.navbar-search-bar-clear-btn {
    width: 6%;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.navbar-search-bar-clear-btn img {
    width: 18.5px;
}

.navbar-promo-text {
    text-align: right;
}

    // - NAVBAR SHOPPING CART - //

.navbar-shopping-cart-area {
    width: 10%;
    // border: 1px solid black;
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
                        <div className='navbar-search-bar-area'>
                            <div className='navbar-search-bar'>
                                <div className='navbar-search-bar-icon'>
                                    <img src='/assets/icons/navbar/search-icon.png'/>
                                </div>
                                <div className='navbar-search-bar-textarea'>
                                    <input
                                    placeholder='Search for an item'
                                    />
                                </div>
                                <div className='navbar-search-bar-clear-btn'>
                                    <img src='/assets/icons/navbar/clear-search-icon.png'/>
                                </div>
                            </div>
                            <div className='navbar-promo-text'>
                                <p>text</p>
                            </div>
                        </div>
                        <div className='navbar-shopping-cart-area'>

                        </div>
                    </div>
                </div>
                
            </Styles>
        )
    }
}