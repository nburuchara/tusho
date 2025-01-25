import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'; 

//? - - FILES - - //
import SearchTerms from '../search-terms/SearchTerms'

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
    font-family: lexend;
    font-size: 75%;
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
    font-family: lexend;
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
    width: 16.5%;
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
    padding-bottom: 11.5px;
    z-index: 1;
}

.navbar-profile-dropdown-header {
    background-color: #FF5733;
    border: 5px solid #f3f5f7;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    position: relative;
    overflow: hidden;
}

.navbar-profile-dropdown-header h3 {
    font-family: lexend;
    font-size: 82.5%;
    margin-left: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    margin-right: 18%;
    text-decoration: underline;
}

.navbar-profile-dropdown-header span {
    text-decoration: underline;
    text-decoration-color: #FFF;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
}

.navbar-profile-dropdown-header img {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 18.5%;
}

.navbar-profile-dropdown-body {
    flex-grow: 1;
    // border: 1px solid black;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.navbar-profile-dropdown-body p {
    font-family: poppins;
    font-size: 80%;
    margin-left: 3.5%;
    margin-right: 6.5%;
    margin-top: 2.5px;
    margin-bottom: 5px;
}

.navbar-profile-dropdown-body input {
    width: 89%;
    margin-left: 2.5%;
    font-size: 14px;
    font-family: poppins;
    padding: 2.5%;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
}

.navbar-profile-dropdown-body button {
    margin-left: 2.5%;
    width: 95%;
    margin-top: 9.5px;
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

            //* - SEARCH BAR COMPONENTS - *//
            searchBarIsClicked: false,
            searchBarInput: '',

            //* - HOME SCREEN SHOPPING CART - *//
            homeScreenCartClicked: false,

            //* - HOME SCREEN PROFILE COMPONENTS - *//
            showHomeProfileEnterOTP: false,
            showHomeProfileVerifyOTP: true,
            otp: ['', '', '', '', '', ''], // Initial state for the 6 OTP digits

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

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, resultsFound, groupedOptions } = this.state;

        return (
            <Styles>
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
                                <img src='/assets/images/navbar-dropdown/promo-dropdown-header-icon3.png'/>
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
                                    <img src='/assets/images/products/brookside-milk-powder-product.png'/>
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
                                    <img src='/assets/images/products/min-maid-product.png'/>
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
                                    <img src='/assets/images/products/mac-coffee-product.png'/>
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
                                    <img src='/assets/images/products/brookside-milk-product.png'/>
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
                                    <img src='/assets/images/products/digestives-product.png'/>
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
                                    <img src='/assets/images/products/mumias-sugar-product.png'/>
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
                                    <img src='/assets/images/products/rinsun-oil-product.png'/>
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
                        <div className='navbar-profile-dropdown-header'>
                            <h3>Create your account in seconds with OTP</h3>
                            <img src='/assets/images/navbar-dropdown/phone-dropdown-header.png'/>
                        </div>
                        <div className='navbar-profile-dropdown-body'>
                            {this.state.showHomeProfileEnterOTP && 
                                <div className='navbar-profile-dropdown-body-enter-otp'>
                                    <p>Enter your mobile number</p>
                                    <input
                                    placeholder='07123456789'
                                    />
                                    <button>Send OTP</button>
                                </div>
                            }
                            {this.state.showHomeProfileVerifyOTP && 
                                <div className='navbar-profile-dropdown-body-verify-otp'>
                                    {this.state.otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(event) => this.handleOTPDigitChange(index, event)}
                                            onKeyDown={(event) => this.handleOTPKeyShift(index, event)}
                                            ref={(input) => (this.inputs[index] = input)} // Save input reference
                                            style={{
                                            width: '40px',
                                            height: '40px',
                                            textAlign: 'center',
                                            fontSize: '18px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            }}
                                        />
                                        ))}
                                    <button>Verify OTP</button>
                            </div>
                            }
                            
                        </div>
                    </div>


                </div>
                
            </Styles>
        )
    }
}