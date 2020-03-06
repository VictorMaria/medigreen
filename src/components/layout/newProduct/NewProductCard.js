import React, { Component } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import './newProductCard.css'

class NewProductCard extends Component {
  render() {
    return (
      <div>
        <div className="new-product-card">
        <div>
          <div className="input-div">
            <input
              type={this.nameType}
              value={this.props.newProductName}
              placeholder="Product Name"
              onChange={this.props.onName}
            />
          </div>
          <div className="input-div"> 
            <input
              name="newProductPrice"
              value={this.props.newProductPrice}
              placeholder="Product Price"
              onChange={this.props.onPrice}
            />
          </div>
          </div>
          <div className="actions">
            <span className="add" onClick={this.props.onAdd}>
              <MdPlaylistAdd style={{ color: "#abbd81", fontSize: 40 }} />
            </span>
          </div>
          </div>
      </div>
    );
  }
}

export default NewProductCard;
