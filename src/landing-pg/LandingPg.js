import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'; 
import { ColorRing, RotatingLines, TailSpin } from 'react-loader-spinner'

//? - - FILES - - //
import SearchTerms from '../search-terms/SearchTerms'

const Styles = styled.div `

    // - - PAGE OVERLAY - - //

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    z-index: 2; /* Below the side pane but above the full page */
    display: none; /* Hidden by default */
}

.overlay.active {
    display: block;
}

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

.navbar-options-icon {
    width: 5%;
    // border: 1px solid white;
    height: 100%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: right;
}

.navbar-options-icon img {
    width: 35%;
    padding-right: 10.5%;
    padding-left: 10.5%;
    padding-top: 6.5%;
    padding-bottom: 8.5%;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition-property: border;
}

.navbar-options-icon.clicked img {
    border: 1px solid white;
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
    // border: 1.5px solid #222f3e;
    background-color: white;
    border-radius: 20px;
    // border: 1px solid white;
    display: flex;
    justify-content: space-between;
}

.navbar-search-bar.clicked {
    border: 1px solid #222f3e;
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

    // # SEARCH RESULTS

.searchResults {
    z-index: 1;
    position: relative;
    margin-left: -6%;
    width: 112%;
    // border: 1px solid black;
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.searchResults.empty {
    opacity: 0;
    pointer-events: none;
}

.searchResultCell {
    padding: 2%;
    margin-top: 3px;
    margin-bottom: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}

.searchResultCell:hover {
    background-color: #faece9;
    cursor: pointer;
}

.searchResultCell:hover .searchResultCellImg img {
    background-color: #fff;
}

.searchResultCellImg {
    width: 10%;
}

.searchResultCellImg img {
    width: 70%;
    height: 70%;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.searchResultCellDetails {
    width: 70%;
    padding-left: 1%;
}

.searchResultCellLabel {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchResultCellLabel p {
    font-size: 20%;
}

.searchResultCell p {
    margin-top: 5px;
    margin-bottom: 3px;
}

.searchResultOption {
    // margin-top: 10px;
}

.searchResultCategory {
    font-size: 80%;
    margin-bottom: 0px;
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
    cursor: pointer;
}

.navbar-promo-text {
    text-align: right;
}

.navbar-promo-text p {
    text-align: right;
    color: white;
    font-weight: bold;
}

    // - NAVBAR SHOPPING CART - //

.navbar-shopping-cart-area {
    width: 10%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-shopping-cart {
    width: 35px;
    height: 35px;
    margin-left: 15%;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1%;
    position: relative; /* Add position relative to position the badge */
    padding: 0; /* Adjust padding to avoid misalignment */
}

.navbar-shopping-cart img {
    width: 18px;
    margin-right: 35px;
    margin: auto;
 }

 .navbar-shopping-cart img:hover {
    cursor: pointer;
 }

 .navbar-shopping-cart-badge {
    position: absolute; /* Use absolute to position it relative to the parent */
    top: -10px; /* Adjust to place it in the top-right */
    right: -10px;
    width: 19px; /* Badge width */
    height: 19px; /* Badge height */
    background-color: white;
    border: 1.5px solid #FF5733;
    color: #FF5733;
    font-size: 11.5px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; /* Makes it circular */
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); /* Optional: Adds a shadow for better visibility */
}

.navbar-profile-btn {
    width: 35px;
    height: 35px;
    margin-right: 15%;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1%;
    position: relative; /* Add position relative to position the badge */
    padding: 0; /* Adjust padding to avoid misalignment */
}

.navbar-profile-btn img {
    width: 18px;
    margin-right: 35px;
    margin: auto;
 }

    // - NAVBAR OPTIONS DROPDOWN - //

.navbar-options-dropdown {
    z-index: 0;
    width: 40%;
    // border: 1px solid black;
    height: 500px;
    margin-top: -5.5px;
    margin-left: -1%;
    opacity: 0;
    // background-color: white;
    background-color: #f3f5f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    pointer-events: none;
}

.navbar-options-dropdown.clicked {
    transform: translateX(5%);
    opacity: 1;
    pointer-events: auto;
    transition-property: transform, opacity;
}

.navbar-options-dropdown-left {
    z-index: 0;
    width: 55%;
    // border-right: 1px solid black;
    position: relative;
    background-color: #FF5733;
    padding-top: 0px;
    border: 5px solid white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.navbar-options-dropdown-left-header {
    font-family: lexend;
    // border: 1px solid black;
    max-width: 65%;
    font-size: 85%;
    margin-top: 8.5px;
    margin-left: 5%;
    color: white;
    text-decoration: underline;
    position: absolute;
    top: 0;
    left: 0;
}

.navbar-options-dropdown-left-header-img {
    display: flex;
    justify-content: right;
}

.navbar-options-dropdown-left-header-img img {
    width: 82.5px;
    margin-top: -22px;
}

.navbar-options-dropdown-left-menu-options {
    position: absolute;
    background-color: white;
    // border: 1px solid black;
    border-bottom: 1px solid transparent;
    bottom: 0;
    left: 0;
    margin-left: -1%;
    width: 102%;
    height: 420px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.navbar-options-dropdown-left-menu-options-cell {
    margin: auto;
    width: 95%;
    border: 1px solid transparent;
    border-radius: 8px;
    height: 69px;
    display: flex;
    justify-content: space-between;
}

.navbar-options-dropdown-left-menu-options-cell.clicked {
    border: 1px solid #FF5733;
    background-color: #faece9;
}

.navbar-options-dropdown-left-menu-options-cell:hover {
    background-color: #faece9;
    border: 1px solid #FF5733;
    cursor: pointer;
}

.navbar-options-dropdown-left-menu-options-cell:hover .navbar-options-dropdown-left-menu-options-cell-icon img {
   background-color: #fff;
   border: 1px solid #FF5733;
//    width: 52.5%;
}

.navbar-options-dropdown-left-menu-options-cell:hover .navbar-options-dropdown-left-menu-options-cell-details h5 {
    text-decoration: underline;
    text-decoration-color: #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell:hover .navbar-options-dropdown-left-menu-options-cell-details p {
    text-decoration: underline;
    text-decoration-color: #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell:hover .navbar-options-dropdown-left-menu-options-cell-arrow img {
    transform: translateX(5px);
}

.navbar-options-dropdown-left-menu-options-cell-icon { 
    width: 27.5%;
    // border: 1px solid black;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}

.navbar-options-dropdown-left-menu-options-cell-icon img {
    width: 40px;
    border: 1px solid white;
    border-radius: 8px;
    padding-top: 7%;
    padding-bottom: 7%;
    padding-left: 10%;
    padding-right: 10%;
    transition-property: width, background-color, border;
}

.navbar-options-dropdown-left-menu-options-cell-icon.clicked img {
    // width: 52.5%;
    background-color: white;
    border: 1px solid #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell-details { 
    width: 63.5%;
    // border: 1px solid black;
}

.navbar-options-dropdown-left-menu-options-cell-details h5 {
    margin-top: 10px;
    margin-bottom: 3px;
    // margin-left: 2.5%;
    font-family: poppins;
    font-size: 70%;
    transition-property: text-decoration, text-decoration-color;
}

.navbar-options-dropdown-left-menu-options-cell-details.clicked h5 {
    text-decoration: underline;
    text-decoration-color: #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell-details p {
    margin-top: 0px;
    margin-bottom: 5px;
    margin-right: 5%;
    font-size: 70%;
    font-family: poppins;
    transition-property: text-decoration, text-decoration-color;
}

.navbar-options-dropdown-left-menu-options-cell-details.clicked p {
    text-decoration: underline;
    text-decoration-color: #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell-details-hiring {
    color: #FF5733;
}

.navbar-options-dropdown-left-menu-options-cell-arrow {
    width: 9%;
    // text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: transform;
}

.navbar-options-dropdown-left-menu-options-cell-arrow img {
    width: 50%;
    margin-left: -8px;
}

.navbar-options-dropdown-left-menu-options-cell-arrow.clicked img {
    transform: translateX(5px);
}

    // # NAVBAR DROPDOWN OPTIONS (RIGHT SIDE)

.navbar-options-dropdown-right {
    width: 45%;
    background-color: #f3f5f7;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    opacity: 0;
    transform: translateX(-5%);
}

.navbar-options-dropdown-right.clicked {
    width: 45%;
    background-color: #f3f5f7;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transform: translateX(0%);
    opacity: 1;
    transition-property: opacity, transform;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.navbar-options-dropdown-option-selected {
    margin-left: 12.5%;
    position: relative;
    height: 93%;
    border-bottom-right-radius: 8px;
    opacity: 1;
    transform: translateX(0%);
    // transition-property: transform, opacity;
}


.navbar-options-dropdown-option-selected h4 {
    font-size: 80%;
    font-family: lexend;
    margin-top: 35px;
    color: #222f3e;
    margin-left: 1%;
}

.navbar-options-dropdown-option-selected label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
}

.navbar-options-dropdown-option-selected-container {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 10;
    width: 100%;
    // border: 1px solid black;
    height: 100%;
    border-bottom-right-radius: 8px;
}

.navbar-options-dropdown-option-selected-container-header div {
    background-color: #FF5733;
    width: fit-content;
    margin-top: 25px;
    border-radius: 20px;
    // padding-left: 5px;
    // padding-right: 5px;
}

.navbar-options-dropdown-option-selected-container-header p {
    margin-bottom: 8px;
    font-size: 60%;
    font-weight: bold;
    color: white;
    padding: 2.5px;
    padding-left: 8.5px;
    padding-right: 8.5px;
}

    //! # OPTION 1

.navbar-options-dropdown-option-brand-cell {
    height: 8%;
    width: 93.5%;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    border: 1px solid transparent;
    border-radius: 8px;
    margin-top: 2px;
}

#top-navbar-dropdown-option-brand-cell {
    margin-top: 0px;
    // cursor: pointer;
}

.navbar-options-dropdown-option-brand-cell:hover {
    background-color: #faece9;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    border: 1px solid #222f3e;
    border: 1px solid #FF5733;
    cursor: pointer;
 }

.navbar-options-dropdown-option-brand-cell:hover .navbar-options-dropdown-option-brand-cell-icon img { 
    transform: translateX(5px);
}

.navbar-options-dropdown-option-brand-cell-name {
    width: 80%;
    // border: 1px solid black;
    align-items: center;
    display: flex;
    justify-content: left;
}

.navbar-options-dropdown-option-brand-cell-name p {
    margin-top: -1px;
    margin-bottom: 0px;
    margin-left: 2%;
    font-size: 75%;
    font-family: poppins;
}

.navbar-options-dropdown-option-brand-cell-name span {
    color: #1980ff;
}

.navbar-options-dropdown-option-brand-cell-icon {
    width: 20%;
    // border: 1px solid black;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}

.navbar-options-dropdown-option-brand-cell-icon img {
    width: 32.5%;
    margin-left: -10px;
}

.navbar-options-dropdown-option-brand-full-list {
    margin-top: 20px;
    width: 93.5%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    border-radius: 8px;
    height: 5%;
    cursor: pointer;
}

.navbar-options-dropdown-option-brand-full-list-text {
    width: 80%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-options-dropdown-option-brand-full-list-text h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 3%;
    font-family: lexend;
    font-weight: normal;
    color: #5e626a;
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
}

.navbar-options-dropdown-option-brand-full-list:hover {
    // border: 1px solid #FF5733;
}

.navbar-options-dropdown-option-brand-full-list:hover .navbar-options-dropdown-option-brand-full-list-text h5 {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    color: #FF5733;
}

.navbar-options-dropdown-option-brand-full-list:hover .navbar-options-dropdown-option-brand-full-list-icon img {
    transform: translateX(5px);
}

.navbar-options-dropdown-option-brand-full-list-icon {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-options-dropdown-option-brand-full-list-icon img { 
    width: 35%;
    margin-left: -10px;
    margin-top: 2px;
}

    //! # OPTION 2

.navbar-options-dropdown-option-jipange {
    // border: 1px solid black;
    margin-top: 32.5px;
}

.navbar-options-dropdown-option-jipange p {
    margin-top: 0px;
    margin-right: 20%;
    font-size: 80%;
    font-family: poppins;
    // color: #FF5733;
}

.navbar-options-dropdown-option-jipange-steps {
    // border: 1px solid black;
    margin-right: 10%;
    height: 180px;
}

.navbar-options-dropdown-option-jipange-step {
    height: 30px;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.navbar-options-dropdown-option-jipange-step-icon {
    width: 20%;
    // border: 1px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-options-dropdown-option-jipange-step-icon img {
    width: 60%;
    // filter: grayscale(100%);
}

.navbar-options-dropdown-option-jipange-step-name {
    width: 80%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-options-dropdown-option-jipange-step-name p {
    all: unset;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10%;
    font-size: 75%;
    font-weight: bold;
    color: #5e626a;
    font-family: poppins;
}

.navbar-options-dropdown-option-jipange-steps button {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #FF5733;
    background-color: #FF5733;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

    //! # OPTION 3

.navbar-options-dropdown-option-sell-with-us {
    // border: 1px solid black;
    margin-top: 32.5px;
}

.navbar-options-dropdown-option-sell-with-us p {
    margin-top: 0px;
    margin-right: 20%;
    font-size: 80%;
    font-family: poppins;
    // color: #FF5733;
}

.navbar-options-dropdown-option-sell-with-us span {
    color: #FF5733;
    font-weight: bold;
}

.navbar-options-dropdown-option-sell-with-us button {
    margin-top: 15px;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #FF5733;
    background-color: #FF5733;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

    // - - NAVBAR CHECKOUT HOME VIEW - - //

.navbar-options-checkout-home {
    position: fixed;
    background-color: white;
    border-left: 1px solid #ccc;
    width: 25%;
    min-height: 800px;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    opacity: 0;
    flex-direction: column;
    transform: translateX(100%); /* Default transform */
    z-index: 3;
}

.navbar-options-checkout-home.clicked {
    transform: translateX(0); /* Slide into view */
    opacity: 1;
    transition-property: transform, opacity;
}

    // # NAVBAR CHECKOUT HOME HEADER

.navbar-options-checkout-home-header { 
    height: 82.5px; /* Fixed height for header */
    // border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.navbar-options-checkout-home-header-details {
    width: 80%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}  

.navbar-options-checkout-home-header-details label {
    font-weight: bold;
    color: #FF5733;
}

.navbar-options-checkout-home-header-details p {
    font-family: poppins;
    font-size: 105%;
    margin-left: 5%;
}   

.navbar-options-checkout-home-header-details span {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
}   

.navbar-options-checkout-home-header-icon {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-options-checkout-home-header-icon img {
    width: 40%;
    filter: grayscale(100%);
    transition-property: filter;
    cursor: pointer;
}

.navbar-options-checkout-home-header-icon img:hover {
    filter: grayscale(0%);
}

    // # NAVBAR CHECKOUT HOME BODY

.navbar-options-checkout-home-body {
    flex-grow: 1; /* Takes remaining space between header and footer */
    overflow-y: auto; /* Enables scrolling if content overflows */
    // padding: 16px; /* Optional: Adds padding around the content */
    // border: 1px solid black;
}

.navbar-options-checkout-home-item-cell {
    height: auto;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.navbar-options-checkout-home-item-cell-icon {
    width: 20%;
    // border: 1px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Ensures image stays within bounds */
    overflow: hidden; /* Prevents overflow of larger images */
    flex-direction: column;
}

.navbar-options-checkout-home-item-cell-icon img {
    width: 60px; /* Ensures image fills container width */
    height: 60px; /* Maintains aspect ratio */
    max-height: 100%; /* Ensures the image fits within the container height */
    object-fit: contain; /* Ensures the entire image is visible without distortion */
}

.navbar-options-checkout-home-item-cell-icon p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 70%;
    font-style: italic;
    text-decoration: underline;
    color: #FF5733;
    cursor: pointer;
}

.navbar-options-checkout-home-item-cell-details {
    width: 52.5%;
    // border: 1px solid black;
}

.navbar-options-checkout-home-item-cell-details p {
    font-size: 80%;
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%;
    font-family: poppins;
}

.navbar-options-checkout-home-item-cell-qty {
    width: 27.5%;
    // border: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-options-checkout-home-item-cell-qty-toggle {
    width: 85%;
    height: 32.5px;
    border: 1px solid #bababa;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.navbar-options-checkout-home-item-cell-qty-toggle-left {
    width: 30%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.navbar-options-checkout-home-item-cell-qty-toggle-left p {
    font-weight: bold;
    font-size: 80%;
    margin-top: 10px;
}

.navbar-options-checkout-home-item-cell-qty-toggle-center {
    width: 40%;
    // border-right: 1px solid black;
    // border-left: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-options-checkout-home-item-cell-qty-toggle-center p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 90%;
    font-family: poppins;
}

.navbar-options-checkout-home-item-cell-qty-toggle-right {
    width: 30%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.navbar-options-checkout-home-item-cell-qty-toggle-right p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 80%;
}

.navbar-options-checkout-home-item-cell-qty-item-price {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 67.5%;
    font-weight: bold;
    font-family: lexend;
    margin-right: 15%;
}

    // # NAVBAR CHECKOUT HOME FOOTER

.navbar-options-checkout-home-footer {
    min-height: 200px; /* Fixed height for footer */
    // border-top: 2px solid red;
    background-color: white;
    z-index: 3;
}

.navbar-options-checkout-home-footer-header {
    height: 75px;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.navbar-options-checkout-home-footer-header h3 {
    margin-top: 13px;
}

.navbar-options-checkout-home-footer-header-label {
    width: 40%;
}

.navbar-options-checkout-home-footer-header-label h3 {
    margin-left: 7%;
    font-family: lexend;
    margin-bottom: 8px;
}

.navbar-options-checkout-home-footer-header-label h5 {
    margin-left: 7%;
    margin-top: 5px;
    font-family: poppins;
    font-weight: normal;
    color: #5e626a;
}

.navbar-options-checkout-home-footer-header-price {
    text-align: right;
    width: 60%;
    font-family: poppins;
}

.navbar-options-checkout-home-footer-header-price h3 {
    text-align: right;
    margin-right: 5%;
    margin-bottom: 4px;
    font-weight: bold;
}

.navbar-options-checkout-home-footer-header-price h5 {
    text-align: right;
    margin-top: 0px;
    margin-right: 5%;
    // font-weight: normal;
    color: #5e626a;
}

.navbar-options-checkout-home-footer-footer {
    height: 125px;
    // border: 1px solid black;
    text-align: center;
}

.navbar-options-checkout-home-footer-footer button { 
    width: 80%;
    margin-top: 10.5px;
    height: 50px;
    background-color: #FF5733;
    border: 1px solid #FF5733;
    color: white;
    font-family: lexend;
    font-size: 100%;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

.navbar-options-checkout-home-footer-footer-payment-methods {
    margin-top: 18px;
}

.navbar-options-checkout-home-footer-footer img {
    width: 38px;
    height: 16.5px;
    padding: 3px;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin-left: 2%;
    margin-right: 2%;
}

    // - - NAVBAR PROFILE DROPDOWN - - //

.navbar-profile-dropdown {
    z-index: 0;
    width: 20.5%;
    position: absolute;
    border: 1px solid #ccc;
    height: auto;
    margin-right: 1%;
    // opacity: 0;
    top: 0;
    right: 0;
    margin-top: 90px;
    flex-direction: column;
    background-color: #f3f5f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: right;
    // cursor: pointer;
    // padding-bottom: 11.5px;
    z-index: 1;
}

.navbar-profile-dropdown-header {
    height: 55px;
    background-color: #FF5733;
    border: 5px solid #f3f5f7;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    position: relative;
    overflow: hidden;
    transition-property: background-color;
}

.navbar-profile-dropdown-header.success {
    background-color: #50b65d;
}

.navbar-profile-dropdown-header.signed-in {
    background-color: #f3f5f7;
    border-bottom: 1px solid #ccc;
}

.navbar-profile-dropdown-header.profile-loading {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%; /* Make the gradient larger than the div to allow animation */
    animation: loading 1.5s infinite;
    // border-radius: 8px; /* Optional: adds rounded corners */
}

@keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
}

.navbar-profile-dropdown-header-default h3 {
    font-family: lexend;
    font-size: 85%;
    margin-left: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    margin-right: 18%;
    text-decoration: underline;
}

.navbar-profile-dropdown-header-default span {
    text-decoration: underline;
    text-decoration-color: #FFF;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
}

.navbar-profile-dropdown-header-default img {
    position: absolute;
    right: 2.5%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 16.5%;
}

.navbar-profile-dropdown-header-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

.navbar-profile-dropdown-header-success {
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-dropdown-header-success img {
    margin-top: 55px;
    width: 30px;
    transform: translateY(0px);
    transition: transform 0.85s ease-in-out;
}

.navbar-profile-dropdown-header-success.clicked img {
    transform: translateY(-40px);
}

.navbar-profile-dropdown-header-signed-in {
    border: 1px solid transparent;
    height: 88%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition-property: background-color;
    border-radius: 8px;
}

.navbar-profile-dropdown-header-signed-in:hover {
    background-color: #faece9;
    border: 1px solid #FF5733;
}

.navbar-profile-dropdown-header-signed-in:hover .navbar-profile-dropdown-header-signed-in-img img {
    background-color: #ffe3dd;
    filter: grayscale(0);
}

.navbar-profile-dropdown-header-signed-in-img {
    width: 20%;
    // border: 1px solid black;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 8px;
}

.navbar-profile-dropdown-header-signed-in-img img {
    width: 23.5px;
    padding: 4.5px;
    border: 2px solid #ccc;
    border-radius: 50%;
    // filter: grayscale(100);
    transition-property: filter;
}

.profile-dropdown-img-container {
    width: 23.5px;
    height: 23.5px; /* Ensure height is the same as width for a perfect circle */
    padding: 4.5px;
    border: 2px solid #FF5733;
    border-radius: 50%;
    // filter: grayscale(100%);
    transition-property: filter;
    
    /* Background image */
    background-image: url('/assets/icons/home-profile/profile-img-bg.png'); /* Set your background image */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}


.profile-dropdown-img-container img {
    width: 100%; /* Ensures image scales within the container */
    border-radius: 50%;
}

.navbar-profile-dropdown-header-signed-in-details {
    width: 80%;
    // border: 1px solid black;
}

.navbar-profile-dropdown-header-signed-in-details h4 {
    margin-top: 6px;
    margin-bottom: 2.25px;
    margin-left: 3.5%;
    font-family: inter;
    font-size: 92.5%;
    color: #5e626a;
}   

.navbar-profile-dropdown-header-signed-in-details p {
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 3.5%;
    font-family: inter;
    font-size: 88%;
}

    // # NAVBAR PROFILE DROPDOWN BODY

.navbar-profile-dropdown-body {
    flex-grow: 1;
    // background-color: blue;
    padding-bottom: 10px;
    border: 5px solid #f3f5f7;
    border-radius: 8px;
    transition-property: height;
}

.navbar-profile-dropdown-body.profile-loading {
    height: 10.2rem;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%; /* Make the gradient larger than the div to allow animation */
    animation: loading 1.5s infinite;
}

.navbar-profile-dropdown-body.signed-in {
    height: 10rem;
}

.navbar-profile-dropdown-body-loading-otp {
    height: 10.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-dropdown-body-enter-otp p {
    font-family: poppins;
    font-size: 80%;
    margin-left: 2%;
    margin-right: 6.5%;
    margin-top: 2.5px;
    margin-bottom: 5px;
}

.navbar-profile-dropdown-body-enter-otp input {
    width: 91%;
    margin-left: 1.5%;
    font-size: 14px;
    font-family: poppins;
    padding: 2.5%;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
}

.navbar-profile-dropdown-body-enter-otp-btn {
    display: flex;
    // align-items: center;
    justify-content: center;
    margin-top: 5px;
}

.navbar-profile-dropdown-body-enter-otp-btn button {
    margin-left: 0%;
    width: 96%;
    margin-top: 3.5px;
    padding: 4.5%;
    background-color: #FF5733;
    border: 1px solid #FF5733;
    border-radius: 8px;
    color: white;
    font-size: 80%;
    font-weight: bold;
    font-family: lexend;
    cursor: pointer;
}   

.navbar-profile-dropdown-body-enter-otp-btn.clicked button {
    padding: 4%;
}

.navbar-profile-dropdown-body-otp-btn-loading {
    margin-top: 2px;
}

.navbar-profile-dropdown-body-verify-otp {
    text-align: center;
    margin-top: 8.5px;
}

.navbar-profile-dropdown-body-verify-otp-header p {
    font-family: poppins;
    font-size: 82.5%;
    margin-left: 2%;
    margin-right: 6.5%;
    margin-top: 0px;
    margin-bottom: 6.5px;
}

.navbar-profile-dropdown-body-verify-otp input {
    width: 13.5%; /* Relative to the parent container */
    max-width: 50px; /* Optional max size for larger screens */
    height: 2.2rem; /* Adjust height automatically based on width */
    text-align: center;
    font-size: 1.2rem; /* Scales with screen size */
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 1.5%; /* Spacing between boxes */
    margin-right: 1.5%;
    outline: none;
    box-sizing: border-box; /* Ensures padding is included in size */
}

.navbar-profile-dropdown-body-verify-otp-labels {
    display: flex;
    justify-content: space-between;
}

.navbar-profile-dropdown-body-verify-otp-labels p {
    font-family: poppins;
    font-size: 80%;
    margin-right: 6.5%;
    margin-top: 3.5px;
    margin-bottom: 3.5px;
    margin-left: 2%;
    color: #5e626a;
    text-decoration: none;
    transition-property: color, text-decoration;
}

.navbar-profile-dropdown-body-verify-otp-labels p:hover { 
    color: #1980ff;
    text-decoration: underline;
    cursor: pointer;
}

.navbar-profile-dropdown-body-verify-otp-labels h5 {
    font-family: poppins;
    font-weight: normal;
    font-size: 80%;
    margin-top: 3.5px;
    margin-bottom: 3.5px;
    margin-right: 2%;
}

.navbar-profile-dropdown-body-verify-otp-labels label {
    font-weight: bold;
}

.navbar-profile-dropdown-body-verify-otp-btn button {
    margin-left: 0%;
    width: 96%;
    margin-top: 3.5px;
    padding: 4.5%;
    background-color: #FF5733;
    border: 1px solid #FF5733;
    border-radius: 8px;
    color: white;
    font-size: 80%;
    font-weight: bold;
    font-family: lexend;
    cursor: pointer;
}   

.navbar-profile-dropdown-body-verify-otp-btn.clicked button {
    background-color: #e8e8e8;
    color: #818181;
    border: 1px solid #818181;
}

.navbar-profile-dropdown-body-verify-otp-btn.btn-success button {
    background-color: #e8e8e8;
    color: #818181;
    border: 1px solid #818181;
    color: #50b65d; 
    border: 1px solid #50b65d;
}

.navbar-profile-dropdown-body-signed-in {
    // height: 12.2 rem;
}

.navbar-profile-dropdown-body-signed-in-options-container {
    height: 10rem;
    // border: 1px solid black;
}

.navbar-profile-dropdown-body-signed-in-options-cell {
    height: 2.5rem;
    border: 1px solid transparent;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    cursor: pointer;
    transition-property: background-color, border;
}

.navbar-profile-dropdown-body-signed-in-options-cell:hover {
    background-color: #faece9;
    border: 1px solid #FF5733;
}

.navbar-profile-dropdown-body-signed-in-options-cell:hover .navbar-profile-dropdown-body-signed-in-options-cell-img img {
    filter: grayscale(0);
}   

.navbar-profile-dropdown-body-signed-in-options-cell:hover .navbar-profile-dropdown-body-signed-in-options-cell-label p {
    // font-weight: bold;
    text-decoration: underline;
    // color: 
    text-decoration-color: #FF5733;
}   

.navbar-profile-dropdown-body-signed-in-options-cell-img  {
    width: 15%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: filter;
}

.navbar-profile-dropdown-body-signed-in-options-cell-img img {
    width: 50%;
    filter: grayscale(100);
}

.navbar-profile-dropdown-body-signed-in-options-cell-label {
    width: 85%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-dropdown-body-signed-in-options-cell-label p {
    font-family: poppins;
    // margin-top: 0px;
    margin-left: 2.5%;
    font-size:  85%;
    transition-property: text-decoration, color, text-decoration-color;
}

    // - - HOMESCREEN ACCOUNT SETTINGS POPUP - - //

.navbar-profile-account-popup {
    z-index: 3;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 45rem;
    width: 50%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-header {
    height: 5rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-header-left {
    width: 30%;
    border-right: 1px solid #ccc;
    border-top-left-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
}

.navbar-profile-account-popup-header-left-search-bar-container {
    position: absolute;
    bottom: 1rem;
    width: 80%;
    height: 1.8rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.navbar-profile-account-popup-header-left-search-bar-icon {
    width: 13.5%;
    display: flex;
    align-items: center;
    justify-content: right;
}

.navbar-profile-account-popup-header-left-search-bar-icon img {
    width: 55%;
    margin-right: 12.5%;
}

.navbar-profile-account-popup-header-left-search-bar {
    width: 86.5%;
}

.navbar-profile-account-popup-header-left-search-bar input {
    width: 93.5%;
    padding: 4px;
    padding-top: 6.8px;
    outline: none;
    border: 0px solid transparent;
}

.navbar-profile-account-popup-header-right {
    width: 70%;
    // border: 1.5px solid #ccc;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-header-right-label {
    width: 85%;
    // border: 1.5px solid #ccc;
}

.navbar-profile-account-popup-header-right-close {
    width: 15%;
    // border: 1.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-header-right-close img {
    width: 35%;
    margin-top: 0.225rem;
    filter: grayscale(100);
    cursor: pointer;
    transition-property: filter;
}

.navbar-profile-account-popup-header-right-close img:hover {
    filter: grayscale(0);
}

.navbar-profile-account-popup-header-account-setup-incomplete {
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-header-account-setup-incomplete h1 {
    font-family: inter;
    font-size: 19.5px;
    margin-top: 2.25rem;
    margin-left: 2.5%;
    // font-weight: bolder;
}

.navbar-profile-account-popup-body {
    // border: 1px solid black;
    flex-grow: 1;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-body-left {
    border-right: 1px solid #ccc;
    width: 30%;
    height: 100%;
    position: relative;
}

.navbar-profile-account-popup-body-left-settings-option-cell {
    height: 3rem;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.navbar-profile-account-popup-body-left-settings-option-cell:hover {
    background-color:  #faece9;
    transition-property: background-color;
    cursor: pointer;
}

.navbar-profile-account-popup-body-left-settings-option-cell.selected {
    background-color: #faece9;
}

.navbar-profile-account-popup-body-left-settings-option-cell-icon { 
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-body-left-settings-option-cell-icon img { 
    width: 30.5%;
}

.navbar-profile-account-popup-body-left-settings-option-cell-label { 
    width: 78%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-body-left-settings-option-cell-label p { 
    font-family: poppins;
    font-size: 79.5%;
    padding-top: 2.5px;
    color: #5e626a;
}

.navbar-profile-account-popup-body-left-settings-option-cell-selected { 
    width: 2%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-body-left-settings-option-cell-selected.selected {
    background-color: #FF5733;
}

.navbar-profile-account-popup-body-left-footer {
    position: absolute;
    bottom: -1.65rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    // border: 1px solid black;
    height: 7.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Pushes children to the bottom */
    gap: 1rem; /* Adds spacing between child divs */
}

.navbar-profile-account-popup-body-left-footer-sign-out,
.navbar-profile-account-popup-body-left-footer-delete {
    // border: 1px solid black;
    height: 2.65rem;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.navbar-profile-account-popup-body-left-footer-sign-out-icon,
.navbar-profile-account-popup-body-left-footer-delete-icon {
    // border: 1px solid black;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-body-left-footer-sign-out-icon img,
.navbar-profile-account-popup-body-left-footer-delete-icon img {
    width: 31.5%;
}

.navbar-profile-account-popup-body-left-footer-sign-out-label,
.navbar-profile-account-popup-body-left-footer-delete-label {
    // border: 1px solid black;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-body-left-footer-sign-out-label p,
.navbar-profile-account-popup-body-left-footer-delete-label p {
    
}

.navbar-profile-account-popup-body-left-footer-sign-out {
    background-color: #f6f8fa;
    border: 1px solid #5e626a;
    cursor: pointer;
    transition-property: background-color, border;
}

.navbar-profile-account-popup-body-left-footer-sign-out:hover {
    background-color: #faece9;
    border: 1px solid #ff5733;
    cursor: pointer;
}

.navbar-profile-account-popup-body-left-footer-sign-out:hover .navbar-profile-account-popup-body-left-footer-sign-out-icon img {
    filter: grayscale(0);
}

.navbar-profile-account-popup-body-left-footer-sign-out:hover .navbar-profile-account-popup-body-left-footer-sign-out-label p {
    color: #ff5733;
    // font-weight: bold;
}

.navbar-profile-account-popup-body-left-footer-sign-out-icon img {
    width: 28%;
    filter: grayscale(100);
    transition-property: filter;
}

.navbar-profile-account-popup-body-left-footer-sign-out-label p {
    color: #5e626a;
    font-family: inter;
    font-weight: normal;
    font-size: 85%;
    padding-top: 0.5px;
    transition-property: color;
}

.navbar-profile-account-popup-body-left-footer-delete {
   background-color: #ee362a;
   color: white;
   font-family: inter;
}

.navbar-profile-account-popup-body-left-footer-delete p {
   color: white;
   font-family: inter;
   font-size: 85%;
   padding-top: 2.5px;
}


.navbar-profile-account-popup-body-right {
    width: 70%;
    height: 100%;
    // border: 1px solid black;
    border-bottom-right-radius: 8px;
    overflow-y: auto;
}

.navbar-profile-account-popup-account-info {
    margin-left: 6.5%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-info p { 
    
}

.navbar-profile-account-popup-account-info-profile-pic {
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-account-info-profile-pic-img {
    width: 20%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-info-profile-pic-img p {
    font-family: poppins;
    font-size: 75%;
    margin-bottom: 6.5px;
    color: #5e626a;
}

.profile-pic-container {
    width: 45%;
    border: 2px solid #ccc;
    border-radius: 50%;
    padding: 11.5px;
    background-color: #f6f8fa;
    background-image: url('/assets/icons/home-profile/profile-img-bg.png'); /* Set your background image */
    background-size: cover;
    background-position: center;
    display: flex; /* Helps center the image */
    justify-content: center;
    align-items: center;
}


.profile-pic-container img {
    width: 100%; /* Adjust as needed */
    border-radius: 50%; /* Keeps circular shape */
}

.navbar-profile-account-popup-account-info-profile-pic-btn-1 {
    width: 40%;
    // border: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-account-info-profile-pic-btn-1 button {
    margin-top: 2.5rem;
    padding: 9px;
    width: 80%;
    border-radius: 8px;
    border: 1px solid black;
    background-color: #2c95ef;
    border: 1px solid #2c95ef;
    color: white;
    // font-weight: bold;
    font-family: inter;
    cursor: pointer;
}


.navbar-profile-account-popup-account-info-profile-pic-btn-2 {
    width: 40%;
    // border: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-account-info-profile-pic-btn-2 button {
    margin-top: 2.5rem;
    width: 75%;
    padding: 9px;
    border-radius: 8px;
    border: 1px solid black;
    margin-left: -5%;
    background-color: #f6f8fa;
    border: 1px solid #ccc;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: #FF5733;
    // font-weight: bold;
    font-family: inter;
    cursor: pointer;
}

.navbar-profile-account-popup-account-info-details {
    margin-top: 0.65rem;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-dual-inputs {
    display: flex;
    align-items: space-between;
    margin-bottom: 0.5rem;
}

.navbar-profile-account-popup-account-dual-inputs p {
    font-family: poppins;
    font-size: 75%;
    margin-bottom: 6.5px;
    color: #5e626a;
}

.navbar-profile-account-popup-account-dual-inputs input {
    width: 85%;
    padding: 8px;
    font-size: 90%;
    outline: none;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    font-family: inter;
}

.navbar-profile-account-popup-account-info-first-name {
    width: 50%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-info-first-name-header {
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-info-first-name-header-label {
    width: 50%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-info-first-name-header-priority {
    width: 50%;
    // border: 1px solid black;
    position: relative;
}

.navbar-profile-account-popup-account-info-first-name-header-priority span {
    position: absolute;
    bottom: 0.5rem;
    right: 15%;
    background-color: #ffdae0;
    color: #da5773;
    padding: 3%;
    padding-left: 8%;
    padding-right: 8%;
    border-radius: 20px;
    font-size: 60%;
    font-weight: bold;
}

.navbar-profile-account-popup-account-info-first-name-header-priority.success span {
    background-color: #d3eee1;
    color: #0d8360;
    padding-left: 5%;
    padding-right: 5%;
}

.navbar-profile-account-popup-account-info-last-name {
    width: 50%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-account-single-input {
    margin-top: 1.25rem;
}

.navbar-profile-account-popup-account-single-input p {
    display: flex;
    align-items: space-between;
    font-family: poppins;
    font-size: 75%;
    margin-bottom: 3.5px;
    color: #5e626a;
}

.navbar-profile-account-popup-account-single-input h5 {
    font-size: 70%;
    margin-top: 0px;
    margin-right: 5%;
    font-family: lexend;
    font-weight: normal;
    // font-style: italic;
}

.navbar-profile-account-popup-account-single-input input {
    width: 85%;
    padding: 8px;
    font-size: 90%;
    outline: none;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    font-family: inter;
    margin-bottom: 0.2rem;
}

    // # SAVE PROFILE INFORMATION

.navbar-profile-account-popup-account-save-profile-btn {
    position: absolute;
    bottom: 1.6rem;
    right: 2.5%;
    margin-right: 0px;
    width: 62.5%;
    // border: 1px solid black;
    display: flex;
    justify-content: right;
}

.navbar-profile-account-popup-account-save-profile-btn button {
    width: 30%;
    padding: 2.3%;
    background-color: #2c95ef;
    border: 1px solid #2c95ef;
    color: white;
    // font-weight: bold;
    font-family: inter;
    border-radius: 8px;
    cursor: pointer;
}

    // # JIPANGE SETTINGS

.navbar-profile-account-popup-jipange-settings {
    margin-left: 6.5%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-jipange-settings p {
    font-family: poppins;
    font-size: 80%;
    margin-left: 3.5%;
    margin-bottom: -0.95rem;
    // margin-top: 6rem;
    color: #5e626a;
}

.jipange-settings-calendar-container {
    max-width: 93.5%;
    margin: 20px auto;
    padding-top: 1rem;
    border-top: 1px solid #ccc;
    text-align: center;
}
  
.jipange-settings-calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.jipange-settings-calendar-header-prev-btn.hidden {
    display: none;
}

.jipange-settings-calendar-header img {
    width: 16.5px;
    padding-bottom: 6.5px;
    filter: grayscale(100);
    transition-property: filter;
    cursor: pointer;
}

.jipange-settings-calendar-header img:hover {
    filter: grayscale(0);
    cursor: pointer;
}
  
.jipange-settings-calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}
  
.jipange-settings-calendar-day {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    font-family: poppins;
    font-size: 80%;
    border-radius: 6px;
    transition: background-color 0.3s;
}

.jipange-settings-calendar-header h2 {
    margin-top: 0px;
    font-size: 90%;
    font-family: inter;
    margin-left: 0.5%;
    color: #5e626a;
}
  
.jipange-settings-calendar-day:hover {
    background-color: #faece9;
    border: 1px solid #ff5733;
}

.jipange-settings-calendar-day.today {
    font-weight: bold;
    border: 1px solid #ff5733;
}
  
.jipange-settings-calendar-day.selected {
    background-color: #ff5733;
    border: 1px solid #ff5733;
    color: white;
    font-weight: bold;
}

.jipange-settings-day-label {
    font-size: 75%;
}

.jipange-settings-calendar-day.disabled {
    background-color: #f0f0f0; /* Light gray to indicate it's disabled */
    color: #ccc; /* Light gray text */
    cursor: not-allowed; /* Change cursor to indicate unclickable */
}
  
.jipange-settings-calendar-day.disabled:hover {
    background-color: #f0f0f0; /* Disable hover effect */
}

.jipange-settings-selected-dates-container {
    // border: 1px solid black;
    padding-left: 3%;
    padding-right: 2%;
    // overflow-x: auto;
}

.jipange-settings-selected-dates-container p {
    margin-left: 0px;
    margin-bottom: 0.6rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #ccc;
    font-size: 80%;
}

.jipange-settings-selected-dates-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.3px;
    max-height: 200px; /* Set the max height */
    overflow-y: auto;  /* Vertical scroll */
    overflow-x: hidden; /* Prevent horizontal scroll */
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
}

.jipange-settings-selected-dates-grid-empty {
    text-align: center;
}

.jipange-settings-selected-dates-grid-empty img {
    width: 10.5%;
    margin-top: 1.2rem;
}

.jipange-settings-selected-dates-grid-empty h3 {
    font-weight: normal;
    font-size: 85%;
    font-family: poppins;
    color: #5e626a;
}

.jipange-settings-selected-date-square {
    width: 88.5%;
    height: 40px;
    display: inline-block;
    border: 1px solid  #ff5733;
    border-radius: 8px;
    background-color: #faece9;
    margin-bottom: 0.35rem;
    opacity: 0; /* Initially invisible */
    // transform: translateX(-5px); /* Initially position it above */
    transition-property: opacity, transform ; /* Smooth transition */
}

.jipange-settings-selected-date-square:hover {
    text-decoration: underline;
    text-decoration-color: #ff5733;
    // font-weight: bold;
    border: 1px solid #5e626a;
    cursor: pointer;
}

.jipange-settings-selected-date-square.show {
    opacity: 1; /* Fade in */
    // transform: translateX(0); /* Slide to normal position */
}

.jipange-settings-selected-date-square label {
    font-size: 75%;
    font-family: poppins;
    margin-left: 5px;
    margin-top: 15px;
}

.jipange-settings-selected-date-square-item-count label {
    font-size: 65%;
    font-weight: bold;
}

    // # # JIPANGE LOADING SCREEN

.jipange-settings-loading-screen {
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30.5rem;
    flex-direction: column;
}

.jipange-settings-loading-screen p {
    margin-top: 1rem;
}

    // # # JIPANGE SELECTED SCREEN

.jipange-settings-selected-date-screen {
    width: 93.5%;
    // border: 1px solid black;
    height: 100%;
}

.jipange-settings-selected-date-screen-header {
    height: 9rem;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-body {
    // border: 1px solid black;
    height: 28.5rem;
    display: flex;
    flex-direction: column;
}

.jipange-settings-selected-date-screen-body-inner-header {
    // border: 1px solid black;
    height: 7.125rem;
    position: relative;
    display: flex;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-header-search-container {
    border: 1px solid #ccc;
    height: 25.5%;
    width: 100%;
    margin-top: 0rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-body-inner-header-search-bar-icon {
    width: 7.5%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-header-search-bar-icon img {
    width: 45%;
}

.jipange-settings-selected-date-screen-body-inner-header-search-bar {
    width: 92.5%;
    // border: 1px solid black;
    overflow: hidden;
}

.jipange-settings-selected-date-screen-body-inner-header-search-bar input {
    width: 97.5%;
    height: 80.5%;
    padding: 2.5px;
    border: 1px solid transparent;
    outline: none;
    // overflow: hidden;
}

.jipange-settings-selected-date-screen-body-inner-header-categories-carousel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: row;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-body-inner-header-category {
    width: 16.5%;
    height: 96.5%;
    border: 1px solid white;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 6px 12px rgba(0, 0, 0, 0.10);
    margin-right: 2.5%;
    margin-top: 0.1rem;
}

.jipange-settings-selected-date-screen-body-inner-header-category img {
    width: 47.5px;
    position: absolute;
    top: 0;
    right: 0;
}

.jipange-settings-selected-date-screen-body-inner-header-category p {
    position: absolute;
    bottom: 1.15rem;
    left: 5%;
    font-size: 65%;
}

.jipange-settings-selected-date-screen-body-inner-header-next-category {
    width: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-header-next-category img {
    width: 100%;
}

.jipange-settings-selected-date-screen-body-inner-body {
    // border: 1px solid black;
    flex-grow: 1;
}

    // - - CSS TRANSITIONS / ANIMATIONS - - //

.navbar-search-bar,
// .searchResultCellImg img,
.navbar-options-dropdown-left-menu-options-cell,
.navbar-options-dropdown-left-menu-options-cell-icon img,
.navbar-options-dropdown-left-menu-options-cell-details p,
.navbar-options-dropdown-left-menu-options-cell-details h5,
.navbar-options-dropdown-left-menu-options-cell-arrow img,
.navbar-options-dropdown-option-brand-cell,
.navbar-options-dropdown-option-brand-cell-icon img,
.navbar-options-dropdown-option-brand-full-list-text h5,
.navbar-options-dropdown-option-brand-full-list-icon img,
.navbar-options-dropdown,
.navbar-options-icon,
.navbar-options-checkout-home-header-icon img,
.navbar-options-checkout-home,
.navbar-profile-dropdown-header,
.navbar-profile-dropdown-header-signed-in,
.navbar-profile-dropdown-header-signed-in-img img,
.navbar-profile-dropdown-body,
.navbar-profile-dropdown-body-verify-otp-labels p,
.navbar-profile-dropdown-body-verify-otp-btn button,
.navbar-profile-dropdown-body-signed-in-options-cell,
.navbar-profile-dropdown-body-signed-in-options-cell-img img,
.navbar-profile-dropdown-body-signed-in-options-cell-label p,
.navbar-profile-account-popup-header-right-close img,
.navbar-profile-account-popup-body-left-settings-option-cell,
.navbar-profile-account-popup-body-left-footer-sign-out,
.navbar-profile-account-popup-body-left-footer-sign-out-icon img,
.navbar-profile-account-popup-body-left-footer-sign-out-label p,
.jipange-settings-calendar-header img,
.jipange-settings-selected-date-square,
 {
    transition-duration: var(--def-transition-duration);
    transition-timing-function: ease-in-out;
}


`

