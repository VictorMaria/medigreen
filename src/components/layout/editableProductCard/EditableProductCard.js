import React, { Component } from "react";
import { MdCancel, MdDoneAll } from "react-icons/md";
import "./editableProductCard.css"

class ProductCard extends Component {
  render() {
    return (
      <div className="editable-product-card">
          <div className="input-div">
            <input
              name={this.props.name}
              defaultValue={this.props.name}
              onChange={this.props.onName}
            />
          </div>
          <div className="input-div">
            <input
              name={this.props.price}
              defaultValue={this.props.price}
              onChange={this.props.onPrice}
            />
          </div>
          <div className="actions">
            <span className="save" onClick={this.props.onSave}>
              <MdDoneAll style={{ color: "#abbd81", fontSize: 40 }} />
              &nbsp;&nbsp;
            </span>
            <span className="cancel" onClick={this.props.onCancel}>
              <MdCancel style={{ color: "#f8b26a", fontSize: 40 }} />
            </span>
          </div>
      </div>
    );
  }
}

export default ProductCard;
