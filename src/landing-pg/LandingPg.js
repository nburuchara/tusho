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
    justify-content: center;
}

.navbar-shopping-cart {
    width: 35px;
    height: 35px;
    // margin-left: 20%;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-right: 1%;
}

.navbar-shopping-cart img {
    width: 18px;
    margin-right: 35px;
    margin: auto;
 }

    // - - CSS TRANSITIONS / ANIMATIONS - - //

.navbar-search-bar {
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
                        <div className='navbar-option-icon'>
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
                            </div>
                        </div>
                    </div>
                </div>
                
            </Styles>
        )
    }
}