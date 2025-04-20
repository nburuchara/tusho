import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'; 
import { ColorRing, RotatingLines, TailSpin } from 'react-loader-spinner'
import ProductCard from './ProductCard';

//? - - FILES - - //
import SearchTerms from '../product-list/products'
import AccountSearchTerms from '../search-terms/SearchTerms'
import FAQSearchTerms from '../search-terms/SearchTermsFAQ'
import products from '../product-list/products'; 

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
    padding-top: 15px;
    background-color: transparent;
}

.scroll-to-page-top {
    position: absolute;
    bottom: -4.5rem;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    transform: translateX(5px);
    opacity: 0;
    transition-property: transform, opacity;
    cursor: pointer;
}

.scroll-to-page-top.show {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
}

    // - - NAVBAR - - //

.navbar {
    position: relative;
    z-index: 1;
    width: 100%;
    background-color: #FF5733;
    height: 70px;
    // margin-top: 15px;
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
    max-height: 450px;
    overflow: hidden;
    overflow-y: auto;
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
    // background-color: #fff;
}

.searchResultCellImg {
    width: 40px;
    height: 40px;
}

.searchResultCellImg img {
    width: 85%;
    height: 85%;
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

.searchResultCellLabelNonZeroQty {
    border: 1px solid #ff5733;
    width: 70%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
}

.searchResultCellLabelNonZeroQtyChangeLeft {
    width: 30%;
    // border: 1px solid black;
    color: #ff5733;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: poppins;
    font-size: 80%;
    border: 0.5px solid transparent;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #ff5733;
    color: white;
}

.searchResultCellLabelNonZeroQtyChangeLeft:hover {
    border: 0.5px solid white;
}

.searchResultCellLabelNonZeroQtyChangeRight {
    width: 30%;
    // border: 1px solid black;
    color: #ff5733;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: poppins;
    font-size: 80%;
    border: 0.5px solid transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #ff5733;
    color: white;
}

.searchResultCellLabelNonZeroQtyChangeRight:hover {
    border: 0.5px solid white;
}

.searchResultCellLabelNonZeroQtyValue {
    width: 40%;
    // border: 1px solid black;
    border-left: 1px solid #ff5733;
    border-right: 1px solid #ff5733;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70%;
    font-family: poppins;
    font-weight: bold;
}

.searchResultCell p {
    margin-top: 2.5px;
    margin-bottom: 3px;
    font-family: poppins;
    margin-left: 2.5%;
}

.searchResultOption {
    // margin-top: 10px;
    font-size: 85%;
}

.searchResultOption label {
    font-weight: bold;
    color: #ff5733;
}

.searchResultCategory {
    font-size: 70%;
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
    min-height: 2.5rem;
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

    // # # SEARCH RESULTS ACCOUNT POPUP

.searchResultAccount {
    z-index: 1;
    // position: relative;
    // margin-left: -6%;
    width: 100%;
    // border: 1px solid black;
    // border-radius: 8px;
    background-color: white;
    // margin-top: 10px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: block;
    overflow-y: auto;
}


.searchResultAccount.empty {
    display: none;
    pointer-events: none;
}

.searchResultCellAccount:hover {
    background-color: #faece9;
    cursor: pointer;
    border-bottom: 0.05px solid #ccc;
    border-top: 0.05px solid #ccc;
    transform: scale(1.02);
}

.searchResultAccountLoading {
    margin-top: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.searchResultAccountLoading p {
    font-family: poppins;
    font-size: 75%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #5e626a;
}

.searchResultCellAccountContainer {
    position: sticky;
    border-bottom: 1px solid #ccc;
}

.searchResultCellAccount {
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    // border-bottom: 1px solid #
}

.searchResultCellAccount {
   height: 100;
}

.searchResultCellAccount:hover .searchResultCellImg img {
    background-color: #fff;
}

.searchResultCellAccountImg {
    // width: 10%;
}

.searchResultCellAccountImg img {
    width: 18.5px;
    height: 18.5px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.searchResultCellAccountDetails {
    width: 100%;
    padding-left: 1%;
}

.searchResultCellAccountDetails p {
    font-size: 65%;
    font-family: poppins;
    margin-left: 10%;
    margin-bottom: 0px;
    margin-right: 10%;
    margin-top: 0.5rem;
    color: #5e626a;
}

.searchResultCellAccountLabel {
    width: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchResultCellAccountLabel p {
    font-size: 50% !important;
    margin-top: 0px;
}

.searchResultOptionAccount {
    // font-size: 10px;
}

.searchResultCategoryAccount {
    font-size: 30%;
    font-weight: normal;
    font-family: poppins;
    margin-top: 2.5px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 0.5rem;
}

.navbar-search-bar-no-results-account {
    height: 1.85rem;
    margin-top: 1rem;
    font-family: poppins;
}

.navbar-search-bar-no-results-account p {
    margin-top: 5px;
    font-size: 70% !important;
}


// # # SEARCH RESULTS FAQ

.searchResultFAQ {
    z-index: 4;
    // position: relative;
    // margin-left: -6%;
    width: 100%;
    // border: 1px solid black;
    // border-radius: 8px;
    background-color: white;
    // margin-top: 10px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: block;
    overflow-y: auto;
}


.searchResultFAQ.empty {
    display: none;
    pointer-events: none;
}

.searchResultCellFAQ:hover {
    background-color: #faece9;
    cursor: pointer;
    border-bottom: 0.05px solid #ccc;
    border-top: 0.05px solid #ccc;
    transform: scale(1.02);
}

.searchResultFAQLoading {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.searchResultFAQLoading p {
    font-family: poppins;
    font-size: 8px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #5e626a;
}

.searchResultCellFAQContainer {
    position: sticky;
    border-bottom: 1px solid #ccc;
}

.searchResultCellFAQ {
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    // border-bottom: 1px solid #
}

.searchResultCellFAQ {
   height: 100;
}

.searchResultCellFAQ:hover .searchResultCellImg img {
    background-color: #fff;
}

.searchResultCellFAQImg {
    // width: 10%;
}

.searchResultCellFAQImg img {
    width: 18.5px;
    height: 18.5px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.searchResultCellFAQDetails {
    width: 100%;
    padding-left: 1%;
}

.searchResultCellFAQDetails p {
    font-size: 12px;
    font-family: poppins;
    margin-left: 2.5%;
    margin-bottom: 0px;
    margin-right: 10%;
    margin-top: 0px;
}

.searchResultCellFAQLabel {
    width: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchResultCellFAQLabel p {
    font-size: 50% !important;
    margin-top: 0px;
}

.searchResultOptionFAQ {
    font-size: 10px !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.searchResultCategoryFAQ {
    font-size: 50%;
    font-weight: normal;
    font-family: poppins;
    margin-top: 1px;
    margin-left: 2.5%;
    margin-right: 10%;
    margin-bottom: 0.5rem;
}

.navbar-search-bar-no-results-faq {
    height: 1.85rem;
    margin-top: 1rem;
    font-family: poppins;
}

.navbar-search-bar-no-results-faq p {
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
    cursor: pointer;
    border: 1px solid white;
}

.navbar-shopping-cart:hover {
    border: 1px solid #20313a;
    cursor: pointer;
}

.navbar-shopping-cart img {
    width: 18px;
    margin-right: 35px;
    margin: auto;
    cursor: pointer;
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
    background-color: #20313a;
    border: 2px solid #FF5733;
    color: #FFf;
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
    cursor: pointer;
    border: 1px solid white;
}

.navbar-profile-btn:hover {
    border: 1px solid #20313a;
    cursor: pointer;
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
    position: relative;
    z-index: 1;
    transform: translateX(5%);
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
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
    border-bottom: 0.5px solid #24668a;
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
    border-bottom: 0.5px solid #24668a;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.navbar-options-checkout-home-body-empty-cart {
    margin-left: 5%;
    font-family: poppins;
    font-size: 90%;
    font-weight: bold;
    color: #ff5733;
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

.navbar-options-checkout-home-item-cell-details button {
    background-color: #ff5733;
    border: 1px solid #ff5733;
    width: 65%;
    padding: 2px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 8px;
    margin-left: 5%;
    margin-right: 5%;
}

.navbar-options-checkout-home-item-cell-details h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-family: poppins;
    font-size: 80%;
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
    margin-left: 8%;
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
    top: -1.75rem;
    right: 0;
    margin-top: 105px;
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
    border-bottom: 1px solid #20313a;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-header-left {
    width: 30%;
    border-right: 0.5px solid #ff5733;
    border-top-left-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: #20313a;
}

.navbar-profile-account-popup-header-left-search-bar-container {
    position: absolute;
    bottom: 1rem;
    width: 80%;
    height: 1.8rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 6px;
    background-color: white;
    display:
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
    background-color: #20313a;
}

.navbar-profile-account-popup-header-right-label {
    width: 85%;
    // border: 1.5px solid #ccc;
    color: white;
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
    overflow: hidden;
}

.navbar-profile-account-popup-body-search-bar-results {
    width: 100%;
    position: absolute;
    top: 0;
    height: 30rem;
    background-color: white;
    z-index: 3;
    overflow: hidden;
    transform: translateY(-35rem);
    border-right: 1px solid transparent;
    visibility: hidden;
    transition-property: transform;
 }

 .navbar-profile-account-popup-body-search-bar-results.display {
    transform: translateY(0);
    visibility: visible;
    border-right: 1px solid #ff5733;
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
   background-color: #20313a;
//    color: #ff5733;
}

.navbar-profile-account-popup-body-left-footer-delete p {
   color: white;
   font-family: inter;
   font-size: 85%;
   font-weight: bold;
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
    background-color: #20313a;
    // background-image: url('/assets/icons/home-profile/profile-img-bg.png'); /* Set your background image */
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
    border: 1px solid black;
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
    border: 1px solid black;
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
    border: 1px solid black;
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

.jipange-settings-selected-time-slots-container {
    border: 1px solid black;
    height: 5.5rem;
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
    height: 50px;
    display: inline-block;
    border: 1px solid  #ff5733;
    border-radius: 8px;
    background-color: #faece9;
    margin-bottom: 0.35rem;
    opacity: 0; /* Initially invisible */
    // transform: translateX(-5px); /* Initially position it above */
    transition-property: opacity, transform ; /* Smooth transition */
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 5px;
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

.jipange-settings-selected-date-square h5 {
    margin-top: 0px;
    margin-bottom: 1px;
    font-size: 9px;
    margin-left: 3.5px;
    font-family: poppins;
}

.jipange-settings-selected-date-square label {
    font-size: 75%;
    font-family: poppins;
    margin-left: 3.5px;
    margin-top: 0px;
    cursor: pointer;
}

.jipange-settings-selected-date-square-item-count label {
    font-size: 60%;
    font-weight: bold;
    cursor: pointer;
}

.jipange-settings-selected-date-square-item-count span {
    font-size: 10px;
}

.jipange-settings-selected-date-square-item-count.show span {
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
    height: 20rem;
    // overflow: hidden;
    overflow-y: auto;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row {
    height: auto;
    // border: 1px solid black;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
}

.jipange-settings-selected-date-screen-body-inner-body-product-row-cell {
    height: 100%;
    // border: 1px solid black;
    width: 25%;
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
    width: 60px;
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
    border: 1px solid black;
    border-top: 1px solid #5e626a;
    height: 50%;
    margin-left: 3.5%;
    // overflow-y: auto;
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

    // # MY ORDERS SCREEN SETTINGS

.navbar-profile-account-popup-my-orders-settings {
    margin-left: 6.5%;
    // border: 1px solid black;
    height: 37.65rem;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-my-orders-settings-container {
    height: 100%;
    // border: 1px solid black;
    position: relative;
}

.navbar-profile-account-popup-my-orders-settings-container.empty {
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-my-orders-settings-container p {
    margin-left: 2.5%;
    margin-bottom: 5px;
    color: #5e626a;
    font-family: poppins;
    font-size: 80%;
}

.navbar-profile-account-popup-my-orders-settings-container-content {
    // bord/er: 1px solid black;
    border-top: 1px solid #5e626a;
    width: 95%;
    margin-left: 2.5%;
    height: 20.5%;
    position: relative;
}

.navbar-profile-account-popup-my-orders-settings-container-content-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.navbar-profile-account-popup-my-orders-settings-container-content-empty img {
    width: 30px;
    height: 30px;
}

.navbar-profile-account-popup-my-orders-settings-container-content-empty p {
    margin-left: 0px;
}

    // # FAQs SCREEN SETTINGS

.navbar-profile-account-popup-faqs-settings {
    margin-left: 6.5%;
    // border: 1px solid black;
    height: 37.65rem;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-faqs-settings-body {
    height: 100%;
    // border: 1px solid black;
    position: relative;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-faqs-settings-body p {
    margin-left: 2.5%;
    margin-bottom: 5px;
    color: #5e626a;
    font-family: poppins;
    font-size: 80%;
}

.navbar-profile-account-popup-faqs-settings-body-top-container {
    // border: 1px solid black;
    // border-top: 1px solid #5e626a;
    width: 95%;
    margin-left: 2.5%;
    height: 22.5%;
    position: relative;
    display: flex;
    flex-direction: column;

}

.navbar-profile-account-popup-faqs-settings-body-top-container p {
    margin-left: 0px;
    margin-top: 0px;
    padding-top: 5px;
    font-size: 72.5%;
    color: black;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-header {
    height: 0%;
    border: 1px solid #5e626a;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #f3f5f7;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-header-left {
    width: 90%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-header-left p {
    color: #5e626a;
    margin-left: 1.5%;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-header-right {
    width: 10%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-body {
    flex-grow: 1;
    border: 1px solid transparent;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    z-index: 2;
    background-color: white;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-body textarea {
    height: 80%;
    width: 97.35%;
    border: 1px solid transparent;
    resize: none;
    outline: none;
    padding: 5px;
    padding-left: 0px;
    font-size: 70%;
    font-family: poppins;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer {
    height: 30%;
    // border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification {
    display: flex;
    justify-content: space-between;
    width: 60%;
    transform: translateY(-2rem);
    margin-left: 0.15%;
    z-index: 1;
    // border: 1px solid black;
    transition-property: transform;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification.success {
    transform: translateY(0);
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification-left {
    width: 5%;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification-right {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer img {
    width: 11px;
    padding-bottom: 0.9rem;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer p {
    margin-top: -1.5rem;
    margin-bottom: 0px;
    margin-left: 0.5%;
    color: #ff5733;
    font-weight: bold;
    font-size: 65%;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer button {
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    font-family: poppins;
    font-size: 70%;
    border-radius: 5px;
    width: 20%;
    height: 65%;
    cursor: pointer;
}

.navbar-profile-account-popup-faqs-settings-body-top-container-footer-btn-loading {
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container {
    border: 1px solid #ccc;
    flex-grow: 1;
    width: 95%;
    margin-left: 2.5%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header {
    height: 10%;
    width: 100%;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
    background-color: #f3f5f7;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-left {
    width: 37.5%;
    // border: 1px solid black;
    border-top-left-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select {
    width: 90%;
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 60%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select:hover {
    border: 1px solid #ff5733;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-label {
    width: 85%;
    border: 1px solid transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: white;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-label p {
    font-size: 70%;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 2.5%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-icon {
    width: 15%;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-icon img {
    width: 50%;
    transform: rotate(0deg);
    transition-property: transform;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-icon.selected img {
    width: 50%;
    transform: rotate(180deg);
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-right {
    width: 62.5%;
    // border: 1px solid black;
    border-top-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: left;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-container {
    width: 96%;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 6px;
    height: 60%;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-icon {
    width: 10%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-icon img {
    width: 50%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-bar {
    width: 90%;
    // border: 1px solid black;
    overflow: hidden;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-bar input {
    width: 95%;
    padding: 6.25px;
    padding-left: 0px;
    height: 45%;
    outline: none;
    border: 1px solid transparent;
    font-family: poppins;
    font-size: 70%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-body {
    flex-grow: 1;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-left {
    width: 37.5%;
    // border: 1px solid black;
    position: relative;
    overflow: auto;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown {
    position: absolute;
    top: 0;  /* Start at 50% from the top */
    left: 50%; /* Start at 50% from the left */
    // transform: translate(-50%); /* Shift back by 50% of its own size to truly center */
    width: 90%;
    height: 6.5rem;
    border-radius: 3.5px;
    border: 1px solid #ccc;
    overflow: auto;
    transform: translate(-50%, -7.5rem);
    transition-property: transform;
    border-top: 1px solid transparent;
}


.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown.display {
    position: absolute;
    top: 0;  /* Start at 50% from the top */
    left: 50%; /* Start at 50% from the left */
    transform: translate(-50%); /* Shift back by 50% of its own size to truly center */
    width: 90%;
    height: 6.5rem;
    border-radius: 4px;
    border: 1px solid #ff5733;
    background-color: white;
    z-index: 3;
    overflow: auto;
    transform: translate(-50%, 0.2rem);
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: pointer;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option.selected {
    background-color: #faece9;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option:hover {
    background-color: #faece9;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 67.5%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option.selected p {
    color: #ff5733;
    text-decoration: underline; 
    font-weight: bold;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option-left {
    width: 85%;
    // border: 1px solid black;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option-right {
    width: 15%;
    // border: 1px solid black;
}

    // # FAQ RESPONSES

.navbar-profile-account-popup-faqs-settings-body-bottom-container-responses {
    height: 100%;
    width: 100%;
    // border: 1px solid #ccc;
    overflow-y: scroll;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response {
    // border: 1px solid black;
    height: 3rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    padding-top: 2.5%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response:hover {
    background-color: #faece9;
    text-decoration: underline;
    text-decoration-color: #ff5733;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response.selected {
    background-color: #faece9;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response.selected h5 {
    background-color: #faece9;
    font-weight: bold;
    color: black;
    text-decoration: underline;
    text-decoration-color: #ff5733;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 50%;
    font-family: poppins;
    font-weight: normal;
    margin-left: 2.5%;
    margin-right: 2.5%;
    // margin-top: 2.5%;
    color: #5e626a;
}

    // # FAQ FULL RESPONSE DISPLAY

.navbar-profile-account-popup-faqs-settings-body-bottom-container-right {
    width: 62.5%;
    border-left: 1px solid #ccc;
    position: relative;
    overflow: hidden;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-search-results {
    width: 100%;
    position: absolute;
    top: 0;
    height: 50%;
    background-color: white;
    z-index: 2;
    overflow: hidden;
    transform: translateY(-100%);
    // border-bottom-left-radius: 8px;
    // border-bottom-right-radius: 0px;
    border-bottom: 1px solid #ccc;
    // visibility: hidden;
    transition-property: transform;
    overflow-y: auto;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-search-results.display {
    transform: translateY(0);
    visibility: visible;
    border-right: 1px solid #ff5733;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display {
    position: absolute;
    top: 0;
    left: 0;
    width: 99.35%;
    height: 99.5%;
    // border: 1px solid black;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-single-response {
    transform: translateX(100%);
}

.navbar-profile-account-popup-faqs-settings-body-bottom-single-response.display {
    transform: translateX(0);
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header {
    height: autp;
    // border: 1px solid black;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header h3 {
    margin-left: 2.5%;
    margin-right: 2.5%;
    color: #5e626a;
    margin-top: 2%;
    margin-bottom: 1.5%;
    font-size: 72.5%;
    font-weight: normal;
    font-family: poppins;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header-topic {
    border-bottom: 1px solid #ccc;
    width: 95%;
    margin-left: 2.5%;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header-topic button {
    background-color: #faece9;
    border: 0.5px solid #ff5733;
    border-radius: 4px;
    font-family: poppins;
    font-size: 60%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-bottom: 0.6rem;
    color: #5e626a;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-body {
    flex-grow: 1;
    // border: 1px solid black;
    overflow-y: auto;
}


.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-body h2 {
    color: #ff5733;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0.35rem;
    padding-bottom: 2.5%;
    font-size: 77.5%;
    font-family: poppins;
    font-weight: normal;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-loading {
    height: 100%;
    // border: 1px solid black;
    padding-top: 4.25rem;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-none {
    height: 100%;
    // border: 1px solid black;
    padding-top: 7.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-none img {
    width: 36.5px;
}

.navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-none p {
    margin-top: 3%;
    font-size: 75%;
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

.homepage-fullscreen {
    // border: 1px solid black;
    position: absolute;
    top: 0rem;
    padding-top: 6rem;
    // margin-top: 1rem;
    width: 100%;
    z-index: 0;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.homepage-header {
    height: 35.5rem;
    // border: 1px solid black;
} 

.homepage-header-inner-header {
    height: 8.5%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-header-left {
    width: 50%;
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
}

.homepage-header-inner-header-left.hide {
    width: 0%;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    visibility: hidden;
    // pointer-events: none;
}

.homepage-header-inner-header-left-update-display.show {
    width: 100%;
    border-top: 1px solid #FF5733;
    border-bottom: 1px solid #FF5733;
    background-color: #faece9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.homepage-header-inner-header-left-update-display-left-child {
    width: 0%;
    height: 100%;
    // border: 1px solid black;
}

.homepage-header-inner-header-left-update-display-right-child {
    width: 100%;
    height: 100%;
    // border: 1px solid black;
}

.homepage-header-inner-header-left-update-display-announcement-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #faece9;
    color: #ff5733;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
} 

.homepage-header-inner-header-left-update-display-announcement-track {
    display: flex;
    gap: 30px;
    white-space: nowrap;
    position: absolute;
    will-change: transform;
    animation: scrollAnnouncements 45s linear infinite;
}

.homepage-header-inner-header-left-update-display-announcement-track.paused {
    animation-play-state: paused;
}

.homepage-header-inner-header-left-update-display-announcement-wrapper {
    display: flex;
    gap: 30px;
}

.homepage-header-inner-header-left-update-display-announcement-wrapper span {
    font-family: poppins;
    font-size: 85%;
}


@keyframes scrollAnnouncements {
    from {
        transform: translateX(100%); /* Start fully off-screen */
    }
    to {
        transform: translateX(-100%); /* Move completely left */
    }
}

.homepage-header-inner-header-left-option {
    width: 25%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #faece9;
    border: 1px solid #ff5733;
    border-radius: 8px;
}

.homepage-header-inner-header-left-option h4 {
    font-weight: normal;
    font-family: poppins;
    font-size: 95%;
    color: #ff5733;
}

.homepage-header-inner-header-left-option label {
    font-weight: bold;
}


.homepage-header-inner-header-left-option span {
    margin-left: 5%;
}

.homepage-header-inner-header-left-option img {
    width: 13.5px;
    margin-top: 0.25rem;
}

.homepage-header-inner-header-right {
    width: 50%;
    // border: 1px solid black;
    margin: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.homepage-header-inner-header-right.hide {
    width: 0%;
    border: 1px solid black;
    visibility: hidden;
}

.homepage-header-inner-header-right-option {
    width: 20%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100%;
} 

.homepage-header-inner-header-right-option h4 {
    // font-weight: normal;
    font-family: poppins;
    font-size: 95%;
    color: #20313a; 
}

.homepage-header-inner-body {
    height: 91.5%;
    // border: 1px solid black;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.homepage-header-inner-body-poster {
    border: 1px solid white;
    width: 100%;
    border-radius: 25px;
    height: 90%;
    margin-top: 0.55%;
    background-color: #20313a;
    display: flex;
    justify-content: space-between;
    z-index: 2;
}

.homepage-header-inner-body-poster-left {
    width: 55%;
    // border: 1px solid white;
    position: relative;
}

.homepage-header-inner-body-poster-left-logged-in {
    // background-color: #fff2ccff;
    width: 100%;
    height: 99.8%;
    // border: 1px solid #ff5733;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.homepage-header-inner-body-poster-left-logged-in-header {
    height: 30%;
    border-top-left-radius: 25px;
    border: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
}

.homepage-header-inner-body-poster-left-logged-in-header-container {
    position: absolute;
    top: 7.5%;
    left: 2.5%;
    width: 95%;
    height: 80%;
    border-bottom: 2px solid #ff5733;
    border-top-left-radius: 25px;
}

.homepage-header-inner-body-poster-left-logged-in-header-container-decor {
    position: absolute; 
    left: 33.5%;
    top: 0;
    // border: 1px solid white;
    height: 80%;
    width: 15%;
}


.homepage-header-inner-body-poster-left-logged-in-header-container-decor img {
    width: 95%;
}

.homepage-header-inner-body-poster-left-logged-in-header-wallet {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 88%;
    border: 1px solid white;
    background-color: white;
    border-radius: 8px;
}

.homepage-header-inner-body-poster-left-logged-in-body {
    flex-grow: 1;
    border-bottom-left-radius: 25px;
    // border: 1px solid white;
    position: relative;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header {
    height: 50%;
    // border: 1px solid #ff5733;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3aae49;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-title {
    width: 45%;
    margin-left: 2rem;
    margin-top: 0.5rem;
    color: white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-title label {
    color: #d50a15;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space {
    width: 100%;
    height: 90%;
    // overflow: hidden;
    border: 1px solid #3aae49;
    // border-radius: 8px;
    background-color: #3aae49;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box {
    width: 25%;
    // border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box img {
    width: 100px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box:first-child {
    position: relative;
    // border: 1px solid white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box:first-child h2 {
    position: absolute;
    bottom: 1.65rem;
    right: -0.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-size: 22.5px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box:last-of-type {
    position: relative;
    // border: 1px solid white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box:last-of-type h3 {
    position: absolute;
    bottom: 1.65rem;
    left: 1.2rem;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-size: 22.5px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box:last-of-type h2 {
    position: absolute;
    bottom: 1.65rem;
    right: 0.35rem;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-size: 22.5px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-logo {
    position: absolute;
    bottom: -1.45rem;
    right: 0.35rem;
    width: 60px;
    // border: 1px solid white;
    background-color: transparent;
    filter: invert(1) brightness(1000%);
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49%;
    // border: 1px solid white;
    border-bottom-left-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container {
    width: 95%;
    height: 80%;
    border-top: 2px solid #ff5733;
    border-bottom-left-radius: 25px;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box {
    width: 20%;
    // border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box button { 
    all: unset; /* removes all default button styles */
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box div {
    width: 100%;
    height: 100%;
    border-radius: 16px;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box button {
    border: 1px solid white;
    width: 85%;
    height: 85%;
    margin-top: 0.75rem;
    border-radius: 18px;
    position: relative;
    // background-color: transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    transition: border 0.25s ease-in-out;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box button:hover {
    // background-color: transparent;
    border: 1px solid #ff5733;
    cursor: pointer;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box:hover h4 {
    transform: translate(5px, -5px); /* Moves it 5px right and 5px down */
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box h4 {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    color: #ff5733;
    pointer-events: none;
    transition: transform 0.3s ease-in-out;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box h3 {
    position: absolute;
    bottom: 0.8rem;
    left: 0.5rem;
    right: 0.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 9%;
    margin-right: 9%;
    // font-family: poppins;
    font-weight: normal;
    color: #ff5733;
    font-size: 95%;
}


.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box img {
    width: 40px;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    margin-left: 2.5%;
    transition: transform 0.3s ease-in-out;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box:hover img {
    transform: scale(1.05);
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1 {
    
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1 img {
   margin-left: 5%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1:hover h3 {
    color: white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1 h3 {
    // color: #ff5733;
    transition: color 0.35s ease-in-out;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2 {
    background-color: #fff2ccff !important;
    transition: background-color 0.35s ease-in-out;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2:hover {
    background-color: transparent !important;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2 h3 {
    // color: #127bd8;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2:hover h3 {
    color: white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2 img {
    margin-left: 8.5%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3 h3 {
    // color: #127bd8;
    // font-size: 90%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3:hover h3 {
    color: white;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3 label {
    font-size: 60%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3 img {
    margin-left: 9.5%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-4 img {
    margin-left: 11%;
}

.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-4:hover h3 {
    color: white;
}


.homepage-header-inner-body-poster-left-logged-in-header h1 { 
    margin-top: 0px;
    margin-left: 1rem;
    font-size: 50px;
    text-align: left;
    font-family: raleway;
    color: #ff5733;
}

.homepage-header-inner-body-poster-left-logged-in-decor {
    position: absolute;
    bottom: 0;
    right: -1.5rem;
}

.homepage-header-inner-body-poster-left-logged-in-decor img {
    width: 180px;
}

.homepage-header-inner-body-poster-left-logged-out h1 {
    color: white;
    font-family: raleway;
    font-weight: bolder;
    font-size: 62.5px;
    margin-left: 4%;
    margin-right: 2.5%;
    margin-bottom: 15px;
}

.homepage-header-inner-body-poster-left-logged-out span {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 5px;
    text-decoration-style: wavy;
    text-underline-offset: 8px;
}

.homepage-header-inner-body-poster-left-logged-out-subheading h3 {
    color: white;
    font-family: raleway;
    font-weight: bolder;
    margin-left: 4%;
    margin-top: 6px;
}

.homepage-header-inner-body-poster-left-logged-out-subheading span {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 3px;
    text-decoration-style: wavy;
    text-underline-offset: 8px;
}

.homepage-header-inner-body-poster-left-logged-out-cta {
    position: absolute;
    bottom: 1.5rem;
    left: 4%;
    // border: 1px solid white;
    height: 25%;
    width: 72.5%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.homepage-header-inner-body-poster-left-logged-out-cta-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-left-logged-out-cta-left input {
    height: 45%;
    font-size: 13.5px;
    width: 100%;
    pointer-events: auto;
    font-family: poppins;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
    border-radius: 10px;
    border: 1px solid white;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right button {
    background-color: #ff5733;
    border: 1px solid #ff5733;
    border-radius: 8px;
    width: 55%;
    padding-right: 12%;
    height: 49%;
    font-size: 90%;
    color: white;
    font-family: poppins;
    position: relative;
    margin-right: 5%;
    cursor: pointer;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right button label {
    text-decoration: underline;
    text-decoration-color: white;
    text-decoration-thickness: 1.65px;
    text-decoration-style: wavy;
    text-underline-offset: 5px;
    cursor: pointer;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right button:hover label {
    text-decoration-style: solid;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right button span {
    // margin-left: 0px;
    position: absolute;
    right: 22.5%;
    transition: right 0.3s ease;
    margin-top: 1px;
}

.homepage-header-inner-body-poster-left-logged-out-cta-right button:hover span {
    right: 17.5%;
}

.homepage-header-inner-body-poster-left-logged-out-decor {
    position: absolute;
    bottom: 0;
    right: -1.5rem;
}

.homepage-header-inner-body-poster-left-logged-out-decor img {
    width: 180px;
}

.homepage-header-inner-body-poster-right {
    width: 45%;
    // border-left: 1px solid white;
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-body-poster-right-left-section {
    width: 50%;
    overflow: hidden;
}

.homepage-header-inner-body-poster-right-left-section img {
    width: 100%;
    border-left: 5px solid white;
}

.homepage-header-inner-body-poster-right-left-section-logged-in {
    border: 1px solid white;
    width: 96%;
    height: 100%;
    background-color: white;
    position: relative;
}

@keyframes peelLeftToRight {
    0% {
        clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
    }
    100% {
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
}

.homepage-header-inner-body-poster:has(.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1-btn:focus) {
    --background-color: #fff2ccff;
}

.homepage-header-inner-body-poster:has(.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2-btn:focus) {
    --background-color: #fff2ccff;
}

.homepage-header-inner-body-poster:has(.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3-btn:focus) {
    --background-color: #fff2ccff;
}

.homepage-header-inner-body-poster:has(.homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-4-btn:focus) {
    --background-color: #fff2ccff;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container {
    margin-left: 0.25rem;
    margin-top: -0.08rem;
    height: 99.6%;
    width: 101.9%;
    background-color: #20313a;
    border: 1px solid #ff5733;
    position: relative;
    overflow: hidden;
    transition: background-color 0.6s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--background-color);
    clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
    transition: clip-path 0.6s ease-in-out;
}

/* The class that gets added on click */
.animate-peel::after {
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
}

/* Ensures the container fully changes color */
.animate-peel {
    background-color: var(--background-color);
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-decor {
    position: absolute;
    top: -0.7rem;
    right: -3.5rem;
    width: 45%;
    height: 20%;
    // border: 1px solid white;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-decor img {
    width: 65%;
    border: none;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container h1 {
    font-size: 35px;
    color: white;
    font-family: raleway;
    margin-top: 0.15rem;
    margin-bottom: 0px;
    margin-left: 4.5%;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-subheader h5 {
    font-family: poppins;
    font-size: 85%;
    color: white;
    margin-top: -0.25rem;
    margin-left: 5%;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-option-2 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff2ccff;
    z-index: 2;
    pointer-events: none;
    margin-left: 0.25rem;
    margin-top: -0.08rem;
    height: 99.6%;
    width: 101.9%;
    border: 1px solid #ff5733;
    overflow: hidden;
    transition: background-color 0.6s ease-in-out;
    transform: translateY(100%);
    transition: transform 1s ease-in-out, pointer-events 1s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-option-2.open {
    pointer-events: auto;
    transform: translateY(0);
}

.homepage-header-inner-body-poster-right-left-section-logged-in-container-option-2 h3 {
    margin-left: 2.5%;
    margin-top: 0.5rem;
    margin-bottom: 0px;
    color: #ff5733;
    // font-weight: normal;
    // font-size: 95%;
    font-family: raleway;
}

.shopping-list-feature-container {
    position: absolute;
    bottom: 1rem;
    // border: 1px solid black;
    width: 99.35%;
    height: 89%;
    overflow-y: auto;
}

.shopping-list-feature-container p {
    margin-left: 3.5%;
    margin-right: 3.5%;
    margin-top: 0.2rem;
    font-size: 80%;
    font-family: poppins;
    color: #5e626a;
}

.shopping-list-feature-container ul {
    padding-left: 1.5rem;
}

.shopping-list-feature-container li {
    margin-bottom: 0.15rem;
}

.shopping-list-feature-container input {
    width: 90%;
    padding: 0.2rem 0.35rem;
    font-size: 0.85rem;
    font-family: poppins;
    // border: 1px solid #ccc;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    border: none;
    color: #5e626a;
    // transition: border-color 0.2s;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab {
    position: absolute;
    bottom: 1.5rem;
    width: 85%;
    left: 7.5%;
    height: 80%;
    background-color: #faece9;
    border: 1px solid #ff5733;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.confetti-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}
  
  .confetti-piece {
    position: absolute;
    top: -10px;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background-color: hsl(var(--hue), 100%, 70%);
    opacity: 0.9;
    animation: confetti-fall linear infinite;
  }
  
  /* Optional keyframe animation */
  @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.2;
        }
  }

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header {
    height: 12.5%;
    width: 100%;
    // border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 4.25%;
    padding-right: 4.25%;
    z-index: 1;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header button {
    margin-right: 3.5%;
    border-radius: 20px;
    background-color: #faece9;
    border: 1px solid #ff5733;
    padding: 1.5%;
    padding-left: 3.5%;
    padding-right: 3.5%;
    font-size: 72.5%;
    font-family: poppins;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header button:last-child {
    margin-right: 0%;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn {
    background-color: #faece9;
    cursor: pointer;
    transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn:hover {
    background-color: #ff5733;
    color: white;
    cursor: pointer;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn.selected {
    background-color: #ff5733;
    color: white;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-loading {
    width: 100%;
    height: 100%;
}

.promo-tab-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6.19rem;
}

.promo-tab-loading p {
    margin-top: 0.35rem;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 80%;
    color: #5e626a;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-body {
    flex-grow: 1;
    width: 99.4%;
    border-top: 1px solid #ccc;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-y: auto;
    z-index: 1;
    background-color: transparent;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item {
    border-bottom: 1px solid #ccc;
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // padding-top: 0.1rem;
    // padding-bottom: 0.1rem;
    overflow: hidden;
    transition: height 0.5s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item:hover {
    height: 32.5%;
}   

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item.selected {
    height: 32.5%;
}   

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item:hover .homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-footer {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
} 

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item.selected .homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-footer {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
} 

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-img {
    width: 30%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-img img {
    width: 57.5px;
    height: 57.5px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: white;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text {
    width: 70%;
    position: relative;
    // border: 1px solid black;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text h4 {
    margin-top: 0.65rem;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 0.1rem;
    font-size: 72.5%;
    font-family: poppins;
    line-height: 1.25;
    color: #53565c;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-params {
    color: #ff5733;
    font-size: 85%;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text p {
    margin-top: 0px;
    margin-bottom: 0.25rem;
    margin-left: 2.5%;
    margin-right: 2.5%;
    font-family: poppins;
    font-weight: bold;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text-prices {
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text-prices span {
    color: #ff5733;
    margin-bottom: 0px;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-old-price {
    // text-decoration: line-through;
    color: #5e626a;
    font-size: 65.5%;
    margin-top: 0px;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-old-price.product {
    text-decoration: line-through;
    color: #5e626a;
    font-size: 72.5%;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-new-price {
    font-size: 92.5%;
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 1.5px;
    text-decoration-style: wavy;
    text-underline-offset: 2.5px;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-footer {
    position: absolute;
    bottom: 0.5rem;
    left: 0.15rem;
    // border: 1px solid black;
    width: 95%;
    height: 25%;
    transform: translateY(1rem);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out, pointer-events 0.5s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-left {
    width: 25%;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-center {
    width: 50%;
    border-top: 1px solid #ff5733;
    border-bottom: 1px solid #ff5733;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-center h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 12.5px;
    color: #5e626a;
    font-weight: bold;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-right {
    width: 25%;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-apply-code {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #ff5733;
    border-radius: 6px;
    background-color: #ff5733;
    color: white;
    font-family: poppins;
    font-size: 75%;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-apply-code:hover {
    background-color: transparent;
    color: #5e626a;
}

    // # HEADER RIGHT SECTION (TWO SMALLER BOXES)

.homepage-header-inner-body-poster-right-right-section {
    width: 50%;
    // border: 1px solid white;
    display: flex;
    flex-direction: column;
}

.homepage-header-inner-body-poster-right-right-section-top {
    height: 50%;
    // border: 1px solid white;
    overflow: hidden;
    border-top-right-radius: 24px;
}

.homepage-header-inner-body-poster-right-right-section-top img {
    width: 110%;
    height: 100%;
    // border-top-right-radius: 24px;
    border-left: 5px solid white;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in {
    background-color: white;
    height: 100%;
    width: 100%;
    position: relative;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container {
    background-color: #20313a;
    margin-left: 0.28rem;
    width: 98%;
    height: 96.25%;
    border: 1px solid #ff5733;
    border-top-right-radius: 24px;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container h2 {
    color: white;
    font-family: raleway;
    margin-top: 0.3rem;
    margin-bottom: 0px;
    margin-left: 3%;
    font-size: 20.5px;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-wallet-subheader h5 {
    font-size: 72.5%;
    font-family: poppins;
    color: white;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 4%;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-wallet-subheader label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 1.5px;
    text-decoration-style: wavy;
    text-underline-offset: 2.5px;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home {
    // border: 1px solid white;
    width: 99.4%;
    margin-top: 0px;
    height: 78.6%;
    display: flex;
    flex-direction: column;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top {
    height: 60%;
    width: 100%;
    // border: 1px solid white;
    display: flex;
    flex-direction: column;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-header {
    height: 60%;
    // border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
    background-image: url('/assets/icons/home-main-header/header-logged-in-wallet-decor.png');
    background-repeat: no-repeat;
    background-position: right 0.35rem center;
    background-size: auto 90%; /* Adjust size as needed */
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-header h1 {
    margin-left: 3%;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-family: lexend;
    font-size: 43.5px;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-header label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 3.5px;
    text-decoration-style: wavy;
    text-underline-offset: 6.5px;
}

// .homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-header img {
//     float: right;
//     width: 20px;
// }

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body {
    flex-grow: 1;
    // border: 1px solid white;
    display: flex;
    justify-content: space-between;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-left {
    width: 60%;
    // border: 1px solid #ff5733;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-left h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 6.5%;
    font-family: poppins;
    font-size: 70%;
    color: white;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-left span {
    color: #ff5733;
    margin-left: 3.5px;
    font-size: 125%;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-left label {
    text-decoration: underline;
    text-decoration-color: #FF5733;
    text-decoration-thickness: 1.5px;
    text-decoration-style: wavy;
    text-underline-offset: 2.5px;
}


.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-right {
    width: 40%;
    // border: 1px solid #ff5733;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-right button {
    background-color: #ff5733;
    border: 1px solid #ff5733;
    border-radius: 6px;
    color: white;
    font-family: poppins;
    font-size: 70%;
    font-weight: bold;
    height: 70%;
    width: 90%;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-right button:hover {
    background-color: #faece9;
    color: #ff5733;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom {
    flex-grow: 1;
    width: 100%;
    // border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: left;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-loading {
    width: 100%;
    height: 100%;
}

.wallet-top-up-tab-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.65rem;
}

.wallet-top-up-tab-loading p {
    margin-top: 0.15rem;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 80%;
    color: #5e626a;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float {
    height: 85%;
    width: 95.85%;
    margin-left: 2%;
    border: 1px solid #ff5733;
    background-color: #faece9;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left {
    width: 60%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
    overflow: hidden;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left-btn {
    height: 50%;
    width: 82.5%;
    border: 1px solid #ff5733;
    border-radius: 8px;
    margin-right: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 0.85rem;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left-btn h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
    color: #ff5733;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left img {
    position: absolute;
    left: 4.25%;
    bottom: -0.65rem;
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-right {
    width: 40%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-right h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 3.5%;
    margin-right: 3.5%;
    font-family: lexend;
    font-weight: bolder;
    color: #ff5733;
    font-size: 80.5%;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options {
    width: 100%;
    height: 100%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    position: relative'
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-left {
    width: 50%;
    border: 1px solid #ff5733;
    display: flex;
    align-items: center;
    justify-content: center;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-left input {
    border: none;
    border-bottom: 1px solid #ff5733;
    outline: none;
    text-align: center;
    width: 85%;
    font-family: poppins;
    font-size: 80%;
    font-weight: bold;
    color: #ff5733;
    background-color: transparent;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right {
    width: 50%;
    border: 1px solid #ff5733;
    position: relative;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right p {
    margin-top: 0px;
    font-family: poppins;
    color: #ff5733;
    font-size: 70%;
    font-weight: bold;
    margin-left: 2.5%;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-exit-btn {
    position: absolute;
    top: 0.1rem;
    right: 0.45rem;
    width: 12.5px;
    height: 12.5px;
    cursor: pointer;
    // border: 1px solid black;
    // background-color: transparent;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-exit-btn img {
    width: 100%;
    height: 100%;
    border: 1px solid transparent !important;
    filter: grayscale(0);
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-exit-btn img:hover {
    filter: grayscale(100%);
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-select-container {
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    height: 65%;
    width: 100%;
    // border: 1px solid black;
}

.wallet-top-up-select-grid-row {
    height: 50%;
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
}

.wallet-top-up-select-grid-item {
    width: 33%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wallet-top-up-select-grid-item button {
    width: 85%;
    height: 85%;
    background-color: #ff5733;
    border: 1px solid #ff5733;
    font-family: lexend;
    color: white;
    font-size: 8.5px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

.wallet-top-up-select-grid-item button:hover {
    background-color: white;
    border: 1px solid #ff5733;
    color: #ff5733;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff2ccff;
    margin-left: 0.28rem;
    width: 98%;
    height: 96.25%;
    border: 1px solid #ff5733;
    border-top-right-radius: 24px;
    transform: translateY(-100%);
    transition: transform 1s ease-in-out, visibility 1s ease-in-out;
    visibility: hidden;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2.open {
    transform: translateY(0);
    visibility: visible;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2 h1 {
    color: #5e626a;
    font-family: lexend;
    font-size: 23.5px;
    margin-left: 3%;
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2 label {
    margin-right: 2.5%;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2 p {
    margin-top: 0rem;
    margin-bottom: 0.45rem;
    margin-left: 3%;
    font-size: 85%;
    font-family: poppins;
    color: #5e626a;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container-shopping-assist {
    // border: 1px solid black;
    width: 99.5%;
    height: 66.25%;
}

.shopping-assistant-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.99rem;
}

.shopping-assistant-loading p {
    margin-top: 0.35rem;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 80%;
    color: #5e626a;
}

.homepage-header-inner-body-poster-right-right-section-bottom {
    height: 50%;
    // border: 1px solid white;
    overflow: hidden;
    border-bottom-right-radius: 24px;
}

.homepage-header-inner-body-poster-right-right-section-bottom img {
    width: 100%;
    height: 100%;
    // border-top-right-radius: 25px;
    border-top: 5px solid white;
    border-left: 5px solid white;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in {
    background-color: white;
    height: 100%;
    width: 100%;
    position: relative;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container {
    background-color: #20313a;
    margin-left: 0.28rem;
    width: 98%;
    height: 98.6%;
    border: 1px solid #ff5733;
    border-bottom-right-radius: 24px;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container h1 {
    font-size: 40px;
    font-family: raleway;
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 0.5rem;
    margin-bottom: 0.1rem;
    color: white;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container label {
   
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container-option-2 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff2ccff;
    margin-left: 0.28rem;
    width: 98%;
    height: 98.6%;
    border: 1px solid #ff5733;
    border-bottom-right-radius: 0px;
    transform: translateY(-100%);
    transition: transform 1s ease-in-out, visibility 1s ease-in-out, border-bottom-right-radius 1.25s ease-in-out;
    visibility: hidden;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container-option-2.open {
    border-bottom-right-radius: 24px;
    transform: translateY(0);
    visibility: visible;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container,
.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container {
    background-color: #20313a;
    width: 98%;
    border: 1px solid #ff5733;
    position: relative;
    overflow: hidden;
    transition: background-color 0.6s ease-in-out;
}

.homepage-header-inner-body-poster-right-right-section-top-logged-in-container {
    margin-left: 0.28rem;
    height: 96.25%;
    border-top-right-radius: 24px;
}

.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container {
    margin-left: 0.28rem;
    height: 98.6%;
    border-bottom-right-radius: 24px;
}

/* Pseudo-element for the peel effect */
.homepage-header-inner-body-poster-right-right-section-top-logged-in-container::after,
.homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
    transition: clip-path 0.6s ease-in-out;
}

/* The class that gets added on click */
.animate-peel::after {
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
}

/* Ensures the container fully changes color */
.animate-peel {
    background-color: var(--background-color);
}

    // - - HOMEPAGE BODY - - //

.homepage-body {
    // border: 1px solid black;
    height: 50rem;
}

.homepage-body-inner-header {
    height: 15%;
    // border: 1px solid black;
    position: relative;
    margin-top: -2.25rem;
    z-index: 3;
}

.homepage-body-inner-header h1 {
    font-family: poppins;
    color: #ff5733;
    font-weight: bolder;
    margin-top: 5px;
    margin-left: 1.25%;
    margin-right: 1.25%;
}

.homepage-body-inner-header-options {
    position: absolute;
    bottom: 0;
    width: 99%;
    height: 60%;
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.05%;
    gap: 20px; /* Better spacing between items */
}

.homepage-body-inner-header-option {
    width: 11.5rem;
    border: 1px solid #ccc;
    height: 42.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-radius: 8px;
    cursor: pointer;
}

/* Push last button to far right */
.homepage-body-inner-header-option-pamoja {
    margin-left: auto; /* Pushes this element to the right */
    width: 16.5rem;
    border: 1px solid #ccc;
    height: 42.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    // gap: 5px;
}

.homepage-body-inner-header-option:hover {
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option.selected {
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    color: #5e626a;
    font-family: poppins;
    font-size: 80%;
    // font-weight: normal;
    cursor: pointer;
}

.homepage-body-inner-header-option img {
    width: 13.5px;
    margin-top: 0.32rem;
    cursor: pointer;
    transform: rotate(0deg);
    transition-property: transform
}

.homepage-body-inner-header-option.selected img {
    transform: rotate(180deg);
}

.homepage-body-inner-header-option-pamoja {
    width: auto;
    border: 1px solid #20313a;
    height: 42.5%;
    display: flex;
    align-items: center;
    background-color: #20313a;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    border-radius: 8px;
    margin-right: 20px;
    cursor: pointer;
}

.homepage-body-inner-header-option-pamoja:hover {
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-pamoja:hover .dial-container {
    background-color: #fff;
}

.homepage-body-inner-header-option-pamoja:hover .dial-button {
    background-color: #ff5733;
}

.homepage-body-inner-header-option-pamoja.selected {
    border: 1px solid #ff5733;
    background-color: #ff5733;
}

.homepage-body-inner-header-option-pamoja h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    color: #fff;
    font-family: poppins;
    font-size: 80%;
    // font-weight: normal;
    cursor: pointer;
}

.homepage-body-inner-header-option-pamoja.selected h4 {
    color: white;
}

.homepage-body-inner-header-option-pamoja img {
    width: 13.5px;
    margin-top: 0.32rem;
    cursor: pointer;
    transform: rotate(0deg);
    transition-property: transform
}

.homepage-body-inner-header-option-pamoja.selected img {
    transform: rotate(180deg);
}

.homepage-body-inner-header-option-dropdown-option-1 {
    width: 18.2rem;
    border: 1px solid white;
    height: 16.5rem;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    border-radius: 8px;
    // margin-right: 20px;
    background-color: white;
    visibility: hidden;
    overflow-y: auto;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition-property: transform, opacity;
}

.homepage-body-inner-header-option-dropdown-option-1.selected {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    z-index: 2;
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-dropdown-option-2 {
    width: 15.5rem;
    border: 1px solid white;
    height: 10rem;
    display: flex;
    flex-direction: column;
    margin-left: -3.5rem;
    padding: 0px;
    border-radius: 8px;
    visibility: hidden;
    background-color: white;
    overflow-y: auto;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition-property: transform, opacity;
}

.homepage-body-inner-header-option-dropdown-option-2.selected {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    z-index: 2;
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-dropdown-option-3 {
    width: 15.5rem;
    border: 1px solid white;
    height: 10rem;
    display: flex;
    visibility: visible;
    flex-direction: column;
    margin-left: -1rem;
    padding: 0px;
    border-radius: 8px;
    background-color: white;
    visibility: hidden;
    overflow-y: auto;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition-property: transform, opacity;
}

.homepage-body-inner-header-option-dropdown-option-3.selected {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    z-index: 2;
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-dropdown-option-35 {
    width: 18.2rem;
    border: 1px solid white;
    height: 16.5rem;
    display: flex;
    flex-direction: column;
    margin-left: -1rem;
    visibility: hidden;
    padding: 0px;
    border-radius: 8px;
    background-color: white;
    overflow: hidden;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition-property: transform, opacity;
}

.homepage-body-inner-header-option-dropdown-option-35.selected {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    z-index: 2;
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-dropdown-option-35-search-container  {
    position: sticky;
    // height: 1.5rem;
    border-bottom: 1px solid #ccc;
    // border: 1px solid black;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding: 4.25px;
    display: flex;
    justify-content: space-between;
}

.homepage-body-inner-header-option-dropdown-option-35-search-container-left {
    width: 10%;
    height: 2rem;
    border: 1px solid #ccc;
    border-right: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.homepage-body-inner-header-option-dropdown-option-35-search-container-left img {
    width: 15px;
}

.homepage-body-inner-header-option-dropdown-option-35-search-container-right {
    width: 90%;
    height: 2rem;
    border: 1px solid #ccc;
    border-left: 1px solid transparent;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: left;
}

.homepage-body-inner-header-option-dropdown-option-35-search-container input {
    height: 1.5rem;
    padding-right: 3.5px;
    font-family: poppins;
    font-size: 80%;
    width: 95%;
    outline: none;
    border: none;
}

.homepage-body-inner-header-option-dropdown-option-35-brands {
    // border: 1px solid black;
    overflow-y: auto;
    flex-grow: 1;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.homepage-body-inner-header-option-dropdown-option-35-brands-highlight {
    color: #ff5733;
    font-weight: bold;
}

.homepage-body-inner-header-option-dropdown-option-4 {
    width: 20.35rem;
    border: 1px solid white;
    height: 10rem;
    display: flex;
    flex-direction: column;
    margin-left: -0.8rem;
    padding: 0px;
    border-radius: 8px;
    background-color: white;
    overflow-y: auto;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition-property: transform, opacity;
}

.homepage-body-inner-header-option-dropdown-option-4.selected {
    transform: translateY(0);
    opacity: 1;
    z-index: 2;
    border: 1px solid #ff5733;
}

.homepage-body-inner-header-option-dropdown-filter-option {
    // height: 1.5rem;
    border-bottom: 0.5px solid #ccc;
    width: 100%;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    // padding: 0px;
    cursor: pointer;
}

.homepage-body-inner-header-option-dropdown-filter-option:hover {
    background-color: #faece9;
}

.homepage-body-inner-header-option-dropdown-filter-option.selected {
    background-color: #faece9;
}

.homepage-body-inner-header-option-dropdown-filter-option.selected label {
    color: #ff5733;
    font-weight: bold;
    text-decoration: underline;
}

.homepage-body-inner-header-option-dropdown-filter-option label {
    font-size: 85%;
    font-family: poppins;
    margin-left: 5%;
    // paddin: 5rem;
    // margin-bottom: 5rem;
    cursor: pointer;
}

.dial-container {
    width: 30px;  /* Container width */
    height: 15px;
    background-color: #d3d3d3;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 5px;
    position: relative;
    transition: background-color 0.3s ease;
}

.dial-container.active {
    background-color: white;
}

.dial-button {
    width: 14px;
    height: 14px;
    background-color: #888;
    border-radius: 50%;
    position: absolute;
    left: 5px;  /* Start position */
    transition: left 0.3s ease;
}

.dial-button.active {
    left: 21.5px;  /* Slide to the right */
    background-color: #ff5733;
}

.homepage-body-inner-body {
    // border: 1px solid black;
}

.homepage-body-inner-body-inner-header {
    // border: 1px solid black;
    height: 0rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 1.05%;
    padding-right: 1.05%;
    // overflow: hidden;
    // z-index: 0;
}

.grocery-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 20px;
    margin-top: -1.5rem;
    // border: 1px solid black;
    padding-bottom: 5px;
}

/* Promo Row */
.promo-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
}

/* Filters */
.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filters option {
    background-color: white;
}

/* Main Product Grid */
.product-grid {
    padding: 0px;
    // border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    text-align: center;
}

.no-results-message {
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    grid-column: 1 / -1; /* Ensure it spans the full width of the grid */
    min-height: 390px; /* Ensures enough height for centering */
}

.no-results-message h3 {
    color: #5e626a;
    font-family: poppins;
    margin-bottom: 0px;
}

.no-results-message p {
    color: #5e626a;
    font-family: poppins;
    font-size: 85%;
}

.no-results-message img {
    width: 50px;
    height: 50px;
}

.loading-products-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
}

    // - - CSS TRANSITIONS / ANIMATIONS - - //

.navbar-search-bar,
// .searchResultCellImg img,
.scroll-to-page-top,
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
.navbar-profile-account-popup-body-search-bar-results,
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
.navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification,
.navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-icon img,
.navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown,
.navbar-profile-account-popup-faqs-settings-body-bottom-container-search-results,
.navbar-profile-account-popup-faqs-settings-body-bottom-single-response,
.homepage-body-inner-header-option img,
.homepage-body-inner-header-option-dropdown-option-1,
.homepage-body-inner-header-option-dropdown-option-2,
.homepage-body-inner-header-option-dropdown-option-3,
.homepage-body-inner-header-option-dropdown-option-35,
.homepage-body-inner-header-option-dropdown-option-4,
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

    constructor (props) {
        super(props)
        this.state = {
            //* - FULL PAGE ELEMENTS - *//
            displayScrollUpBtn: false,

            //* - USER ACCOUNT STATUS - *//
            userSignedIn: true,
            showAccountInformation: true,
            showJipangeSettings: false,
            showPamojaSettings: false,
            showDeliveryInfoSettings: false,
            showFAQSettings: false,
            showSettingsPageLoading: false,

            //* # Profile
            accountSetupComplete: false,
            accountSettingFirstName: '',
            accountSettingLastName: '',
            accountSettingEmail: '',
            phoneNumberVerified: false,
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
            jipangeProduct6Cat1CountBtn: 0,
            jipangeProduct7Cat1CountBtn: 0,
            jipangeProduct8Cat1CountBtn: 0,
            jipangeProduct9Cat1CountBtn: 0,
            jipangeProduct1Cat3CountBtn: 0,
            jipangeProduct1Cat4CountBtn: 0,
            jipangeProduct2Cat4CountBtn: 0,
            jipangeProduct3Cat4CountBtn: 0,
            jipangeProduct4Cat4CountBtn: 0,
            jipangeProduct1Cat5CountBtn: 0,
            jipangeProduct2Cat5CountBtn: 0,
            jipangeProduct3Cat5CountBtn: 0,
            jipangeProduct4Cat5CountBtn: 0,
            jipangeProduct5Cat5CountBtn: 0,
            jipangeProduct1Cat6CountBtn: 0,
            jipangeProduct1Cat12CountBtn: 0,
            jipangeProduct1Cat13CountBtn: 0,
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
            jipangeProduct6Cat1Qty: 0,
            jipangeProduct6Cat1Price: 0,
            jipangeProduct6Cat1: 'VP Foods Baby Plum Tomatoes',
            jipangeProduct7Cat1Qty: 0,
            jipangeProduct7Cat1Price: 0,
            jipangeProduct7Cat1: 'Mlango Farms Organic Red Chard Spinach (1 bunch)',
            jipangeProduct8Cat1Qty: 0,
            jipangeProduct8Cat1Price: 0,
            jipangeProduct8Cat1: 'Mlango Farms Organic Curly Kale (1 bunch)',
            jipangeProduct9Cat1Qty: 0,
            jipangeProduct9Cat1Price: 0,
            jipangeProduct9Cat1: 'TuShop Fresh Fresh Red Cabbage (1 piece)',
            jipangeProduct5Cat1Qty: 0,
            jipangeProduct5Cat1Price: 0,
            jipangeProduct1Cat3: 'Kenchic Spring Chicken (750g)',
            jipangeProduct1Cat3Qty: 0,
            jipangeProduct1Cat3Price: 0,
            jipangeProduct1Cat4: 'Brookside Whole Milk 1L Long Life',
            jipangeProduct1Cat4Qty: 0,
            jipangeProduct1Cat4Price: 0,
            jipangeProduct2Cat4: 'Brookside Full Cream Milk Powder Tin (500g)',
            jipangeProduct2Cat4Qty: 0,
            jipangeProduct2Cat4Price: 0,
            jipangeProduct3Cat4: 'TuShop Fresh Mixed Sizes Eggs (30pcs)',
            jipangeProduct3Cat4Qty: 0,
            jipangeProduct3Cat4Price: 0,
            jipangeProduct4Cat4: 'Bio Salted Artisanal Butter (500g)',
            jipangeProduct4Cat4Qty: 0,
            jipangeProduct4Cat4Price: 0,
            jipangeProduct1Cat5: 'Blueband Original (250g)',
            jipangeProduct1Cat5Qty: 0,
            jipangeProduct1Cat5Price: 0,
            jipangeProduct2Cat5: 'Mumias Sugar White (2kg)',
            jipangeProduct2Cat5Qty: 0,
            jipangeProduct2Cat5Price: 0,
            jipangeProduct1Cat6: 'Rascals 17kgs Premium CoComelon Training Diaper Pants - Size 7 (22pcs)',
            jipangeProduct1Cat6Qty: 0,
            jipangeProduct1Cat6Price: 0,
            jipangeProduct3Cat5: 'MacCoffee Classic (200g)',
            jipangeProduct3Cat5Qty: 0,
            jipangeProduct3Cat5Price: 0,
            jipangeProduct4Cat5: 'Rinsun 100% Sunflower Oil (3L)',
            jipangeProduct5Cat5Qty: 0,
            jipangeProduct5Cat5Price: 0,
            jipangeProduct5Cat5: 'TuShop Fresh Mwea Pishori Rice (1kg)',
            jipangeProduct4Cat5Qty: 0,
            jipangeProduct4Cat5Price: 0,
            jipangeProduct1Cat12: 'Minute Maid: Mango Pulpy Juice (400ml)',
            jipangeProduct1Cat12Qty: 0,
            jipangeProduct1Cat12Price: 0,
            jipangeProduct1Cat13: 'McVities Digestive Biscuits (400g)',
            jipangeProduct1Cat13Qty: 0,
            jipangeProduct1Cat13Price: 0,
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

            //* # Delivery Info *//
            deliveryInfoDefaultAddressSelected: false,
            deliveryInfoDefaultAddressText: "",
            deliveryInfoAddressType1: false,
            deliveryInfoAddressType2: false,
            deliveryInfoAddressType3: false,
            deliveryInfoAddressType4: false,

            //* # FAQs *//
            faqTopics: ['All topics','My FAQ', 'Delivery', 'Payment', 'Shop Pamoja', 'Jipange', 'General', 'Support'],
            faqSettingsDisplayTopicDropdown: false,
            faqSettingsSelectedTopic: 'All topics',
            searchBarInputFAQ: '',
            showFAQSingleResponse: false,
            showFAQResponseLoading: false,
            showFAQNoResponseSelected: true,
            faqFilteredResults: FAQSearchTerms,
            showFAQSubmitBtnTxt: true,
            showFAQSubmitBtnLoading: false,
            faqSubmitText: '',
            faqSubmitTextNotification: 'Your question was submitted successfully!',
            faqSubmitTextSuccess: false,
            
            //* - SEARCH BAR COMPONENTS - *//
            searchBarIsClicked: false,
            searchBarInput: '',
            searchBarInputJipange: '',
            searchBarInputAccountPopup: '',
            filteredOptions: [],

            //* - HOME SCREEN SHOPPING CART - *//
            homeScreenCartClicked: false,
            cart: [],

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
            accountMenuOption5Selected: false,

            //* - NAVBAR DROPDOWN OPTIONS INFO - *//
            showNavbarDropdownOption1: false,
            showNavbarDropdownOption2: false,
            showNavbarDropdownOption3: false,
            showNavbarDropdownOption4: false,

            dropdownMenuDisplayed: false,

            dropdownMenuOption1Selected: true,
            dropdownMenuOption2Selected: false,
            dropdownMenuOption3Selected: false,
            dropdownMenuOption4Selected: false,

            //* - NAVBAR SHOPPING CART INFO - *//
            totalCartItems: 0,
            totalCartPrice: 0,
            
            //* - - HOMESCREEN MAIN PAGE - - *//

            homepageNewUpdatesShow: true,
            dateTime: this.getFormattedDate(),
            announcementBarIsPaused: false,

            //* - - HOMESCREEN PRODUCTS GRID DISPLAY - - *//

            //* - HEADER CONTAINER - *//
            isLeftHeaderTransitionActive: false,
            isRightTopHeaderTransitionActive: false,
            isRightBottomHeaderTransitionActive: false,
            transitionBackgroundColor: '',
            selectedHeaderOption: '',

            //* # PROMO *//
            showPromoItemsList: true,
            showPromoItemsLoading: false,
            promoAllCategorySelected: true,
            promoProductCategorySelected: false,
            promoDiscountCodeCategorySelected: false,
            promoItems: [
                { id: 21, name: 'TuShop Fresh Mixed Sizes Eggs', oldPrice: 205.00, newPrice: 250.00, type: 'product', description: '', qty: 0, img: '/assets/images/products/eggs-product.png'},
                { id: 9, name: 'TuShop Fresh Mwea Pishori Rice', oldPrice: 205.00, newPrice: 190.00, type: 'product', description: '', qty: 0, img: '/assets/images/products/rice-product.png'},
                { id: 3, name: 'Get Ksh. 250 off your first order.', oldPrice: 205.00, newPrice: 'MAX250', type: 'code', description: '', qty: 0, promoParams: 'Valid forever', img: '/assets/images/codes/promoCode2.png'},
                { id: 4, name: 'Bio Salted Artisanal Butter (500g)', oldPrice: 879.00, newPrice: 850.00, type: 'product', description: '', qty: 0, img: '/assets/images/products/butter-product.png'},
                { id: 8, name: 'Tushop Fresh Local Watermelon', oldPrice: 369.00, newPrice: 320.00, type: 'product', description: '', qty: 0, img: '/assets/images/products/watermelon-product.webp'},
                { id: 6, name: 'Get Ksh. 300 off orders over Ksh. 1999.', oldPrice: 205.00, newPrice: 'APR300', type: 'code', description: '', qty: 0, promoParams: 'Valid till 30/04/25', img: '/assets/images/codes/promoCode1.png'},
              ],
            selectedPromoType: 'all',

                //* # SHOPPING LIST *//
            showShopAssistantLoading: false,
            items: [''], // Shopping list items (starts with one empty bullet)
            focusIndex: null, // 👈 Track which input to focus
            

            //* # WALLET # *//
            showWalletTopUpHomeView: false,
            showWalletTopUpMainView: true,
            showWalletTopUpViewLoading: false,

            //* # PRODUCT GRID
            products: products,
            visibleCount: 6, // Initial number of items to render
            filteredProductCount: 0,
            newlyLoadedProducts: [],
            productsLoading: false,
            loadingMore: false,
            selectedFilters: {
                category: "All",
                price: "All",
                rating: "All",
                brand: "All",
                // pamoja: false
            },
            shopPamojaActive: false,
            categoryOptions: ["All", "Fruits & Vegetables", "Organic", "Meat", "Dairy", "Food Cupboard", "Baby Care", "Easy Prep", "Condiments & Spices", "Home & Cleaning", "Bulk Buy", "Personal Care", "Beverages", "Snacks", "Bakery", "Bundles", "Stationary", "Home Appliances", "Alcohol", "Pets", "Decor & Flowers", "Services", "Shopping Bags", "Kids & Toys",],
            priceOptions: ["All", 500, 1000, 1500], // Example price thresholds
            ratingOptions: ["All", 2, 3, 4, 5], // Example minimum ratings
            brandOptions: ["All", 'Ajab', 'Amaize', 'Daima', 'Kabras', 'Weetabix', 'Mount Kenya', 'Rina', 'Sunlight', 'Soko', 'Toilex', 'Ketepa Pride', 'Everfresh', 'Raha Havagara', 'Velvex', 'Festive', 'Peptang', 'Poshy', 'Exe', 'Coca Cola', 'Vaseline', 'Toss', 'Molfix', 'Blueband', 'Geisha', 'Mumias', 'Tropical Heat', 'Brookside', 'Prestige', 'Daawat', 'Santa Lucia', 'Santa Maria', 'MacCoffee', 'McVites', 'Downy', 'Royco', 'Kericho Gold', 'Kings', 'Sunrice', 'Msafi', 'Delmonte', 'Green Forest', 'Nivea', 'Amara', 'Butter Fly', 'Amana', 'Kara', 'Morning Fresh', 'Rinsun', 'Pick \'n\' Peel', 'Caprice', 'Mosoro', 'Boito Delights', 'Pynol', 'Pearl', 'Dove', 'Mlango Farm', 'Kenchic', 'Grounded', 'Nyumbani Greens', 'Rascals', 'Victory Farms', 'Times Bakers', 'Karunguru', 'FunKe Science', 'Highland Castle Farms', 'South Lemon', 'Grounded Baby', 'Booch', 'Jars of Goodness', 'StewsDay', 'Sirimon Cheese', 'Sweetunda', 'WHB', 'Bree\'s Bees Honey', 'Zaifa', 'Savory Leans', 'Kenbeef', 'Afia', 'Over a Drink', 'Global Tilapia', 'Cherubet Foods', 'KROM Rice', 'Serene', 'Flavour Infusion', 'Clavel Flowers', 'Moyo', 'Harmony', 'Godson Organics', 'JollyFill', 'Sumz', 'Clovers', 'Tiba Asili', 'Taliana Foods', 'Blaze', 'VP Foods', 'Royal County Farms', 'Bogani', 'Softcare', 'Hanan', 'Dormans', 'Safisha', 'Celine', 'Garnier', 'Bio', 'Keystone Dental Clinic', 'Adam\'s Harvest', 'Kijani', 'CoffeBee Nemrys', 'Farmer\'s Choice', 'Temmis', 'Royal Care', 'Fresh Bundles', 'Dabur Herbal', '10 Seeds', 'Delish & Nutri', 'Kids Stem & Robotics Toys KE', 'Piquant Spices', 'Sk8City', 'Mugunda Foods', 'KenMeat', 'Brew It', 'The Flower Factory', 'Laki Laki', 'Flora Nuts', 'Time Scent Classy Store', 'Chika Chika', 'ORS Olive Oil', 'Huggies', 'Neil & Co.', 'NIP NAP', 'TuShop Fresh', 'Mountain Juice', 'Ololo Farm', 'KMC', 'Mayers', 'Spring Valley', 'BabyBump'], // Example minimum ratings
            brandSearchTerm: '',
            homepageProductsCurrentFilter: 0,
            homepagePrdouctsFilter1: false,
            homepagePrdouctsFilter2: false,
            homepagePrdouctsFilter3: false,
            homepagePrdouctsFilter4: false,
            homepagePrdouctsFilter5: false,
            homepageCurrentCategoryFilter: 'All Products',
            homepageCurrentPriceFilter: 'Price',
            homepageCurrentRatingFilter: 'Rating',
            homepageCurrentBrandFilter: 'Brands',
            // homepageCurrentPamojaFilter: false

        }

        //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

        //* - SEARCH BAR REFERENCE - *//
        this.searchBarRef = React.createRef();

        this.inputs = []; // To store input element references

        //* - ANNOUNCEMENT BAR REFERENCE - *//
        this.announcementBarRef = React.createRef();

        //* - PRODUCT SCROLL REFERENCE - *//
        this.sentinelRef = React.createRef();
        this.observer = null;
        this.elementRef = React.createRef();

        //* - SHOPPING LIST REFERENCE - *//
        this.inputRefs = [React.createRef()];
    }

    componentDidMount = () => {
        document.addEventListener("click", this.handleOutsideSearchBarClick);

        // ✅ Intersection Observer for infinite scrolling
        this.scrollObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !this.state.loadingMore) {
                    this.loadMoreItems();
                }
            },
            { root: document.getElementById("scrollable-container"), threshold: 0.1 }
        );

        if (this.sentinelRef.current) {
            this.scrollObserver.observe(this.sentinelRef.current);
        }

        // Update the time every minute
        this.timer = setInterval(() => {
            this.setState({ dateTime: this.getFormattedDate() });
        }, 60000);

        // ✅ Intersection Observer for detecting when an element is out of view
        this.viewObserver = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    if (!this.state.displayScrollUpBtn) {
                        this.setState({ displayScrollUpBtn: true });
                    }
                } else {
                    if (this.state.displayScrollUpBtn) {
                        this.setState({ displayScrollUpBtn: false });
                    }
                }
            },
            { threshold: 0 }
        );

        if (this.elementRef.current) {
            this.viewObserver.observe(this.elementRef.current);
        }

        this.setState({ productsLoading: true }, () => {
            setTimeout(() => {
                this.setState({ productsLoading: false });
            }, 5000); // Skeleton loader for 5s
        });
    }

    componentDidUpdate(prevProps, prevState) {

            //* - - FILTERING PRODUCTS - - *//
        if (prevState.products !== this.state.products || prevState.selectedFilters !== this.state.selectedFilters) {
            this.updateFilteredProductCount();
        }

            //* - - MOVING CURSOR TO NEXT SHOPPING LIST ITEM - - *//
        if (this.state.focusIndex !== null) {
            const inputToFocus = this.inputRefs[this.state.focusIndex]?.current;
            if (inputToFocus) {
              inputToFocus.focus();
              // Move cursor to end of input
              const val = inputToFocus.value;
              inputToFocus.setSelectionRange(val.length, val.length);
            }
            this.setState({ focusIndex: null }); // Reset
          }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideSearchBarClick);

            // ✅ Cleanup observers
        if (this.scrollObserver) this.scrollObserver.disconnect();
        if (this.viewObserver) this.viewObserver.disconnect();

        // Clear interval when component unmounts
        clearInterval(this.timer);
    }

    getFormattedDate = () => {
        const now = new Date();

        // Format date
        const date = now.toLocaleDateString("en-US", {
            weekday: "long", // Sunday
            month: "short",   // Mar
            day: "numeric"    // 16
        });

        // Format time
        const time = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }).toLowerCase().replace(" ", ""); // Convert to lowercase "pm" and remove space

        return `${date} ${time}`;
    };

    handleAnnouncementBarMouseEnter = () => {
        this.setState({ announcementBarIsPaused: true });
    };

    handleAnnouncementBarMouseLeave = () => {
        this.setState({ announcementBarIsPaused: false });
    };

    handleScrollToElement = () => {
        const element = document.getElementById("homepage-header");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    updateFilteredProductCount = () => {
        const filteredProducts = this.mainPageProductsFilterProducts();
        this.setState({ filteredProductCount: filteredProducts.length });
    };

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
        clearTimeout(this.searchTimeout);
    
        // Set a new timeout to execute after 500ms (debounce)
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
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
                    let filteredOptions = SearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(" ");
                        const optionWords = name.split(" ");
    
                        if (searchWords.length === 1) {
                            return optionWords.some(optionWord => optionWord.startsWith(searchWords[0]));
                        } else {
                            return name.includes(searchWords.join(" "));
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0;
    
                    // 🔹 Update `qty` for search results based on cart
                    const updatedOptions = filteredOptions.map(option => {
                        const cartItem = this.state.products.find(item => item.id === option.id);
                        return {
                            ...option,
                            qty: cartItem ? cartItem.qty : 0, // Use cart qty if exists, otherwise default to 0
                            highlightedName: this.highlightMatchedCharacters(option, searchInput),
                        };
                    });
    
                    const groupedResults = this.groupBy(updatedOptions, "category");
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // 🔹 Update state with updated search results (with cart quantities)
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: updatedOptions, // Updated search results
                        isSearchLoading: false,
                        resultsFound: resultsFound,
                    });
                });
            }
        }, 500); // Adjust debounce delay as needed
    };

    handleSearchChangeJipange = (e) => {

        this.setState({
            searchBarInputJipange: e.target.value,
            isSearchLoadingJipange: true,
            clearSearchBtn: true,
            showTimezones: false
        });
    
        const searchInput = e.target.value.toLowerCase();
    
        // Clear previous timeout
        clearTimeout(this.searchTimeout);
    
        // Set a new timeout to execute after 500ms (debounce)
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoadingJipange: false,
                    resultsFound: false,
                    clearSearchBtn: false,
                });
            } else {
                this.setState({ isSearchLoadingJipange: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    let filteredOptions = SearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(" ");
                        const optionWords = name.split(" ");
    
                        if (searchWords.length === 1) {
                            return optionWords.some(optionWord => optionWord.startsWith(searchWords[0]));
                        } else {
                            return name.includes(searchWords.join(" "));
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0;
    
                    // 🔹 Update `qty` for search results based on cart
                    const updatedOptions = filteredOptions.map(option => {
                        const cartItem = this.state.products.find(item => item.id === option.id);
                        return {
                            ...option,
                            qty: cartItem ? cartItem.qty : 0, // Use cart qty if exists, otherwise default to 0
                            highlightedName: this.highlightMatchedCharacters(option, searchInput),
                        };
                    });
    
                    const groupedResults = this.groupBy(updatedOptions, "category");
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // 🔹 Update state with updated search results (with cart quantities)
                    this.setState({
                        trieByCategory,
                        groupedOptionsJipange: groupedResults,
                        filteredOptions: updatedOptions, // Updated search results
                        isSearchLoadingJipange: false,
                        resultsFoundJipange: resultsFound,
                    });
                });
            }
        }, 500); // Adjust debounce delay as needed
    };

    handleSearchChangeAccount = (e) => {

        this.setState({
            searchBarInputAccountPopup: e.target.value,
            isSearchLoadingAccountPopup: true,
            clearSearchBtn: true,
            showTimezones: false
        });
    
        const searchInput = e.target.value.toLowerCase();
    
        // Clear previous timeout
        clearTimeout(this.searchTimeout);
    
        // Set a new timeout to execute after 500ms (debounce)
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoadingAccountPopup: false,
                    resultsFound: false,
                    clearSearchBtn: false,
                });
            } else {
                this.setState({ isSearchLoadingAccountPopup: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    let filteredOptions = AccountSearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(" ");
                        const optionWords = name.split(" ");
    
                        if (searchWords.length === 1) {
                            return optionWords.some(optionWord => optionWord.startsWith(searchWords[0]));
                        } else {
                            return name.includes(searchWords.join(" "));
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0;
    
                    // 🔹 Update `qty` for search results based on cart
                    const updatedOptions = filteredOptions.map(option => {
                        const cartItem = this.state.products.find(item => item.id === option.id);
                        return {
                            ...option,
                            qty: cartItem ? cartItem.qty : 0, // Use cart qty if exists, otherwise default to 0
                            highlightedName: this.highlightMatchedCharacters(option, searchInput),
                        };
                    });
    
                    const groupedResults = this.groupBy(updatedOptions, "category");
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // 🔹 Update state with updated search results (with cart quantities)
                    this.setState({
                        trieByCategory,
                        groupedOptionsAccountPopup: groupedResults,
                        filteredOptions: updatedOptions, // Updated search results
                        isSearchLoadingAccountPopup: false,
                        resultsFoundAccountPopup: resultsFound,
                    });
                });
            }
        }, 500); // Adjust debounce delay as needed
    };

    handleSearchChangeFAQ = (e) => {

        this.setState({
            searchBarInputFAQ: e.target.value,
            isSearchLoadingFAQ: true,
            clearSearchBtn: true,
            showTimezones: false
        });
    
        const searchInput = e.target.value.toLowerCase();
    
        // Clear previous timeout
        clearTimeout(this.searchTimeout);
    
        // Set a new timeout to execute after 500ms (debounce)
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoadingFAQ: false,
                    resultsFound: false,
                    clearSearchBtn: false,
                });
            } else {
                this.setState({ isSearchLoadingFAQ: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    let filteredOptions = FAQSearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(" ");
                        const optionWords = name.split(" ");
    
                        if (searchWords.length === 1) {
                            return optionWords.some(optionWord => optionWord.startsWith(searchWords[0]));
                        } else {
                            return name.includes(searchWords.join(" "));
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0;
    
                    // 🔹 Update `qty` for search results based on cart
                    const updatedOptions = filteredOptions.map(option => {
                        const cartItem = this.state.products.find(item => item.id === option.id);
                        return {
                            ...option,
                            qty: cartItem ? cartItem.qty : 0, // Use cart qty if exists, otherwise default to 0
                            highlightedName: this.highlightMatchedCharacters(option, searchInput),
                        };
                    });
    
                    const groupedResults = this.groupBy(updatedOptions, "category");
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // 🔹 Update state with updated search results (with cart quantities)
                    this.setState({
                        trieByCategory,
                        groupedOptionsFAQ: groupedResults,
                        filteredOptions: updatedOptions, // Updated search results
                        isSearchLoadingFAQ: false,
                        resultsFoundFAQ: resultsFound,
                    });
                });
            }
        }, 500); // Adjust debounce delay as needed
    };

    searchTermFAQClicked = (category, option) => {
        if (!this.state.showFAQResponseLoading) {
            this.setState({
                showFAQNoResponseSelected: false,
                showFAQSingleResponse: false,
                showFAQResponseLoading: true,
                faqSettingsSelectedResponse: option.name,
                faqSettingsSingleResponseDisplay: false,
                searchBarInputFAQ: ''
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showFAQResponseLoading: false,
                        showFAQSingleResponse: true,
                        selectedFAQuestion: option.name,
                        selectedFAQTopic: category,
                        selectedFAQResponse: option.answer,
                    })
                }, 2500)
                setTimeout(() => {
                    this.setState({
                        faqSettingsSingleResponseDisplay: true
                    })
                }, 2700)
            })
        }
    }

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

    mainSearchBarSearchedTermClicked = (category, option) => {
        if (option.qty === 0) {
            this.mainPageProductsHandleQtyChange(option.id, 1)
        } 
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
                case 4:
                    prevMenuOption = "showMyOrdersSettings";
                    break;
                case 5:
                    prevMenuOption = "showFAQSettings";
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
                case 4:
                    newMenuOption = "showMyOrdersSettings";
                    break;
                case 5:
                    newMenuOption = "showFAQSettings";
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
            totalJipangeOrderQty: this.state.jipangeProduct1Cat1Qty + this.state.jipangeProduct2Cat1Qty + this.state.jipangeProduct3Cat1Qty + this.state.jipangeProduct4Cat1Qty + this.state.jipangeProduct5Cat1Qty + this.state.jipangeProduct6Cat1Qty + this.state.jipangeProduct7Cat1Qty + this.state.jipangeProduct8Cat1Qty + this.state.jipangeProduct9Cat1Qty + this.state.jipangeProduct1Cat3Qty + this.state.jipangeProduct1Cat4Qty + this.state.jipangeProduct2Cat4Qty + this.state.jipangeProduct3Cat4Qty + this.state.jipangeProduct1Cat5Qty + this.state.jipangeProduct2Cat5Qty + this.state.jipangeProduct3Cat5Qty + this.state.jipangeProduct4Cat5Qty + this.state.jipangeProduct5Cat5Qty + this.state.jipangeProduct1Cat12Qty + this.state.jipangeProduct1Cat13Qty
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

    faqSubmitBtnClicked = () => {
        this.setState({
            showFAQSubmitBtnTxt: false,
            showFAQSubmitBtnLoading: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    showFAQSubmitBtnTxt: true,
                    showFAQSubmitBtnLoading: false,
                    faqSubmitText: '',
                    faqSubmitTextSuccess: true
                })
            }, 2500)
            setTimeout(() => {
                this.setState({
                    faqSubmitTextSuccess: false
                })
            }, 5000)
        })
    }

    handleFaqSettingsTopicSelected = (topic) => {
        this.setState({
            faqSettingsSelectedTopic: topic,
            faqFilteredResults: topic === 'All topics' ? FAQSearchTerms : FAQSearchTerms.filter(item => item.category === topic)
        }, () => {
            this.setState({
                faqSettingsDisplayTopicDropdown: false
            })
        })
    }

    handleFaqSettingsResponseSelected = (response) => {
        if (!this.state.showFAQResponseLoading) {
            this.setState({
                showFAQNoResponseSelected: false,
                showFAQSingleResponse: false,
                showFAQResponseLoading: true,
                faqSettingsSelectedResponse: response.name,
                faqSettingsSingleResponseDisplay: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showFAQResponseLoading: false,
                        showFAQSingleResponse: true,
                        selectedFAQuestion: response.name,
                        selectedFAQTopic: response.category,
                        selectedFAQResponse: response.answer
                    })
                }, 2500)
                setTimeout(() => {
                    this.setState({
                        faqSettingsSingleResponseDisplay: true
                    })
                }, 2700)
            })
        }
    }

    handleFaqSettingsDropdownSelected = () => {
        this.setState((prevState) => ({
            faqSettingsDisplayTopicDropdown: !prevState.faqSettingsDisplayTopicDropdown
        }))
    }


        //* - - MAIN HOME PAGE FUNCTIONS - - *//

    mainPageProductsHandleFilterChange = (type, value) => {
        // Clear newly loaded items immediately & start loading state
        this.setState({ productsLoading: true, newlyLoadedProducts: [] }, () => {
            setTimeout(() => {
                this.setState((prevState) => {
                    const newFilters = {
                        ...prevState.selectedFilters,
                        [type]: type === 'pamoja' ? !prevState.selectedFilters.pamoja :  // Toggle 'pamoja'
                            (prevState.selectedFilters[type] === value ? "All" : value) // Toggle other filters
                    };
    
                    const filteredProducts = this.mainPageProductsFilterProducts(newFilters);
                    const newlyLoadedProductIds = filteredProducts.map(product => product.id); // Store only new items for skeleton effect
    
                    return {
                        selectedFilters: newFilters,
                        newlyLoadedProducts: newlyLoadedProductIds, // Show skeletons for new products
                        productsLoading: false, // Turn off global loading
                        homepageCurrentCategoryFilter: type === 'category' ? (value === 'All' ? `${value} Products` : value) : prevState.homepageCurrentCategoryFilter,
                        homepageCurrentPriceFilter: type === 'price' ? (typeof value === 'string' ? `${value} Prices` : `Up to ${value}`) : prevState.homepageCurrentPriceFilter,
                        homepageCurrentRatingFilter: type === 'rating' ? (typeof value === 'string' ? `${value} Ratings` : `${value} Stars & Up`) : prevState.homepageCurrentRatingFilter,
                        homepageCurrentBrandFilter: type === 'brand' ? (value === 'All' ? `${value} Brands` : `${value}`) : prevState.homepageCurrentBrandFilter,
                        homepagePrdouctsFilter5: type === 'pamoja' ? !prevState.homepagePrdouctsFilter5 : prevState.homepagePrdouctsFilter5,
                        ...Object.fromEntries([...Array(4)].map((_, i) => [`homepagePrdouctsFilter${i + 1}`, false])) // Reset other filters
                    };
                });
    
                // Reset newlyLoadedProducts after 1s so skeleton disappears
                setTimeout(() => {
                    this.setState({ newlyLoadedProducts: [] });
                }, 1000);
    
            }, 300); // 0.3s delay before applying filter (adjust as needed)
        });
    };

    mainPageProductsFilterProducts = () => {
        const { selectedFilters, products } = this.state;
    
        return products.filter((product) => {
            return (selectedFilters.category === "All" || product.category === selectedFilters.category) &&
                   (selectedFilters.price === "All" || product.price <= selectedFilters.price) &&
                   (selectedFilters.rating === "All" || product.rating <= selectedFilters.rating) &&
                   (selectedFilters.brand === "All" || product.brand === selectedFilters.brand) && 
                   (selectedFilters.pamoja === true ? product.pamoja === true : true);
        });
    };

    mainPageProductsHandleQtyChange = (productId, change) => {
        this.setState((prevState) => {
            // Update products list (for UI)
            const updatedProducts = prevState.products.map((product) =>
                product.id === productId
                    ? { ...product, qty: Math.max(0, product.qty + change) }
                    : product
            );
    
            // 🔹 Update promoItems list (if the item exists)
            const updatedPromoItems = prevState.promoItems.map((item) =>
                item.id === productId
                    ? { ...item, qty: Math.max(0, item.qty + change) }
                    : item
            );
    
            // Find updated product
            const updatedProduct = updatedProducts.find((product) => product.id === productId);
    
            // Update the cart
            let updatedCart = prevState.cart;
            const existingCartItem = prevState.cart.find((item) => item.id === productId);
    
            if (existingCartItem) {
                if (updatedProduct.qty > 0) {
                    updatedCart = prevState.cart.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: updatedProduct.qty }
                            : item
                    );
                } else {
                    updatedCart = prevState.cart.filter((item) => item.id !== productId);
                }
            } else if (updatedProduct.qty > 0) {
                updatedCart = [...prevState.cart, { ...updatedProduct, quantity: updatedProduct.qty }];
            }
    
            // 🔹 Check if groupedOptions exists before updating
            const updatedGroupedOptions = prevState.groupedOptions
                ? Object.fromEntries(
                    Object.entries(prevState.groupedOptions).map(([category, options]) => [
                        category,
                        options.map(option =>
                            option.id === productId ? { ...option, qty: updatedProduct.qty } : option
                        )
                    ])
                )
                : null; // Keep it null if it doesn't exist
    
            const totalCartPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
    
            return {
                products: updatedProducts,
                promoItems: updatedPromoItems, // 🔹 update added here
                cart: updatedCart,
                totalCartPrice,
                groupedOptions: updatedGroupedOptions,
            };
        });
    };

    mainPageProductsHandleJipangeSelected = (productId) => {
        this.setState((prevState) => {
            // Update jipangeSelected in the products list
            const updatedProducts = prevState.products.map((product) =>
                product.id === productId
                    ? { ...product, jipangeSelected: !product.jipangeSelected }
                    : product
            );
    
            // Also update jipangeSelected in the cart if the product exists there
            const updatedCart = prevState.cart.map((item) =>
                item.id === productId
                    ? { ...item, jipangeSelected: !item.jipangeSelected }
                    : item
            );
    
            return {
                products: updatedProducts,
                cart: updatedCart // Ensure cart reflects changes
            };
        }, () => {
            console.log(this.state.products, this.state.cart); // Verify changes
        });
    };

    mainPageProductsFilterOptionClicked = (option) => {
        if (option === 5) {
            this.toggleDial();
            this.setState((prevState) => ({
                homepagePrdouctsFilter5: !prevState.homepagePrdouctsFilter5, // Ensure it's set to true when selected
            }), () => {
                this.mainPageProductsHandleFilterChange('pamoja', this.state.homepagePrdouctsFilter5);
            });
        } else {
            this.setState((prevState) => {
                let newState = {};
    
                for (let i = 1; i <= 4; i++) { // Loop through options 1-3
                    newState[`homepagePrdouctsFilter${i}`] = i === option ? !prevState[`homepagePrdouctsFilter${option}`] : false;
                }
    
                // Keep homepageProductsFilter4 as it is (not affected when other options are clicked)
                newState[`homepagePrdouctsFilter5`] = prevState[`homepagePrdouctsFilter5`];
    
                return newState;
            });
        }
    }

    addToCart = (product) => {
        this.setState((prevState) => {
            const existingItem = prevState.cart.find((item) => item.id === product.id);
    
            if (existingItem) {
                // If the item is already in the cart, increase its quantity
                return {
                    cart: prevState.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                // If it's a new item, add it to the cart with quantity 1
                return {
                    cart: [...prevState.cart, { ...product, quantity: 1 }]
                };
            }
        });
    };

    removeFromCart = (productId) => {
        this.setState((prevState) => {
            const updatedCart = prevState.cart.filter((item) => item.id !== productId);
    
            const updatedProducts = prevState.products.map((product) =>
                product.id === productId ? { ...product, qty: 0 } : product
            );
    
            return {
                cart: updatedCart,
                products: updatedProducts
            };
        });
    };

    handleScroll = () => {
        if (!this.scrollContainer || this.state.loadingMore) return;
    
        const { scrollTop, scrollHeight, clientHeight } = this.scrollContainer;
    
        // Check if we've reached the bottom
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            // ✅ Stop loading if all items are already loaded
            if (this.state.visibleCount >= this.state.filteredProductCount) {
                return;
            }
    
            this.loadMoreItems();
        }
    };
    
    loadMoreItems = () => {
        if (this.state.loadingMore) return;
    
        this.setState({ loadingMore: true });
    
        setTimeout(() => {
            const { products, visibleCount } = this.state;
            const newVisibleCount = visibleCount + 6; // Load 6 more items
    
            const newlyLoadedProducts = products.slice(visibleCount, newVisibleCount).map((p) => p.id);
    
            this.setState({
                visibleCount: newVisibleCount,
                newlyLoadedProducts,
                loadingMore: false,
            });
    
            setTimeout(() => {
                this.setState({ newlyLoadedProducts: [] });
            }, 2000);
        }, 1500);
    };

    toggleDial = () => {
        this.setState((prevState) => ({ shopPamojaActive: !prevState.shopPamojaActive }));
    };

    handleBrandSearch = (event) => {
        this.setState({ brandSearchTerm: event.target.value });
    };

    handleTriggerHeaderTransitions = (option) => {

        this.setState((prevState) => ({ 
            // selectedHeaderOption: option,
            isLeftHeaderTransitionActive: !prevState.isLeftHeaderTransitionActive,
            isRightBottomHeaderTransitionActive: !prevState.isRightBottomHeaderTransitionActive,
            isRightTopHeaderTransitionActive: !prevState.isRightTopHeaderTransitionActive
        }), () => {
            setTimeout(() => {
                if (this.state.selectedHeaderOption !== option) {
                    this.setState({
                        selectedHeaderOption: option
                    })
                } else {
                    this.setState({selectedHeaderOption: ''})
                }
            }, 1000)
        });
    
        // Optional: Reset after animation ends
        // setTimeout(() => {
        //   this.setState({ isLeftHeaderTransitionActive: false });
        // }, 600); // Matches CSS transition time
    };

    handleShoppingListTextKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        
            const newItems = [...this.state.items];
            newItems.splice(index + 1, 0, '');
        
            this.inputRefs.splice(index + 1, 0, React.createRef()); // Create a new ref for the new input
        
            this.setState({
                items: newItems,
                focusIndex: index + 1, // 👈 Mark the new input to receive focus
            });
        }
    
        if (e.key === 'Backspace' && this.state.items[index] === '' && this.state.items.length > 1) {
            e.preventDefault();
        
            const newItems = [...this.state.items];
            newItems.splice(index, 1);
            this.inputRefs.splice(index, 1);
        
            this.setState({
                items: newItems,
                focusIndex: Math.max(0, index - 1), // 👈 Focus previous input
            });
        }
    };
    
    handleShoppingListTextChange = (e, index) => {
        const newItems = [...this.state.items];
        newItems[index] = e.target.value;
        this.setState({ items: newItems });
    };

    promoCategoryClicked = (promoType) => {
        this.setState({
            showPromoItemsList: false,
            showPromoItemsLoading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showPromoItemsList: true,
                    showPromoItemsLoading: false
                })
            }, 2500)
        })
        if (promoType === 'all') {
            if (this.state.promoAllCategorySelected === false) { 
                this.setState({ 
                    promoAllCategorySelected: true,
                    promoDiscountCodeCategorySelected: false,
                    promoProductCategorySelected: false,
                    selectedPromoType: promoType
                })
            }
        } else if (promoType === 'product') {
            if (this.state.promoProductCategorySelected === false) { 
                this.setState({ 
                    promoProductCategorySelected: true,
                    promoDiscountCodeCategorySelected: false,
                    promoAllCategorySelected: false,
                    selectedPromoType: promoType
                })
            }
        } else {
            if (this.state.promoDiscountCodeCategorySelected === false) { 
                this.setState({ 
                    promoDiscountCodeCategorySelected: true,
                    promoProductCategorySelected: false,
                    promoAllCategorySelected: false,
                    selectedPromoType: promoType
                })
            }
        }
    }

    handlePromoItemQtyChange = (productId, change) => {
        this.setState((prevState) => {
            // Update products list (for UI)
            const updatedProducts = prevState.products.map((product) =>
                product.id === productId
                    ? { ...product, qty: Math.max(0, product.qty + change) }
                    : product
            );
    
            // 🔹 Update promoItems list
            const updatedPromoItems = prevState.promoItems.map((item) =>
                item.id === productId
                    ? { ...item, qty: Math.max(0, item.qty + change) }
                    : item
            );
    
            // Find updated product
            const updatedProduct = updatedProducts.find((product) => product.id === productId);
    
            // Update the cart
            let updatedCart = prevState.cart;
            const existingCartItem = prevState.cart.find((item) => item.id === productId);
    
            if (existingCartItem) {
                if (updatedProduct.qty > 0) {
                    updatedCart = prevState.cart.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: updatedProduct.qty }
                            : item
                    );
                } else {
                    updatedCart = prevState.cart.filter((item) => item.id !== productId);
                }
            } else if (updatedProduct.qty > 0) {
                updatedCart = [...prevState.cart, { ...updatedProduct, quantity: updatedProduct.qty }];
            }
    
            // 🔹 Check if groupedOptions exists before updating
            const updatedGroupedOptions = prevState.groupedOptions
                ? Object.fromEntries(
                    Object.entries(prevState.groupedOptions).map(([category, options]) => [
                        category,
                        options.map(option =>
                            option.id === productId ? { ...option, qty: updatedProduct.qty } : option
                        )
                    ])
                )
                : null; // Keep it null if it doesn't exist
    
            const totalCartPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
    
            return {
                products: updatedProducts,
                promoItems: updatedPromoItems, // 🔹 update added here
                cart: updatedCart,
                totalCartPrice,
                groupedOptions: updatedGroupedOptions,
            };
        });
    };

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, isSearchLoadingJipange, isSearchLoadingAccountPopup, isSearchLoadingFAQ, resultsFound, resultsFoundJipange, resultsFoundAccountPopup, resultsFoundFAQ, groupedOptions, groupedOptionsJipange, groupedOptionsAccountPopup, groupedOptionsFAQ } = this.state;
        const { currentMonth, currentYear, selectedDates } = this.state;
        const daysInMonth = this.getDaysInMonth(currentMonth, currentYear);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date();
        const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
        const filteredProducts = this.mainPageProductsFilterProducts();


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
                                                <div className='searchResultsLoading'>
                                                    <p>Loading...</p>
                                                </div>
                                            }
                                            {!isSearchLoading && resultsFound && 
                                                Object.entries(groupedOptions).map(([category, options]) => (
                                                    <div style={{borderBottom: "1px solid #ccc", position: "sticky"}} key={category}>
                                                        {options.map(option => (
                                                            <div 
                                                            onClick={() => this.mainSearchBarSearchedTermClicked(category, option)}
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <div className='searchResultCellImg'>
                                                                    <img src={option.image}/>
                                                                </div>
                                                                <div className='searchResultCellDetails'>
                                                                    <p className='searchResultOption'>{option.highlightedName} • <label><>KES</> {option.price}</label> </p>
                                                                    <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'|'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat4}</label> : null }</p> 
                                                                </div>
                                                                <div className='searchResultCellLabel'>
                                                                    {option.qty === 0 && 
                                                                        <p>[click to add to cart]</p>
                                                                    }
                                                                    {option.qty > 0 &&
                                                                        <div className='searchResultCellLabelNonZeroQty'>
                                                                            <div onClick={() => this.mainPageProductsHandleQtyChange(option.id, -1)} className='searchResultCellLabelNonZeroQtyChangeLeft'>
                                                                                -
                                                                            </div>
                                                                            <div className='searchResultCellLabelNonZeroQtyValue'>
                                                                                <label>{option.qty}</label>
                                                                            </div>
                                                                            <div onClick={() => this.mainPageProductsHandleQtyChange(option.id, 1)} className='searchResultCellLabelNonZeroQtyChangeRight'>
                                                                                +
                                                                            </div>
                                                                        </div>
                                                                    }
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
                            <div onClick={this.openHomeShoppingCartClicked} className='navbar-shopping-cart'>
                                <img onClick={this.openHomeShoppingCartClicked} src='/assets/icons/navbar/cart-icon.png'/>
                                <div className="navbar-shopping-cart-badge">{this.state.cart.length}</div>
                            </div>
                            <div onClick={this.openHomeProfileOptionsClicked} className='navbar-profile-btn'>
                                <img src='/assets/icons/navbar/profile-btn-icon.png'/>
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
                                    <p>Your cart has (<label>{this.state.cart.length}</label>) <span>items</span></p>
                                </div>
                                <div className='navbar-options-checkout-home-header-icon'>
                                    <img onClick={this.hideHomeCartClicked} src='/assets/icons/navbar/clear-search-icon-color.png'/>
                                </div>
                            </div>
                        <div className='navbar-options-checkout-home-body'>
                            {this.state.cart.length === 0 ? (
                                <p className='navbar-options-checkout-home-body-empty-cart'>Your cart is empty</p>
                            ) : (
                                this.state.cart.map((item) => (
                                    <div key={item.id} className="navbar-options-checkout-home-item-cell">
                                        <div className="navbar-options-checkout-home-item-cell-icon">
                                            <img src={item.image} alt={item.name} />
                                            <p onClick={() => this.removeFromCart(item.id)}>remove</p>
                                        </div>
                                        <div className="navbar-options-checkout-home-item-cell-details">
                                            <p>{item.name}</p>
                                            {item.jipangeSelected ? (<button><h5><span>◉ </span>Jipange: {item.jipangeDate}</h5></button>): null}
                                        </div>
                                        <div className="navbar-options-checkout-home-item-cell-qty">
                                            <div className="navbar-options-checkout-home-item-cell-qty-toggle">
                                                <div onClick={() => this.mainPageProductsHandleQtyChange(item.id, -1)} className="navbar-options-checkout-home-item-cell-qty-toggle-left">
                                                    <p>-</p>
                                                </div>
                                                <div className="navbar-options-checkout-home-item-cell-qty-toggle-center">
                                                    <p>{item.quantity}</p>
                                                </div>
                                                <div onClick={() => this.mainPageProductsHandleQtyChange(item.id, 1)} className="navbar-options-checkout-home-item-cell-qty-toggle-right">
                                                    <p>+</p>
                                                </div>
                                            </div>
                                            <p className="navbar-options-checkout-home-item-cell-qty-item-price">KES {item.price * item.quantity}.00</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className='navbar-options-checkout-home-footer'>
                            <div className='navbar-options-checkout-home-footer-header'>
                                <div className='navbar-options-checkout-home-footer-header-label'>
                                    <h3>Subtotal</h3>
                                    <h5>Shipping:</h5>
                                </div>
                                <div className='navbar-options-checkout-home-footer-header-price'>
                                    <h3 className=''>KES {this.state.totalCartPrice}.00</h3>
                                    <h5>Ksh. 99</h5>
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
                                                <p>Account Settings</p>
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
                                                <p>Shop Pamoja</p>
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
                                            <input
                                            value={this.state.searchBarInputAccountPopup}
                                            placeholder='Search...'
                                            onChange={this.handleSearchChangeAccount}
                                            />
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
                                        {this.state.showMyOrdersSettings && 
                                            <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                <h1>My Orders</h1>
                                            </div>
                                        }
                                        {this.state.showFAQSettings && 
                                            <div className='navbar-profile-account-popup-header-account-setup-incomplete'>
                                                <h1>Frequently Asked Questions</h1>
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
                                    <div className={`navbar-profile-account-popup-body-search-bar-results ${this.state.searchBarInputAccountPopup !== '' ? 'display' : ''}`}>
                                        {searchInput !== "" && (
                                            <div className={`searchResultAccount ${this.state.searchBarInputAccountPopup === '' ? 'empty' : ''}`}>
                                                {isSearchLoadingAccountPopup && 
                                                    <div className='searchResultAccountLoading'>
                                                        <RotatingLines
                                                            visible={true}
                                                            height="22.5"
                                                            width="22.5"
                                                            strokeColor="#ff5733"
                                                            strokeWidth="3"
                                                            animationDuration="0.75"
                                                            ariaLabel="rotating-lines-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            />
                                                            <p>Loading...</p>
                                                    </div>
                                                }
                                                {!isSearchLoadingAccountPopup && resultsFoundAccountPopup && 
                                                    Object.entries(groupedOptionsAccountPopup).map(([category, options]) => (
                                                        <div className='searchResultCellAccountContainer' key={category}>
                                                            {options.map(option => (
                                                                <div 
                                                                onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                                className='searchResultCellAccount' 
                                                                key={option.id}>
                                                                    <div className='searchResultCellAccountDetails'>
                                                                        <p className='searchResultOptionAccount'>{option.highlightedName}</p>
                                                                        <h5 className='searchResultCategoryAccount'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </h5> 
                                                                    </div>
                                                                    <div className='searchResultCellAccountLabel'>
                                                                        {/* <p>[click to add to cart]</p> */}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))
                                                }
                                                {!isSearchLoadingAccountPopup && !resultsFoundAccountPopup &&
                                                    <div className='navbar-search-bar-no-results-account' style={{textAlign: "center"}}>
                                                        <p style={{fontWeight: "bold", color: "#FF5733"}}>No results found</p>
                                                    </div>
                                                }
                                            </div>
                                        )}
                                    </div>
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
                                    <div onClick={() => this.menuOptionClicked(4)} className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption4Selected ? 'selected' : ''}`}>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-icon ${this.state.accountMenuOption4Selected ? 'selected' : ''}`}>
                                            <img src='/assets/icons/home-profile/edit-my-orders-option-icon.png'/>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-label ${this.state.accountMenuOption4Selected ? 'selected' : ''}`}>
                                            <p>My Orders</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption4Selected ? 'selected' : ''}`}></div>
                                    </div>
                                    <div onClick={() => this.menuOptionClicked(5)} className={`navbar-profile-account-popup-body-left-settings-option-cell ${this.state.accountMenuOption5Selected ? 'selected' : ''}`}>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-icon ${this.state.accountMenuOption5Selected ? 'selected' : ''}`}>
                                            <img src='/assets/icons/home-profile/edit-faq-option-icon.png'/>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-label ${this.state.accountMenuOption5Selected ? 'selected' : ''}`}>
                                            <p>FAQs</p>
                                        </div>
                                        <div className={`navbar-profile-account-popup-body-left-settings-option-cell-selected ${this.state.accountMenuOption5Selected ? 'selected' : ''}`}></div>
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
                                                                                    <div className='jipange-settings-selected-dates-grid-option'>
                                                                                        <div 
                                                                                            key={dateString} 
                                                                                            className={`jipange-settings-selected-date-square ${this.state.selectedDates.has(dateString) && !this.state.confirmedJipangeDates.has(dateString) ? "show" : this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString) ? "show-confirmed" : ""}`}
                                                                                            onClick={() => this.jipangeDateScheduleClicked(dateObject, dateString)}
                                                                                        >
                                                                                            <h5>{(this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString)) ? 'SCHEDULED' : ''}</h5>
                                                                                            <label>{monthName}</label> {/* Month */}
                                                                                            <label>{day}</label> {/* Date */}
                                                                                            <div className={`jipange-settings-selected-date-square-item-count ${(this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString)) ? 'show' : ''}`}><span>{(this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString)) ? '◉' : ''}</span>
                                                                                                <label>{(this.state.totalJipangeOrderQty === 0) ? 0 :  (this.state.selectedDates.has(dateString) && this.state.confirmedJipangeDates.has(dateString)) ? this.state.totalJipangeOrderQty : 0} items</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='jipange-settings-selected-time-slots-container'>

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

                                                                                    {this.state.jipangeProduct6Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct6Cat1} <label>({this.state.jipangeProduct6Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct6Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct7Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct7Cat1} <label>({this.state.jipangeProduct7Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct7Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct8Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct8Cat1} <label>({this.state.jipangeProduct8Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct8Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct9Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct9Cat1} <label>({this.state.jipangeProduct9Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct9Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat3Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat3} <label>({this.state.jipangeProduct1Cat3Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat3Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat4} <label>({this.state.jipangeProduct1Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat4} <label>({this.state.jipangeProduct2Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat4} <label>({this.state.jipangeProduct3Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct4Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat4} <label>({this.state.jipangeProduct4Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat5} <label>({this.state.jipangeProduct1Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat5} <label>({this.state.jipangeProduct2Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat5} <label>({this.state.jipangeProduct3Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct4Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat5} <label>({this.state.jipangeProduct4Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct5Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct5Cat5} <label>({this.state.jipangeProduct5Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct5Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct1Cat6Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat6} <label>({this.state.jipangeProduct1Cat6Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat6Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    
                                                                                    {this.state.jipangeProduct1Cat12Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat12} <label>({this.state.jipangeProduct1Cat12Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat12Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat13Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat13} <label>({this.state.jipangeProduct1Cat13Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat13Price}</p>
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
                                                                                    {isSearchLoadingJipange && 
                                                                                        <div>
                                                                                            <p>Loading...</p>
                                                                                        </div>
                                                                                    }
                                                                                    {!isSearchLoadingJipange && resultsFoundJipange && 
                                                                                        Object.entries(groupedOptionsJipange).map(([category, options]) => (
                                                                                            <div style={{borderBottom: "1px solid #ccc", position: "sticky"}} key={category}>
                                                                                                {options.map(option => (
                                                                                                    <div 
                                                                                                    onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                                                                    className='searchResultCellJipange' 
                                                                                                    key={option.id}>
                                                                                                        <div className='searchResultCellJipangeImg'>
                                                                                                            <img src={option.image}/>
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
                                                                                    {!isSearchLoadingJipange && !resultsFoundJipange &&
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

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/baby-plum-tomatos-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct6Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)}>+</button> }
                                                                                                {this.state.jipangeProduct6Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct6Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 59</h5>
                                                                                            <p>VP Foods Baby Plum Tomatoes</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/red-chard-spinach-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct7Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)}>+</button> }
                                                                                                {this.state.jipangeProduct7Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct7Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 55</h5>
                                                                                            <p>Mlango Farms Organic Red Chard Spinach (1 bunch)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/kale-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct8Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)}>+</button> }
                                                                                                {this.state.jipangeProduct8Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct8Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 35</h5>
                                                                                            <p>Mlango Farms Organic Curly Kale (1 bunch)</p>
                                                                                        </div>
                                                                                    </div>             
                                                                                                
                                                                                </div>

                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                                <img src='/assets/images/products/red-cabbage-product.png'/>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                    {this.state.jipangeProduct9Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)}>+</button> }
                                                                                                    {this.state.jipangeProduct9Cat1CountBtn > 0 && 
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                            <div
                                                                                                            onClick={() => this.jipangeItemQtyDecrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)}
                                                                                                            className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                                {this.state.jipangeProduct9Cat1CountBtn}
                                                                                                            </div>
                                                                                                            <div
                                                                                                            onClick={() => this.jipangeItemQtyIncrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                        </div> 
                                                                                                    }
                                                                                                </div>
                                                                                                <h5>Ksh 152</h5>
                                                                                                <p>TuShop Fresh Fresh Red Cabbage (1 piece)</p>
                                                                                            </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 2 && 
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

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/baby-plum-tomatos-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct6Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)}>+</button> }
                                                                                                {this.state.jipangeProduct6Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct6Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(6, 1, this.state.jipangeProduct6Cat1CountBtn, 59)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 59</h5>
                                                                                            <p>VP Foods Baby Plum Tomatoes</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/red-chard-spinach-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct7Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)}>+</button> }
                                                                                                {this.state.jipangeProduct7Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct7Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(7, 1, this.state.jipangeProduct7Cat1CountBtn, 55)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 55</h5>
                                                                                            <p>Mlango Farms Organic Red Chard Spinach (1 bunch)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/kale-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct8Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)}>+</button> }
                                                                                                {this.state.jipangeProduct8Cat1CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct8Cat1CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(8, 1, this.state.jipangeProduct8Cat1CountBtn, 35)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 35</h5>
                                                                                            <p>Mlango Farms Organic Curly Kale (1 bunch)</p>
                                                                                        </div>
                                                                                    </div>
                                                                                
                                                                                </div>

                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                                <img src='/assets/images/products/red-cabbage-product.png'/>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                    {this.state.jipangeProduct9Cat1CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)}>+</button> }
                                                                                                    {this.state.jipangeProduct9Cat1CountBtn > 0 && 
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                            <div
                                                                                                            onClick={() => this.jipangeItemQtyDecrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)}
                                                                                                            className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                                {this.state.jipangeProduct9Cat1CountBtn}
                                                                                                            </div>
                                                                                                            <div
                                                                                                            onClick={() => this.jipangeItemQtyIncrease(9, 1, this.state.jipangeProduct9Cat1CountBtn, 152)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                        </div> 
                                                                                                    }
                                                                                                </div>
                                                                                                <h5>Ksh 152</h5>
                                                                                                <p>TuShop Fresh Fresh Red Cabbage (1 piece)</p>
                                                                                            </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 3 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/chicken-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat3CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 3, this.state.jipangeProduct1Cat3CountBtn, 560)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat3CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 3, this.state.jipangeProduct1Cat3CountBtn, 560)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat3CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 3, this.state.jipangeProduct1Cat3CountBtn, 560)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 560</h5>
                                                                                            <p>Kenchic Spring Chicken (750g)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>         
                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 4 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/brookside-milk-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat4CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 4, this.state.jipangeProduct1Cat4CountBtn, 156)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat4CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 4, this.state.jipangeProduct1Cat4CountBtn, 156)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat4CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 4, this.state.jipangeProduct1Cat4CountBtn, 156)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 156</h5>
                                                                                            <p>Brookside Whole Milk 1L Long Life</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/brookside-milk-powder-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct2Cat4CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(2, 4, this.state.jipangeProduct2Cat4CountBtn, 1198)}>+</button> }
                                                                                                {this.state.jipangeProduct2Cat4CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(2, 4, this.state.jipangeProduct2Cat4CountBtn, 1198)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct2Cat4CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(2, 4, this.state.jipangeProduct2Cat4CountBtn, 1198)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 1198</h5>
                                                                                            <p>Brookside Full Cream Milk Powder Tin (500g)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/eggs-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct3Cat4CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(3, 4, this.state.jipangeProduct3Cat4CountBtn, 411)}>+</button> }
                                                                                                {this.state.jipangeProduct3Cat4CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(3, 4, this.state.jipangeProduct3Cat4CountBtn, 411)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct3Cat4CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(3, 4, this.state.jipangeProduct3Cat4CountBtn, 411)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 411</h5>
                                                                                            <p>TuShop Fresh Mixed Size Eggs (30pcs)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/butter-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct4Cat4CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(4, 4, this.state.jipangeProduct4Cat4CountBtn, 879)}>+</button> }
                                                                                                {this.state.jipangeProduct4Cat4CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(4, 4, this.state.jipangeProduct4Cat4CountBtn, 879)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct4Cat4CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(4, 4, this.state.jipangeProduct4Cat4CountBtn, 879)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 879</h5>
                                                                                            <p>Bio Salted Artisanal Butter (500g)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div> 

                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 5 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/bband-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat5CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 5, this.state.jipangeProduct1Cat5CountBtn, 148)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat5CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 5, this.state.jipangeProduct1Cat5CountBtn, 148)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat5CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 5, this.state.jipangeProduct1Cat5CountBtn, 148)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 148</h5>
                                                                                            <p>Blueband Original (250g)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/mumias-sugar-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct2Cat5CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(2, 5, this.state.jipangeProduct2Cat5CountBtn, 278)}>+</button> }
                                                                                                {this.state.jipangeProduct2Cat5CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(2, 5, this.state.jipangeProduct2Cat5CountBtn, 278)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct2Cat5CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(2, 5, this.state.jipangeProduct2Cat5CountBtn, 278)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 278</h5>
                                                                                            <p>Mumias Sugar White (2kg)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/mac-coffee-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct3Cat5CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(3, 5, this.state.jipangeProduct3Cat5CountBtn, 1350)}>+</button> }
                                                                                                {this.state.jipangeProduct3Cat5CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(3, 5, this.state.jipangeProduct3Cat5CountBtn, 1350)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct3Cat5CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(3, 5, this.state.jipangeProduct3Cat5CountBtn, 1350)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 1350</h5>
                                                                                            <p>MacCoffee Classic (200g)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/rinsun-oil-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct4Cat5CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(4, 5, this.state.jipangeProduct4Cat5CountBtn, 1149)}>+</button> }
                                                                                                {this.state.jipangeProduct4Cat5CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(4, 5, this.state.jipangeProduct4Cat5CountBtn, 1149)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct4Cat5CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(4, 5, this.state.jipangeProduct4Cat5CountBtn, 1149)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-price-details'>
                                                                                                <h5>Ksh 1149</h5>
                                                                                            </div>
                                                                                            <p>Rinsun 100% Sunflower Oil (3L)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/rice-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div    className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct5Cat5CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(5, 5, this.state.jipangeProduct5Cat5CountBtn, 205)}>+</button> }
                                                                                                {this.state.jipangeProduct5Cat5CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(5, 5, this.state.jipangeProduct5Cat5CountBtn, 205)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct5Cat5CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(5, 5, this.state.jipangeProduct5Cat5CountBtn, 205)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-price-details'>
                                                                                                <h5>Ksh 205</h5>
                                                                                            </div>
                                                                                            <p>TuShop Fresh Mwea Pishori Rice (1kg)</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 6 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>

                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/diapers-product.png'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat6CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 6, this.state.jipangeProduct1Cat6CountBtn, 1999)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat6CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 6, this.state.jipangeProduct1Cat6CountBtn, 1999)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat6CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 6, this.state.jipangeProduct1Cat6CountBtn, 1999)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 1999</h5>
                                                                                            <p>Rascals 17kgs Premium CoComelon Training Diaper Pants - Size 7 (22pcs)</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>         
                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 12 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='assets/images/products/min-maid-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat12CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 12, this.state.jipangeProduct1Cat12CountBtn, 75)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat12CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 12, this.state.jipangeProduct1Cat12CountBtn, 75)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat12CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 12, this.state.jipangeProduct1Cat12CountBtn, 75)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 75</h5>
                                                                                            <p>Minute Maid: Mango Pulpy Juice (400ml)</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>         
                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory === 13 && 
                                                                            <div className=''>
                                                                                <div className='jipange-settings-selected-date-screen-body-inner-body-product-row'>
                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell'>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-pic'>
                                                                                            <img src='/assets/images/products/digestives-product.webp'/>
                                                                                        </div>
                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text'>
                                                                                            <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-btn'>
                                                                                                {this.state.jipangeProduct1Cat13CountBtn === 0 && <button onClick={() => this.jipangeItemQtyIncrease(1, 13, this.state.jipangeProduct1Cat13CountBtn, 339)}>+</button> }
                                                                                                {this.state.jipangeProduct1Cat13CountBtn > 0 && 
                                                                                                    <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart'>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyDecrease(1, 13, this.state.jipangeProduct1Cat13CountBtn, 339)}
                                                                                                        className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-down'>-</div>
                                                                                                        <div className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-count'>
                                                                                                            {this.state.jipangeProduct1Cat13CountBtn}
                                                                                                        </div>
                                                                                                        <div
                                                                                                        onClick={() => this.jipangeItemQtyIncrease(1, 13, this.state.jipangeProduct1Cat13CountBtn, 339)} className='jipange-settings-selected-date-screen-body-inner-body-product-row-cell-text-adjust-cart-up'>+</div>
                                                                                                    </div> 
                                                                                                }
                                                                                            </div>
                                                                                            <h5>Ksh 339</h5>
                                                                                            <p>McVities Digestive Biscuits (400g)</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>         
                                                                            </div>
                                                                        }

                                                                        {this.state.selectedJipangeProductCategory > 1 && this.state.selectedJipangeProductCategory !== 5 && this.state.selectedJipangeProductCategory !== 3 && this.state.selectedJipangeProductCategory !== 4 && this.state.selectedJipangeProductCategory !== 6 && this.state.selectedJipangeProductCategory !== 2 && this.state.selectedJipangeProductCategory !== 12 && this.state.selectedJipangeProductCategory !== 13 && 
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

                                                                                    {this.state.jipangeProduct6Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct6Cat1} <label>({this.state.jipangeProduct6Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct6Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct7Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct7Cat1} <label>({this.state.jipangeProduct7Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct7Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct8Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct8Cat1} <label>({this.state.jipangeProduct8Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct8Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct9Cat1Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct9Cat1} <label>({this.state.jipangeProduct9Cat1Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct9Cat1Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat3Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat3} <label>({this.state.jipangeProduct1Cat3Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat3Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat4} <label>({this.state.jipangeProduct1Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat4} <label>({this.state.jipangeProduct2Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat4} <label>({this.state.jipangeProduct3Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct4Cat4Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat4} <label>({this.state.jipangeProduct4Cat4Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat4Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    
                                                                                    {this.state.jipangeProduct1Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat5} <label>({this.state.jipangeProduct1Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct2Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct2Cat5} <label>({this.state.jipangeProduct2Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct2Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct3Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct3Cat5} <label>({this.state.jipangeProduct3Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct3Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct4Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct4Cat5} <label>({this.state.jipangeProduct4Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct4Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {this.state.jipangeProduct5Cat5Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct5Cat5} <label>({this.state.jipangeProduct5Cat5Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct5Cat5Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat6Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat6} <label>({this.state.jipangeProduct1Cat6Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat6Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    
                                                                                    {this.state.jipangeProduct1Cat12Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat12} <label>({this.state.jipangeProduct1Cat12Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat12Price}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }

                                                                                    {this.state.jipangeProduct1Cat13Qty !== 0 && 
                                                                                        <div className='jipange-settings-selected-date-screen-header-inner-body-item'>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-name'>
                                                                                                <p>{this.state.jipangeProduct1Cat13} <label>({this.state.jipangeProduct1Cat13Qty})</label></p>
                                                                                            </div>
                                                                                            <div className='jipange-settings-selected-date-screen-header-inner-body-item-qty'>
                                                                                                <p>{this.state.jipangeProduct1Cat13Price}</p>
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
                                        {this.state.showMyOrdersSettings && 
                                            <div className='navbar-profile-account-popup-my-orders-settings'>
                                                <div className={`navbar-profile-account-popup-my-orders-settings-container ${this.state.jipangeMyOrdersEmpty ? 'empty' : ''}`}>
                                                    <p>My Orders:</p>
                                                    <div className='navbar-profile-account-popup-my-orders-settings-container-content'>
                                                        
                                                    </div>
                                                    <div className='navbar-profile-account-popup-my-orders-settings-container-content-empty'>
                                                        <img src='/assets/icons/home-my-orders/no-orders-icon.png'/>
                                                        <p>No orders yet</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {this.state.showFAQSettings &&
                                            <div className='navbar-profile-account-popup-faqs-settings'>
                                                <div className='navbar-profile-account-popup-faqs-settings-body'>
                                                    <p>Ask us something!</p>
                                                    <div className='navbar-profile-account-popup-faqs-settings-body-top-container'>
                                                        {/* <div className='navbar-profile-account-popup-faqs-settings-body-top-container-header'>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-top-container-header-left'>
                                                                <p>What do you want to know more about?</p>
                                                            </div>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-top-container-header-right'>
                                                                <img/>
                                                            </div>
                                                        </div> */}
                                                        <div className='navbar-profile-account-popup-faqs-settings-body-top-container-body'>
                                                            <textarea
                                                            id='faqSubmitText'
                                                            placeholder='Type your question here...'
                                                            value={this.state.faqSubmitText}
                                                            disabled={this.state.showFAQSubmitBtnLoading}
                                                            onChange={this.handleSearchStandardInput}
                                                            />
                                                        </div>
                                                        <div className='navbar-profile-account-popup-faqs-settings-body-top-container-footer'>
                                                            <div className={`navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification ${this.state.faqSubmitTextSuccess ? 'success' : ''}`}>
                                                                <div className='navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification-left'>
                                                                    <img src='/assets/icons/home-faq/submit-text-successful-icon.png'/>
                                                                </div>
                                                                <div className='navbar-profile-account-popup-faqs-settings-body-top-container-footer-notification-right'>
                                                                    <p>{this.state.faqSubmitTextNotification}</p>
                                                                </div> 
                                                            </div>
                                                            <button
                                                            onClick={this.faqSubmitBtnClicked}
                                                            >
                                                                {this.state.showFAQSubmitBtnTxt && 
                                                                    <>
                                                                        Submit
                                                                    </>
                                                                }
                                                                {this.state.showFAQSubmitBtnLoading && 
                                                                    <div className='navbar-profile-account-popup-faqs-settings-body-top-container-footer-btn-loading'>
                                                                        <TailSpin
                                                                        visible={true}
                                                                        height="12.5px"
                                                                        width="12.5px"
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
                                                    <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container'>
                                                        <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header'>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-left'>
                                                                <div onClick={this.handleFaqSettingsDropdownSelected} className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select'>
                                                                    <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-label'>
                                                                        <p>{this.state.faqSettingsSelectedTopic}</p>
                                                                    </div>
                                                                    <div className={`navbar-profile-account-popup-faqs-settings-body-bottom-container-header-select-icon ${this.state.faqSettingsDisplayTopicDropdown ? 'selected' : ''}`}>
                                                                        <img src='/assets/icons/home-main-header/down-arrow.png'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-right'>
                                                                <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-container'>
                                                                    <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-icon'>
                                                                        <img src='/assets/icons/navbar/search-icon.png'/>
                                                                    </div>
                                                                    <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-header-search-bar'>
                                                                        <input
                                                                        id='searchBarInputFAQ'
                                                                        value={this.state.searchBarInputFAQ}
                                                                        placeholder='Search...'
                                                                        onChange={this.handleSearchChangeFAQ}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-body'>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-left'>
                                                                <div className={`navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown ${this.state.faqSettingsDisplayTopicDropdown ? 'display' : ''}`}>
                                                                    {this.state.faqTopics.map((topic, index) => (
                                                                        <div onClick={() => this.handleFaqSettingsTopicSelected(topic)} className={`navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option ${this.state.faqSettingsSelectedTopic === topic ? 'selected' : ''}`} key={index} value={topic}>
                                                                            <div 
                                                                            className='navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option-left'>
                                                                                <p>{topic}</p>
                                                                            </div>
                                                                            <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-select-dropdown-option-right'>
                                                                               
                                                                            </div>
                                                                        </div>
                                                                ))}
                                                                </div>
                                                                <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-responses'>
                                                                    {this.state.faqFilteredResults.map((response, index) => (
                                                                        <div onClick={() => this.handleFaqSettingsResponseSelected(response)} className={`navbar-profile-account-popup-faqs-settings-body-bottom-container-response ${this.state.faqSettingsSelectedResponse === response.name ? 'selected' : ''}`} key={index} value={response.id}>
                                                                            <h5>{response.name}</h5>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                            </div>
                                                            <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-right'>
                                                                <div className={`navbar-profile-account-popup-faqs-settings-body-bottom-container-search-results ${this.state.searchBarInputFAQ !== '' ? 'display' : ''}`}>
                                                                    {searchInput !== "" && (
                                                                        <div className={`searchResultFAQ ${this.state.searchBarInputFAQ === '' ? 'empty' : ''}`}>
                                                                            {isSearchLoadingFAQ && 
                                                                                <div className='searchResultFAQLoading'>
                                                                                    <RotatingLines
                                                                                        visible={true}
                                                                                        height="19.5"
                                                                                        width="19.5"
                                                                                        strokeColor="#ff5733"
                                                                                        strokeWidth="3"
                                                                                        animationDuration="0.75"
                                                                                        ariaLabel="rotating-lines-loading"
                                                                                        wrapperStyle={{}}
                                                                                        wrapperClass=""
                                                                                        />
                                                                                        <p>Loading...</p>
                                                                                </div>
                                                                            }
                                                                            {!isSearchLoadingFAQ && resultsFoundFAQ && 
                                                                                Object.entries(groupedOptionsFAQ).map(([category, options]) => (
                                                                                    <div className='searchResultCellFAQContainer' key={category}>
                                                                                        {options.map(option => (
                                                                                            <div 
                                                                                            onClick={() => this.searchTermFAQClicked(category, option)}
                                                                                            className='searchResultCellFAQ' 
                                                                                            key={option.id}>
                                                                                                <div className='searchResultCellFAQDetails'>
                                                                                                    <p className='searchResultOptionFAQ'>{option.highlightedName}</p>
                                                                                                    <h4 className='searchResultCategoryFAQ'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </h4> 
                                                                                                </div>
                                                                                                <div className='searchResultCellFAQLabel'>
                                                                                                    {/* <p>[click to add to cart]</p> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                            {!isSearchLoadingFAQ && !resultsFoundFAQ &&
                                                                                <div className='navbar-search-bar-no-results-faq' style={{textAlign: "center"}}>
                                                                                    <p style={{fontWeight: "bold", color: "#FF5733"}}>No results found</p>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display'>
                                                                    {this.state.showFAQSingleResponse && 
                                                                        <>
                                                                            <div className={`navbar-profile-account-popup-faqs-settings-body-bottom-single-response ${this.state.faqSettingsSingleResponseDisplay ? 'display' : ''}`}>
                                                                                <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header'>
                                                                                    <h3>Q: {this.state.selectedFAQuestion}</h3>
                                                                                    <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-header-topic'>
                                                                                        <button>{this.state.selectedFAQTopic}</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-body'>
                                                                                    <h2>{this.state.selectedFAQResponse}</h2>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    }
                                                                    {this.state.showFAQResponseLoading && 
                                                                        <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-loading'>
                                                                            <div className='searchResultFAQLoading'>
                                                                                <RotatingLines
                                                                                    visible={true}
                                                                                    height="23.5"
                                                                                    width="23.5"
                                                                                    strokeColor="#ff5733"
                                                                                    strokeWidth="3"
                                                                                    animationDuration="0.75"
                                                                                    ariaLabel="rotating-lines-loading"
                                                                                    wrapperStyle={{}}
                                                                                    wrapperClass=""
                                                                                    />
                                                                                    <p>Loading...</p>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    {this.state.showFAQNoResponseSelected && 
                                                                        <div className='navbar-profile-account-popup-faqs-settings-body-bottom-container-response-display-none'>
                                                                            <img src='/assets/icons/home-faq/faq-placeholder-icon2.png'/>
                                                                            <p>Select a question to see a response.</p>
                                                                        </div>
                                                                    }
                                                                </div>

                                                            </div>
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

                    <div id="scrollable-container" className='homepage-fullscreen'>
                        <div id='homepage-header' className='homepage-header'>
                            <div className='homepage-header-inner-header'>
                                <div className={`homepage-header-inner-header-left ${this.state.homepageNewUpdatesShow ? 'hide' : ''}`}>
                                    <div className='homepage-header-inner-header-left-option'>
                                        <h4>🔥 New <label>(2)</label></h4><span><img src='/assets/icons/home-main-header/down-arrow.png'/></span>
                                    </div>
                                </div>

                                <div className={`homepage-header-inner-header-left-update-display ${this.state.homepageNewUpdatesShow ? 'show' : ''}`}>
                                    <div className='homepage-header-inner-header-left-update-display-left-child'>

                                    </div>
                                    <div className='homepage-header-inner-header-left-update-display-right-child'>
                                        <div onMouseEnter={this.handleAnnouncementBarMouseEnter} onMouseLeave={this.handleAnnouncementBarMouseLeave} onClick={this.handleAnnouncementBarMouseEnter} className="homepage-header-inner-header-left-update-display-announcement-container">
                                            <div ref={this.marqueeRef} className={`homepage-header-inner-header-left-update-display-announcement-track ${this.state.announcementBarIsPaused ? "paused" : ""}`} id="homepage-header-inner-header-left-update-display-announcement-track">
                                                <div className="homepage-header-inner-header-left-update-display-announcement-wrapper">
                                                    <span><strong>{this.state.dateTime} • </strong>Have a restful weekend mama (and papa)! 😎</span>
                                                    <span><strong>OFFER(S) -  15% off</strong> Dairy Fresh Strawberry (offer ends <strong>today at 5:00pm</strong>) <strong>• 10% off</strong> Rinsun 250ml Oil (offer ends <strong>22/04/25 at 1:30pm</strong>) <strong>• 20% off </strong> Afia Multi-Vitamin Fruit Drink (1 litre) (offer ends <strong>30/04/25 at 2:30pm</strong>) <strong>• 20% off </strong> Afia Apple & Ginger Boost Fruit Drink (380ml) (offer ends <strong>30/04/25 at 2:30pm</strong>)</span>
                                                    <span><strong>IMPROVEMENTS TO YOUR SHOPPING EXPERIENCE - </strong>We fixed the shopping cart closing suddenly issue, and we added <strong>Airtel Money</strong> as a payment option!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`homepage-header-inner-header-right ${this.state.homepageNewUpdatesShow ? 'hide' : ''}`}>
                                    <div className='homepage-header-inner-header-right-option'>
                                        
                                    </div>
                                    <div className='homepage-header-inner-header-right-option'>
                                        <h4>FAQs</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage-header-inner-body'>
                                <div className='homepage-header-inner-body-poster'>
                                    <div className='homepage-header-inner-body-poster-left'>
                                        {this.state.userSignedIn ? (
                                            <div className='homepage-header-inner-body-poster-left-logged-in'>
                                                <div className='homepage-header-inner-body-poster-left-logged-in-header'>
                                                    <div className='homepage-header-inner-body-poster-left-logged-in-header-container'>
                                                        <div className='homepage-header-inner-body-poster-left-logged-in-header-decor'>
                                                        </div>
                                                        <div className='homepage-header-inner-body-poster-left-logged-in-header-wallet'>

                                                        </div>
                                                    </div>
                                                    <h1>Hi there,</h1>
                                                </div>
                                                <div className='homepage-header-inner-body-poster-left-logged-in-body'>
                                                    <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header'>
                                                        <h3 className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-title'>Start saving for your child's future today. Dial <label>*122*1#</label> to enroll in <label>Mpango wa Familia</label>.</h3>
                                                        <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space'>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box'>
                                                                <img src='/assets/images/home-main-body/saf-ad-letter-1.png'/>
                                                                <h2>ives</h2>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box'>
                                                                <img src='/assets/images/home-main-body/saf-ad-letter-2.png'/>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box'>
                                                                <img src='/assets/images/home-main-body/saf-ad-letter-3.png'/>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-image-box'>
                                                                <h3>h</h3>
                                                                <img src='/assets/images/home-main-body/saf-ad-letter-4.png'/>
                                                                <h2>re.</h2>
                                                            </div>
                                                            <img className='homepage-header-inner-body-poster-left-logged-in-body-inner-header-ad-space-logo' src='/assets/images/home-main-body/saf-main-logo.png'/>
                                                        </div>
                                                    </div>
                                                    <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body'>
                                                        <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container'>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box'>
                                                                <button onClick={() => this.handleTriggerHeaderTransitions('option-1')} className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1-btn'>
                                                                    <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-1'>
                                                                        <img src='/assets/images/home-main-body/product-btn-15.png'/>
                                                                        <h3>New Products</h3>
                                                                    </div>
                                                                </button>
                                                                <h4>↗︎</h4>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box'>
                                                                <button onClick={() => this.handleTriggerHeaderTransitions('option-2')}className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2-btn'>
                                                                    <div  className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-2'>
                                                                        <img src='/assets/images/home-main-body/product-btn-25.png'/>
                                                                        <h3>Shopping List</h3>
                                                                    </div>
                                                                </button>
                                                                <h4>↗︎</h4>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box'>
                                                            <button onClick={() => this.handleTriggerHeaderTransitions('option-3')} className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3-btn'>
                                                                    <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-3'>
                                                                        <img src='/assets/images/home-main-body/product-btn-3.png'/>
                                                                        <h3>Jipange Delivery</h3>
                                                                    </div>
                                                                </button>
                                                                <h4>↗︎</h4>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box'>
                                                                <button onClick={() => this.handleTriggerHeaderTransitions('option-4')} className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-4-btn'>
                                                                    <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-option-4'>
                                                                        <img src='/assets/images/home-main-body/product-btn-4.png'/>
                                                                        <h3>Shop Pamoja</h3>
                                                                    </div>
                                                                </button>
                                                                <h4>↗︎</h4>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-left-logged-in-body-inner-body-container-box'>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='homepage-header-inner-body-poster-left-logged-out-decor'>
                                                    <img src='/assets/icons/home-main-header/header-icon-1.png'/>
                                                </div>
                                            </div>
                                        ) : (
                                           <div className='homepage-header-inner-body-poster-left-logged-out'>
                                                <h1>Save <span>up to 16%</span> on your weekly shopping from the comfort of home</h1>
                                                <div className='homepage-header-inner-body-poster-left-logged-out-subheading'>
                                                    <h3>The <span>very best</span> deals for your online grocery shopping</h3>
                                                </div>

                                                <div className='homepage-header-inner-body-poster-left-logged-out-cta'>
                                                    <div className='homepage-header-inner-body-poster-left-logged-out-cta-left'>
                                                        <input
                                                        id='homepageRegisteringNumber'
                                                        placeholder='Enter your number'
                                                        value={this.state.homepageRegisteringNumber}
                                                        onChange={this.handleSearchStandardInput}
                                                        />
                                                    </div>
                                                    <div className='homepage-header-inner-body-poster-left-logged-out-cta-right'>
                                                        <button><label>Sign Up</label> <span>→</span></button>
                                                    </div>
                                                </div>
                                                <div className='homepage-header-inner-body-poster-left-logged-out-decor'>
                                                    <img src='/assets/icons/home-main-header/header-icon-1.png'/>
                                                </div>
                                           </div>
                                        )}
                                        
                                    </div>
                                    <div className='homepage-header-inner-body-poster-right'>
                                        {this.state.userSignedIn ? (
                                            <div className='homepage-header-inner-body-poster-right-left-section'>
                                                 <div className='homepage-header-inner-body-poster-right-left-section-logged-in'>
                                                    <div style={{backgroundColor: this.state.isLeftHeaderTransitionActive ? '' : ''}} className={`homepage-header-inner-body-poster-right-left-section-logged-in-container ${this.state.isLeftHeaderTransitionActive ? "animate-peel" : ""}`}>

                                                        <div className='homepage-header-inner-body-poster-right-left-section-logged-in-container-decor'>
                                                            <img src='/assets/images/home-main-body/header-logged-in-decor.png'/>
                                                        </div>

                                                        <h1>Promo</h1>

                                                        <div className='homepage-header-inner-body-poster-right-left-section-logged-in-container-subheader'>
                                                            <h5>We've got deals for you!</h5>
                                                        </div>

                                                        <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab'>
                                                            <div className="confetti-background">
                                                                {[...Array(50)].map((_, i) => (
                                                                    <div
                                                                    key={i}
                                                                    className="confetti-piece"
                                                                    style={{
                                                                        left: `${Math.random() * 100}vw`,
                                                                        backgroundColor: '#ff5733',
                                                                        animationDuration: `${20 + Math.random() * 20}s`, // slower fall
                                                                        animationDelay: `${Math.random() * 10}s`,
                                                                    }}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header'>
                                                                <button onClick={() => this.promoCategoryClicked('all')} className={`homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn ${this.state.promoAllCategorySelected ? 'selected' : ''}`}>All</button>
                                                                <button onClick={() => this.promoCategoryClicked('product')} className={`homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn ${this.state.promoProductCategorySelected ? 'selected' : ''}`}>Products</button>
                                                                <button onClick={() => this.promoCategoryClicked('code')} className={`homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-header-btn ${this.state.promoDiscountCodeCategorySelected ? 'selected' : ''}`}>Discount codes</button>
                                                            </div>
                                                            {this.state.showPromoItemsList &&
                                                                <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-body'>
                                                                {this.state.promoItems
                                                                .filter(item => this.state.selectedPromoType === 'all' || item.type === this.state.selectedPromoType)
                                                                .map((item) => (
                                                                        <div key={item.id} className={`homepage-header-inner-body-poster-right-left-section-logged-in-promo-item ${item.qty > 0 ? 'selected' : ''}`}>
                                                                            <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-img'>
                                                                                <img src={item.img}/>
                                                                            </div>
                                                                            <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text'>
                                                                                <h4>{item.name} <span className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-params'>{item.type === 'code' ? `(${item.promoParams})` : ''}</span></h4>
                                                                                <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-text-prices'>
                                                                                    <p className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-new-price'>{item.type === 'product' ? 'Ksh.' : 'CODE:'} <span>{item.newPrice}</span></p>
                                                                                    <p className={`homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-old-price ${item.type === 'product' ? 'product' : ''} `}>{item.type !== 'product' ? '' :  item.oldPrice}</p>
                                                                                </div>

                                                                                <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-footer'>
                                                                                    {item.type === 'product' ? (
                                                                                        <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart'>
                                                                                            <div 
                                                                                                onClick={() => this.handlePromoItemQtyChange(item.id, -1)} 
                                                                                                className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-left'
                                                                                            >
                                                                                                -
                                                                                            </div>
                                                                                            <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-center'>
                                                                                                <h4>{item.qty}</h4>
                                                                                            </div>
                                                                                            <div 
                                                                                                onClick={() => this.handlePromoItemQtyChange(item.id, 1)} 
                                                                                                className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-cart-right'
                                                                                            >
                                                                                                +
                                                                                            </div>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-item-apply-code'>
                                                                                            Apply Code
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                        
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            }
                                                            {this.state.showPromoItemsLoading && 
                                                                <div className='homepage-header-inner-body-poster-right-left-section-logged-in-promo-tab-loading'>
                                                                    <div className='promo-tab-loading'>
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
                                                                        <p>Filtering promotions...</p>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={`homepage-header-inner-body-poster-right-left-section-logged-in-container-option-2 ${this.state.selectedHeaderOption === 'option-2' ? 'open' : ''}`}>
                                                        <h3>What do you need?</h3>
                                                        <div className='shopping-list-feature-container'>
                                                            <p>
                                                            Press <strong>Enter</strong> to add a new item, <strong>Backspace</strong> on an empty item to delete it.
                                                            </p>
                                                            <ul style={{listStyleType: 'disc'}}>
                                                                {this.state.items.map((item, index) => (
                                                                    <li key={index}>
                                                                    <input
                                                                    type="text"
                                                                    value={item}
                                                                    onChange={(e) => this.handleShoppingListTextChange(e, index)}
                                                                    onKeyDown={(e) => this.handleShoppingListTextKeyDown(e, index)}
                                                                    ref={this.inputRefs[index]}
                                                                    placeholder="Add item"
                                                                    onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
                                                                    onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                                                                    />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='homepage-header-inner-body-poster-right-left-section'>
                                                <div className='homepage-header-inner-body-poster-right-left-section-logged-off'>
                                                    <img src='/assets/images/home-main-header/header-poster-img-2.png'/>
                                                </div>
                                            </div>
                                        )}
                                        <div className='homepage-header-inner-body-poster-right-right-section'>
                                            {this.state.userSignedIn ? (
                                                <div className='homepage-header-inner-body-poster-right-right-section-top'>
                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in'>
                                                        <div className={`homepage-header-inner-body-poster-right-right-section-top-logged-in-container ${this.state.isRightTopHeaderTransitionActive ? "animate-peel" : ""}`}>
                                                            <h2>Your Wallet</h2>
                                                            <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-wallet-subheader'>
                                                                <h5>Unlock <label>One-click Checkout</label> with tuShop Wallet</h5>
                                                            </div>
                                                            <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home'>
                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top'>
                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-header'>
                                                                        <h1><label>Ksh.</label> 0</h1>
                                                                    </div>
                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body'>
                                                                        <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-left'>
                                                                            <h5>You've saved: <label><span>0.00</span></label></h5>
                                                                        </div>
                                                                        <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-top-body-right'>
                                                                            <button><span>+</span> Top Up Wallet</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom'>
                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float'>
                                                                        <div className="confetti-background">
                                                                            {[...Array(50)].map((_, i) => (
                                                                                <div
                                                                                key={i}
                                                                                className="confetti-piece"
                                                                                style={{
                                                                                    left: `${Math.random() * 100}vw`,
                                                                                    backgroundColor: '#ff5733',
                                                                                    animationDuration: `${20 + Math.random() * 20}s`, // slower fall
                                                                                    animationDelay: `${Math.random() * 10}s`,
                                                                                }}
                                                                                />
                                                                            ))}
                                                                        </div>
                                                                        {this.state.showWalletTopUpHomeView &&  
                                                                            <>
                                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left'>
                                                                                    <img src='/assets/icons/home-main-header/header-wallet-demo-click.png'/>
                                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-left-btn'>
                                                                                        <h5>Instant Checkout</h5>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-home-bottom-float-right'>
                                                                                    <h3>Top up your wallet to use instant checkout.</h3>
                                                                                </div>
                                                                            </> 
                                                                         } 
                                                                         {this.state.showWalletTopUpMainView && 
                                                                            <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options'>
                                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-left'>
                                                                                    <input 
                                                                                    placeholder='Enter an amount'/>
                                                                                </div>
                                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right'>
                                                                                    <p>or select below:</p>
                                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-exit-btn'>
                                                                                        <img src='/assets/icons/navbar/clear-search-icon-color.png'/>
                                                                                    </div>

                                                                                    <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-options-right-select-container'>
                                                                                        <div className='wallet-top-up-select-grid-row'>
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>250</button>
                                                                                            </div>
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>500</button>
                                                                                            </div>
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>1000</button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='wallet-top-up-select-grid-row'>
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>2500</button>
                                                                                            </div>
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>5000</button>
                                                                                            </div>      
                                                                                            <div className='wallet-top-up-select-grid-item'>
                                                                                                <button>10k</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                         }
                                                                        {this.state.showWalletTopUpViewLoading && 
                                                                            <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-top-up-loading'>
                                                                                <div className='wallet-top-up-tab-loading'>
                                                                                    <RotatingLines
                                                                                    visible={true}
                                                                                    height="19.5"
                                                                                    width="19.5"
                                                                                    strokeColor="#FF5733"
                                                                                    strokeWidth="3"
                                                                                    animationDuration="0.75"
                                                                                    ariaLabel="rotating-lines-loading"
                                                                                    wrapperStyle={{}}
                                                                                    wrapperClass=""
                                                                                    />
                                                                                    <p>Loading top-up options...</p>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`homepage-header-inner-body-poster-right-right-section-top-logged-in-container-option-2 ${this.state.selectedHeaderOption === 'option-2' ? 'open' : ''}`}>
                                                            <h1><label>🛒</label> Shopping Assistant</h1>
                                                            <p>We'll help you find what you're looking for!</p>
                                                            {this.state.showShopAssistantLoading && 
                                                                <div className='homepage-header-inner-body-poster-right-right-section-top-logged-in-container-shopping-assist'>
                                                                    <div className='shopping-assistant-loading'>
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
                                                                        <p>Fetching products...</p>
                                                                    </div>
                                                                </div>
                                                            }
                                                            {this.state.showShopAssistant

                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='homepage-header-inner-body-poster-right-right-section-top'>
                                                    <img src='/assets/images/home-main-header/header-poster-img-1.webp'/>
                                                </div>
                                            )}
                                            {this.state.userSignedIn ? (
                                                <div className='homepage-header-inner-body-poster-right-right-section-bottom'>
                                                    <div className='homepage-header-inner-body-poster-right-right-section-bottom-logged-in'>
                                                        <div className={`homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container ${this.state.isRightBottomHeaderTransitionActive ? "animate-peel" : ""}`}>
                                                            <h1>D<label>id you know?</label></h1>
                                                        </div>
                                                        <div className={`homepage-header-inner-body-poster-right-right-section-bottom-logged-in-container-option-2 ${this.state.selectedHeaderOption === 'option-2' ? 'open' : ''}`}>
                                                            <h3></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='homepage-header-inner-body-poster-right-right-section-bottom'>
                                                    <img src='/assets/images/home-main-header/header-poster-img-3.webp'/>
                                                </div>
                                            )}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='homepage-body'>
                            <div className='homepage-body-inner-header'>
                                <h1>Shop Now</h1>
                                <div ref={this.elementRef} className='homepage-body-inner-header-options'>
                                    <div onClick={() => this.mainPageProductsFilterOptionClicked(1)} className={`homepage-body-inner-header-option ${this.state.homepagePrdouctsFilter1 ? 'selected' : ''}`}>
                                        <h4>{this.state.homepageCurrentCategoryFilter}</h4>
                                        <span><img src='/assets/icons/home-main-header/down-arrow.png'/></span>
                                    </div>
                                    <div onClick={() => this.mainPageProductsFilterOptionClicked(2)} className={`homepage-body-inner-header-option ${this.state.homepagePrdouctsFilter2 ? 'selected' : ''}`}>
                                        <h4>{this.state.homepageCurrentPriceFilter}</h4>
                                        <span><img src='/assets/icons/home-main-header/down-arrow.png'/></span>
                                    </div>
                                    <div onClick={() => this.mainPageProductsFilterOptionClicked(3)} className={`homepage-body-inner-header-option ${this.state.homepagePrdouctsFilter3 ? 'selected' : ''}`}>
                                        <h4>{this.state.homepageCurrentRatingFilter}</h4>
                                        <span><img src='/assets/icons/home-main-header/down-arrow.png'/></span>
                                    </div>
                                    
                                    {/* New identical dropdown in place of the last one */}
                                    <div onClick={() => this.mainPageProductsFilterOptionClicked(4)} className={`homepage-body-inner-header-option ${this.state.homepagePrdouctsFilter4 ? 'selected' : ''}`}>
                                        <h4>{this.state.homepageCurrentBrandFilter}</h4>
                                        <span><img src='/assets/icons/home-main-header/down-arrow.png'/></span>
                                    </div>

                                    {/* Last dropdown positioned on the far right */}
                                    <div onClick={() => this.mainPageProductsFilterOptionClicked(5)} className={`homepage-body-inner-header-option-pamoja ${this.state.shopPamojaActive ? 'selected' : ''}`}>
                                        <h4>Shop Pamoja</h4>
                                        <div className={`dial-container ${this.state.shopPamojaActive ? "active" : ""}`}>
                                            <div className={`dial-button ${this.state.shopPamojaActive ? "active" : ""}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='homepage-body-inner-body'>
                                <div className='homepage-body-inner-body-inner-header'>
                                    <div className={`homepage-body-inner-header-option-dropdown-option-1 ${this.state.homepagePrdouctsFilter1 ? 'selected' : ''}`}>
                                        {this.state.categoryOptions.map((category) => (
                                            <div 
                                                key={category}
                                                className={`homepage-body-inner-header-option-dropdown-filter-option ${this.state.selectedFilters.category === category ? 'selected' : ''}`}
                                                onClick={() => this.mainPageProductsHandleFilterChange("category", category)}
                                            >
                                                <label>{category === "All" ? "All Products" : `${category}`}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`homepage-body-inner-header-option-dropdown-option-2 ${this.state.homepagePrdouctsFilter2 ? 'selected' : ''}`}>
                                        {this.state.priceOptions.map((price) => (
                                            <div 
                                                key={price}
                                                className={`homepage-body-inner-header-option-dropdown-filter-option ${this.state.selectedFilters.price === price ? 'selected' : ''}`}
                                                onClick={() => this.mainPageProductsHandleFilterChange("price", price)}
                                            >
                                                <label>{price === "All" ? "All Prices" : `Up to Ksh. ${price}`}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`homepage-body-inner-header-option-dropdown-option-3 ${this.state.homepagePrdouctsFilter3 ? 'selected' : ''}`}>
                                        {this.state.ratingOptions.map((rating) => (
                                            <div 
                                                key={rating}
                                                className={`homepage-body-inner-header-option-dropdown-filter-option ${this.state.selectedFilters.rating === rating ? 'selected' : ''}`}
                                                onClick={() => this.mainPageProductsHandleFilterChange("rating", rating)}
                                            >
                                                <label>{rating === "All" ? "All Ratings" : `${rating} Stars & Up`}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`homepage-body-inner-header-option-dropdown-option-35 ${this.state.homepagePrdouctsFilter4 ? 'selected' : ''}`}>
                                        <div className='homepage-body-inner-header-option-dropdown-option-35-search-container'>
                                            <div className='homepage-body-inner-header-option-dropdown-option-35-search-container-left'>
                                                <img src='/assets/icons/navbar/search-icon.png'/>
                                            </div>
                                            <div className='homepage-body-inner-header-option-dropdown-option-35-search-container-right'>
                                                <input
                                                type="text"
                                                placeholder="Search for a brand..."
                                                value={this.state.brandSearchTerm}
                                                onChange={this.handleBrandSearch}
                                                />
                                            </div>
                                        </div>
                                        <div className='homepage-body-inner-header-option-dropdown-option-35-brands'>
                                            {this.state.brandOptions
                                            .filter((brand) => brand.toLowerCase().includes(this.state.brandSearchTerm.toLowerCase())) // Filter brands
                                            .map((brand) => {
                                                const { brandSearchTerm } = this.state;
                                                const lowerBrand = brand.toLowerCase();
                                                const lowerSearchTerm = brandSearchTerm.toLowerCase();
                                                const matchIndex = lowerBrand.indexOf(lowerSearchTerm);

                                                if (matchIndex === -1) {
                                                    return (
                                                        <div
                                                            key={brand}
                                                            className={`homepage-body-inner-header-option-dropdown-filter-option ${this.state.selectedFilters.brand === brand ? 'selected' : ''}`}
                                                            onClick={() => this.mainPageProductsHandleFilterChange("brand", brand)}
                                                        >
                                                            <label>{brand === "All" ? "All Brands" : brand}</label>
                                                        </div>
                                                    );
                                                }

                                                const beforeMatch = brand.substring(0, matchIndex);
                                                const matchText = brand.substring(matchIndex, matchIndex + brandSearchTerm.length);
                                                const afterMatch = brand.substring(matchIndex + brandSearchTerm.length);

                                                return (
                                                    <div
                                                        key={brand}
                                                        className={`homepage-body-inner-header-option-dropdown-filter-option ${this.state.selectedFilters.brand === brand ? 'selected' : ''}`}
                                                        onClick={() => this.mainPageProductsHandleFilterChange("brand", brand)}
                                                    >
                                                        <label>
                                                            {beforeMatch}
                                                            <span className="homepage-body-inner-header-option-dropdown-option-35-brands-highlight">{matchText}</span>
                                                            {afterMatch}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="grocery-container">
                                
                                    <div className="promo-row">
                                        {/* {products.filter(p => p.promo).map((promoProduct) => (
                                            <ProductCard key={promoProduct.id} product={promoProduct} />
                                        ))} */}
                                    </div>

                                    <div className="product-grid">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.slice(0, this.state.visibleCount).map((product) => (
                                                <ProductCard 
                                                    key={product.id} 
                                                    product={product} 
                                                    newlyLoadedProducts={this.state.newlyLoadedProducts} 
                                                    productsLoading={this.state.productsLoading || this.state.newlyLoadedProducts.includes(product.id)}
                                                    onQtyChange={this.mainPageProductsHandleQtyChange}
                                                    onJipangeSelected={this.mainPageProductsHandleJipangeSelected}
                                                />
                                            ))
                                        ) : (
                                            <div className="no-results-message">
                                                <img src='/assets/icons/home-main-body/no-results-icon.png'/>
                                                <h3>No products found</h3>
                                                <p>Try adjusting your filters.</p>
                                            </div>
                                        )}
                                        <div ref={this.sentinelRef} className="scroll-sentinel"></div> {/* 🔹 Observer target */}
                                    </div>

                                    {/* Show spinner when loading more items */}
                                    {this.state.loadingMore && (
                                        <div className="loading-products-spinner">
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
                                                {/* <p>Loading...</p> */}
                                            </div>
                                        </div>
                                    )}
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                    <div onClick={this.handleScrollToElement} className={`scroll-to-page-top ${this.state.displayScrollUpBtn ? 'show' : ''}`}>↑</div>

                </div>
                
            </Styles>
        )
    }
}