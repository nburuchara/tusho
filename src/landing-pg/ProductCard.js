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
    width: 120px;
    height: 150px;
    // border: 1px solid black;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

.product-name {
    font-size: 0.885rem;
    font-family: raleway;
    margin-left: 3.5%;
    margin-right: 3.5%;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 5px;
    color: #5e626a;
}

.product-price {
    font-size: 1rem;
    font-family: poppins;
    font-weight: bold;
    color: #20313a;
    text-align: left;
    margin-left: 3.5%;
    margin-top: 5px;
    margin-bottom: 0px;
}

.product-rating {
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

.add-to-cart {
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
    width: 95%;
    padding: 10px;
}

.add-to-cart.non-empty {
    border: 1px solid #ff5733;
    background-color: #faece9;
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
    background-color: #ff5733;
    border: 1px solid #ff5733;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 8px;
    color: white;
}

.add-to-cart-non-empty-value {
    width: 50%;
    // border: 1px solid black;
    padding: 8px;
    color: #000;
}

.add-to-cart-non-empty-increase {
    width: 25%;
    border: 1px solid #ff5733;
    background-color: #ff5733;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 8px;
    color: white;
}


`

class ProductCard extends Component {
    render() {
        const { product, onQtyChange } = this.props;
      

        return (
            <Styles>
                <div className="product-card">
                    <div className="product-card-inner-header">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-card-inner-body">
                        <p className="product-price">Ksh. {product.price.toFixed(2)}</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-rating"><span>★</span> ({product.rating})</p>
                        <div></div>
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
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProductCard;