//* - TRIE NODE IMPLEMENTATION (for search functionality) - *//
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

export default class LandingPg extends Component {

    constructor () {
        super()
        this.state = {

            //* - USER ACCOUNT STATUS - *//
            userSignedIn: true,
            showAccountInformation: false,
            showJipangeSettings: true,

            //* # Profile
            accountSetupComplete: false,
            phoneNumberVerified: true,

            //* # Jipange
            showJipangeSettingsHome: false,
            showJipangeSettingsSelectedDate: true,
            showJipangeSettingsLoading: false,
            selectedDates: new Set(), // Store the selected dates as a set of 'YYYY-MM-DD' strings
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),

            //* - SEARCH BAR COMPONENTS - *//
            searchBarIsClicked: false,
            searchBarInput: '',

            //* - HOME SCREEN SHOPPING CART - *//
            homeScreenCartClicked: false,

            //* - HOME SCREEN PROFILE COMPONENTS - *//
            showProfileDropdownHeaderDefault: true,
            showProfileDropdownHeaderLoading: false,
            showProfileDropdownHeaderSuccess: false,
            showProfileAccountSettings: true,
            showHomeProfileOTPLoading: false,
            showHomeProfileEnterOTP: true,
            showHomeProfileVerifyOTP: false,
            otp: ['', '', '', '', '', ''], // Initial state for the 6 OTP digits
            countdown: 59, // Starting countdown value (in seconds)
            OTPBtnClicked: false,
            OTPVerifySuccess: true,
            showEnterOPTBtnTextHome: true,
            showVerifyOPTBtnTextHome: true,
            verifyOTPBtnText: 'Verify OTP',
            OTPInputDisabled: false,
            transferToProfile: false,

            //* - HOME SCREEN ACCOUNT SETTINGS - *//    
            accountSettingsOpen: true,
            showAccountSetupIncompleteHeader: true,
            accountMenuOption1Selected: false,
            accountMenuOption2Selected: true,
            accountMenuOption3Selected: false,
            accountMenuOption4Selected: false,

            //* - NAVBAR DROPDOWN OPTIONS INFO - *//
            showNavbarDropdownOption1: false,
            showNavbarDropdownOption2: false,
            showNavbarDropdownOption3: true,
            showNavbarDropdownOption4: false,

            dropdownMenuDisplayed: false,

            dropdownMenuOption1Selected: true,
            dropdownMenuOption2Selected: false,
            dropdownMenuOption3Selected: false,
            dropdownMenuOption4Selected: false,

            //* - NAVBAR SHOPPING CART INFO - *//
            totalCartItems: 0,
            totalCartPrice: 0,

            item1CartQty: 1,
            item1CartPrice: 1198,
            item1CartTotal: 0,
            minimumItem1QtyColor: '#bbb',

            item2CartQty: 1,
            item2CartPrice: 75,
            item2CartTotal: 0,
            minimumItem2QtyColor: '#bbb',

            item3CartQty: 1,
            item3CartPrice: 1350,
            item3CartTotal: 0,
            minimumItem3QtyColor: '#bbb',

            item4CartQty: 1,
            item4CartPrice: 148,
            item4CartTotal: 0,
            minimumItem4QtyColor: '#bbb',

            item5CartQty: 1,
            item5CartPrice: 156,
            item5CartTotal: 0,
            minimumItem5QtyColor: '#bbb',

            item6CartQty: 1,
            item6CartPrice: 339,
            item6CartTotal: 0,
            minimumItem6QtyColor: '#bbb',

            item7CartQty: 1,
            item7CartPrice: 278,
            item7CartTotal: 0,
            minimumItem7QtyColor: '#bbb',

            item8CartQty: 1,
            item8CartPrice: 1149,
            item8CartTotal: 0,
            minimumItem8QtyColor: '#bbb',

        }

