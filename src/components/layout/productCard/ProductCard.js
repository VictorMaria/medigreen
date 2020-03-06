import React, { Component } from "react";
import { MdBackspace, MdModeEdit } from "react-icons/md";

import "./productCard.css";

class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-info">
          <h3 id="name">{this.props.name}</h3>
          <h3 id="price">{this.props.price}</h3>
        </div>
        <div className="actions">
          <span className="edit" onClick={this.props.onSelect}>
            <MdModeEdit style={{ color: "#abbd81", fontSize: 30 }} />
            &nbsp;&nbsp;
          </span>
          <span className="delete" onClick={this.props.onDelete}>
            <MdBackspace style={{ color: "#e15b64", fontSize: 30 }} />
          </span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
