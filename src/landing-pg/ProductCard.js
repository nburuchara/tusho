import React, { Component } from "react";
import styled from "styled-components";


const Styles = styled.div `

.product-card {
    border: 1px solid #ccc;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 15px;
    text-align: center;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    height: 290px;
    position: relative;
    overflow: hidden;
}

.product-card:hover .product-name {
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: hidden;

    animation: scrollText 6s linear infinite;
    display: block;
}

/* Scrolling animation */
@keyframes scrollVertical {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}

.product-card-shop-pamoja {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: 1.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    width: auto;
    background-color: #d6e7f0;
    // border: 1px solid #20313a;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.35s ease-in-out;
}

.product-card-shop-pamoja:hover {
    border: 1px solid #24668a;
    transform: scale(1.025);
}

.product-card-shop-pamoja.selected {
    border: 1px solid #24668a;
}

.product-card-shop-pamoja img {
    width: 15px;
    height: 15px;
    // margin-top: 2px;
}

.product-card-shop-pamoja p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 5px;
    font-family: poppins;
    font-weight: bold;
    font-size: 75%;
    color: #24668a;
}

.product-card-shop-pamoja-details {
    position: absolute;
    top: 2.45rem;
    left: 0.5rem;
    height: 40%;
    width: 88%;
    background-color: #d6e7f0;
    border-radius: 8px;
    transform: translateX(-110%); 
    transition: transform 0.35s ease-in-out;
}

.product-card-shop-pamoja-details.selected {
    transform: translateX(0);
}

.product-card-shop-pamoja-details h2 {
    margin-top: 0.25rem;
    margin-bottom: 0px;
    text-align: left;
    margin-left: 5%;
    font-family: poppins;
    // font-size: 95%;
    color: #ff5733;
}

.product-card-shop-pamoja-details label {
    color: #24668a;
}

.product-card-shop-pamoja-details p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 75%;
    font-family: poppins;
    color: #24668a;
    margin-left: 5%;
    margin-right: 5%;
    text-align: left;
}

.product-card-shop-pamoja-details-inner-container {
    position: relative;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
    border-radius: 8px;
}

.product-card-shop-pamoja-details-inner-container-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 97.5%;
    height: 50%;
    border: 2px solid #d6e7f0;
    background-color: #ff5733;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
}

.product-card-shop-pamoja-details-inner-container-header img { 
    width: 58.5%;
    margin-top: -0.75rem;
}

.product-card-shop-pamoja-details-inner-container-header h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 100%;
    color: #24668a;
}

.product-card-shop-pamoja-details-inner-container-body {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 99%;
    height: 47%;
    border: 1px solid #d6e7f0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.product-card-shop-pamoja-details-inner-container-body h5 {
    margin-top: 0.15rem;;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    text-align: left;
    color: #24668a;
    font-family: poppins;
    font-size: 60%;
    // font-weight: normal;
}

.product-card-shop-pamoja-details-inner-container-body label {
    cursor: pointer;
}

.product-card-shop-pamoja-details-inner-container-body label:hover {
    text-decoration: underline;
}

.product-card-shop-pamoja-details-inner-container-body span {
    font-size: 20%;
    margin-left: 2.5px;
}

.product-card-shop-pamoja-details-inner-container-expiry-container {
    position: absolute;
    top: -1.5rem;
    right: 0;
    width: 55%;
    // border: 1px solid black;
    height: 1.6rem;
    background-color: #d6e7f0;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.product-card-shop-pamoja-details-inner-container-expiry-container-left {
    width: 18%;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-card-shop-pamoja-details-inner-container-expiry-container-left img {
    width: 12px;
    margin-left: 0.5rem;
}

.product-card-shop-pamoja-details-inner-container-expiry-container-right {
    width: 80%;
    // border: 1px solid black;
}

.product-card-shop-pamoja-details-inner-container-expiry-container-right p { 
    margin-top: 1px;
    margin-bottom: 0px;
    font-weight: bold;
    font-family: poppins;
    font-size: 70%;
    color: #24668a;
}

.product-card-shop-pamoja-details-inner-container-expiry-container-right label { 
    color: #ff5733;
}

.countdown-timer {
    display: flex;
    justify-content: left;
    align-items: center;
    // border: 1px solid black;
    height: 100%;
    width: 100%;
}

.product-card-shop-pamoja-details-inner-container-footer {
    position: absolute;
    bottom: 0.6rem;
    left: 5%;
    width: 90%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.product-card-shop-pamoja-details-inner-container-footer-left {
    width: 50%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2px;
}

.product-card-shop-pamoja-details-inner-container-footer-left p { 
    margin-left: 0px;
    font-size: 65%;
    cursor: pointer;
}

.product-card-shop-pamoja-details-inner-container-footer-left p:hover {
    text-decoration: underline;
}   

.product-card-shop-pamoja-details-inner-container-footer-left p:hover + span {
    transform: translateX(3px); /* Move span 5px to the right */
}

.product-card-shop-pamoja-details-inner-container-footer-left span { 
    margin-left: 0px;
    margin-top: 1px;
    font-size: 70%;
    color: #24668a;
    display: inline-block; /* Ensures transform works properly */
    transition: transform 0.3s ease-in-out;
}

.product-card-shop-pamoja-details-inner-container-footer-right {
    width: 50%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: right;
}

.user-row {
    display: flex;
    align-items: center;
  }
  
  .user-avatar {
    width: 12.5px;
    height: 12.5px;
    padding: 3px;
    background-color: #ff5733;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-left: -9.5px; /* Overlapping effect */
    transition: transform 0.3s ease-in-out;
    position: relative;
  }
  
  /* Set the first avatar (left-most) on top */
  .user-avatar:first-child {
    z-index: 100;
    margin-left: 0; /* Ensure it starts at the correct position */
  }
  
  /* Decrease z-index for each following avatar */
  .user-avatar:nth-child(2) { z-index: 99; }
  .user-avatar:nth-child(3) { z-index: 98; }
  .user-avatar:nth-child(4) { z-index: 97; }
  .user-avatar:nth-child(5) { z-index: 96; }
  
  /* Extra users placeholder */
  .extra-users {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #24668a;
    margin-left: 0px;
    font-family: poppins;
    font-weight: bold;
    position: relative;
    z-index: 1; /* Ensure it stays behind */
  }

.product-card-inner-jipange-menu {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 72.5%;
    border: 1px solid #ff5733;
    height: 10rem;
    border-radius: 6px;
    background-color: #faece9;
    opacity: 0;
    transform: translateX(-10px);
    transition-property: opacity, transform;
}

.product-card-inner-jipange-menu.selected {
    transform: translateX(0);
    opacity: 1;
}

.jipange-menu-label {
    position: absolute;
    top: -5px;  /* Moves it above the border */
    left: 35%;
    transform: translateX(-50%); /* Centers it */
    background-color: white; /* Matches the div’s background */
    padding: 0 1px; /* Gives some space around the text */
    padding-left: 2.5px;
    padding-right: 2.5px;
    padding-bottom: 1.5px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    color: #ff5733;
}

.product-card-inner-jipange-menu-option {
    height: 22.5%;
    border-bottom: 1px solid #ff5733;
    display: flex;
    justify-content: space-between;
}

.product-card-inner-jipange-menu-option-select {
    width: 25%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card-inner-jipange-menu-option-select input {
    margin-top: 0.2rem;
}

.product-card-inner-jipange-menu-option-select input[type="checkbox"] {
    accent-color: #ff5733; 
    cursor: pointer;
}

.product-card-inner-jipange-menu-option-name {
    width: 75%;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: left;
}

.product-card-inner-jipange-menu-option-name p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 5%;
    font-family: poppins;
    font-size: 75%;
    font-weight: bold;
    color: #ff5733;
}

.product-card-inner-margin {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: auto;
    border: 1px solid #ff5733;
    border-radius: 6px;
    background-color: #faece9;
    border: 1px solid #faece9;
    cursor: pointer;
    padding: 6.5px;
    padding-left: 8.5px;
    padding-right: 8.5px;
}

.blue-dot {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 8px;
    height: 8px;
    background-color: #ff5733;
    border-radius: 50%;
    border: 1.5px solid white;
    // box-shadow: 0px 0px 3px rgba(0, 0, 255, 0.5);
}

.product-card-inner-margin:hover {
    border: 1px solid #ff5733;
    transform: scale(1.05);
}

.product-card-inner-margin img {
    width: 15px;
}

.product-card-inner-margin p {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 80%;
    font-family: poppins;
}

.product-card-inner-header {
    height: 150px;
    // border: 1px solid black;
}

.product-card-inner-body {
    // border: 1px solid black;
    flex-grow: 1;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-image {
    width: 150px;
    height: 150px;
    // border: 1px solid black;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

.product-name-wrapper {
    position: relative;
    height: 2.7em; /* Approx height for 2 lines based on your font size */
    overflow: hidden;
}

.product-name {
    font-size: 0.885rem;
    font-weight: normal;
    font-family: poppins;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 5px;
    color: #5e626a;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

    transition: all 0.3s ease;
}

.product-price-container {
    display: flex;
    justify-content: space-between;

}

.product-price {
    font-size: 1rem;
    font-family: poppins;
    font-weight: bold;
    color: #5e626a;
    text-align: left;
    // margin-left: 0.5%;
    margin-top: 5px;
    margin-bottom: 0px;
}

.product-discount-price {
    font-weight: normal;
    font-size: 90%;
    margin-top: 5px;
    margin-bottom: 0px;
    font-family: poppins;
    color: #24668a;
    text-decoration: line-through;
}

.product-promo-label {
    position: absolute;
    width: 55%;
    bottom: 3.7rem;
    left: 5%;
    font-size: 0.7rem;
    font-family: poppins;
    font-weight: bold;
    background-color: #20313a;
    border: 1px solid #ff5733;
    border-right: 0.5px solid transparent;
    border-left: 0.5px solid transparent;
    padding: 2.5px 10px;
    // border-radius: 20px;
    overflow: hidden;
    white-space: nowrap;
}

.promo-carousel {
    display: inline-block;
    animation: scrollPromo 10s linear infinite;
}

.product-promo-label p {
    margin: 0;
    color: white;
    display: inline-block;
    white-space: nowrap;
}

/* Animation keyframes */
@keyframes scrollPromo {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
}

.product-rating {
    position: absolute;
    bottom: 3.7rem;
    right: 5%;
    font-size: 0.75rem;
    font-family: poppins;
    font-weight: bold;
    color: #ff5733;
    text-align: right;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
}

.product-rating span {
    color: #ff5733;
}

@keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
}

.loading-skeleton {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
}

.image-skeleton {
    width: 120px;
    height: 150px;
    margin: auto;
}

.text-skeleton {
    width: 100%;
    height: 16px;
    margin-top: 1rem;
    // margin: 8px auto;
}

.text-skeleton.short {
    width: 60%;
}


.add-to-cart {
    position: absolute;
    bottom: 5%;
    left: 5%;
    background-color: #ff5733;
    border: 1px solid #ff5733;
    font-family: poppins;
    font-size: 80%;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;
    width: 90%;
    padding: 10px;
}

.add-to-cart.non-empty {
    border: 1px solid #ff5733;
    background-color: white;
    padding: 0px;
    color: black;
    font-family: poppins;
}

.add-to-cart:hover {
    background-color: #e64a2e;
}

.add-to-cart.non-empty:hover {
    color: #000;
    background-color: transparent;
}

.add-to-cart-non-empty {
    display: flex;
    justify-content: space-between;
    // padding: 10px 15px;
    font-weight: bold;
}

.add-to-cart-non-empty-decrease {
    width: 25%;
    // border: 1px solid black;
    background-color: #faece9;
    border: 1px solid #faece9;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 8px;
    color: #ff5733;
    border-right: 1px solid #ff5733;
}

.add-to-cart-non-empty-value {
    width: 50%;
    // border: 1px solid black;
    padding: 8px;
    color: #5e626a;
}

.add-to-cart-non-empty-increase {
    width: 25%;
    border: 1px solid #faece9;
    background-color: #faece9;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 8px;
    color: #ff5733;
    border-left: 1px solid #ff5733;
}

.product-card-inner-jipange-menu,
{
    transition-duration: var(--def-transition-duration);
    transition-timing-function: ease-in-out;
}

`

