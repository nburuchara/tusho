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
    height: 86.5vh;
    margin: auto;
    position: relative;
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
    display: block;
}

.searchResults.empty {
    display: none;
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


    // # # SEARCH RESULTS JIPANGE

.searchResultsJipange {
    z-index: 1;
    // position: relative;
    // margin-left: -6%;
    width: 98%;
    // border: 1px solid black;
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: block;
}


.searchResultsJipange.empty {
    display: none;
    pointer-events: none;
}

.searchResultCellJipange {
    padding: 1%;
    margin-top: 3px;
    margin-bottom: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}

.searchResultCellJipange:hover {
    background-color: #faece9;
    cursor: pointer;
}

.searchResultCellJipange:hover .searchResultCellImg img {
    background-color: #fff;
}

.searchResultCellJipangeImg {
    width: 10%;
}

.searchResultCellJipangeImg img {
    width: 18.5px;
    height: 18.5px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.searchResultCellJipangeDetails {
    width: 70%;
    padding-left: 1%;
}

.searchResultCellJipangeDetails p {
    font-size: 60% !important;
    margin-left: 0px !important;
}

.searchResultCellJipangeLabel {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchResultCellJipangeLabel p {
    font-size: 50% !important;
    margin-top: 0px;
}

.searchResultCellJipange p {
    margin-top: 0px;
    margin-bottom: 5px;
}

.searchResultCellJipange h5 {
    margin-top: 1rem;
    margin-bottom:0px;
    font-family: poppins;
    font-weight: normal;
    color: #5e626a;
}

.searchResultOptionJipange {
    // margin-top: 10px;
    // font-size: 10px;
}

.searchResultCategoryJipange {
    font-size: 30%;
    margin-bottom: 0px;
    margin-top: 5rem;
}

.navbar-search-bar-no-results-jipange {
    height: 1.85rem;
}

.navbar-search-bar-no-results-jipange p {
    margin-top: 5px;
    font-size: 70% !important;
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
    cursor: pointer;
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
    width: 20.5%;
    position: absolute;
    border: 1px solid #ccc;
    height: auto;
    margin-right: 1%;
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
    z-index: 1;
    transform: translate(5%);
    opacity: 0;
    pointer-events: none;
    transition-property: transform, opacity.
}

.navbar-profile-dropdown.selected {
    transform: translate(0);
    opacity: 1;
    pointer-events: auto;
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
    transform: translate(-45%, -50%);
    background-color: white;
    height: 45rem;
    width: 50%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;
    transition-property: transform, opacity;
}

.navbar-profile-account-popup.selected {
    transform: translate(-50%, -50%);
    pointer-events: auto;
    opacity: 1;
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

.navbar-profile-account-popup-body-left-settings-option-cell:hover .navbar-profile-account-popup-body-left-settings-option-cell-label p {
    font-family: poppins;
    font-size: 79.5%;
    padding-top: 2.5px;
    color: #ff5733;
    // font-weight: bold;
    text-decoration: underline;
    transition-property: text-decoration;
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
    filter: grayscale(100%);
}

.navbar-profile-account-popup-body-left-settings-option-cell-icon.selected { 
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(0);
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

.navbar-profile-account-popup-body-left-settings-option-cell-label.selected p { 
    font-family: poppins;
    font-size: 79.5%;
    padding-top: 2.5px;
    color: #ff5733;
    font-weight: bold;
    text-decoration: underline;
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

.navbar-profile-account-popup-account-info-profile-pic-img label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
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
    // background-color: #2c95ef;
    // border: 1px solid #2c95ef;
    background-color: #faece9;
    border: 1px solid #ff5733;
    color: #ff5733;
    font-size: 75%;
    // font-weight: bold;
    font-family: poppins;
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
    font-family: poppins;
    font-size: 80%;
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

.navbar-profile-account-popup-account-info-first-name-header-label label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 1.75px;
    text-decoration-style: wavy;
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
    background-color: #faece9;
    color: #ff5733;
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
    margin-bottom: 4.5px;
    color: #5e626a;
}

.navbar-profile-account-popup-account-single-input label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
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
    font-family: poppins;
    margin-bottom: 0.2rem;
    font-size: 80%;
}

.navbar-profile-account-label-loading-popup-settings {
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: #ff5733;
    border: 1px solid #ff5733;
    color: white;
    // font-weight: bold;
    font-family: poppins;
    border-radius: 8px;
    cursor: pointer;
}

.account-settings-save-btn-loading-screen {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
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

.jipange-settings-calendar-parent-container {
    // border: 1px solid black;
    // height: 37.65rem;
    // overflow-y: auto;
}

.jipange-settings-calendar-parent-container p {
    
}

.jipange-settings-home-confirmed-orders-list {
    margin-top: 1.25rem;
    height: 3rem;
    border: 1.5px solid #5e626a;
    width: 97.5%;
    margin-left: 2.5%;
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
    width: 31.5px;
    margin-top: 1.25rem;
}

.jipange-settings-selected-dates-grid-empty h3 {
    font-weight: normal;
    font-size: 78.5%;
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
    cursor: pointer;
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

.jipange-settings-selected-date-square.show-confirmed {
    opacity: 1;
    background-color: #ff5733;
    border: 1px solid #ff5733;
    color: white;
 }

.jipange-settings-selected-date-square label {
    font-size: 75%;
    font-family: poppins;
    margin-left: 3.5px;
    margin-top: 15px;
    cursor: pointer;
}

.jipange-settings-selected-date-square-item-count label {
    font-size: 60%;
    font-weight: bold;
    cursor: pointer;
}

.jipange-settings-selected-date-square-item-count span {
    font-size: 10px;
    margin-left: 3.5px;
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
    font-size: 75%;
}

// # # JIPANGE SELECTED SCREEN LOADING

.jipange-settings-selected-date-screen-complete {
    width: 93.5%;
    // border: 1px solid black;
    height: 37.5rem;
    position: relative;
    // overflow: hidden;
}

.jipange-settings-selected-date-screen-complete-header {
    height: 25%;
    margin-bottom: 0.5rem;
    // border-bottom: 1px solid #ccc;
    // border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.jipange-settings-selected-date-screen-complete-body {
    height: 75%;
    position: absolute;
    bottom: 0;
    width: 100%;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-complete-body-inner-header {
    height: 11.5%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-option {
    width: 33%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn {
    width: 85%;
    border: 1px solid #5e626a;
    display: flex;
    height: 68.5%;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #faece9;
    cursor: pointer;
    margin-top: 0.15rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn:hover {
    border: 1px solid #ff5733;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn.selected {
    border: 1px solid #ff5733;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn.disabled {
    border: 1px solid #5e626a;
    background-color: #f2f2f2;
    pointer-events: none;
    cursor: not-allowed;
    filter: grayscale(100%);
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn input {
    width: 25%;
    border: 1px solid #ff5733;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn input[type="radio"] {
    transform: scale(1.5); /* Adjust the scale factor as needed */
    accent-color: #ff5733;
    border: 1px solid #ff5733;
    cursor: pointer;
    margin-bottom: 0.15rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-1 {
    width: 25%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 {
    width: 15%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 img { 
    width: 15px;
    margin-top: 1.25px;
    filter: grayscale(100%);
    transition-property: filter;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2.selected img {
    filter: grayscale(0);
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3 {
    width: 60%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 5%;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3 p {
    font-size: 70%;
    margin-top: 0px;
    margin-bottom: 0px;
    transition-property: color, font-weight;
}

.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3.selected p {
    color: #000;
    font-weight: bold;
}

.jipange-settings-selected-date-screen-complete-body-inner-body {
    // border: 1px solid black;
    height: 88.5%;
    position: relative;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-payment-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 7.5rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-payment-loading p {
    margin-left: 0px;
    margin-top: 8px;
 }

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment {
    // border: 1px solid black;
    width: 100%;
    height: 100%;
    position: relative;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field {
    width: 90%;
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    margin-left: 2.5%;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field input {
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 7.5px;
    font-size: 80%;
    font-family: poppins;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field h5 {
    font-size: 70%;
    font-family: poppins;
    font-weight: normal;
    margin-bottom: 0.3rem;
    margin-top: 0.15rem;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-half {
    width: 90%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    height: 3rem;
    margin-left: 2.5%;
    margin-top: 0.1rem;
    margin-bottom: 0.25rem;
    height: auto;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-half input {
    width: 85%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 7.5px;
    font-size: 80%;
    font-family: poppins;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-address-line {
    margin-top: 0.6rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-half h5 {
    font-size: 70%;
    font-family: poppins;
    font-weight: normal;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-expiry {
    width: 50%;
    display: flex;
    // border: 1px solid black;
    flex-direction: column;
}  

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-cvv {
    width: 50%;
    display: flex;
    // border: 1px solid black;
    flex-direction: column;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment {
    width: 100%;
    height: 98.5%;
    position: relative;
    // border: 1px solid black;
}


.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details {
    // border: 1px solid black;
    border-bottom: 1px solid #ccc;
    height: auto;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details h5 {
    margin-top: 5px;
    margin-left: 2.5%;
    margin-bottom: 5px;
    font-weight: normal;
    font-family: poppins;
    font-size: 76.5%;
    color: #5e626a;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-send-prompt {
    text-align: right;
    width: 96%;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-send-prompt button {
    width: 23.5%;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    font-family: poppins;
    font-size: 70%;
    padding: 4px;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-mpesa {
    width: 90%;
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    margin-left: 2.5%;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-mpesa input {
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 7.5px;
    font-size: 80%;
    font-family: poppins;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-mpesa h5 {
    font-size: 70%;
    font-family: poppins;
    font-weight: normal;
    margin-bottom: 0.3rem;
    margin-top: 0.9rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative p {
    margin-top: 0px;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative2 {
    margin-top: 1.5rem;
    border-top: 1px solid #ccc;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative2 p {
    // margin-top: 1.5rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative3 p {
    padding-bottom: 1rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details-instructions {
    padding-bottom: 0.25rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details-instructions2 {
    // padding-bottom: 0.25rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-airtel-payment {
    width: 100%;
    height: 100%;
    position: relative;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-airtel-payment-details {
    border-bottom: 1px solid #ccc;
    height: 15.25rem;
    padding-top: 0.3rem;
    overflow-y: auto;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer {
    position: absolute;
    bottom: 0;
    // border: 1px solid black;
    width: 100%;
    height: 9.25rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details {
    height: 60%;
    // border-bottom: 2.5px solid #ff5733;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-1 {
    // height: 60%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-2 {
    // height: 60%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-1 p {
    margin-left: 2.5%;
    margin-top: 3px;
    margin-bottom: 5px;
    font-size: 82.5%;
    color: #000;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-2 p {
    margin-left: 2.5%;
    margin-bottom: 5px;
    margin-top: 0px;
    font-size: 82.5%;
    color: #000;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-total {
    // height: 60%;
    border-top: 2px solid #ff5733;
    margin-top: 3px;
    padding-top: 0.05rem;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-total h4 {
    margin-left: 2.5%;
    margin-top: 0.3rem;
    font-size: 95%;
    font-family: poppins;
    font-weight: normal;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-btn {
    height: 32.5%;
    // border: 1px solid black;
    margin-top: 1rem;
    margin-left: 2.5%;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-footer-btn button {
    width: 100%;
    height: 100%;
    color: white;
    background-color: #ff5733;
    border: 1px solid #ff5733;
    border-radius: 8px;
    font-family: poppins;
    font-size: 85%;
    cursor: pointer;
}   

.jipange-settings-selected-date-screen-complete-body-inner-body-address-payment {
    // border: 1px solid black;
    height: 100%;
    position: relative;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-payment p {
    margin-left: 2.5%;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent {

}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent h5 {
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 0.5rem;
    margin-top: 1.25rem;
    font-family: poppins;
    font-size: 70%;
    // font-weight: normal;
    color: #5e626a;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent label {
    color: black
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select {
    // border: 1px solid black;
    width: 90%;
    margin-left: 2.5%;
    display: flex;
    justify-content: space-between;
    height: 3.5rem;
    border-radius: 8px;
    border: 1px solid #ff5733;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #faece9;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select.manual-selected {
    background-color: #f2f2f2;
    filter: grayscale(100%);
    pointer-events: none;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-radio {
    width: 15%;
    // border-right: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-radio img {
    width: 30px;
    // filter: grayscale(100%);
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-details {
    width: 85%;
    // border-left: 1px solid black;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-details h5 {
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
    text-decoration: underline;
    color: #ff5733;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-details p {
    margin-top: 0px;
    margin-bottom: 0.1rem;
    font-size: 68%;
    margin-right: 2.5%;
    color: #000;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-enter h4 {
    margin-left: 3%;
    font-weight: normal;
    font-size: 80%;
    font-family: poppins;
    color: #5e626a;
    margin-bottom: 0.5rem;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form {

}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 28%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: right;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer button {
    background-color: #ff5733;
    border: 1px solid #ff5733;
    padding: 10px;
    width: 40%;
    color: white;
    font-family: poppins;
    // font-weight: bold;
    border-radius: 8px;
    margin-right: 2.5%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer-complete-btn-loading {
    display: flex;
    align-items: center;
    justify-content: center;
}

    // # # JIPANGE SELECTED SCREEN EDIT

.jipange-settings-selected-date-screen {
    width: 93.5%;
    // border: 1px solid black;
    height: 100%;
    // overflow: hidden;
}

.jipange-settings-selected-date-screen.loading {
    pointer-events: none;
    cursor: not-allowed;
    // filter: grayscale(100);
}

// # # # JIPANGE SELECTED SCREEN HEADER

.jipange-settings-selected-date-screen-header {
    height: 9.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #ccc;
    // border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.jipange-settings-selected-date-screen-header.non-empty-cart {
    border-bottom: 1px solid #ff5733;
}

.jipange-settings-selected-date-screen-header-inner-header-lining {
    height: 2.5rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date {
    width: 60%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
    // flex-direction: row;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date span {
    background-color: #ffdae0;
    margin-left: 3.5%;
    border-radius: 60%;
    padding: 4px;
    padding-left: 6px;
    padding-right: 6px;
    border: 1px solid #ffdae0;
    transition-property: border;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date span:hover {
    border: 1px solid #da5773;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date img {
    width: 15px;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date label {
    font-size: 85%;
    font-family: poppins; 
}

.jipange-settings-selected-date-screen-header-inner-header-lining-date h4 {
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 2.5%;
    font-family: inter;
    font-size: 75%;
    // text-decoration: underline;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options {
    width: 40%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn {
    width: 28%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn p {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 71.5%;
    display: flex;
    color: #5e626a;
    text-decoration: none;
    transition-property: color;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn.order-purchased p {
    pointer-events: none;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn p:hover {
    color: #ff5733;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn p:hover span {
    text-decoration: underline;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn p:hover label {
    transform: translateX(-5px);
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn label {
    margin-right: 5%;
    transform: translateX(0);
    transition-property: transform;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn span {
    text-decoration: none;
    transition-property: text-decoration;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn {
    width: 72%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: right;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn button {
    width: 92.5%;
    height: 80%;
    font-family: inter;
    font-size: 75%;
    background-color: #faece9;
    border: 1px solid #ff5733;
    border-radius: 6px;
    color: #ff5733;
    display: flex;
    align-items: center;
    justify-content: space-between;
    filter: grayscale(100);
    cursor: not-allowed;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn button:hover {
    text-decoration: underline;
    font-weight: bold;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn.non-empty-cart button {
    filter: grayscale(0);
    cursor: pointer;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn.disabled button {
    filter: grayscale(100%);
    pointer-events: none;
    cursor: not-allowed;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn.active button {
    filter: grayscale(0);
    pointer-events: none;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn img {
    width: 13.5%;
    // border: 1px solid black;
    margin-left: 2%;
    padding-top: 1%;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn label {
    width: 87.5%;
    // border: 1px solid black;
    // margin-right: 5%;
    margin-left: 1%;
    cursor: not-allowed;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn.non-empty-cart label {
    width: 87.5%;
    // border: 1px solid black;
    // margin-right: 5%;
    margin-left: 1%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn-active {
    margin: auto;
    margin-top: 6px;
}

.jipange-settings-selected-date-screen-header-inner-body {
    // border: 1px solid black;
    flex-grow: 1;
    // max-height: 2rem;
}

.jipange-settings-selected-date-screen-header-inner-body-modify-order {
    border-bottom: 1px solid #ff5733;
    flex-grow: 1;
    // padding-bottom: 3rem;
    display: flex;
}


.jipange-settings-selected-date-screen-header-inner-body-payment {
    // border: 1px solid black;
    // height: 6.5rem;
    // flex-grow: 1;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-modify-order {
    // text-align: center;
    // border: 1px solid black;
    width: 100%;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-icon-modify-order {
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-icon-modify-order img {
    width: 22.5px;
    margin-top: 2rem;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-icon img {
    width: 22.5px;
    margin-top: 2rem;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-text {
   text-align: center;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-text p {
   margin-left: 0px;
   margin-top: 5px;
   margin-bottom: 0px;
   font-size: 75%;
}

.jipange-settings-selected-date-screen-header-inner-body-no-items-text h5 {
    margin-left: 0px;
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 75%;
    font-family: poppins;
    color: #ff5733;
}

.jipange-settings-selected-date-screen-header-inner-body-items-container {
    width: 100%;
    height: 5rem;
    // border: 1px solid black;
    overflow-y: auto;
}

.jipange-settings-selected-date-screen-header-inner-body-items-container-modify-order {
    width: 100%;
    height: 6.5rem;
    // border: 1px solid black;
    overflow-y: auto;
}

.jipange-settings-selected-date-screen-header-inner-body-items-list {
    width: 100%;
    padding-bottom: 6.5px;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-header-inner-body-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
}

.jipange-settings-selected-date-screen-header-inner-body-item-name {
    width: 50%;
}

.jipange-settings-selected-date-screen-header-inner-body-item-name p {
    margin-bottom: 0px;
    margin-top: 8px;
    margin-left: 1.5%;
    font-size: 65%;
}

.jipange-settings-selected-date-screen-header-inner-body-item-qty {
    width: 50%;
    // border: 1px solid black;
    text-align: right;
}

.jipange-settings-selected-date-screen-header-inner-body-item-qty p {
    margin-left: 0px;
    margin-bottom: 0px;
    margin-right: 1.5%;
    margin-top: 8px;
    font-size: 65%;
}

.jipange-settings-selected-date-screen-header-inner-body-items-subtotal {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.8rem;
    border-top: 1px solid #ff5733;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-header-inner-body-items-subtotal-label {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 50%;
}

.jipange-settings-selected-date-screen-header-inner-body-items-subtotal-label h4 {
    font-family: inter;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 5%;
    font-size: 80%;
}

.jipange-settings-selected-date-screen-header-inner-body-items-subtotal-value {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 50%;
}

.jipange-settings-selected-date-screen-header-inner-body-items-subtotal-value h4 {
    font-family: inter;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 2.5%;
    font-size: 80%;
}

// # # # JIPANGE SELECTED SCREEN BODY

.jipange-settings-selected-date-screen-body {
    // border: 1px solid black;
    height: 27.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
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
    flex-direction-column;
    // justify-content: space-between;
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

.jipange-settings-selected-date-screen-body-inner-header-search-bar-results {
    width: 100%;
    position: absolute;
    top: 1.65rem;
}

.jipange-settings-selected-date-screen-body-inner-header-categories-carousel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 63.5%;
    display: flex;
    flex-direction: row;
    // border: 1px solid black;
    transform: translateX(0);
    transition-property: transform;
}

.jipange-settings-selected-date-screen-body-inner-header-categories-carousel.next {
    transform: translateX(-110%);
}

.jipange-settings-selected-date-screen-body-inner-header-categories-carousel.transition {
    transform: translateX(110%);
}

.jipange-settings-selected-date-screen-body-inner-header-category {
    width: 16.25%;
    height: 92.5%;
    border: 0.05px solid #fff;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 6px 12px rgba(0, 0, 0, 0.10);
    margin-right: 2.5%;
    margin-top: 0.1rem;
    cursor: pointer;
    display: flex;
}

.jipange-settings-selected-date-screen-body-inner-header-category.selected {
    border: 1.5px solid #FF5733;
    animation: flashBorder 0.5s ease-in-out 5; /* Runs 3 times, then stops */
}

@keyframes flashBorder {
    0% { border-color: #FF5733; }
    50% { border-color: rgba(255, 87, 51, 0); } /* Transparent border */
    100% { border-color: #FF5733; }
}

.jipange-settings-selected-date-screen-body-inner-header-category img {
    width: 42.5px;
    position: absolute;
    top: 2.5px;
    right: 2%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-header-category p {
    position: absolute;
    bottom: 1rem;
    left: 2.5%;
    font-size: 58.5%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-header-prev-category {
    width: 4%;
    margin-right: 2.5%;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-header-prev-category img {
    width: 100%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-header-next-category {
    width: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-header-next-category img {
    width: 100%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-body {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 0.5rem;
    flex-grow: 1;
    overflow-y: auto;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row {
    height: auto;
    // border: 1px solid black;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell {
    height: 100%;
    // border: 1px solid black;
    width: 22.5%;
    display: flex;
    flex-direction: column;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic {
    height: 4.25rem;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic img {
    width: 80%;
    padding-bottom: 0.65rem;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text {
    flex-grow: 1;
    // border: 1px solid black;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn {
    // text-align: right;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text button {
    width: 100%;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 2.5%;
    cursor: pointer;
    font-size: 100%;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart {
    display: flex;
    justify-content: space-between;
    height: 1.55rem;
    border-radius: 8px;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up {
    width: 28%;
    // border: 1px solid black;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #faece9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff5733;
    // font-weight: bold;
    font-size: 90%;
    border: 1px solid #ff5733;
    padding-bottom: 2.5%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count {
    width: 44%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 85%;
    font-family: poppins;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down {
    width: 28%;
    // border: 1px solid black;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #faece9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff5733;
    // font-weight: bold;
    font-size: 90%;
    border: 1px solid #ff5733;
    padding-bottom: 2.5%;
    cursor: pointer;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-price-details {
    display: flex;
    justify-content: space-between;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text h5 {
    font-size: 75%;
    font-family: poppins;
    margin-top: 3px;
    margin-bottom: 0px;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text p {
    font-size: 66.5%;
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
    margin-right: 0px;
    color: #000;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-price-details p {
    color: #5e626a;
    font-size: 55%;
    text-decoration: line-through;
    margin-top: 0.35rem;
    margin-bottom: 0px;
}

.jipange-settings-loading-screen-products {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.5rem;
    flex-direction: column;
    padding: 5px;
}   

.jipange-settings-no-products {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 13.5rem;
    flex-direction: column;
    padding: 2px;
    // border: 1px solid black;
}

.jipange-settings-no-products-icon img {
    width: 25px;
}

.jipange-settings-no-products-text h5 {
    margin-top: 8px;
    font-family: poppins;
    font-size: 80%;
    font-weight: normal;
    color: #5e626a;
}

    // # PAMOJA SETTINGS

.navbar-profile-account-popup-pamoja-settings {
    margin-left: 6.5%;
    border: 1px solid black;
    height: 37.65rem;
}

    // # DELIVERY INFO SETTINGS

.navbar-profile-account-popup-delivery-info-settings {
    margin-left: 6.5%;
    // border: 1px solid black;
    height: 37.65rem;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-delivery-info-settings-header {
    height: 50%;
    // border: 1px solid black;
    position: relative;
}

.navbar-profile-account-popup-delivery-info-settings-header p {
    margin-left: 2.5%;
    margin-bottom: 5px;
    color: #5e626a;
    font-family: poppins;
    font-size: 80%;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types {
    // border: 1px solid black;
    border-top: 1px solid #5e626a;
    width: 95%;
    margin-left: 2.5%;
    height: 20.5%;
    position: relative;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types p {
    margin-left: 0px;
    margin-top: 0px;
    padding-top: 5px;
    font-size: 72.5%;
    color: black;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types-btns {
    position: absolute;
    bottom: 0;
    // border: 1px solid black;
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types-btn {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types-btn button {
    width: 90%;
    height: 70%;
    border-radius: 5.5px;
    border: 1px solid #5e626a;
    font-family: poppins;
    color: #5e626a;
    font-size: 75%;
    cursor: pointer;
}

.navbar-profile-account-popup-delivery-info-settings-header-address-types-btn.selected button {
   background-color: #faece9;
   border: 1px solid #ff5733;
   color: #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-header-save-address-btn {
    position: absolute;
    bottom: 1.5rem;;
    right: 4%;
    width: 25%;
    height: 10%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-delivery-info-settings-header-body-header-title {
    position: absolute;
    bottom: 0.4rem;
    left: 0%;
    margin-left: 3.5%;
    width: 50%;
    // height: 10%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-delivery-info-settings-header-body-header-title p {
    margin-bottom: 0px;
    font-size: 80.5%;
}

.navbar-profile-account-popup-delivery-info-settings-header-save-address-btn button {
    width: 100%;
    height: 100%;
    background-color: #ff5733;
    color: white;
    font-family: poppins;
    font-size: 72.5%;
    border: 1px solid #ff5733;
    border-radius: 6px;
    cursor: pointer;
}

.navbar-profile-account-popup-delivery-info-settings-body {
    // border: 1px solid black;
    border-top: 1px solid #5e626a;
    height: 50%;
    margin-left: 3.5%;
    overflow-y: auto;
    width: 94.5%;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container {
    border: 1px solid black;
    height: 30%;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 2.5%; 
    border-radius: 8px;
    background-color: #faece9;
    border: 1px solid #ff5733;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header {
    height: 40%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-icon {
    width: 15%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-icon img {
    width: 21.5px;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-title {
    width: 70%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-title h3 {
    // font-weight: normal;
    text-decoration: underline;
    font-size: 80%;
    font-family: poppins;
    color: #ff5733;
    margin-top: 2.5px;
    margin-bottom: 0px;
    margin-left: 0.5%;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select {
    width: 15%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14.5px;
    user-select: none;
    margin-top: 2px;
    border: 1px solid #5e626a;
    border-radius: 5px;
    color: white;
    background-color: transparent;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select-checkbox:hover {
    border: 1px solid #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select-checkbox.checked {
    color: white;
    background-color: #ff5733;
    border: 1px solid #ff5733;
}


.navbar-profile-account-popup-delivery-info-settings-body-address-container-body {
    // border: 1px solid black;
    flex-grow: 1;
    position: relative;
    z-index: 1;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body p {
    margin-left: 5.5%;
    margin-right: 6.5%;
    margin-top: 0px;
    margin-bottom: 5px;
    color: #000;
    font-family: poppins;
    font-size: 76.5%;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-btn {
    position: absolute;
    bottom: 0.7rem;
    right: 0;
    width: 18px;
    height: 18px;
    // border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 5.5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.three-dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    filter: grayscale(100%);
}


.three-dots:hover {
    filter: grayscale(0);
}

.three-dots span {
    width: 3px;
    height: 3px;
    background-color: #ff5733;
    border-radius: 50%;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings {
    position: absolute;
    bottom: 1.55rem;
    right: 0;
    width: 35%;
    height: 120%;
    // border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 4.5%;
    z-index: 5;
    flex-direction: column;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1 {
    height: 43%;
    border: 1px solid #ccc;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    background-color: white;
    justify-content: space-between;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1:hover {
    background-color: #faece9;
    cursor: pointer;
    // border: 1px solid #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1:hover .navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-text h5 {
    font-weight: bold;
    text-decoration: underline;
    color: #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-icon {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-icon img {
    width: 11.5px;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-text {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-text h5 {
    color: #5e626a;
    font-weight: normal;
    font-size: 72.5%;
    margin-top: 1.5px;
    margin-bottom: 0px;
    margin-left: 10%;
    font-family: poppins;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5 {
    height: 43%;
    border: 1px solid #ccc;
    border-top: transparent;
    // border-top-right-radius: 8px;
    // border-top-left-radius: 8px;
    display: flex;
    background-color: white;
    justify-content: space-between;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5:hover {
    background-color: #faece9;
    cursor: pointer;
    // border: 1px solid #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5:hover .navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-text h5 {
    font-weight: bold;
    text-decoration: underline;
    color: #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-icon {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-icon img {
    width: 11.5px;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-text {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-text h5 {
    color: #5e626a;
    font-weight: normal;
    font-size: 72.5%;
    margin-top: 1.5px;
    margin-bottom: 0px;
    margin-left: 10%;
    font-family: poppins;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2 {
    height: 43%;
    border: 1px solid #ccc;
    border-top: 1px solid transparent;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2:hover {
    background-color: #faece9;
    cursor: pointer;
    // border: 1px solid #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2:hover .navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-text h5 {
    font-weight: bold;
    text-decoration: underline;
    color: #ff5733;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-icon {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-icon img {
    width: 11.5px;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-text {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-text h5 {
    color: #5e626a;
    font-weight: normal;
    font-size: 72.5%;
    margin-top: 1.5px;
    margin-bottom: 0px;
    margin-left: 10%;
    font-family: poppins;
}

    // # LOADING SCREEN SETTINGS

.navbar-profile-loading-popup-settings {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 13.5rem;
}

.navbar-profile-loading-popup-settings p {
    font-family: poppins;
    color: #5e626a;
    font-size: 80%;
}

//! - - Homepage Elements - - !//

.homepage-header {
    border: 1px solid black;
    position: absolute;
    top: 5rem;
    width: 100%;
    z-index: -1;
    height: 100%;
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
.navbar-profile-dropdown,
.navbar-profile-dropdown-header,
.navbar-profile-dropdown-header-signed-in,
.navbar-profile-dropdown-header-signed-in-img img,
.navbar-profile-dropdown-body,
.navbar-profile-dropdown-body-verify-otp-labels p,
.navbar-profile-dropdown-body-verify-otp-btn button,
.navbar-profile-dropdown-body-signed-in-options-cell,
.navbar-profile-dropdown-body-signed-in-options-cell-img img,
.navbar-profile-dropdown-body-signed-in-options-cell-label p,
.navbar-profile-account-popup,
.navbar-profile-account-popup-header-right-close img,
.navbar-profile-account-popup-body-left-settings-option-cell,
.navbar-profile-account-popup-body-left-settings-option-cell-label p,
.navbar-profile-account-popup-body-left-footer-sign-out,
.navbar-profile-account-popup-body-left-footer-sign-out-icon img,
.navbar-profile-account-popup-body-left-footer-sign-out-label p,
.jipange-settings-calendar-header img,
.jipange-settings-selected-date-screen-header-inner-header-lining-date span,
.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn p,
.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn label,
.jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn span,
.jipange-settings-selected-date-square,
.jipange-settings-selected-date-screen-body-inner-header-categories-carousel,
.jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 img,
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
            showAccountInformation: true,
            showJipangeSettings: false,
            showPamojaSettings: false,
            showDeliveryInfoSettings: false,
            showSettingsPageLoading: false,

            //* # Profile
            accountSetupComplete: false,
            accountSettingFirstName: '',
            accountSettingLastName: '',
            accountSettingEmail: '',
            phoneNumberVerified: true,
            accountSettingsFirstNameUnverifiedLabel: true,
            accountSettingsFirstNameVerifiedLabel: false,
            showFirstNameAccountSettingsLabel: true,
            showFirstNameAccountSettingsLoading: false,
            accountSettingsLastNameUnverifiedLabel: true,
            accountSettingsLastNameVerifiedLabel: false,
            showLastNameAccountSettingsLabel: true,
            showLastNameAccountSettingsLoading: false,
            accountSettingsEmailUnverifiedLabel: true,
            accountSettingsEmailVerifiedLabel: false,
            showEmailAccountSettingsLabel: true,
            showEmailAccountSettingsLoading: false,
            accountSettingsSaveBtnTxt: true,
            accountSettingsSaveBtnLoading: false,

            //* # Jipange
            showJipangeSettingsHome: true,
            showJipangeSettingsSelectedDate: false,
            showJipangeSettingsLoading: false,
            // showConfirmedJipangeOrders: true,
            transitionJipangeSettingsProductList: false,
            transitionHelperJipangeSettingsProductList: false,
            showJipangeProductsList1: true,
            showJipangeProductsList2: false,
            selectedDates: new Set(), // Store the selected dates as a set of 'YYYY-MM-DD' strings
            confirmedJipangeDates: new Set(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            currentJipangeDateString: '',
            selectedJipangeDate: '',
            showJipangeSettingsSelectedDateComplete: false,
            showJipangeSettingsSelectedDateEdit: true,
            showConfirmJipangeOrderRest: true,
            showConfirmJipangeOrderActive: false,
            selectedJipangeProductCategory: 1,
            jipangeProduct1Cat1CountBtn: 0,
            jipangeProduct2Cat1CountBtn: 0,
            jipangeProduct3Cat1CountBtn: 0,
            jipangeProduct4Cat1CountBtn: 0,
            jipangeProduct5Cat1CountBtn: 0,
            showJipangeSelectedDateCart: true,
            showJipangeSelectedDateEmptyCart: false,
            confirmJipangeOrderClicked: false,
            jipangeSelectedDateTotal: 0,
            jipangeProduct1Cat1: 'Tushop Fresh Ripe Bananas',
            jipangeProduct1Cat1Qty: 0,
            jipangeProduct1Cat1Price: 0,
            jipangeProduct2Cat1: 'Tushop Fresh Imported Oranges',
            jipangeProduct2Cat1Qty: 0,
            jipangeProduct2Cat1Price: 0,
            jipangeProduct3Cat1: 'Tushop Fresh Local Watermelon',
            jipangeProduct3Cat1Qty: 0,
            jipangeProduct3Cat1Price: 0,
            jipangeProduct4Cat1: 'Tushop Fresh Mixed Size Tomatoes',
            jipangeProduct4Cat1Qty: 0,
            jipangeProduct4Cat1Price: 0,
            jipangeProduct5Cat1: 'Tushop Fresh Red Onions',
            jipangeProduct5Cat1Qty: 0,
            jipangeProduct5Cat1Price: 0,
            totalJipangeOrderQty: 0,
            selectedJipangePaymentOption: "option1",
            showJipangePaymentLoading: false,
            showJipangeCardPayment: true,
            showJipangeMpesaPayment: false,
            showJipangeAirtelPayment: false,
            showJipangeConfirmAddress: false,
            disableJipangePaymentBtns: false,
            makeJipangePaymentCardDefault: true,
            makeJipangePaymentCardLoading: false,
            makeJipangePaymentMpesaDefault: true,
            makeJipangePaymentMpesaLoading: false,
            makeJipangePaymentAirtelDefault: true,
            makeJipangePaymentAirtelLoading: false,
            jipangeManualAddressLine1: '',
            jipangeManualAddressLine2: '',
            currentJipangePaid: false,
            completeJipangeBtnLoading: false,
            completeJipangeBtnTxt: true,

            //* # DELIVERY INFO *//
            deliveryInfoDefaultAddressSelected: false,
            deliveryInfoDefaultAddressText: "",
            deliveryInfoAddressType1: false,
            deliveryInfoAddressType2: false,
            deliveryInfoAddressType3: false,
            deliveryInfoAddressType4: false,

            //* - SEARCH BAR COMPONENTS - *//
            searchBarIsClicked: false,
            searchBarInput: '',
            searchBarInputJipange: '',

            //* - HOME SCREEN SHOPPING CART - *//
            homeScreenCartClicked: false,

            //* - HOME SCREEN PROFILE COMPONENTS - *//
            accountOptionsDropdownClicked: false,
            showProfileDropdownHeaderDefault: true,
            showProfileDropdownHeaderLoading: false,
            showProfileDropdownHeaderSuccess: false,
            showProfileAccountSettings: false,
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
            accountSettingsOpen: false,
            currentMenuOption: 1,
            showAccountSetupIncompleteHeader: true,
            accountMenuOption1Selected: true,
            accountMenuOption2Selected: false,
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

    handleSearchChangeJipange = (e) => {

        this.setState({
            searchBarInputJipange: e.target.value,
            isSearchLoading: true,
            clearSearchBtn: true,
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

    openHomeProfileOptionsClicked = () => {
        this.setState((prevState) => ({
            accountOptionsDropdownClicked: !prevState.accountOptionsDropdownClicked,
        }))
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

    menuOptionClicked = (option) => {
        let prevMenuOption = "";
        let newMenuOption = "";

        this.setState((prevState) => {
            switch (prevState.currentMenuOption) {
                case 1:
                    prevMenuOption = "showAccountInformation";
                    break;
                case 2:
                    prevMenuOption = "showJipangeSettings";
                    break;
                case 3:
                    prevMenuOption = "showDeliveryInfoSettings";
                    break;
                default:
                    prevMenuOption = "showAccountInformation";
            }

            switch (option) {
                case 1:
                    newMenuOption = "showAccountInformation";
                    break;
                case 2:
                    newMenuOption = "showJipangeSettings";
                    break;
                case 3:
                    newMenuOption = "showDeliveryInfoSettings";
                    break;
                default:
                    newMenuOption = "showAccountInformation";
            }

            return {
                [`accountMenuOption${prevState.currentMenuOption}Selected`]: false,
                [`accountMenuOption${option}Selected`]: true,
                currentMenuOption: option,
                [`${prevMenuOption}`]: false,
                showSettingsPageLoading: true

            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    showSettingsPageLoading: false,
                    [`${newMenuOption}`]: true
                })
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
        if (true) {
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
            return { selectedDates: newSelectedDates};
        });
    };
    
    nextJipangeSettingsProductList = (currList) => {
        this.setState({
            transitionJipangeSettingsProductList: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    [`showJipangeProductsList${currList}`]: false,
                    transitionJipangeSettingsProductList: false,
                    transitionHelperJipangeSettingsProductList: true
                })
            }, 500)
            setTimeout(() => {
                this.setState({
                    [`showJipangeProductsList${currList+1}`]: true,
                    transitionHelperJipangeSettingsProductList: false
                })
            }, 800)
        })
    }

    prevJipangeSettingsProductList = (currList) => {
        this.setState({
            transitionHelperJipangeSettingsProductList: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    [`showJipangeProductsList${currList}`]: false,
                    transitionHelperJipangeSettingsProductList: false,
                    transitionJipangeSettingsProductList: true,
                })
            }, 500)
            setTimeout(() => {
                this.setState({
                    [`showJipangeProductsList${currList-1}`]: true,
                    transitionJipangeSettingsProductList: false,
                })
            }, 800)
        })
    }

    jipangeItemQtyIncrease = (productNo, CatNo, itemQty, price) => {
        if (itemQty === 0) {
            this.setState((prevState) => ({
                [`jipangeProduct${productNo}Cat${CatNo}CartBtn`]: false,
                [`jipangeProduct${productNo}Cat${CatNo}AdjustCartBtn`]: true,
                // [`jipangeProduct${productNo}Cat${CatNo}Price`]: prevState[`jipangeProduct${productNo}Cat${CatNo}Price`] + price
            }))
        } 
        this.setState((prevState) => ({
            [`jipangeProduct${productNo}Cat${CatNo}CountBtn`]: prevState[`jipangeProduct${productNo}Cat${CatNo}CountBtn`] + 1,
            [`jipangeProduct${productNo}Cat${CatNo}Qty`]: prevState[`jipangeProduct${productNo}Cat${CatNo}Qty`] + 1,
            [`jipangeProduct${productNo}Cat${CatNo}Price`]: prevState[`jipangeProduct${productNo}Cat${CatNo}Price`] + (price),
            jipangeSelectedDateTotal: this.state.jipangeSelectedDateTotal + price
        }));
    }

    jipangeItemQtyDecrease = (productNo, CatNo, itemQty, price) => {
        if (itemQty === 1) {
            this.setState({
                [`jipangeProduct${productNo}Cat${CatNo}CartBtn`]: true,
                [`jipangeProduct${productNo}Cat${CatNo}AdjustCartBtn`]: false
            })
        }
        this.setState((prevState) => ({
            [`jipangeProduct${productNo}Cat${CatNo}CountBtn`]: prevState[`jipangeProduct${productNo}Cat${CatNo}CountBtn`] - 1,
            [`jipangeProduct${productNo}Cat${CatNo}Qty`]: prevState[`jipangeProduct${productNo}Cat${CatNo}Qty`] - 1,
            [`jipangeProduct${productNo}Cat${CatNo}Price`]: prevState[`jipangeProduct${productNo}Cat${CatNo}Price`] - price,
            jipangeSelectedDateTotal: this.state.jipangeSelectedDateTotal - price
        }));
    }

    confirmJipangeOrder = (basketQty) => {
        if (basketQty > 0) {
            this.setState({
                confirmJipangeOrderClicked: true,
                showConfirmJipangeOrderActive: true,
                showConfirmJipangeOrderRest: false
            }, () =>  {
                setTimeout(() => {
                    this.setState({
                        confirmJipangeOrderClicked: false,
                        showConfirmJipangeOrderActive: false,
                        showConfirmJipangeOrderRest: true
                    })
                    this.transitionToJipangeFinalStep()
                }, 2500)
            })
        }
    }

    transitionToJipangeFinalStep = () => {
        this.setState({
            showJipangeSettingsSelectedDateEdit: false,
            showJipangeSettingsLoading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showJipangeSettingsLoading: false,
                    showJipangeSettingsSelectedDateComplete: true
                })
            }, 2500)
        })
    }

    backToJipangeOrderSelection = () => {
 
    }

    jipangeDateScheduleClicked = (dateObject, dateString) => {

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // getMonth() is zero-based
        const day = dateObject.getDate();
    
        const dateObj = new Date(year, month - 1, day); // Month is zero-indexed
        const monthName = dateObj.toLocaleString('default', { month: 'short' });
    
        this.setState({
            showJipangeSettingsHome: false,
            showJipangeSettingsLoading: true,
            selectedJipangeDate: `${monthName}. ${day} ${year}`,
            currentJipangeDateString: dateString
        }, () => {
            setTimeout(() => {
                this.setState({
                    showJipangeSettingsLoading: false,
                    showJipangeSettingsSelectedDate: true
                })
            }, 2500)
        });
    };

    backToJipangeScheduleClicked = () => {
        this.setState({
            showJipangeSettingsSelectedDate: false,
            showJipangeSettingsLoading: true,
            selectedJipangeDate: ''
        }, () => {
            setTimeout(() => {
                this.setState({
                    showJipangeSettingsLoading: false,
                    showJipangeSettingsHome: true
                })
            }, 2500)
        });
    }
    
    jipangeProductCategoryClicked = (category) => {
        this.setState({
            selectedJipangeProductCategory: 0,
            currentJipangeCategory: category
        }, () => {
            setTimeout(() => {
                this.setState({
                    selectedJipangeProductCategory: category
                })
            }, 2500)
        })
    }

    handleJipangePaymentOptionChange = (event) => {
        this.setState({ selectedJipangePaymentOption: event.target.value });
    };

    handleJipangePaymentOptionChange2 = (option) => {

        this.setState({
            
        })

        if (this.state.showJipangeCardPayment) {
            if  (option === 2 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeCardPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeMpesaPayment: true
                        })
                    }, 2500)
                })
            } else if (option === 3 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeCardPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeAirtelPayment: true
                        })
                    }, 2500)
                })
            }
        } else if (this.state.showJipangeMpesaPayment) {
            if  (option === 1 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeMpesaPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeCardPayment: true
                        })
                    }, 2500)
                })
            } else if (option === 3 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeMpesaPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeAirtelPayment: true
                        })
                    }, 2500)
                })
            }
        } else if (this.state.showJipangeAirtelPayment) {
            if (option === 1 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeAirtelPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeCardPayment: true
                        })
                    }, 2500)
                })
            } else if (option === 2 && !this.state.showJipangePaymentLoading) {
                this.setState({
                    selectedJipangePaymentOption: `option${option}`,
                    showJipangeAirtelPayment: false,
                    showJipangePaymentLoading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            showJipangePaymentLoading: false,
                            showJipangeMpesaPayment: true
                        })
                    }, 2500)
                })
            }
        }
        
    }

    handleSearchStandardInput = (event) => {
        this.setState({
            [event.target.id] : event.target.value,
        })
    }

    completeJipangeBtnClicked = () => {
        this.saveJipangeOrder()
        this.setState({
            completeJipangeBtnLoading: true,
            completeJipangeBtnTxt: false,
            totalJipangeOrderQty: this.state.jipangeProduct1Cat1Qty + this.state.jipangeProduct2Cat1Qty + this.state.jipangeProduct3Cat1Qty + this.state.jipangeProduct4Cat1Qty + this.state.jipangeProduct5Cat1Qty
        }, () => {
            setTimeout(() => {
                this.setState({
                    completeJipangeBtnLoading: false,
                    completeJipangeBtnTxt: true
                })
                this.jipangeTransitionBackToHome()
            }, 2500)
        })
    }

    jipangeHandlePaymentConfirmed = (paymentType) => {
        this.setState({
            [`makeJipangePayment${paymentType}Default`]: false,
            [`makeJipangePayment${paymentType}Loading`]: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    [`makeJipangePayment${paymentType}Default`]: true,
            [`makeJipangePayment${paymentType}Loading`]: false
                })
            }, 2500)
            setTimeout(() => {
                this.jipangeTransitionToShippingAddress()
            }, 2000)
        })
    }

    jipangeTransitionToShippingAddress = () => {
        this.setState({
            showJipangePaymentLoading: true,
            showJipangeCardPayment: false,
            showJipangeAirtelPayment: false,
            showJipangeMpesaPayment: false,
            disableJipangePaymentBtns: true,
            currentJipangePaid: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showJipangePaymentLoading: false,
                    showJipangeConfirmAddress: true,
                })
            }, 2500)
        })
    }

    saveJipangeOrder = () => {
        this.setState((prevState) => {
            const newConfirmedJipangeDates = new Set(prevState.selectedDates)
            newConfirmedJipangeDates.add(this.state.currentJipangeDateString)
            return { confirmedJipangeDates: newConfirmedJipangeDates };
        })
    }
    
    jipangeTransitionBackToHome = () => {
        this.setState({
            showJipangeSettingsSelectedDate: false,
            showJipangeSettingsLoading: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    showJipangeSettingsLoading: false,
                    showJipangeSettingsHome: true,
                    currentJipangePaid: false,
                    disableJipangePaymentBtns: false,
                    showJipangeConfirmAddress: false,
                    showJipangeCardPayment: true,
                    showJipangeSettingsSelectedDateComplete: false,
                    showJipangeSettingsSelectedDateEdit: true,
                })
            }, 2500)
        })
    }

    saveAccountSettingsClicked = () => {
        this.setState({
            accountSettingsSaveBtnTxt: false,
            accountSettingsSaveBtnLoading: true,
            showFirstNameAccountSettingsLabel: false,
            showFirstNameAccountSettingsLoading: true,
            showLastNameAccountSettingsLabel: false,
            showLastNameAccountSettingsLoading: true,
            showEmailAccountSettingsLabel: false,
            showEmailAccountSettingsLoading: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    accountSettingsSaveBtnLoading: false,
                    accountSettingsSaveBtnTxt: true
                })
                if (this.state.accountSettingFirstName !== '') {
                    this.setState({ 
                        accountSettingsFirstNameUnverifiedLabel: false,
                        accountSettingsFirstNameVerifiedLabel: true
                    })
                } else {
                    this.setState({
                        showFirstNameAccountSettingsLabel: true,
                        showFirstNameAccountSettingsLoading: false,
                    })
                }

                if (this.state.accountSettingLastName !== '') {
                    this.setState({ 
                        accountSettingsLastNameUnverifiedLabel: false,
                        accountSettingsLastNameVerifiedLabel: true
                     })
                } else {
                    this.setState({
                        showLastNameAccountSettingsLabel: true,
                        showLastNameAccountSettingsLoading: false,
                    })
                }

                if (this.state.accountSettingEmail !== '') {
                    this.setState({ 
                        accountSettingsEmailUnverifiedLabel: false,
                        accountSettingsEmailVerifiedLabel: true
                     })
                } else {
                    this.setState({
                        showEmailAccountSettingsLabel: true,
                        showEmailAccountSettingsLoading: false,
                    })
                }
                if (this.state.accountSettingFirstName !== '' && this.state.accountSettingEmail !== '' && this.state.accountSettingLastName !== '') {
                    this.setState({
                        accountSetupComplete: true
                    })
                }

            }, 2500)
        })
    }

    deliveryInfoDefaultAddressCheckboxClick = () => {
        this.setState((prevState) => ({ deliveryInfoDefaultAddressSelected: !prevState.deliveryInfoDefaultAddressSelected }));
    };

    deliveryInfoDefaultAddressTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    deliveryInfoAddressTypeClicked = (option) => {
        this.setState((prevState) => {
            return {
                [`deliveryInfoAddressType${prevState.currentDeliveryInfoAddressType}`]: false,
                currentDeliveryInfoAddressType: option,
                [`deliveryInfoAddressType${option}`]: true
            }
        })
    }

    deliveryInfoHomeAddressOptionsClicked = () => {
        this.setState((prevState) => {
            return {
                showDeliveryInfoOption1Settings: !prevState.showDeliveryInfoOption1Settings,
                showDeliveryInfoOption1SettingsBtn: !prevState.showDeliveryInfoOption1SettingsBtn,
            }
        })
    }

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

                        {/* - - - - - NAVBAR & NAVBAR OPTIONS - - - - - */}

                        {/* - - - Navbar - - - */}

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
                                <img onClick={this.openHomeProfileOptionsClicked} src='/assets/icons/navbar/profile-btn-icon.png'/>
                            </div>
                        </div>
                    </div>

                        {/* - - - Home Dropdown - - - */}

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
                                            <p>Schedule your deliveries once and get fresh groceries, household essentials and everyday necessities delivered weekly to your doorstep - in just <label>3 easy steps</label>.</p>
                                            <div className='navbar-options-dropdown-option-jipange-steps'>
                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-1-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Schedule delivery</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-2-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Add to cart</label></p>
                                                    </div>  
                                                </div>

                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-3-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Make payment</label></p>
                                                    </div>  
                                                </div>

                                                {/* <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-4-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Customize</label></p>
                                                    </div>  
                                                </div> */}

                                                {/* <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-5-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Schedule</label></p>
                                                    </div>  
                                                </div> */}
{/* 
                                                <div className='navbar-options-dropdown-option-jipange-step'>
                                                    <div className='navbar-options-dropdown-option-jipange-step-icon'>
                                                        <img src='/assets/icons/navbar/jipange-bullet-6-dropdown-icon.png'/>
                                                    </div>
                                                    <div className='navbar-options-dropdown-option-jipange-step-name'>
                                                        <p><label>Confirm</label></p>
                                                    </div>  
                                                </div> */}

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

                        {/* - - - Checkout Sidepane - - - */}

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

                        {/* - - - Account Dropdown - - - */}

                    <div className={`navbar-profile-dropdown ${this.state.accountOptionsDropdownClicked ? 'selected' : ''}`}>
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
                                        {!this.state.accountSetupComplete && 
                                            <>
                                                <h4><label>@</label>0712506286</h4>
                                                <p>Complete account setup</p>
                                            </>
                                        }
                                        {this.state.accountSetupComplete && 
                                            <>
                                                <h4><span></span>{this.state.accountSettingFirstName} {this.state.accountSettingLastName}</h4>
                                                <p>Account Information</p>
                                            </>
                                        }
                                        
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

                        {/* - - - Account Popup - - - */}
                    
                    <div className={`navbar-profile-account-popup ${this.state.accountSettingsOpen ? 'selected' : ''}`}>
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
                                        {this.state.showPamojaSettings && 
                                            <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                <h1>My Pamoja</h1>
                                            </div>
                                        }
                                        {this.state.showDeliveryInfoSettings && 
                                            <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                <h1>My Delivery Info</h1>
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
                                    <div onClick={() => this.menuOptionClicked(1)} className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-icon ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}>
                                            <img src='/assets/icons/home-profile/edit-profile-option-icon2.png'/>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-label ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}>
                                            <p>Profile</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption1Selected ? 'selected' : ''}`}></div>
                                    </div>
                                    <div onClick={() => this.menuOptionClicked(2)} className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-icon ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}>
                                            <img src='/assets/icons/home-profile/edit-jipange-option-icon2.png'/>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-label ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}>
                                            <p>Jipange</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption2Selected ? 'selected' : ''}`}></div>
                                    </div>
                                    {/* <div className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-icon'>
                                            <img src='/assets/icons/home-profile/edit-pamoja-option-icon.png'/>
                                        </div>
                                        <div className='navbar-profile-account-popup-body-left-settings-option-cell-label'>
                                            <p>Pamoja</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}></div>
                                    </div> */}
                                    <div onClick={() => this.menuOptionClicked(3)} className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-icon ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}>
                                            <img src='/assets/icons/home-profile/edit-location-option-icon2.png'/>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-label ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}>
                                            <p>Delivery Info</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption3Selected ? 'selected' : ''}`}>

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
                                                        <p><label>Profile picture</label></p>
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
                                                                    <p><label>First name</label></p>
                                                                </div>
                                                                {this.state.accountSettingsFirstNameUnverifiedLabel && 
                                                                    <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                        <span>
                                                                            {this.state.showFirstNameAccountSettingsLabel && 
                                                                                <>
                                                                                    REQUIRED
                                                                                </>
                                                                            }
                                                                            {this.state.showFirstNameAccountSettingsLoading && 
                                                                                <div className='navbar-profile-account-label-loading-popup-settings'>
                                                                                    <TailSpin
                                                                                    visible={true}
                                                                                    height="12px"
                                                                                    width="12px"
                                                                                    color="#ff5733"
                                                                                    ariaLabel="tail-spin-loading"
                                                                                    radius="1.5"
                                                                                    wrapperStyle={{}}
                                                                                    wrapperClass=""
                                                                                    />
                                                                                    {/* <div>
                                                                                        <p>Loading...</p>
                                                                                    </div> */}
                                                                                </div>
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {this.state.accountSettingsFirstNameVerifiedLabel && 
                                                                    <div className={`navbar-profile-account-popup-account-info-first-name-header-priority ${this.state.phoneNumberVerified ? 'success' : ''}`}>
                                                                        <span>✓</span>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <input
                                                            id='accountSettingFirstName'
                                                            placeholder='John'
                                                            value={this.state.accountSettingFirstName}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                        <div className='navbar-profile-account-popup-account-info-last-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p><label>Last name</label></p>
                                                                </div>
                                                                {this.state.accountSettingsLastNameUnverifiedLabel && 
                                                                    <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                        <span>
                                                                            {this.state.showLastNameAccountSettingsLabel && 
                                                                                <>
                                                                                    REQUIRED
                                                                                </>
                                                                            }
                                                                            {this.state.showLastNameAccountSettingsLoading && 
                                                                                <div className='navbar-profile-account-label-loading-popup-settings'>
                                                                                    <TailSpin
                                                                                    visible={true}
                                                                                    height="12px"
                                                                                    width="12px"
                                                                                    color="#ff5733"
                                                                                    ariaLabel="tail-spin-loading"
                                                                                    radius="1.5"
                                                                                    wrapperStyle={{}}
                                                                                    wrapperClass=""
                                                                                    />
                                                                                    {/* <div>
                                                                                        <p>Loading...</p>
                                                                                    </div> */}
                                                                                </div>
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {this.state.accountSettingsLastNameVerifiedLabel && 
                                                                    <div className={`navbar-profile-account-popup-account-info-first-name-header-priority ${this.state.phoneNumberVerified ? 'success' : ''}`}>
                                                                        <span>✓</span>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <input
                                                            id='accountSettingLastName'
                                                            placeholder='Appleseed'
                                                            value={this.state.accountSettingLastName}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='navbar-profile-account-popup-account-dual-inputs'>
                                                        <div className='navbar-profile-account-popup-account-info-first-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p><label>Email</label></p>
                                                                </div>
                                                                {this.state.accountSettingsEmailUnverifiedLabel && 
                                                                    <div className='navbar-profile-account-popup-account-info-first-name-header-priority'>
                                                                        <span>
                                                                            {this.state.showEmailAccountSettingsLabel && 
                                                                                <>
                                                                                    REQUIRED
                                                                                </>
                                                                            }
                                                                            {this.state.showEmailAccountSettingsLoading && 
                                                                                <div className='navbar-profile-account-label-loading-popup-settings'>
                                                                                    <TailSpin
                                                                                    visible={true}
                                                                                    height="12px"
                                                                                    width="12px"
                                                                                    color="#ff5733"
                                                                                    ariaLabel="tail-spin-loading"
                                                                                    radius="1.5"
                                                                                    wrapperStyle={{}}
                                                                                    wrapperClass=""
                                                                                    />
                                                                                    {/* <div>
                                                                                        <p>Loading...</p>
                                                                                    </div> */}
                                                                                </div>
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {this.state.accountSettingsEmailVerifiedLabel && 
                                                                    <div className={`navbar-profile-account-popup-account-info-first-name-header-priority ${this.state.phoneNumberVerified ? 'success' : ''}`}>
                                                                        <span>✓</span>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <input
                                                            id='accountSettingEmail'
                                                            placeholder='johnappleseed@mail.com'
                                                            value={this.state.accountSettingEmail}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                        <div className='navbar-profile-account-popup-account-info-last-name'>
                                                            <div className='navbar-profile-account-popup-account-info-first-name-header'>
                                                                <div className='navbar-profile-account-popup-account-info-first-name-header-label'>
                                                                    <p><label>Phone no.</label></p>
                                                                </div>
                                                                <div className={`navbar-profile-account-popup-account-info-first-name-header-priority ${this.state.phoneNumberVerified ? 'success' : ''}`}>
                                                                    <span>✓</span>
                                                                </div>
                                                            </div>
                                                            <input
                                                            id='accountSettingNumber'
                                                            placeholder=''
                                                            value={this.state.accountSettingNumber}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='navbar-profile-account-popup-account-single-input'>
                                                        <p>What are three grocery items you just can't live without? 😍</p>
                                                        <h5>We might surprise gift you one of your favorite items! 🍫</h5>
                                                        <p><label>Item #1</label></p>
                                                        <input
                                                        placeholder='Dairy Fresh Strawberry'
                                                        />
                                                        <p><label>Item #2</label></p>
                                                        <input
                                                        placeholder='Coca Cola Haribos'
                                                        />
                                                        <p><label>Item #3</label></p>
                                                        <input
                                                        placeholder='Kellogs Cornflakes'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='navbar-profile-account-popup-account-save-profile-btn'>
                                                    <button
                                                    onClick={this.saveAccountSettingsClicked}
                                                    >
                                                        {this.state.accountSettingsSaveBtnTxt && 
                                                            <>
                                                                Save
                                                            </>
                                                        }
                                                        {this.state.accountSettingsSaveBtnLoading && 
                                                            <div className='account-settings-save-btn-loading-screen'>
                                                                <TailSpin
                                                                visible={true}
                                                                height="20px"
                                                                width="20px"
                                                                color="#fff"
                                                                ariaLabel="tail-spin-loading"
                                                                radius="2"
                                                                wrapperStyle={{}}
                                                                wrapperClass=""
                                                                />
                                                                {/* <div>
                                                                    <p>Loading...</p>
                                                                </div> */}
                                                            </div>
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        {this.state.showJipangeSettings && 
                                            <div className='navbar-profile-account-popup-jipange-settings'>
                                                {this.state.showJipangeSettingsHome && 
                                                    <div className='jipange-settings-calendar-parent-container'>
                                                        {/* {this.state.showConfirmedJipangeOrders && 
                                                            <div className='jipange-settings-home-confirmed-orders-container'>
                                                                <p>Confirmed Orders:</p>
                                                                <div className='jipange-settings-home-confirmed-orders-list'>
                                                                    
                                                                </div>
                                                            </div>
                                                        } */}
                                                        <p>Select the dates you want scheduled delivery:</p>
                                                        <div className={`jipange-settings-calendar-container ${this.state.confirmJipangeOrderClicked ? 'loading' : ''}`}>
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
                                                            <p>Select a jipange to add grocery items:</p>
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
                                                                                        className={`jipange-settings-selected-date-square ${this.state.selectedDates.has(dateString) && !this.state.confirmedJipangeDates.has(dateString) ? "show" : this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString) ? "show-confirmed" : ""}`}
                                                                                        onClick={() => this.jipangeDateScheduleClicked(dateObject, dateString)}
                                                                                    >
                                                                                        <label>{monthName}</label> {/* Month */}
                                                                                        <label>{day}</label> {/* Date */}
                                                                                        <div className='jipange-settings-selected-date-square-item-count'><span>{(this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString)) ? '◉' : ''}</span>
                                                                                            <label>{this.state.totalJipangeOrderQty === 0 ? 0 : this.state.totalJipangeOrderQty} items</label>
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
                                                    <div>
                                                        {this.state.showJipangeSettingsSelectedDateEdit && 
                                                            <div className={`jipange-settings-selected-date-screen ${this.state.confirmJipangeOrderClicked ? 'loading' : ''}`}>
                                                                <div className={`jipange-settings-selected-date-screen-header ${this.state.jipangeSelectedDateTotal > 0 ? 'non-empty-cart' : ''}`}>
                                                                    <div className='jipange-settings-selected-date-screen-header-inner-header-lining'>
                                                                        <div className='jipange-settings-selected-date-screen-header-inner-header-lining-date'>
                                                                            <label>Items (delivery for):</label><h4>{this.state.selectedJipangeDate}</h4>
                                                                            <span>
                                                                                <img src='/assets/icons/home-jipange/delete-cart.png'/>
                                                                            </span>
                                                                        </div>
                                                                        <div className='jipange-settings-selected-date-screen-header-inner-header-lining-options'>
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn'>
                                                                                <p onClick={this.backToJipangeScheduleClicked}><label>←</label><span>Back</span></p>
                                                                            </div>
                                                                            <div className={`jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn ${this.state.jipangeSelectedDateTotal > 0 && !this.state.confirmJipangeOrderClicked ? 'non-empty-cart': ''}`}>
                                                                                <button
                                                                                onClick={() => this.confirmJipangeOrder(this.state.jipangeSelectedDateTotal)}
                                                                                >
                                                                                    {this.state.showConfirmJipangeOrderRest && 
                                                                                        <>
                                                                                            <img src='/assets/icons/home-jipange/checkmark-icon.png'/>
                                                                                            <label>Confirm Order</label>
                                                                                        </>
                                                                                    }
                                                                                    
                                                                                    {this.state.showConfirmJipangeOrderActive &&
                                                                                        <>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn-active'>
                                                                                                <RotatingLines
                                                                                                visible={true}
                                                                                                height="16.5"
                                                                                                width="16.5"
                                                                                                strokeColor="#FF5733"
                                                                                                strokeWidth="3"
                                                                                                animationDuration="0.75"
                                                                                                ariaLabel="rotating-lines-loading"
                                                                                                wrapperStyle={{}}
                                                                                                wrapperClass=""
                                                                                                />
                                                                                            </div>
                                                                                        </>
                                                                                    }
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-header-inner-body'>
                                                                        {this.state.jipangeSelectedDateTotal <= 0 && 
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-no-items'>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-icon'>
                                                                                    <img src='/assets/icons/home-jipange/cart-no-items-icon2.png'/>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-text'>
                                                                                    <p>Add items to your cart</p>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.jipangeSelectedDateTotal > 0 && 
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-items-container'>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-items-list'>
                                                                                    {this.state.jipangeProduct1Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat1} <label>({this.state.jipangeProduct1Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat1} <label>({this.state.jipangeProduct2Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat1} <label>({this.state.jipangeProduct3Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct4Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat1} <label>({this.state.jipangeProduct4Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct5Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct5Cat1} <label>({this.state.jipangeProduct5Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct5Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal'>
                                                                                    <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal-label'>
                                                                                        <h4>SUBTOTAL</h4>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal-value'>
                                                                                        <h4>Ksh {this.state.jipangeSelectedDateTotal}.00</h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>  
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='jipange-settings-selected-date-screen-body'>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header'>
                                                                        <div className='jipange-settings-selected-date-screen-body-inner-header-search-container'>
                                                                            <div className='jipange-settings-selected-date-screen-body-inner-header-search-bar-icon'>
                                                                                <img src='/assets/icons/navbar/search-icon.png'/>
                                                                            </div>
                                                                            <div className='jipange-settings-selected-date-screen-body-inner-header-search-bar'>
                                                                                <input
                                                                                value={this.state.searchBarInputJipange}
                                                                                placeholder='Search for an item...'
                                                                                onChange={this.handleSearchChangeJipange}
                                                                                />
                                                                            </div>
                            
                                                                        </div>
                                                                        <div className={`jipange-settings-selected-date-screen-body-inner-header-categories-carousel ${this.state.transitionJipangeSettingsProductList ? 'next' : this.state.transitionHelperJipangeSettingsProductList ? 'transition' : ''}`}>
                                                                            {this.state.showJipangeProductsList1 && 
                                                                                <>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(1)} style={{background: 'linear-gradient(to left bottom, rgba(234, 116, 3, 0.8) 30%, rgba(234, 116, 3, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 1 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 1) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/fruits-and-veg.webp'/>
                                                                                        <p>Fruit & Veg</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(2)} style={{background: 'linear-gradient(to left bottom, rgba(79, 138, 0, 0.8) 30%, rgba(79, 138, 0, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 2 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 2) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/organic.webp'/>
                                                                                        <p>Organic</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(3)} style={{background: 'linear-gradient(to left bottom, rgba(217, 71, 75, 0.8) 30%, rgba(217, 71, 75, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 3 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 3) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/meat.webp'/>
                                                                                        <p>Meat</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(4)} style={{background: 'linear-gradient(to left bottom, rgba(188, 213, 214, 0.8) 30%, rgba(188, 213, 214, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 4 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 4) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/milk.webp'/>
                                                                                        <p>Dairy</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(5)} style={{background: 'linear-gradient(to left bottom, rgba(240, 227, 184, 0.8) 30%, rgba(240, 227, 184, 0) 70%)'}}  className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 5 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 5) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/oil.webp'/>
                                                                                        <p>Food Cupboard</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                                        <img onClick={() => this.nextJipangeSettingsProductList(1)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                </>
                                                                            }
                                                                            {this.state.showJipangeProductsList2 && 
                                                                                <>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-prev-category'>
                                                                                        <img onClick={() => this.prevJipangeSettingsProductList(2)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(6)} style={{background: 'linear-gradient(to left bottom, rgba(124, 207, 255, 0.8) 30%, rgba(124, 207, 255, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 6 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 6) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/baby.webp'/>
                                                                                        <p>Baby Care</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(7)} style={{background: 'linear-gradient(to left bottom, rgba(246, 199, 43, 0.8) 30%, rgba(246, 199, 43, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 7 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 7) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/easy-prep.webp'/>
                                                                                        <p>Easy Prep</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(8)} style={{background: 'linear-gradient(to left bottom, rgba(243, 143, 78, 0.8) 30%, rgba(243, 143, 78, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 8 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 8) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/cond-spices.webp'/>
                                                                                        <p>Cond. & Spices</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(9)} style={{background: 'linear-gradient(to left bottom, rgba(73, 203, 171, 0.8) 30%, rgba(73, 203, 171, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 9 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 9) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/home-cleaning.webp'/>
                                                                                        <p>Home & Cleaning</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(10)} style={{background: 'linear-gradient(to left bottom, rgba(253, 233, 203, 0.8) 30%, rgba(253, 233, 203, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 10 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 10) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/bulk-buy.webp'/>
                                                                                        <p>Bulk Buy</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                                        <img onClick={() => this.nextJipangeSettingsProductList(2)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                </>
                                                                            }
                                                                            {this.state.showJipangeProductsList3 && 
                                                                                <>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-prev-category'>
                                                                                        <img onClick={() => this.prevJipangeSettingsProductList(3)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(11)} style={{background: 'linear-gradient(to left bottom, rgba(244, 140, 189, 0.8) 30%, rgba(244, 140, 189, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 11 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 11) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/personal-care.webp'/>
                                                                                        <p>Personal Care</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(12)} style={{background: 'linear-gradient(to left bottom, rgba(225, 93, 102, 0.8) 30%, rgba(225, 93, 102, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 12 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 12) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/beverages.webp'/>
                                                                                        <p>Beverages</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(13)} style={{background: 'linear-gradient(to left bottom, rgba(254, 198, 0, 0.8) 30%, rgba(254, 198, 0, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 13 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 13) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/snacks.webp'/>
                                                                                        <p>Snacks</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(14)} style={{background: 'linear-gradient(to left bottom, rgba(255, 243, 211, 0.8) 30%, rgba(255, 243, 211, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 14 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 14) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/bakery.webp'/>
                                                                                        <p>Bakery</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(15)} style={{background: 'linear-gradient(to left bottom, rgba(253, 143, 80, 0.8) 30%, rgba(253, 143, 80, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 15 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 15) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/bundles.webp'/>
                                                                                        <p>Bundles</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                                        <img onClick={() => this.nextJipangeSettingsProductList(3)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                </>
                                                                            }
                                                                            {this.state.showJipangeProductsList4 && 
                                                                                <>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-prev-category'>
                                                                                        <img onClick={() => this.prevJipangeSettingsProductList(4)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(16)} style={{background: 'linear-gradient(to left bottom, rgba(255, 140, 139, 0.8) 30%, rgba(255, 140, 139, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 16 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 16) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/stationary.webp'/>
                                                                                        <p>Stationary</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(17)} style={{background: 'linear-gradient(to left bottom, rgba(193, 195, 237, 0.8) 30%, rgba(193, 195, 237, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 17 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 17) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/beauty.webp'/>
                                                                                        <p>Beauty</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(18)} style={{background: 'linear-gradient(to left bottom, rgba(205, 205, 205, 0.8) 30%, rgba(205, 205, 205, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 18 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 18) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/appliances.webp'/>
                                                                                        <p>Home Appliances</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(19)} style={{background: 'linear-gradient(to left bottom, rgba(214, 180, 122, 0.8) 30%, rgba(214, 180, 122, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 19 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 19) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/alcohol.webp'/>
                                                                                        <p>Alcohol</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(20)} style={{background: 'linear-gradient(to left bottom, rgba(65, 186, 254, 0.8) 30%, rgba(65, 186, 254, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 20 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 20) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/pets.webp'/>
                                                                                        <p>Pets</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                                        <img onClick={() => this.nextJipangeSettingsProductList(4)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                </>
                                                                            }
                                                                            {this.state.showJipangeProductsList5 && 
                                                                                <>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-header-prev-category'>
                                                                                        <img onClick={() => this.prevJipangeSettingsProductList(5)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(21)} style={{background: 'linear-gradient(to left bottom, rgba(245, 174, 205, 0.8) 30%, rgba(245, 174, 205, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 21 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 21) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/decor-flowers.webp'/>
                                                                                        <p>Decor & Flowers</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(22)} style={{background: 'linear-gradient(to left bottom, rgba(251, 220, 185, 0.8) 30%, rgba(251, 220, 185, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 22 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 22) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/services2.webp'/>
                                                                                        <p>Services</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(23)} style={{background: 'linear-gradient(to left bottom, rgba(243, 143, 78, 0.8) 30%, rgba(243, 143, 78, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 23 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 23) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/shopping-bags.webp'/>
                                                                                        <p>Shopping Bags</p>
                                                                                    </div>
                                                                                    <div onClick={() => this.jipangeProductCategoryClicked(24)} style={{background: 'linear-gradient(to left bottom, rgba(81, 181, 159, 0.8) 30%, rgba(81, 181, 159, 0) 70%)'}} className={`jipange-settings-selected-date-screen-body-inner-header-category ${this.state.selectedJipangeProductCategory === 24 || (this.state.selectedJipangeProductCategory === 0 && this.state.currentJipangeCategory === 24) ? 'selected' : ''}`}>
                                                                                        <img src='/assets/images/product-categories/kids-toys.webp'/>
                                                                                        <p>Kids & Toys</p>
                                                                                    </div>
                                                                                    {/* <div className='jipange-settings-selected-date-screen-body-inner-header-category'>
                                                                                        <img src='/assets/images/product-categories/kids-toys.webp'/>
                                                                                        <p></p>
                                                                                    </div> */}
                                                                                    {/* <div className='jipange-settings-selected-date-screen-body-inner-header-next-category'>
                                                                                        <img onClick={() => this.nextJipangeSettingsProductList(4)} src='/assets/icons/home-profile/jipange-settings-next-calendar-icon.png'/>
                                                                                    </div> */}
                                                                                </>
                                                                            }
                                                                        </div>
                                                                        <div className='jipange-settings-selected-date-screen-body-inner-header-search-bar-results'>
                                                                            {searchInput !== "" && (
                                                                                <div className={`searchResultsJipange ${this.state.searchBarInputJipange === '' ? 'empty' : ''}`}>
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
                                                                                                    className='searchResultCellJipange' 
                                                                                                    key={option.id}>
                                                                                                        <div className='searchResultCellJipangeImg'>
                                                                                                            <img src={option.img}/>
                                                                                                        </div>
                                                                                                        <div className='searchResultCellJipangeDetails'>
                                                                                                            <p className='searchResultOptionJipange'>{option.highlightedName}</p>
                                                                                                            <h5 className='searchResultCategoryJipange'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'|'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat4}</label> : null } </h5> 
                                                                                                        </div>
                                                                                                        <div className='searchResultCellJipangeLabel'>
                                                                                                            {/* <p>[click to add to cart]</p> */}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ))}
                                                                                            </div>
                                                                                        ))
                                                                                    }
                                                                                    {!isSearchLoading && !resultsFound &&
                                                                                        <div className='navbar-search-bar-no-results-jipange' style={{textAlign: "center"}}>
                                                                                            <p style={{fontWeight: "bold", color: "#FF5733"}}>No results found</p>
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body'>
                                                                        {this.state.selectedJipangeProductCategory === 1 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/bananas-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 1, this.state.jipangeProduct1Cat1CountBtn, 250)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 1, this.state.jipangeProduct1Cat1CountBtn, 250)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 1, this.state.jipangeProduct1Cat1CountBtn, 250)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 250</h5>
                                                                                            <p>Tushop Fresh Ripe Bananas</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/oranges-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct2Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(2, 1, this.state.jipangeProduct2Cat1CountBtn, 165)}>+</button> }
                                                                                                {this.state.jipangeProduct2Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(2, 1, this.state.jipangeProduct2Cat1CountBtn, 165)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct2Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(2, 1, this.state.jipangeProduct2Cat1CountBtn, 165)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 165</h5>
                                                                                            <p>Tushop Fresh Imported Oranges</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/watermelon-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct3Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(3, 1, this.state.jipangeProduct3Cat1CountBtn, 369)}>+</button> }
                                                                                                {this.state.jipangeProduct3Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(3, 1, this.state.jipangeProduct3Cat1CountBtn, 369)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct3Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(3, 1, this.state.jipangeProduct3Cat1CountBtn, 369)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-price-details'>
                                                                                                <h5>Ksh 369</h5>
                                                                                                <p>Ksh 399</p>
                                                                                            </div>
                                                                                            <p>Tushop Fresh Local Watermelon</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/tomatoes-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct4Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(4, 1, this.state.jipangeProduct4Cat1CountBtn, 85)}>+</button> }
                                                                                                {this.state.jipangeProduct4Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(4, 1, this.state.jipangeProduct4Cat1CountBtn, 85)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct4Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(4, 1, this.state.jipangeProduct4Cat1CountBtn, 85)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 85</h5>
                                                                                            <p>Tushop Fresh Mixed Size Tomatoes</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/onions-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct5Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(5, 1, this.state.jipangeProduct5Cat1CountBtn, 98)}>+</button> }
                                                                                                {this.state.jipangeProduct5Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(5, 1, this.state.jipangeProduct5Cat1CountBtn, 98)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct5Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(5, 1, this.state.jipangeProduct5Cat1CountBtn, 98)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 98</h5>
                                                                                            <p>Tushop Fresh Red Onions</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/* <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/oranges-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                <button>+</button>
                                                                                            </div>
                                                                                            <h5>Ksh 165</h5>
                                                                                            <p>Tushop Fresh Imported Oranges</p>
                                                                                        </div>
                                                                                    </div> */}

                                                                                
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.selectedJipangeProductCategory > 1 && 
                                                                            <div className='jipange-settings-no-products'>
                                                                                <div className='jipange-settings-no-products-icon'>
                                                                                    <img src='/assets/icons/home-jipange/empty-crate-icon.png'/>
                                                                                </div>
                                                                                <div className='jipange-settings-no-products-text'>
                                                                                    <h5>No items currently available</h5>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.selectedJipangeProductCategory === 0 && 
                                                                            <div className='jipange-settings-loading-screen-products'>
                                                                                <TailSpin
                                                                                visible={true}
                                                                                height="22.5px"
                                                                                width="22.5px"
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
                                                                </div>
                                                            </div>   
                                                        }
                                                        {this.state.showJipangeSettingsSelectedDateComplete && 
                                                            <div className='jipange-settings-selected-date-screen-complete'>
                                                                <div className={`jipange-settings-selected-date-screen-complete-header`}>
                                                                    <div className='jipange-settings-selected-date-screen-header-inner-header-lining'>
                                                                        <div className='jipange-settings-selected-date-screen-header-inner-header-lining-date'>
                                                                            <label>Checkout (delivery for):</label><h4>{this.state.selectedJipangeDate}</h4>
                                                                        </div>
                                                                        <div className='jipange-settings-selected-date-screen-header-inner-header-lining-options'>
                                                                            <div className={`jipange-settings-selected-date-screen-header-inner-header-lining-options-back-btn ${this.state.currentJipangePaid ? 'order-purchased' :''}`}>
                                                                                <p><label>←</label><span>Cancel</span></p>
                                                                            </div>
                                                                            <div className={`jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn ${!this.state.confirmJipangeOrderClicked && !this.state.currentJipangePaid ? 'non-empty-cart' : !this.state.confirmJipangeOrderClicked && this.state.currentJipangePaid ? 'disabled' : ''}`}>
                                                                                <button
                                                                                disabled={this.state.currentJipangePaid}
                                                                                onClick={() => this.backToJipangeOrderSelection(this.state.jipangeSelectedDateTotal)}
                                                                                >
                                                                                    {this.state.showConfirmJipangeOrderRest && 
                                                                                        <>
                                                                                            <img src='/assets/icons/home-jipange/cart-jipange-complete.png'/>
                                                                                            <label>Modify Order</label>
                                                                                        </>
                                                                                    }
                                                                                    
                                                                                    {this.state.showConfirmJipangeOrderActive &&
                                                                                        <>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-header-lining-options-submit-btn-active'>
                                                                                                <RotatingLines
                                                                                                visible={true}
                                                                                                height="16.5"
                                                                                                width="16.5"
                                                                                                strokeColor="#FF5733"
                                                                                                strokeWidth="3"
                                                                                                animationDuration="0.75"
                                                                                                ariaLabel="rotating-lines-loading"
                                                                                                wrapperStyle={{}}
                                                                                                wrapperClass=""
                                                                                                />
                                                                                            </div>
                                                                                        </>
                                                                                    }
                                                                                </button>
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                    <div className={`jipange-settings-selected-date-screen-header-inner-body-modify-order`}>
                                                                        {this.state.jipangeSelectedDateTotal <= 0 &&
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-modify-order'>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-icon-modify-order'>
                                                                                    <img src='/assets/icons/home-jipange/cart-no-items-icon2.png'/>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-text'>
                                                                                    <p>Add items to your cart</p>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.jipangeSelectedDateTotal > 0 && this.state.currentJipangePaid && 
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-modify-order'>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-icon-modify-order'>
                                                                                    <img src='/assets/icons/home-jipange/shopping-bag-icon.png'/>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-no-items-text'>
                                                                                    <h5>Jipange Confirmed</h5>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.jipangeSelectedDateTotal > 0 && !this.state.currentJipangePaid && 
                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-items-container-modify-order'>
                                                                                <div className='jipange-settings-selected-date-screen-header-inner-body-items-list'>
                                                                                    {this.state.jipangeProduct1Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat1} <label>({this.state.jipangeProduct1Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat1} <label>({this.state.jipangeProduct2Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat1} <label>({this.state.jipangeProduct3Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct4Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat1} <label>({this.state.jipangeProduct4Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct5Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct5Cat1} <label>({this.state.jipangeProduct5Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct5Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                                {/* <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal'>
                                                                                    <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal-label'>
                                                                                        <h4>SUBTOTAL</h4>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-header-inner-body-items-subtotal-value'>
                                                                                        <h4>Ksh {this.state.jipangeSelectedDateTotal}.00</h4>
                                                                                    </div>
                                                                                </div> */}
                                                                            </div>  
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='jipange-settings-selected-date-screen-complete-body'>
                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-header'>
                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-header-payment-option'>
                                                                            <div onClick={() => this.handleJipangePaymentOptionChange2(1)} className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn ${this.state.disableJipangePaymentBtns === false && this.state.selectedJipangePaymentOption === 'option1' ? 'selected' : this.state.disableJipangePaymentBtns === true ? 'disabled' : ''}`}>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-1`}>
                                                                                    <input
                                                                                    type="radio"
                                                                                    value="option1"
                                                                                    checked={this.state.selectedJipangePaymentOption === "option1"}
                                                                                    onChange={this.handleJipangePaymentOptionChange}
                                                                                    />
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 ${this.state.selectedJipangePaymentOption === 'option1' ? 'selected' : ''}`}>
                                                                                    <img src='/assets/icons/home-jipange/card-checkout-icon.png'/>
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3 ${this.state.selectedJipangePaymentOption === 'option1' ? 'selected' : ''}`}>
                                                                                    <p>Card</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-header-payment-option'>
                                                                            <div onClick={() => this.handleJipangePaymentOptionChange2(2)} className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn ${this.state.disableJipangePaymentBtns === false && this.state.selectedJipangePaymentOption === 'option2' ? 'selected' : this.state.disableJipangePaymentBtns === true ? 'disabled' : ''}`}>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-1'>
                                                                                    <input
                                                                                    type="radio"
                                                                                    value="option2"
                                                                                    checked={this.state.selectedJipangePaymentOption === "option2"}
                                                                                    onChange={this.handleJipangePaymentOptionChange}
                                                                                    />
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 ${this.state.selectedJipangePaymentOption === 'option2' ? 'selected' : ''}`}>
                                                                                    <img src='/assets/icons/home-jipange/mobile-checkout-icon.png'/>
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3 ${this.state.selectedJipangePaymentOption === 'option2' ? 'selected' : ''}`}>
                                                                                    <p>MPESA</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-header-payment-option'>
                                                                            <div onClick={() => this.handleJipangePaymentOptionChange2(3)} className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn ${this.state.disableJipangePaymentBtns === false && this.state.selectedJipangePaymentOption === 'option3' ? 'selected' : this.state.disableJipangePaymentBtns === true ? 'disabled' : ''}`}>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-1'>
                                                                                    <input
                                                                                    type="radio"
                                                                                    value="option3"
                                                                                    checked={this.state.selectedJipangePaymentOption === "option3"}
                                                                                    onChange={this.handleJipangePaymentOptionChange}
                                                                                    />
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-2 ${this.state.selectedJipangePaymentOption === 'option3' ? 'selected' : ''}`}>
                                                                                    <img src='/assets/icons/home-jipange/mobile-checkout-icon.png'/>
                                                                                </div>
                                                                                <div className={`jipange-settings-selected-date-screen-complete-body-inner-header-payment-btn-3 ${this.state.selectedJipangePaymentOption === 'option3' ? 'selected' : ''}`}>
                                                                                    <p>Airtel</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body'>
                                                                        {this.state.showJipangePaymentLoading && 
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-payment-loading'>
                                                                                <TailSpin
                                                                                visible={true}
                                                                                height="30px"
                                                                                width="30px"
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
                                                                        {this.state.showJipangeCardPayment && 
                                                                            <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment'>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                                                    <div>
                                                                                        <h5>Credit Card Number</h5>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input
                                                                                        placeholder='XXXX XXXX XXXX XXXX'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-half'>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-expiry'>
                                                                                        <h5>Expiry</h5>
                                                                                        <input
                                                                                        placeholder='MM / YY'
                                                                                        />
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-cvv'>
                                                                                        <h5>CVV</h5>
                                                                                        <input
                                                                                        placeholder='XXX'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                                                    <div>
                                                                                        <h5>Billing Address</h5>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input
                                                                                        placeholder='Address Line 1'
                                                                                        />
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-address-line'>
                                                                                        <input
                                                                                        placeholder='Address Line 2'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer'>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details'>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-1'>
                                                                                            <p className=''>Subtotal</p>
                                                                                            <p>Kshs. {this.state.jipangeSelectedDateTotal}.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-2'>
                                                                                            <p className=''>Delivery fee</p>
                                                                                            <p>Kshs. 99.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-total'>
                                                                                            <h4><strong>Total</strong></h4>
                                                                                            <h4><strong>Kshs. {this.state.jipangeSelectedDateTotal + 99}.00</strong></h4>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-btn'>
                                                                                        <button
                                                                                        onClick={() => this.jipangeHandlePaymentConfirmed('Card')}
                                                                                        >
                                                                                            {this.state.makeJipangePaymentCardDefault && 
                                                                                                <>
                                                                                                    Make Payment
                                                                                                </>
                                                                                            }
                                                                                            {this.state.makeJipangePaymentCardLoading && 
                                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer-complete-btn-loading'>
                                                                                                    <TailSpin
                                                                                                    visible={true}
                                                                                                    height="20px"
                                                                                                    width="20px"
                                                                                                    color="#fff"
                                                                                                    ariaLabel="tail-spin-loading"
                                                                                                    radius="2"
                                                                                                    wrapperStyle={{}}
                                                                                                    wrapperClass=""
                                                                                                    />
                                                                                                </div>
                                                                                            }
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        
                                                                        {this.state.showJipangeMpesaPayment && 
                                                                            <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment'>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details'>
                                                                                    <h5>Enter your mobile number to receive a prompt:</h5>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field-mpesa'>
                                                                                        <div>
                                                                                            
                                                                                        </div>
                                                                                        <div>
                                                                                            <input
                                                                                            placeholder='0712345678'
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-send-prompt'>
                                                                                        <button>Send Prompt</button>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative'>
                                                                                        <p><strong>OR</strong> follow the instructions below:</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details-instructions'>
                                                                                        <ol>
                                                                                            <p><li>Go to MPESA menu on your phone</li></p>
                                                                                            <p><li>Select Paybill option</li></p>
                                                                                            <p><li>Enter Business Number 222222</li></p>
                                                                                            <p><li>Enter Account Number PXXPWGMR</li></p>
                                                                                            <p><li>Enter the amount {this.state.jipangeSelectedDateTotal + 99}.00</li></p>
                                                                                            <p><li>Enter your MPESA PIN and Send</li></p>
                                                                                            <p><li>You will receive a confirmation SMS from MPESA</li></p>
                                                                                        </ol>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer'>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details'>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-1'>
                                                                                            <p className=''>Subtotal</p>
                                                                                            <p>Kshs. {this.state.jipangeSelectedDateTotal}.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-2'>
                                                                                            <p className=''>Delivery fee</p>
                                                                                            <p>Kshs. 99.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-total'>
                                                                                            <h4><strong>Total</strong></h4>
                                                                                            <h4><strong>Kshs. {this.state.jipangeSelectedDateTotal + 99}.00</strong></h4>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-btn'>
                                                                                        <button
                                                                                        onClick={() => this.jipangeHandlePaymentConfirmed('Mpesa')}
                                                                                        >
                                                                                            {this.state.makeJipangePaymentMpesaDefault && 
                                                                                                <>
                                                                                                    Confirm Payment
                                                                                                </>
                                                                                            }
                                                                                            {this.state.makeJipangePaymentMpesaLoading && 
                                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer-complete-btn-loading'>
                                                                                                    <TailSpin
                                                                                                    visible={true}
                                                                                                    height="20px"
                                                                                                    width="20px"
                                                                                                    color="#fff"
                                                                                                    ariaLabel="tail-spin-loading"
                                                                                                    radius="2"
                                                                                                    wrapperStyle={{}}
                                                                                                    wrapperClass=""
                                                                                                    />
                                                                                                </div>
                                                                                            }
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }

                                                                        {this.state.showJipangeAirtelPayment && 
                                                                            <div className='jipange-settings-selected-date-screen-complete-body-inner-body-airtel-payment'>
                                                                                 <div className='jipange-settings-selected-date-screen-complete-body-inner-body-airtel-payment-details'>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative'>
                                                                                        <p>Dial <strong>*334#</strong> then follow the steps below:</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details-instructions'>
                                                                                        <ol>
                                                                                            <p><li>Select Paybill and Till Payments</li></p>
                                                                                            <p><li>Select Airtel Paybill</li></p>
                                                                                            <p><li>Enter Paybill Number 222222</li></p>
                                                                                            <p><li>Enter Reference Number: PXXPWGMR</li></p>
                                                                                            <p><li>Enter the amount {this.state.jipangeSelectedDateTotal + 99}.00</li></p>
                                                                                            <p><li>Enter PIN</li></p>
                                                                                        </ol>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative'>
                                                                                        <p>Click <strong>Confirm Payment</strong> on payment when done</p>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative2'>
                                                                                    <p><strong>OR</strong> Make payments via MY Airtel APP</p>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-details-instructions2'>
                                                                                        <ol>
                                                                                            <p><li>Select Paybill</li></p>
                                                                                            <p><li>Select Shopping Payment</li></p>
                                                                                            <p><li>Select tuShop</li></p>
                                                                                            <p><li>Enter Reference Number: PXXPWGMR</li></p>
                                                                                            <p><li>Enter the amount {this.state.jipangeSelectedDateTotal + 99}.00</li></p>
                                                                                            <p><li>Enter PIN</li></p>
                                                                                        </ol>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-mpesa-payment-alternative3'>
                                                                                        <p>Click <strong>Confirm Payment</strong> when done</p>
                                                                                    </div>

                                                                                 </div>
                                                                            
                                                                                 <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer'>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details'>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-1'>
                                                                                            <p className=''>Subtotal</p>
                                                                                            <p>Kshs. {this.state.jipangeSelectedDateTotal}.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-2'>
                                                                                            <p className=''>Delivery fee</p>
                                                                                            <p>Kshs. 99.00</p>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-details-line-item-total'>
                                                                                            <h4><strong>Total</strong></h4>
                                                                                            <h4><strong>Kshs. {this.state.jipangeSelectedDateTotal + 99}.00</strong></h4>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-footer-btn'>
                                                                                        <button
                                                                                        onClick={() => this.jipangeHandlePaymentConfirmed('Airtel')}
                                                                                        >
                                                                                            {this.state.makeJipangePaymentAirtelDefault && 
                                                                                                <>
                                                                                                    Confirm Payment
                                                                                                </>
                                                                                            }
                                                                                            {this.state.makeJipangePaymentAirtelLoading && 
                                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer-complete-btn-loading'>
                                                                                                    <TailSpin
                                                                                                    visible={true}
                                                                                                    height="20px"
                                                                                                    width="20px"
                                                                                                    color="#fff"
                                                                                                    ariaLabel="tail-spin-loading"
                                                                                                    radius="2"
                                                                                                    wrapperStyle={{}}
                                                                                                    wrapperClass=""
                                                                                                    />
                                                                                                </div>
                                                                                            }
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {this.state.showJipangeConfirmAddress && 
                                                                            <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-payment'>
                                                                                <p>Enter your shipping address for this order:</p>
                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-recent'>
                                                                                    <h5>Recently Used (<label>selected by default</label>):</h5>
                                                                                    <div className={`jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select ${this.state.jipangeManualAddressLine1 !== '' || this.state.jipangeManualAddressLine2 !== '' ? 'manual-selected' : ''}`}>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-radio'>
                                                                                            <img src='/assets/icons/home-jipange/home-address-icon.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-recent-select-details'>
                                                                                            <h5>Home address</h5>
                                                                                            <p>Sunshine Villas - Hse No. 3, Spring Valley, Lower Kabete, Nairobi</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter'>
                                                                                    <h4>or enter an address:</h4>

                                                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form'>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                                                            <div>
                                                                                                <h5>Address Line 1</h5>
                                                                                            </div>
                                                                                            <div>
                                                                                                <input
                                                                                                id='jipangeManualAddressLine1'
                                                                                                placeholder='Marula Lane 23C, Lavington'
                                                                                                value={this.state.jipangeManualAddressLine1}
                                                                                                onChange={this.handleSearchStandardInput}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                                                            <div>
                                                                                                <h5>Address Line 2</h5>
                                                                                            </div>
                                                                                            <div>
                                                                                                <input
                                                                                                id='jipangeManualAddressLine2'
                                                                                                placeholder='City (e.g. Nairobi)'
                                                                                                value={this.state.jipangeManualAddressLine2}
                                                                                                onChange={this.handleSearchStandardInput}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer'>
                                                                                    <button
                                                                                    onClick={this.completeJipangeBtnClicked}
                                                                                    >
                                                                                        {this.state.completeJipangeBtnTxt && 
                                                                                            <>
                                                                                                Complete Jipange
                                                                                            </>
                                                                                        }
                                                                                        {this.state.completeJipangeBtnLoading && 
                                                                                            <div className='jipange-settings-selected-date-screen-complete-body-inner-body-address-enter-form-footer-complete-btn-loading'>
                                                                                                <TailSpin
                                                                                                visible={true}
                                                                                                height="20px"
                                                                                                width="20px"
                                                                                                color="#fff"
                                                                                                ariaLabel="tail-spin-loading"
                                                                                                radius="2"
                                                                                                wrapperStyle={{}}
                                                                                                wrapperClass=""
                                                                                                />
                                                                                                {/* <div>
                                                                                                    <p>Loading...</p>
                                                                                                </div> */}
                                                                                            </div>
                                                                                        }
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                                {this.state.showJipangeSettingsLoading && 
                                                    <div className='jipange-settings-loading-screen'>
                                                        <TailSpin
                                                        visible={true}
                                                        height="30px"
                                                        width="30px"
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
                                        {this.state.showPamojaSettings && 
                                            <div className='navbar-profile-account-popup-pamoja-settings'>
                                                <div className=''>

                                                </div>
                                            </div>
                                        }
                                        {this.state.showDeliveryInfoSettings && 
                                            <div className='navbar-profile-account-popup-delivery-info-settings'>
                                                <div className='navbar-profile-account-popup-delivery-info-settings-header'>
                                                    <p>Add a new delivery address:</p>
                                                    <div className='navbar-profile-account-popup-delivery-info-settings-header-address-types'>
                                                        <p>Select an address type:</p>
                                                        <div className='navbar-profile-account-popup-delivery-info-settings-header-address-types-btns'>
                                                            <div className={`navbar-profile-account-popup-delivery-info-settings-header-address-types-btn ${this.state.deliveryInfoAddressType1 ? 'selected' : ''}`}>
                                                                <button
                                                                onClick={() => this.deliveryInfoAddressTypeClicked(1)}
                                                                >Home</button>
                                                            </div>
                                                            <div className={`navbar-profile-account-popup-delivery-info-settings-header-address-types-btn ${this.state.deliveryInfoAddressType2 ? 'selected' : ''}`}>
                                                                <button
                                                                onClick={() => this.deliveryInfoAddressTypeClicked(2)}
                                                                >Office</button>
                                                            </div>
                                                            <div className={`navbar-profile-account-popup-delivery-info-settings-header-address-types-btn ${this.state.deliveryInfoAddressType3 ? 'selected' : ''}`}>
                                                                <button
                                                                onClick={() => this.deliveryInfoAddressTypeClicked(3)}
                                                                >Friend</button>
                                                            </div>
                                                            <div className={`navbar-profile-account-popup-delivery-info-settings-header-address-types-btn ${this.state.deliveryInfoAddressType4 ? 'selected' : ''}`}>
                                                                <button
                                                                onClick={() => this.deliveryInfoAddressTypeClicked(4)}
                                                                >Other</button>
                                                            </div>
                                                            <div className='navbar-profile-account-popup-delivery-info-settings-header-address-types-btn'>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                        <div>
                                                            <h5>Address Line 1</h5>
                                                        </div>
                                                        <div>
                                                            <input
                                                            id='deliveryInfoAddressLine1'
                                                            placeholder='Street (e.g. Marula Lane 23C, Lavington)'
                                                            value={this.state.deliveryInfoAddressLine1}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='jipange-settings-selected-date-screen-complete-body-inner-body-card-payment-input-field'>
                                                        <div>
                                                            <h5>Address Line 2</h5>
                                                        </div>
                                                        <div>
                                                            <input
                                                            id='deliverInfoAddressLine2'
                                                            placeholder='City (e.g. Nairobi)'
                                                            value={this.state.deliverInfoAddressLine2}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='navbar-profile-account-popup-delivery-info-settings-header-save-address-btn'>
                                                        <button>Save Address</button>
                                                    </div>

                                                    <div className='navbar-profile-account-popup-delivery-info-settings-header-body-header-title'>
                                                        <p>Select a default delivery address:</p>
                                                    </div>

                                                </div>
                                                <div className='navbar-profile-account-popup-delivery-info-settings-body'>
                                                    <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container'>
                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-header'>
                                                            <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-header-icon'>
                                                                <img src='/assets/icons/home-delivery-info/home-icon.png'/>
                                                            </div>
                                                            <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-header-title'>
                                                                <h3>Home</h3>
                                                            </div>
                                                            <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select'>
                                                                <div
                                                                className={`navbar-profile-account-popup-delivery-info-settings-body-address-container-header-select-checkbox ${this.state.deliveryInfoDefaultAddressSelected ? 'checked' : ''}`}
                                                                onClick={this.deliveryInfoDefaultAddressCheckboxClick}>
                                                                    <strong>{this.state.deliveryInfoDefaultAddressSelected ? "✓" : ""}</strong>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body'>
                                                            <p>Sunshine Villas - Hse. 3, Spring Valley, Lower Kabete, Nairobi</p>
                                                            {this.state.showDeliveryInfoOption1Settings && 
                                                                <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings'>
                                                                    <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1'>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-icon'>
                                                                            <img src='/assets/icons/home-delivery-info/delete-icon.png'/>
                                                                        </div>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-text'>
                                                                            <h5>Delete</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5'>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-icon'>
                                                                        <img src='/assets/icons/home-delivery-info/edit-icon.png'/>
                                                                        </div>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-1-5-text'>
                                                                            <h5>Edit</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div 
                                                                    onClick={this.deliveryInfoHomeAddressOptionsClicked}
                                                                    className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2'>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-icon'>
                                                                            <img src='/assets/icons/home-delivery-info/close-icon.png'/>
                                                                        </div>
                                                                        <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-option-2-text'>
                                                                            <h5>Close</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }
                                                            {!this.state.showDeliveryInfoOption1SettingsBtn && 
                                                                <div className='navbar-profile-account-popup-delivery-info-settings-body-address-container-body-settings-btn'>
                                                                    <div onClick={this.deliveryInfoHomeAddressOptionsClicked} className="three-dots">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {this.state.showSettingsPageLoading && 
                                            <div className='navbar-profile-loading-popup-settings'>
                                                <TailSpin
                                                visible={true}
                                                height="35px"
                                                width="35px"
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
                                </div>
                            </div>
                    </div>

                        {/* - - - - - HOMEPAGE - - - - - */}                
                                    
                        {/* - - - Homepage - - - */}

                    <div className='homepage-header'>
                        
                    </div>
                    
                </div>
                
            </Styles>
        )
    }
}