        //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

        //* - SEARCH BAR REFERENCE - *//
        this.searchBarRef = React.createRef();

        this.inputs = []; // To store input element references
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleOutsideSearchBarClick);
        this.loadCartTotal()
        this.loadCartQty()
    }

    componentWillUnmount() {
        // Remove the click event listener to prevent memory leaks
        document.removeEventListener('click', this.handleOutsideSearchBarClick);
        clearInterval(this.timer); // Clear the timer when the component unmounts
    }

    loadCartTotal = () => {
        let total = this.state.item1CartPrice + this.state.item2CartPrice + this.state.item3CartPrice + this.state.item4CartPrice + this.state.item5CartPrice + this.state.item6CartPrice + this.state.item7CartPrice + this.state.item8CartPrice 

        this.setState({
            totalCartPrice: total
        })
    }

    loadCartQty = () => {
        let total = this.state.item1CartQty + this.state.item2CartQty + this.state.item3CartQty + this.state.item4CartQty + this.state.item5CartQty + this.state.item6CartQty + this.state.item7CartQty + this.state.item8CartQty 

        this.setState({
            totalCartItems: total
        })
    }

    searchBarClicked = () => {
        this.setState({
            searchBarIsClicked: true
        })
    }

    handleOutsideSearchBarClick = (event) => {
        // Check if the click is outside the search bar
        if (
            this.searchBarRef.current && 
            !this.searchBarRef.current.contains(event.target)
        ) {
            this.setState({
                searchBarIsClicked: false,
            });
        }
    };

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    }

    handleSearchChange = (e) => {

        this.setState({
            searchBarInput: e.target.value,
            isSearchLoading: true,
            clearSearchBtn: true,
            showDocsPopupHomescreen: false,
            showTimezones: false
        });
        
        const searchInput = e.target.value.toLowerCase();
        
        // Clear previous timeout
    
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false,
                    showDocsPopupHomescreen: true,
                    clearSearchBtn: false,
                });

            } else {
                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    const filteredOptions = SearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(' '); // Split search input into words
                        const optionWords = name.split(' '); // Split name into words
                    
                        if (searchWords.length === 1) {
                            // Special case: search input is a single word
                            const searchWord = searchWords[0];
                            return optionWords.some(optionWord => optionWord.startsWith(searchWord));
                        } else {
                            // Combine search words into a single substring
                            const searchSubstring = searchWords.join(' ');
                            return name.includes(searchSubstring);
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0; // Check if any results were found
    
                    const highlightedOptions = filteredOptions.map(option => ({
                        ...option,
                        highlightedName: this.highlightMatchedCharacters(option, searchInput)
                    }));
    
                    const groupedResults = this.groupBy(highlightedOptions, 'category');
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // Update state after search logic is complete
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: highlightedOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                });
            }
        }, 0); // Set debounce delay to 500ms
    };

    highlightMatchedCharacters(option, searchInput, isSearchLoading) {
        const name = option.name.toLowerCase();
        const searchRegex = new RegExp(`\\b${searchInput}`, 'i');
        const match = name.match(searchRegex);
        
        if (!isSearchLoading && searchInput && match) {
            // Match found and search input is not empty and not loading
            const startIndex = match.index;
            const endIndex = startIndex + searchInput.length;
            const highlightedName = (
                <span>
                    {option.name.substring(0, startIndex)}
                    <span style={{ fontWeight: "bold", color: "#FF5733" }}>
                        {option.name.substring(startIndex, endIndex)}
                    </span>
                    {option.name.substring(endIndex)}
                </span>
            );
            return highlightedName;
        } else {
            // No match found or search input is empty or loading
            return option.name;
        }
    }

    clearSearchBar = () => {
        this.setState({
            searchBarInput: '',
            clearSearchBtn: false,
            showTimezones: true
        })
    }

    navbarMenuClicked = () => {
        if (this.state.dropdownMenuDisplayed === false) {
            this.setState({ 
                showNavbarDropdownOption1 : true,
                showNavbarDropdownOption2 : false,
                showNavbarDropdownOption3 : false,
                showNavbarDropdownOption4 : false,
             })
        } else {
            this.setState({
                showNavbarDropdownOption1 : false,
                showNavbarDropdownOption2 : false,
                showNavbarDropdownOption3 : false,
                showNavbarDropdownOption4 : false,
            })
        }
        this.setState((prevState) => ({ dropdownMenuDisplayed: !prevState.dropdownMenuDisplayed }));
    }

    exitNavbarMenu = () => {
        this.setState({  
            dropdownMenuDisplayed: false,
            showNavbarDropdownOption1: false,
            showNavbarDropdownOption2 : false,
            showNavbarDropdownOption3 : false,
            showNavbarDropdownOption4 : false,
        })
    }

    navbarDropdownOptionSelected = (option) => {
        for (let i = 1; i < 5; i++) {
            if (option !== i) {
                this.setState({
                    [`showNavbarDropdownOption${i}`]: false
                })
            }
        }
        setTimeout(() => {
            this.setState({
                [`showNavbarDropdownOption${option}`] : true,
            })
        }, 0)
    }

    decreaseItemQty = (item, itemQty) => {
        if (itemQty > 1 && itemQty !== 2) {
          this.setState((prevState) => ({
            [`item${item}CartQty`]: prevState[`item${item}CartQty`] - 1,
            [`minimumItem${item}QtyColor`]: "#000"
          }));
        } else if (itemQty === 2) {
            this.setState((prevState) => ({
                [`item${item}CartQty`]: prevState[`item${item}CartQty`] - 1,
                [`minimumItem${item}QtyColor`]: "#bbb"
              }));
        }
    };

    increaseItemQty = (item, itemQty) => {
        if (itemQty === 1) {
            this.setState({
                [`minimumItem${item}QtyColor`]: "#000"
            })
        }
        this.setState((prevState) => ({
            [`item${item}CartQty`]: prevState[`item${item}CartQty`] + 1,
        }));
    }

    openHomeShoppingCartClicked = () => {
        this.setState({
            homeScreenCartClicked: true
        })
    }

    hideHomeCartClicked = () => {
        this.setState({
            homeScreenCartClicked: false
        })
        this.hideNonOverlayElements();
    }

    hideNonOverlayElements = () => {
        if (this.state.homeScreenCartClicked) {
            this.setState({
                homeScreenCartClicked: false,
            })
        }

        if (this.state.accountSettingsOpen) {
            this.setState({
                showProfileAccountSettings: false,
                accountSettingsOpen: false
            })
        }
    }

    handleOTPDigitChange = (index, event) => {
        const value = event.target.value;
        if (isNaN(value)) return; // Only allow numeric input
    
        const otp = [...this.state.otp];
        otp[index] = value;
    
        this.setState({ otp }, () => {
          if (value && index < this.inputs.length - 1) {
            // Move to the next input if a value is entered
            this.inputs[index + 1].focus();
          }
        });
    };
    
    handleOTPKeyShift = (index, event) => {
    if (event.key === 'Backspace' && !this.state.otp[index] && index > 0) {
        // Move to the previous input on backspace if the current input is empty
        this.inputs[index - 1].focus();
    }
    };

    startCountdown = () => {
        this.timer = setInterval(() => {
          this.setState((prevState) => {
            if (prevState.countdown > 0) {
              return { countdown: prevState.countdown - 1 }; // Decrease countdown
            } else {
              clearInterval(this.timer); // Stop the timer when it reaches 0
              return null;
            }
          });
        }, 1000); // Update every second
    };
    
    formatTime = () => {
    const minutes = Math.floor(this.state.countdown / 60);
    const seconds = this.state.countdown % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    verifyOTPClicked = () => {
        this.setState({
            OTPBtnClicked: true,
            // showVerifyOPTHomeLoading: true,
            // showVerifyOPTBtnTextHome: false,
            showProfileDropdownHeaderDefault: false,
            showProfileDropdownHeaderLoading: true,
            OTPInputDisabled: true,
            verifyOTPBtnText: 'Verifying...'
        }, () => {
            setTimeout(() => {
                this.setState({
                    // OTPBtnClicked: false,
                    // showVerifyOPTHomeLoading: false,
                    // showVerifyOPTBtnTextHome: true,
                    showProfileDropdownHeaderLoading: false,
                })
                this.switchViewToSuccessOTP();
            }, 4500)
        })
    }

    enterOTPClicked = () => {
        this.setState({
            OTPBtnClicked: true,
            showEnterOPTHomeLoading: true,
            showEnterOPTBtnTextHome: false
        }, () => {
            setTimeout(() => {
                this.setState({
                    OTPBtnClicked: false,
                    showEnterOPTHomeLoading: false,
                    showEnterOPTBtnTextHome: true
                })
                this.switchViewToVerifyOTP()
            }, 2000)
        })
    }

    switchViewToVerifyOTP = () => {
        this.setState({
            showHomeProfileOTPLoading: true,
            showHomeProfileEnterOTP: false,
        }, () => {
            setTimeout(() => {
                this.setState({
                    showHomeProfileOTPLoading: false,
                    showHomeProfileVerifyOTP: true
                })
                this.startCountdown();
            }, 2000)
        })
    }

    switchViewToSuccessOTP = () => {
        this.setState({
            showProfileDropdownHeaderSuccess: true,
            verifyOTPBtnText: 'Successful ✔︎',
        }, () => {
            setTimeout(() => {
                this.setState({
                    OTPVerifySuccess: true
                })
            }, 500);
            setTimeout(() => {
                this.switchToUserProfile()
            }, 2500)
        })
    }

    switchToUserProfile = () => {
        this.setState({
            transferToProfile: true,
            // showHomeProfileOTPLoading: true,
            showHomeProfileVerifyOTP: false,
            showProfileDropdownHeaderSuccess: false
        }, () => {
            setTimeout(() => {
                this.setState({
                    transferToProfile: false,
                    userSignedIn: true
                })
            }, 3500)
        })
    }

    accountSettingsClicked = () => {
        if (!this.state.accountSetupComplete) {
            this.setState({
                showProfileAccountSettings: true,
                accountSettingsOpen: true
            })
        }
    }

    getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    getDayOfWeek = (day, month, year) => { // Added function to get day of the week
        return new Date(year, month, day).toLocaleDateString("en-US", { weekday: "short" });
    };

    isPastDate = (day, month, year) => {
        const today = new Date();  // Get today's date
        const selectedDate = new Date(year, month, day); // Create a date object for the selected day
        
        // Compare current date with the selected date, excluding time
        return selectedDate < today.setHours(0, 0, 0, 0); // Returns true if the date has passed
    };

    handlePrevMonth = () => {
        this.setState((prevState) => ({
            currentMonth: prevState.currentMonth === 0 ? 11 : prevState.currentMonth - 1,
        }));
    };

    handleNextMonth = () => {
        this.setState((prevState) => ({
          currentMonth: prevState.currentMonth === 11 ? 0 : prevState.currentMonth + 1,
        }));
    };

    toggleDateSelection = (day) => {
        const { currentMonth, currentYear } = this.state;
        const selectedDate = `${currentYear}-${currentMonth + 1}-${day}`; // Format as 'YYYY-MM-DD'
    
        this.setState((prevState) => {
            const newSelectedDates = new Set(prevState.selectedDates);
            if (newSelectedDates.has(selectedDate)) {
                newSelectedDates.delete(selectedDate);
            } else {
                newSelectedDates.add(selectedDate);
            }
            return { selectedDates: newSelectedDates };
        });
    };
    

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, resultsFound, groupedOptions } = this.state;
        const { currentMonth, currentYear, selectedDates } = this.state;
        const daysInMonth = this.getDaysInMonth(currentMonth, currentYear);
        const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];
        const today = new Date();
        const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

        return (
            <Styles>
                <div onClick={this.hideNonOverlayElements} className={`overlay ${this.state.homeScreenCartClicked || this.state.accountSettingsOpen ? 'active' : ''}`}></div>
                <div className='fullPage'>
                    <div className='navbar'>
                        <div className={`navbar-options-icon ${this.state.dropdownMenuDisplayed ? 'clicked' : ''}`}>
                            <img onClick={this.navbarMenuClicked} src='./assets/icons/navbar/menu-icon.png'/>
                        </div>
                        <div className='navbar-logo-icon'>
                            <img src='./assets/icons/navbar/tusho-logo2.png'/>
                        </div>
                        <div className='navbar-search-bar-area'>
                            <div 
                            ref={this.searchBarRef}
                            className={`navbar-search-bar`}>
                                <div className='navbar-search-bar-icon'>
                                    <img src='/assets/icons/navbar/search-icon.png'/>
                                </div>
                                <div className='navbar-search-bar-textarea'>
                                    <input
                                    id='searchBarInput'
                                    onClick={this.searchBarClicked}
                                    value={this.state.searchBarInput}
                                    placeholder='Search for an item...'
                                    onChange={this.handleSearchChange}
                                    />
                                    {searchInput !== "" && (
                                        <div className={`searchResults ${this.state.searchBarInput === '' ? 'empty' : ''}`}>
                                            {isSearchLoading && 
                                                <div>
                                                    <p>Loading...</p>
                                                </div>
                                            }
                                            {!isSearchLoading && resultsFound && 
                                                Object.entries(groupedOptions).map(([category, options]) => (
                                                    <div style={{borderBottom: "1px solid #ccc", position: "sticky"}} key={category}>
                                                        {options.map(option => (
                                                            <div 
                                                            onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <div className='searchResultCellImg'>
                                                                    <img src={option.img}/>
                                                                </div>
                                                                <div className='searchResultCellDetails'>
                                                                    <p className='searchResultOption'>{option.highlightedName}</p>
                                                                    <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'|'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat4}</label> : null } </p> 
                                                                </div>
                                                                <div className='searchResultCellLabel'>
                                                                    <p>[click to add to cart]</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                            {!isSearchLoading && !resultsFound &&
                                                <div className='navbar-search-bar-no-results' style={{textAlign: "center"}}>
                                                    <p style={{fontWeight: "bold", marginTop: "4.25%", color: "#FF5733"}}>No results found</p>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </div>
                                <div className='navbar-search-bar-clear-btn'>
                                {this.state.clearSearchBtn && <img onClick={this.clearSearchBar} src='/assets/icons/navbar/clear-search-icon.png'/>}
                                </div>
                            </div>
                            <div className='navbar-promo-text'>
                                <p><label>⚡️ </label>Order now and get it within <span style={{color:"#ffd755"}}>90 min</span>!</p>
                            </div>
                        </div>
                        <div className='navbar-shopping-cart-area'>
                            <div className='navbar-shopping-cart'>
                                <img onClick={this.openHomeShoppingCartClicked} src='/assets/icons/navbar/cart-icon.png'/>
                                <div className="navbar-shopping-cart-badge">8</div>
                            </div>
                            <div className='navbar-profile-btn'>
                                <img src='/assets/icons/navbar/profile-btn-icon.png'/>
                            </div>
                        </div>
                    </div>
                    <div className={`navbar-options-dropdown ${this.state.dropdownMenuDisplayed ? 'clicked' : ''}`}>
                        <div className='navbar-options-dropdown-left'>
                            <h5 className='navbar-options-dropdown-left-header'>Save up to 16% on your weekly shopping!</h5>
                            <div className='navbar-options-dropdown-left-header-img'>
                                <img src='/assets/images/navbar-dropdown/promo-dropdown-header-icon3.webp'/>
                            </div>
                            <div className='navbar-options-dropdown-left-menu-options'>
                                <div onClick={() => this.navbarDropdownOptionSelected(1)} className={`navbar-options-dropdown-left-menu-options-cell ${this.state.showNavbarDropdownOption1 ? 'clicked' : ''}`}>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-icon ${this.state.showNavbarDropdownOption1 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/all-brands-dropdown-icon0.png'/>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-details ${this.state.showNavbarDropdownOption1 ? 'clicked' : ''}`}>
                                        <h5>Shop by Brand</h5>
                                        <p>Shop online from 130+ of your favorite brands</p>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-arrow ${this.state.showNavbarDropdownOption1 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div onClick={() => this.navbarDropdownOptionSelected(2)} className={`navbar-options-dropdown-left-menu-options-cell ${this.state.showNavbarDropdownOption2 ? 'clicked' : ''}`}>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-icon ${this.state.showNavbarDropdownOption2 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/jipange-dropdown-icon.png'/>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-details ${this.state.showNavbarDropdownOption2 ? 'clicked' : ''}`}>
                                        <h5>Jipange</h5>
                                        <p>Subscribe to our scheduled delivery service</p>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-arrow ${this.state.showNavbarDropdownOption2 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div onClick={() => this.navbarDropdownOptionSelected(3)} className={`navbar-options-dropdown-left-menu-options-cell ${this.state.showNavbarDropdownOption3 ? 'clicked' : ''}`}>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-icon ${this.state.showNavbarDropdownOption3 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/sell-with-us-dropdown-icon.png'/>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-details ${this.state.showNavbarDropdownOption3 ? 'clicked' : ''}`}>
                                        <h5>Sell With Us</h5>
                                        <p>Broaden the distribution of your brand with us</p>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-arrow ${this.state.showNavbarDropdownOption3 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div onClick={() => this.navbarDropdownOptionSelected(4)} className={`navbar-options-dropdown-left-menu-options-cell ${this.state.showNavbarDropdownOption4 ? 'clicked' : ''}`}>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-icon ${this.state.showNavbarDropdownOption4 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/sell-tickets-dropdown-icon.png'/>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-details ${this.state.showNavbarDropdownOption4 ? 'clicked' : ''}`}>
                                        <h5>Sell Tickets</h5>
                                        <p>Create an events page and sell tickets for your event</p>
                                    </div>
                                    <div className={`navbar-options-dropdown-left-menu-options-cell-arrow ${this.state.showNavbarDropdownOption4 ? 'clicked' : ''}`}>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/join-us-dropdown-icon.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5 className='navbar-options-dropdown-left-menu-options-cell-details-hiring'><label style={{color: "#FF5733"}}>●  </label>We're Hiring!</h5>
                                        <p>Join the tushop team!</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
                                        <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                    </div>
                                </div>
                                <div onClick={this.exitNavbarMenu} className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/exit-dropdown-icon2.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5 className='navbar-options-dropdown-left-menu-options-cell-details-hiring'><label style={{color: "#FF5733"}}>←  </label>Get back to shopping</h5>
                                        <p>Exit menu</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
                                        <img src='/assets/icons/navbar/clear-search-icon.png'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`navbar-options-dropdown-right ${this.state.showNavbarDropdownOption1 || this.state.showNavbarDropdownOption2 || this.state.showNavbarDropdownOption3 || this.state.showNavbarDropdownOption4 ? 'clicked' : ''}`}>
                            {this.state.showNavbarDropdownOption1 && 
                                <div className={`navbar-options-dropdown-option-selected`}>
                                    <h4>OUR PARTNER <label>BRANDS</label></h4>
                                    <div className='navbar-options-dropdown-option-selected-container'>
                                        <div className='navbar-options-dropdown-option-selected-container-header'>
                                            <div><p>MOST POPULAR</p></div>
                                        </div>
                                        <div id='top-navbar-dropdown-option-brand-cell' className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>Soko</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>Rina</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>Festive</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>Garnier</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>Victory Farms</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-cell'>
                                            <div className='navbar-options-dropdown-option-brand-cell-name'>
                                                <p>The Cookie Bar</p>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-cell-icon'>
                                                <img src='/assets/icons/navbar/external-link-dropdown-icon.png'/>
                                            </div>
                                        </div>
                                        <div className='navbar-options-dropdown-option-brand-full-list'>
                                            <div className='navbar-options-dropdown-option-brand-full-list-text'>
                                                <h5>See all brands</h5>
                                            </div>
                                            <div className='navbar-options-dropdown-option-brand-full-list-icon'>
                                                <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            }

                            {this.state.showNavbarDropdownOption2 && 
                                <div className='navbar-options-dropdown-option-selected'>
                                    <h4><label>SCHEDULED</label> DELIVERY</h4>
                                    <div className='navbar-options-dropdown-option-selected-container'>
                                        <div className='navbar-options-dropdown-option-jipange'>
                                            <p>Schedule your deliveries once and get fresh groceries, household essentials and everyday necessities delivered weekly to your doorstep - in just <label>6 easy steps</label>.</p>
                                            <div className='navbar-options-dropdown-option-jipange-steps'>
                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-1-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Browse</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-2-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Select</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-3-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Make a Jipange</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-4-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Customize</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-5-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Schedule</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-6-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Confirm</label></p>
                                                    </div>  
                                                </div>

                                                <button>Sign up</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {this.state.showNavbarDropdownOption3 && 
                                <div className='navbar-options-dropdown-option-selected'>
                                    <h4>SELL YOUR <label>PRODUCTS</label></h4>
                                    <div className='navbar-options-dropdown-option-selected-container'>
                                        <div className='navbar-options-dropdown-option-sell-with-us'>
                                            <p>Sell and deliver your products directly to your customers Nairobi-wide at <label><span>KES 99</span></label>.</p>
                                            <p>Bring your business online with a digital storefront that attract more customers. We also offer secure storage in our warehouse, manage your payment collections, and ensure seamless doorstep delivery to your customers.</p>
                                            <button>Open a store</button>
                                        </div>
                                    </div>
                                </div>
                            }

                            {this.state.showNavbarDropdownOption4 && 
                                <div className='navbar-options-dropdown-option-selected'>
                                    <h4>SELL <label>EVENT TICKETS</label></h4>
                                    <div className='navbar-options-dropdown-option-selected-container'>
                                        <div className='navbar-options-dropdown-option-sell-with-us'>
                                            <p>Set up an events page, sell tickets effortlessly, and host a memorable event with no monthly fees or commissions — just a <label><span>3%</span></label> processing fee.</p>
                                            {/* <p>Bring your business online with a digital storefront to attract more customers. We also offer secure storage in our warehouse, manage your payment collections, and ensure seamless doorstep delivery to your customers.</p> */}
                                            <button>Create an event</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className={`navbar-options-checkout-home ${this.state.homeScreenCartClicked ? 'clicked' : ''}`}>
                        <div className='navbar-options-checkout-home-header'>
                                <div className='navbar-options-checkout-home-header-details'>
                                    <p>Your cart has (<label>{this.state.totalCartItems}</label>) <span>items</span></p>
                                </div>
                                <div className='navbar-options-checkout-home-header-icon'>
                                    <img onClick={this.hideHomeCartClicked} src='/assets/icons/navbar/clear-search-icon-color.png'/>
                                </div>
                            </div>
                        <div className='navbar-options-checkout-home-body'>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/brookside-milk-powder-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Brookside Full Cream Milk Powder Tin (900g)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(1, this.state.item1CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem1QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item1CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(1, this.state.item1CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item1CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/min-maid-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Minute Maid: Mango Pulpy Juice (400ml)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div  onClick={() => this.decreaseItemQty(2, this.state.item2CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem2QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item2CartQty}</p>
                                        </div>
                                        <div  onClick={() => this.increaseItemQty(2, this.state.item2CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item2CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/mac-coffee-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>MacCoffee Classic (200g)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(3, this.state.item3CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem3QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item3CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(3, this.state.item3CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item3CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/bband-product.png'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Blueband Original (250g)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(4, this.state.item4CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem4QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item4CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(4, this.state.item4CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item4CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/brookside-milk-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Brookside Whole Milk 1L Long Life</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(5, this.state.item5CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem5QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item5CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(5, this.state.item5CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item5CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/digestives-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>McVities Digestive Biscuits (400g)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(6, this.state.item6CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem6QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item6CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(6, this.state.item6CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item6CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/mumias-sugar-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Mumias Sugar White (2kg)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(7, this.state.item7CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem7QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item7CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(7, this.state.item7CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item7CartPrice}.00</p>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-item-cell'>
                                <div className='navbar-options-checkout-home-item-cell-icon'>
                                    <img src='/assets/images/products/rinsun-oil-product.webp'/>
                                    <p>remove</p>
                                </div>  
                                <div className='navbar-options-checkout-home-item-cell-details'>
                                    <p>Rinsun 100% Sunflower Oil (3L)</p>
                                </div>
                                <div className='navbar-options-checkout-home-item-cell-qty'>
                                    <div className='navbar-options-checkout-home-item-cell-qty-toggle'>
                                        <div onClick={() => this.decreaseItemQty(8, this.state.item8CartQty)}  className='navbar-options-checkout-home-item-cell-qty-toggle-left'>
                                            <p style={{color: this.state.minimumItem8QtyColor}}>-</p>
                                        </div>
                                        <div className='navbar-options-checkout-home-item-cell-qty-toggle-center'>
                                            <p>{this.state.item8CartQty}</p>
                                        </div>
                                        <div onClick={() => this.increaseItemQty(8, this.state.item8CartQty)} className='navbar-options-checkout-home-item-cell-qty-toggle-right'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                    <p className='navbar-options-checkout-home-item-cell-qty-item-price'>KES {this.state.item8CartPrice}.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-options-checkout-home-footer'>
                            <div className='navbar-options-checkout-home-footer-header'>
                                <div className='navbar-options-checkout-home-footer-header-label'>
                                    <h3>Subtotal</h3>
                                    <h5>Left to FREE shipping:</h5>
                                </div>
                                <div className='navbar-options-checkout-home-footer-header-price'>
                                    <h3 className=''>KES {this.state.totalCartPrice}.00</h3>
                                    <h5>KES 1550</h5>
                                </div>
                            </div>
                            <div className='navbar-options-checkout-home-footer-footer'>
                                <button>Checkout</button>
                                <div className='navbar-options-checkout-home-footer-footer-payment-methods'>
                                    <img src='/assets/icons/home-checkout/mpesa-logo.png'/>
                                    <img src='/assets/icons/home-checkout/airtel-money-logo.png'/>
                                    <img src='/assets/icons/home-checkout/visa-logo.png'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='navbar-profile-dropdown'>
                        <div className={`navbar-profile-dropdown-header ${this.state.OTPVerifySuccess ? this.state.transferToProfile ? 'profile-loading' : this.state.userSignedIn ? 'signed-in' : 'success' : ''}`}>
                            {!this.state.userSignedIn && 
                                <div className='navbar-profile-dropdown-header-signed-out'>
                                    {this.state.showProfileDropdownHeaderDefault &&
                                        <div className='navbar-profile-dropdown-header-default'>
                                            <h3>Create your account in seconds with OTP verification</h3>
                                            <img src='/assets/images/navbar-dropdown/phone-dropdown-header.webp'/>
                                        </div>
                                    }
                                    {this.state.showProfileDropdownHeaderLoading && 
                                        <div className={`navbar-profile-dropdown-header-loading`}>
                                            <TailSpin
                                            visible={true}
                                            height="25px"
                                            width="25px"
                                            color="#fff"
                                            ariaLabel="tail-spin-loading"
                                            radius="2"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            />
                                        </div>
                                    }
                                    {this.state.showProfileDropdownHeaderSuccess && 
                                        <div className={`navbar-profile-dropdown-header-success ${this.state.OTPVerifySuccess ? 'clicked' : ''}`}>
                                            <img src='/assets/icons/home-profile/otp-successful-icon.png'/>
                                        </div>
                                    }
                                </div>
                            }
                            {this.state.userSignedIn && 
                                <div onClick={this.accountSettingsClicked} className='navbar-profile-dropdown-header-signed-in'>
                                    <div className='navbar-profile-dropdown-header-signed-in-img'>
                                        <div className='profile-dropdown-img-container'>
                                            <img src='/assets/icons/home-profile/signed-in-profile-placeholder2.png'/>
                                        </div>
                                    </div>
                                    <div className='navbar-profile-dropdown-header-signed-in-details'>
                                        <h4><label>@</label>0717230621</h4>
                                        <p>Complete account setup</p>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className={`navbar-profile-dropdown-body ${this.state.OTPVerifySuccess && this.state.transferToProfile ? 'profile-loading' : this.state.OTPVerifySuccess && this.state.userSignedIn ? 'signed-in' : ''}`}>
                            {!this.state.userSignedIn && 
                                <div className='navbar-profile-dropdown-body-signed-out'>
                                    {this.state.showHomeProfileOTPLoading && 
                                        <div className='navbar-profile-dropdown-body-loading-otp'>
                                            <RotatingLines
                                            visible={true}
                                            height="23.5"
                                            width="23.5"
                                            strokeColor="#FF5733"
                                            strokeWidth="3"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            />
                                        </div>
                                    }
                                    {this.state.showHomeProfileEnterOTP && 
                                        <div className='navbar-profile-dropdown-body-enter-otp'>
                                            <p>Enter your mobile number</p>
                                            <input
                                            placeholder='07123456789'
                                            />
                                            <div className={`navbar-profile-dropdown-body-enter-otp-btn ${this.state.OTPBtnClicked ? 'clicked' : ''}`}>
                                                <button
                                                onClick={this.enterOTPClicked}
                                                >
                                                    {this.state.showEnterOPTBtnTextHome &&
                                                        <span>Send OTP</span>
                                                    }
                                                    {this.state.showEnterOPTHomeLoading && 
                                                        <div className='navbar-profile-dropdown-body-otp-btn-loading'>
                                                            <RotatingLines
                                                            visible={true}
                                                            height="16.5"
                                                            width="16.5"
                                                            strokeColor="white"
                                                            strokeWidth="3"
                                                            animationDuration="0.75"
                                                            ariaLabel="rotating-lines-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            />
                                                        </div>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    {this.state.showHomeProfileVerifyOTP && 
                                        <div className='navbar-profile-dropdown-body-verify-otp'>
                                            <div className='navbar-profile-dropdown-body-verify-otp-header'>
                                                <p style={{textAlign: "left"}}>Enter the OTP sent to your phone via SMS: </p>
                                            </div>
                                            {this.state.otp.map((digit, index) => (
                                                <input
                                                    disabled={this.state.OTPInputDisabled}
                                                    key={index}
                                                    type="text"
                                                    maxLength="1"
                                                    value={digit}
                                                    onChange={(event) => this.handleOTPDigitChange(index, event)}
                                                    onKeyDown={(event) => this.handleOTPKeyShift(index, event)}
                                                    ref={(input) => (this.inputs[index] = input)} // Save input reference
                                                />
                                            ))}
                                            <div className='navbar-profile-dropdown-body-verify-otp-labels'>
                                                <p>Resend OTP</p>
                                                <h5>OTP Expires in <label>{this.formatTime()}</label></h5>
                                            </div>
                                            <div className={`navbar-profile-dropdown-body-verify-otp-btn ${this.state.OTPBtnClicked ? this.state.OTPVerifySuccess ? 'btn-success' : 'clicked' : ''}`}>
                                                <button
                                                onClick={this.verifyOTPClicked}
                                                >
                                                    {this.state.showVerifyOPTBtnTextHome && 
                                                        <span>{this.state.verifyOTPBtnText}</span>
                                                    }
                                                    {/* {this.state.showVerifyOPTHomeLoading && 
                                                        <span className='navbar-profile-dropdown-body-otp-btn-loading'>
                                                            <RotatingLines
                                                            visible={true}
                                                            height="16.5"
                                                            width="16.5"
                                                            strokeColor="white"
                                                            strokeWidth="3"
                                                            animationDuration="0.75"
                                                            ariaLabel="rotating-lines-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            />
                                                        </span>
                                                    } */}
                                                
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                            {this.state.userSignedIn && 
                                <div className='navbar-profile-dropdown-body-signed-in'>
                                     <div className='navbar-profile-dropdown-body-signed-in-options-container'>
                                        <div className='navbar-profile-dropdown-body-signed-in-options-cell'>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-img'>
                                                <img src='/assets/icons/home-profile/orders-dropdown-icon2.png'/>
                                            </div>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-label'>
                                                <p>My Orders</p>
                                            </div>
                                        </div>
                                        <div className='navbar-profile-dropdown-body-signed-in-options-cell'>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-img'>
                                                <img src='/assets/icons/home-profile/jipange-dropdown-icon.png'/>
                                            </div>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-label'>
                                                <p>Jipange</p>
                                            </div>
                                        </div>
                                        <div className='navbar-profile-dropdown-body-signed-in-options-cell'>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-img'>
                                                <img src='/assets/icons/home-profile/pamoja-dropdown-icon.png'/>
                                            </div>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-label'>
                                                <p>Order Pamoja</p>
                                            </div>
                                        </div>
                                        <div className='navbar-profile-dropdown-body-signed-in-options-cell'>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-img'>
                                                <img src='/assets/icons/home-profile/logout-dropdown-icon2.png'/>
                                            </div>
                                            <div className='navbar-profile-dropdown-body-signed-in-options-cell-label'>
                                                <p>Sign Out</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    {this.state.showProfileAccountSettings &&
                        <div className='navbar-profile-account-popup'>
                            <div className='navbar-profile-account-popup-header'>
                                <div className='navbar-profile-account-popup-header-left'>
                                    <div className='navbar-profile-account-popup-header-left-search-bar-container'>
                                        <div className='navbar-profile-account-popup-header-left-search-bar-icon'>
                                            <img src='/assets/icons/navbar/search-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-header-left-search-bar'>
                                            <input/>
                                        </div>
                                    </div>
                                </div>
                                <div className='navbar-profile-account-popup-header-right'>
                                    <div className='navbar-profile-account-popup-header-right-label'>
                                        {this.state.showAccountInformation && 
                                            <div>
                                                {!this.state.accountSetupComplete && 
                                                    <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                        <h1>Complete Account Setup</h1>
                                                    </div>
                                                }
                                                {this.state.accountSetupComplete && 
                                                    <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                        <h1>Account Information</h1>
                                                    </div>
                                                }
                                            </div>
                                        }
                                        {this.state.showJipangeSettings && 
                                            <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                <h1>My Jipange</h1>
                                            </div>
                                        }
                                    </div>
                                    <div className='navbar-profile-account-popup-header-right-close'>
                                        <img src='/assets/icons/navbar/clear-search-icon-color.png'/>
                                    </div>
                                </div>
                            </div>
                            <div className='navbar-profile-account-popup-body'>
                                <div className='navbar-profile-account-popup-body-left'>
                                    <div className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-icon'>
                                            <img src='/assets/icons/home-profile/edit-profile-option-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-label'>
                                            <p>Profile</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}></div>
                                    </div>
                                    <div className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-icon'>
                                            <img src='/assets/icons/home-profile/edit-jipange-option-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-label'>
                                            <p>Jipange</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}></div>
                                    </div>
                                    <div className='navbar-profile-account-popup-body-left-settings-option-cell'>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-icon'>
                                            <img src='/assets/icons/home-profile/edit-pamoja-option-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-label'>
                                            <p>Pamoja</p>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-selected'>

                                        </div>
                                    </div>
                                    <div className='navbar-profile-account-popup-body-left-settings-option-cell'>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-icon'>
                                            <img src='/assets/icons/home-profile/edit-location-option-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-label'>
                                            <p>Delivery Info</p>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-selected'>

                                        </div>
                                    </div>
                                    <div className='navbar-profile-account-popup-body-left-footer'>
                                        <div className='navbar-profile-account-popup-body-left-footer-sign-out'>
                                            <div className='navbar-profile-account-popup-body-left-footer-sign-out-icon'>
                                                <img src='/assets/icons/home-profile/logout-dropdown-icon.png'/>
                                            </div>
                                            <div className='navbar-profile-account-popup-body-left-footer-sign-out-label'>
                                                <p>Sign Out</p>
                                            </div>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-footer-delete'>
                                            <div className='navbar-profile-account-popup-body-left-footer-delete-icon'>
                                                <img src='/assets/icons/home-profile/edit-trash-option-icon.png'/>
                                            </div>
                                            <div className='navbar-profile-account-popup-body-left-footer-delete-label'>
                                                <p>Delete Account</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='navbar-profile-account-popup-body-right'>
                                    <div className=''>
                                        {this.state.showAccountInformation && 
                                            <div className='navbar-profile-account-popup-account-info'>
                                                <div className='navbar-profile-account-popup-account-info-profile-pic'>
                                                    <div className='navbar-profile-account-popup-account-info-profile-pic-img'>
                                                        <p>Profile picture</p>
                                                        <div className="profile-pic-container">
                                                            <img src='/assets/icons/home-profile/signed-in-profile-placeholder2.png'/>
                                                        </div>
                                                    </div>  
                                                    <div className='navbar-profile-account-popup-account-info-profile-pic-btn-1'>
                                                        <button>Change picture</button>
                                                    </div>  
                                                    <div className='navbar-profile-account-popup-account-info-profile-pic-btn-2'>
                                                        <button>Delete picture</button>
                                                    </div>  
                                                </div>
                                                <div className='navbar-profile-account-popup-account-info-details'>
                                                    <div className='navbar-profile-account-popup-account-dual-inputs'>
                                                        <div className='navbar-profile-account-popup-account-info-first-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p>First name</p>
                                                                </div>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                    <span>REQUIRED</span>
                                                                </div>
                                                            </div>
                                                            <input/>
                                                        </div>
                                                        <div className='navbar-profile-account-popup-account-info-last-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p>Last name</p>
                                                                </div>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                    <span>REQUIRED</span>
                                                                </div>
                                                            </div>
                                                            <input/>
                                                        </div>
                                                    </div>
                                                    <div className='navbar-profile-account-popup-account-dual-inputs'>
                                                        <div className='navbar-profile-account-popup-account-info-first-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p>Email</p>
                                                                </div>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                    <span>REQUIRED</span>
                                                                </div>
                                                            </div>
                                                            <input/>
                                                        </div>
                                                        <div className='navbar-profile-account-popup-account-info-last-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p>Phone no.</p>
                                                                </div>
                                                                <div className={`navbar-profile-account-popup-account-info-first-name-header-priority ${this.state.phoneNumberVerified ? 'success' : ''}`}>
                                                                    <span>✓</span>
                                                                </div>
                                                            </div>
                                                            <input/>
                                                        </div>
                                                    </div>
                                                    <div className='navbar-profile-account-popup-account-single-input'>
                                                        <p>What are three grocery items you just can't live without? 😍</p>
                                                        <h5>We might surprise gift you one of your favorite items! 🍫</h5>
                                                        <p>Item #1</p>
                                                        <input/>
                                                        <p>Item #2</p>
                                                        <input/>
                                                        <p>Item #3</p>
                                                        <input/>
                                                    </div>
                                                </div>
                                                <div className='navbar-profile-account-popup-account-save-profile-btn'>
                                                    <button>Save</button>
                                                </div>
                                            </div>
                                        }
                                        {this.state.showJipangeSettings && 
                                            <div className='navbar-profile-account-popup-jipange-settings'>
                                                {this.state.showJipangeSettingsHome && 
                                                    <div className=''>
                                                        <p>Select the dates you want scheduled delivery:</p>
                                                        <div className="jipange-settings-calendar-container">
                                                            <div className={`jipange-settings-calendar-header`}>
                                                                <img 
                                                                src='/assets/icons/home-profile/jipange-settings-prev-calendar-icon.png'
                                                                onClick={this.handlePrevMonth}
                                                                className={`jipange-settings-calendar-header-prev-btn ${currentMonth === new Date().getMonth() ? "hidden" : ""}`} />
                                                                <h2>{monthNames[currentMonth]} {currentYear}</h2>
                                                                <img src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png' onClick={this.handleNextMonth}/>
                                                            </div>
                                                            <div className="jipange-settings-calendar-grid">
                                                                {[...Array(daysInMonth)].map((_, index) => {
                                                                    const day = index + 1;
                                                                    const dayOfWeek = this.getDayOfWeek(day, currentMonth, currentYear);
                                                                    const isToday = isCurrentMonth && today.getDate() === day;
                                                                    const isPastDate = this.isPastDate(day, currentMonth, currentYear);
                                                                    const selectedDate = `${currentYear}-${currentMonth + 1}-${day}`;
                                                                    return (
                                                                    <div 
                                                                        key={index} 
                                                                        className={`jipange-settings-calendar-day ${this.state.selectedDates.has(selectedDate) ? "selected" : ""} ${isToday ? "today" : ""} ${isPastDate ? "disabled" : ""}`}
                                                                        onClick={() => !isPastDate && this.toggleDateSelection(day)}
                                                                    >
                                                                        <div className="jipange-settings-day-label"><label>{dayOfWeek}</label></div>
                                                                        {day}
                                                                    </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='jipange-settings-selected-dates-container'>
                                                            <p>Select a date to add grocery items:</p>
                                                            <div className=''>
                                                                {this.state.selectedDates.size < 1 ? 
                                                                    (   
                                                                        <div className='jipange-settings-selected-dates-grid-empty'>
                                                                            <div>
                                                                                <img src='/assets/icons/home-profile/no-selected-jipange-icon.png'/>
                                                                            </div>
                                                                            <h3>No existing jipange plans</h3>
                                                                        </div>
                                                                    
                                                                    ) :

                                                                    (
                                                                        <div className='jipange-settings-selected-dates-grid'>
                                                                            {Array.from(this.state.selectedDates).map((dateString) => {
                                                                                const [year, month, day] = dateString.split('-'); // Extract day, month, year
                                                                                const dateObject = new Date(year, month - 1, day); // Month is zero-indexed
                                                                                const monthName = dateObject.toLocaleString('default', { month: 'short' });

                                                                                return (
                                                                                    <div 
                                                                                        key={dateString} 
                                                                                        className={`jipange-settings-selected-date-square ${this.state.selectedDates.has(dateString) ? "show" : ""}`}
                                                                                    >
                                                                                        <label>{monthName}</label> {/* Month */}
                                                                                        <label>{day}</label> {/* Date */}
                                                                                        <div className='jipange-settings-selected-date-square-item-count'>
                                                                                            <label>0 items</label>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {this.state.showJipangeSettingsSelectedDate && 
                                                    <div className='jipange-settings-selected-date-screen'>
                                                        <div className='jipange-settings-selected-date-screen-header'>
                                                    
                                                        </div>
                                                        <div className='jipange-settings-selected-date-screen-body'>
                                                            <div className='jipange-settings-selected-date-screen-body-inner-header'>
                                                                <div className='jipange-settings-selected-date-screen-body-inner-header-search-container'>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-search-bar-icon'>
                                                                        <img src='/assets/icons/navbar/search-icon.png'/>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-search-bar'>
                                                                        <input/>
                                                                    </div>
                                                                </div>
                                                                <div className='jipange-settings-selected-date-screen-body-inner-header-categories-carousel'>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                        <img src='/assets/images/product-categories/fruits-and-veg.webp'/>
                                                                        <p>Fruit & Veg</p>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                        <img src='/assets/images/product-categories/organic.webp'/>
                                                                        <p>Organic</p>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                        <img src='/assets/images/product-categories/meat.webp'/>
                                                                        <p>Meat</p>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                        <img src='/assets/images/product-categories/milk.webp'/>
                                                                        <p>Dairy</p>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                        <img src='/assets/images/product-categories/oil.webp'/>
                                                                        <p>Food Cupboard</p>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                        <img src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='jipange-settings-selected-date-screen-body-inner-body'>

                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {this.state.showJipangeSettingsLoading && 
                                                    <div className='jipange-settings-loading-screen'>
                                                        <TailSpin
                                                        visible={true}
                                                        height="40px"
                                                        width="40px"
                                                        color="#ff5733"
                                                        ariaLabel="tail-spin-loading"
                                                        radius="2"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                        />
                                                        <div>
                                                            <p>Loading...</p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                
            </Styles>
        )
    }
}