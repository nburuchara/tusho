import React, { Component } from "react";
import styled from "styled-components";


const Styles = styled.div `

.product-card {
    border: 1px solid black;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: center;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
}

.product-card-inner-header {
    height: 150px;
    border: 1px solid black;
}

.product-card-inner-body {
    border: 1px solid black;
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
    font-size: 0.8rem;
    font-family: raleway;
    margin-left: 6.5%;
    margin-right: 6.5%;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 5px;
    color: #5e626a;
}

.product-price {
    font-size: 1rem;
    font-family: poppins;
    font-weight: bold;
    color: #000;
    text-align: left;
    margin-left: 6.5%;
    margin-top: 5px;
    margin-bottom: 0px;
}

.product-rating {
    font-size: 0.9rem;
    color: #ffaa00;
}

.add-to-cart {
    background-color: #ff5733;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;
}

.add-to-cart:hover {
    background-color: #e64a2e;
}


`

class ProductCard extends Component {
    render() {
        const { product } = this.props;

        return (
            <Styles>
                <div className="product-card">
                    <div className="product-card-inner-header">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-card-inner-body">
                        <p className="product-price">Ksh. {product.price.toFixed(2)}</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-rating">⭐ {product.rating} / 5</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProductCard;
