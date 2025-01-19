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
    border: 1px solid white;
    border-radius: 8px;
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
    width: 35%;
    // border: 1px solid black;
    height: 500px;
    margin-top: -5.5px;
    margin-left: 1%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
}

.navbar-options-dropdown-left {
    z-index: 0;
    width: 55%;
    // border-right: 1px solid black;
    position: relative;
    background-color: #FF5733;
    border: 5px solid white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.navbar-options-dropdown-left-header {
    font-family: lexend;
    // border: 1px solid black;
    max-width: 65%;
    font-size: 90%;
    margin-top: 11.5px;
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
    margin-top: -18px;
}

.navbar-options-dropdown-left-menu-options {
    position: absolute;
    background-color: white;
    // border: 1px solid black;
    border-bottom: 1px solid transparent;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 420px;
    padding-top: 8px;
}

.navbar-options-dropdown-left-menu-options-cell {
    margin: auto;
    width: 100%;
    // border-bottom: 1px solid #5e626a;
    border-radius: 8px;
    height: 69px;
    display: flex;
    justify-content: space-between;
}

.navbar-options-dropdown-left-menu-options-cell:hover {
    background-color: #faece9;
    // border-bottom: 1px solid #FF5733;
    cursor: pointer;
}

.navbar-options-dropdown-left-menu-options-cell:hover .navbar-options-dropdown-left-menu-options-cell-icon img {
   background-color: #fff;
   border: 1px solid #FF5733;
   width: 52.5%;
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
    width: 50%;
    border: 1px solid white;
    border-radius: 8px;
    padding-top: 7%;
    padding-bottom: 7%;
    padding-left: 10%;
    padding-right: 10%;
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
}

.navbar-options-dropdown-left-menu-options-cell-details p {
    margin-top: 0px;
    margin-bottom: 5px;
    margin-right: 5%;
    font-size: 70%;
    font-family: lexend;
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
}

.navbar-options-dropdown-left-menu-options-cell-arrow img {
    width: 50%;
    margin-left: -8px;
}

    // # NAVBAR DROPDOWN OPTIONS (RIGHT SIDE)

.navbar-options-dropdown-right {
    width: 45%;
    background-color: #f3f5f7;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.navbar-options-dropdown-option-selected {
    margin-left: 12.5%;
    position: relative;
    height: 93%;
    border-bottom-right-radius: 8px;
}

.navbar-options-dropdown-option-selected h4 {
    font-size: 80%;
    font-family: lexend;
    margin-top: 35px;
    color: #222f3e;
    margin-left: 1%;
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
    cursor: pointer;
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

.navbar-options-dropdown-option-brand-cell-icon {
    width: 20%;
    // border: 1px solid black;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}

.navbar-options-dropdown-option-brand-cell-icon img {
    width: 40%;
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
    margin-top: 35px;
}

.navbar-options-dropdown-option-jipange p {
    margin-top: 0px;
    margin-right: 20%;
    font-size: 80%;
    font-family: poppins;
    // color: #FF5733;
}

    // - - CSS TRANSITIONS / ANIMATIONS - - //

.navbar-search-bar,
.navbar-options-dropdown-left-menu-options-cell,
.navbar-options-dropdown-left-menu-options-cell-icon img,
.navbar-options-dropdown-left-menu-options-cell-details p,
.navbar-options-dropdown-left-menu-options-cell-details h5,
.navbar-options-dropdown-left-menu-options-cell-arrow img,
.navbar-options-dropdown-option-brand-cell,
.navbar-options-dropdown-option-brand-cell-icon img,
.navbar-options-dropdown-option-brand-full-list-text h5,
.navbar-options-dropdown-option-brand-full-list-icon img,
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

            //* - NAVBAR DROPDOWN OPTIONS INFO - *//
            showNavbarDropdownOption1: true,
            showNavbarDropdownOption2: false,

        }

        //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

        //* - SEARCH BAR REFERENCE - *//
        this.searchBarRef = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleOutsideSearchBarClick);
    }

    componentWillUnmount() {
        // Remove the click event listener to prevent memory leaks
        document.removeEventListener('click', this.handleOutsideSearchBarClick);
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

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, resultsFound, groupedOptions } = this.state;

        return (
            <Styles>
                <div className='fullPage'>
                    <div className='navbar'>
                        <div className='navbar-options-icon'>
                            <img src='./assets/icons/navbar/menu-icon.png'/>
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
                                <img src='/assets/icons/navbar/cart-icon.png'/>
                                <div className="navbar-shopping-cart-badge">3</div>
                            </div>
                            <div className='navbar-profile-btn'>
                                <img src='/assets/icons/navbar/profile-btn-icon.png'/>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-options-dropdown'>
                        <div className='navbar-options-dropdown-left'>
                            <h5 className='navbar-options-dropdown-left-header'>Save up to 16% on your weekly shopping!</h5>
                            <div className='navbar-options-dropdown-left-header-img'>
                                <img src='/assets/images/navbar-dropdown/promo-dropdown-header-icon3.png'/>
                            </div>
                            <div className='navbar-options-dropdown-left-menu-options'>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/all-brands-dropdown-icon0.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5>Shop by Brand</h5>
                                        <p>Shop online from 130+ of your favorite brands</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/jipange-dropdown-icon.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5>Jipange</h5>
                                        <p>Subscribe to our scheduled delivery service</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/sell-with-us-dropdown-icon.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5>Sell With Us</h5>
                                        <p>Broaden the distribution of your brand with us</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-icon'>
                                        <img src='/assets/icons/navbar/sell-tickets-dropdown-icon.png'/>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-details'>
                                        <h5>Sell Tickets</h5>
                                        <p>Create an events page and sell tickets for your event</p>
                                    </div>
                                    <div className='navbar-options-dropdown-left-menu-options-cell-arrow'>
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
                                        <img src='/assets/icons/navbar/right-arrow-dropdow-icon.png'/>
                                    </div>
                                </div>
                                <div className='navbar-options-dropdown-left-menu-options-cell'>
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
                        <div className='navbar-options-dropdown-right'>
                            {this.state.showNavbarDropdownOption1 && 
                                <div className='navbar-options-dropdown-option-selected'>
                                    <h4>OUR PARTNER BRANDS</h4>
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
                                    <h4>SCHEDULED DELIVERY</h4>
                                    <div className='navbar-options-dropdown-option-selected-container'>
                                        <div className='navbar-options-dropdown-option-jipange'>
                                            <p>Schedule your deliveries once and get fresh groceries, household essentials and everyday necessities delivered weekly to your doorstep.</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
            </Styles>
        )
    }
}