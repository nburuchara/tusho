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

.product-name {
    font-size: 0.885rem;
    font-weight: normal;
    font-family: poppins;
    // margin-left: 0.5%;
    // margin-right: 0.5%;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 5px;
    color: #5e626a;
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
    margin-top: 0px;
    margin-bottom: 0px;
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
        }
    }

    handleJipangeMenuClicked = () => {
        this.setState((prevState) => ({
            showJipangeMenu: !prevState.showJipangeMenu
        }))
    }

    render() {
        const { product, onQtyChange, onJipangeSelected, productsLoading, newlyLoadedProducts } = this.props;
      

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
                                <p>Mar. 21</p>
                            </div>
                        </div>
                    </div>

                    {product.pamojaCurrentTotal && product.pamojaCurrentTotal > 1 && (!this.state.showJipangeMenu || product.qty < 0) &&
                        <div className="product-card-shop-pamoja">
                            <img src="/assets/icons/home-main-body/shop-pamoja-icon.png"/>
                            <p>{product.pamojaCurrentSelected}/{product.pamojaCurrentTotal}</p>
                        </div>
                    }
                   
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
                                    {product.discountPrice ? (<h5 className="product-discount-price"></h5>) : (null)}
                                </div>
                                <h3 className="product-name">{product.name}</h3>
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