class ProductCard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showJipangeMenu: false,
            showShopPamojaPopout: false,
            timeRemaining: this.calculateTimeRemaining()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const newTime = this.calculateTimeRemaining();
            if (newTime) {
                this.setState({ timeRemaining: newTime });
            } else {
                clearInterval(this.timer); // Stop countdown if expired
            }
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer); // Clean up when component unmounts
    }

    calculateTimeRemaining = () => {
        const { pamojaExpiryDate, pamojaExpiryTime } = this.props.product;
        
        if (!pamojaExpiryDate || !pamojaExpiryTime) return null;
    
        // Convert '30/03/25' to 'YYYY-MM-DD' format
        const [day, month, year] = pamojaExpiryDate.split('/');
        const formattedDate = `20${year}-${month}-${day}`; // '2025-03-30'
    
        // Convert '4:30PM' to 24-hour format
        const [time, modifier] = pamojaExpiryTime.split(/(AM|PM)/);
        let [hours, minutes] = time.split(':').map(Number);
        if (modifier === 'PM' && hours !== 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
    
        // Create the expiry date object
        const expiryDate = new Date(`${formattedDate}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
    
        // Get current time and calculate difference
        const now = new Date();
        const difference = expiryDate - now;
    
        if (difference <= 0) return null; // Expired
    
        // Convert to hours, minutes, and seconds
        const totalSeconds = Math.floor(difference / 1000);
        const hoursLeft = Math.floor(totalSeconds / 3600);
        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
        const secondsLeft = totalSeconds % 60;
    
        return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
    };

    handleJipangeMenuClicked = () => {
        this.setState((prevState) => ({
            showJipangeMenu: !prevState.showJipangeMenu,
            showShopPamojaPopout: false
        }))
    }

    displayShopPamojaPopout = () => {
        this.setState((prevState) => ({
            showShopPamojaPopout: !prevState.showShopPamojaPopout
        }))
    }

    render() {
        const { product, onQtyChange, onJipangeSelected, productsLoading, newlyLoadedProducts } = this.props;
        const { timeRemaining } = this.state;

        return (
            <Styles>
                <div className="product-card">
                    {/* {product.jipangeSelected &&  */}
                   
                    <div className={`product-card-inner-jipange-menu ${this.state.showJipangeMenu && product.qty > 0 ? 'selected' : ''}`}>
                        <div className="jipange-menu-label">My Jipange Plans</div>
                        <div className="product-card-inner-jipange-menu-option">
                            <div className="product-card-inner-jipange-menu-option-select">
                                <input
                                type="checkbox"
                                name={`jipange-${product.id}`} // Ensure each product has a unique radio group
                                checked={product.jipangeSelected}
                                onChange={() => onJipangeSelected(product.id)} // Remove handleChange since selection is managed at the Grocery Grid level
                                />
                            </div>
                            <div className="product-card-inner-jipange-menu-option-name">
                                <p>Apr. 21</p>
                            </div>
                        </div>
                    </div>

                    {(product.pamojaCurrentTotal > 0 && (!this.state.showJipangeMenu || product.qty < 0) && !productsLoading) ? (
                        <div onClick={this.displayShopPamojaPopout} className={`product-card-shop-pamoja ${this.state.showShopPamojaPopout ? 'selected' : ''}`}>
                            <img src="/assets/icons/home-main-body/shop-pamoja-icon.png"/>
                            <p>{product.pamojaCurrentSelected}/{product.pamojaCurrentTotal}</p>
                        </div>
                    ) : ((!this.state.showJipangeMenu || product.qty < 0) && !productsLoading) ? (
                        <div onClick={this.displayShopPamojaPopout} className={`product-card-shop-pamoja ${this.state.showShopPamojaPopout ? 'selected' : ''}`}>
                            <img src="/assets/icons/home-main-body/shop-pamoja-icon.png"/>
                            <p>+</p>
                        </div>
                    ) : null}

                    <div className={`product-card-shop-pamoja-details ${this.state.showShopPamojaPopout && !productsLoading ? 'selected' : ''}`}>
                        
                        {product.pamojaCurrentTotal > 0 && 
                            <div className="product-card-shop-pamoja-details-inner-container">
                                <div className="product-card-shop-pamoja-details-inner-container-expiry-container">
                                    <div className="product-card-shop-pamoja-details-inner-container-expiry-container-left">
                                        <img src="/assets/icons/home-main-body/shop-pamoja-countdown-icon.png"/>
                                    </div>
                                    <div className="product-card-shop-pamoja-details-inner-container-expiry-container-right">
                                    {timeRemaining ? (
                                        <div className="countdown-timer">
                                            <p>{`${timeRemaining.hours}`}<label>H</label> {`${timeRemaining.minutes}`}<label>M</label> {`${timeRemaining.seconds}`}<label>S</label></p>
                                        </div>
                                    ) : (
                                        <p className="expired-text">Expired</p>
                                    )}
                                    </div>
                                </div>
                                <h2>{product.pamojaCurrentTotal-product.pamojaCurrentSelected} <label>units left!</label></h2>
                                <p>Get discounts by joining in on a bulk order.</p>
                                <div className="product-card-shop-pamoja-details-inner-container-footer">
                                    <div className="product-card-shop-pamoja-details-inner-container-footer-left">
                                        <p>Learn more</p><span>➞</span>
                                    </div>
                                    <div className="product-card-shop-pamoja-details-inner-container-footer-right">
                                        <div class="user-row">
                                            <img src="/assets/icons/home-main-body/profile-icon.png" alt="User 1" class="user-avatar"/>
                                            <img src="/assets/icons/home-main-body/profile-icon.png" alt="User 2" class="user-avatar"/>
                                            <img src="/assets/icons/home-main-body/profile-icon.png" alt="User 3" class="user-avatar"/>
                                            <img src="/assets/icons/home-main-body/profile-icon.png" alt="User 4" class="user-avatar"/>
                                            <div class="extra-users">+{product.pamojaCurrentSelected - 4}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {product.pamoja === false &&
                            <div className="product-card-shop-pamoja-details-inner-container">
                                <div className="product-card-shop-pamoja-details-inner-container-header">
                                    <img src="/assets/images/home-main-body/shop-pamoja-header.webp"/>
                                </div>
                                <div className="product-card-shop-pamoja-details-inner-container-body">
                                    <h5>Get discounts by making a bulk order with fellow shoppers. <label>Learn more <span>➞</span></label></h5>
                                </div>
                            </div>
                        }
                    </div>
                   
                    {product.qty > 0 && 
                        <div onClick={this.handleJipangeMenuClicked} className="product-card-inner-margin">
                            {product.jipangeSelected && <div className="blue-dot"></div>}
                            <img src="/assets/icons/home-profile/edit-jipange-option-icon2.png"/>
                        </div>
                    }
                    <div className="product-card-inner-header">
                        {productsLoading ? (
                            <div className="loading-skeleton image-skeleton"></div>
                        ) : (
                            <img src={product.image} alt={product.name} className="product-image" />
                        )}
                    </div>
                    <div className="product-card-inner-body">
                        {productsLoading || newlyLoadedProducts.includes(product.id) ? (
                            <>
                                <div className="loading-skeleton text-skeleton"></div>
                                <div className="loading-skeleton text-skeleton"></div>
                                <div className="loading-skeleton text-skeleton"></div>
                                <div className="loading-skeleton text-skeleton short"></div>
                            </>
                        ) : (
                            <>
                                <div className="product-price-container">
                                    <p className="product-price">Ksh. <label style={{color: '#ff5733'}}>{product.price.toFixed(2)}</label></p>
                                    {product.prevPrice ? (<h5 className="product-discount-price">{product.prevPrice}.00</h5>) : (null)}
                                </div>
                                <div class="product-name-wrapper">
                                    <h3 className="product-name">{product.name}</h3>
                                </div>
                                {product.promo ? (
                                    <span className="product-promo-label">
                                        <div className="promo-carousel">
                                        <p>PROMOTION • PROMOTION • PROMOTION • PROMOTION • PROMOTION • PROMOTION •</p>
                                        </div>
                                    </span>
                                ) : null}
                                <p className="product-rating"><span>★</span> ({product.rating})</p>
                            </>
                        )}
                        {/* <div></div> */}
                        {productsLoading ?  
                        (
                            <></>
                        ) : (
                            <button onClick={product.qty === 0 ? () => onQtyChange(product.id, 1) : null} className={`add-to-cart ${product.qty > 0 ? 'non-empty' : ''}`}>
                                {product.qty === 0 &&
                                    <div>
                                    Add to Cart
                                    </div>
                                }
                                {product.qty > 0 && 
                                    <div className="add-to-cart-non-empty">  
                                        <div onClick={() => onQtyChange(product.id, -1)} className="add-to-cart-non-empty-decrease">
                                            -
                                        </div>
                                        <div className="add-to-cart-non-empty-value">
                                            <label>{product.qty}</label>
                                        </div>
                                        <div onClick={() => onQtyChange(product.id, 1)} className="add-to-cart-non-empty-increase">
                                            +
                                        </div>
                                    </div>
                                }
                            </button>
                        )}
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProductCard;
