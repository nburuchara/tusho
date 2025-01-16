import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'; 

const Styles = styled.div `


    // - - FULL PAGE - - //

.fullPage {
    width: 100%;
    height: 100vh;
}

    // - - NAVBAR - - //

.navbar {

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

                    </div>
                </div>
                
            </Styles>
        )
    }
}