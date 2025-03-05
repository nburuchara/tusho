import React, { Component } from "react";
import styled from "styled-components";


const Styles = styled.div `

.product-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: center;
    transition: transform 0.2s ease-in-out;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-image {
    width: 92.5%;
    height: 200px;
    border: 1px solid black;
    // max-height: 150px;
    // object-fit: cover;
    border-radius: 8px;
}

.product-name {
    font-size: 1.2rem;
    margin: 10px 0;
}

.product-price {
    font-size: 1rem;
    font-weight: bold;
    color: #ff5733;
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
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-rating">⭐ {product.rating} / 5</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </Styles>
        );
    }
}

export default ProductCard;
