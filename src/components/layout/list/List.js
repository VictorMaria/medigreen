import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import fetchDrugList from '../../../utils/services';
import fetchCurrentPrice from '../../../utils/fetchCurrentPrice';
import showPriceHistory from '../../../utils/showPriceHistory';
import dateFormatter from '../../../utils/dateFormatter';
import validateInput from '../../../utils/validateInput';
import ProductCard from '../productCard/ProductCard';
import { MdHistory } from "react-icons/md";
import EditableProductCard from '../editableProductCard/EditableProductCard';
import NewProductCard from '../newProduct/NewProductCard';
import setAlert from '../../../actions/alert';
import './list.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newProductName: "",
      newProductPrice: "",
      name: "",
      price: "",
      open: false,
      tick: false,
      currentProductPrices: []
    };
    this.handeleDelete = this.handeleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }
  handleAdd(){
    const check = validateInput(
      this.state.newProductName,
      this.state.newProductPrice
    );
    if (check === true) {
      const newProduct = {
        id: Date.now(),
        name: this.state.newProductName.replace(/  +/g, " "),
        prices: [
          {
            id: 1,
            price: this.state.newProductPrice,
            date: new Date()
          }
        ]
      };
      this.setState({
        list: [...this.state.list, newProduct],
        newProductName: "",
        newProductPrice: ""
      });
      this.props.setAlert('Product Added!', 'success')
    } else {
      this.props.setAlert('Name and Price must be valid values', 'failure')
    }
  };
  handleSelect(productId){
    this.setState({
      list: this.state.list.map(product => {
        if (product.id === productId) {
          product.edit = true;
        }
        return product;
      })
    });
  };
  handleSave(productId) {
    this.setState({
      list: this.state.list.map(product => {
        if (product.id === productId) {
          product.name = !this.state.name
            ? product.name
            : this.state.name.replace(/  +/g, " ");
          if (this.state.price) {
            product.prices.push({
              id: product.prices.length + 1,
              price: this.state.price,
              date: new Date()
            });
          }
          delete product.edit;
        }
        return product;
      })
    });
    this.props.setAlert('Product Edited!', 'success')
  }
  handleCancel(productId){
    this.setState({
      list: this.state.list.map(product => {
        if (product.id === productId) {
          delete product.edit;
        }
        return product;
      })
    });
  };
  handeleDelete(productId){
    this.setState({
      list: this.state.list.filter(product => product.id !== productId)
    });
  };
  async componentDidMount() {
    const newList = await fetchDrugList();
    this.setState(state => ({
      list: this.state.list.concat(newList)
    }));
  }
  render() {
    return (
      <div className="whole">
          <div>
          <NewProductCard
           newProductName={this.state.newProductName}
           newProductPrice={this.state.newProductPrice}
           onName={e => this.handleChange(e, "newProductName")}
           onPrice={e => this.handleChange(e, "newProductPrice")}
           onAdd={() => this.handleAdd()}
        />
        </div>
        <div className="products">
        {this.state.list.map(product =>
          !product.edit ? (
            <div className="product-and-prices" key={Math.floor(Math.random() * 5500)}>  
            <Fragment key={product.id}>
              <ProductCard
                key={product.id}
                name={product.name}
                price={`N${fetchCurrentPrice(product.prices)}`}
                onSelect={() => this.handleSelect(product.id)}
                onDelete={() => this.handeleDelete(product.id)}
              />
              <div className="price-history">
                <div>  
                <div><h3>Price History {" "}
                 <MdHistory style={{ color: "#abbd81", fontSize: 25 }} /></h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Price</th>
                      <th>Updated on</th>
                    </tr>
                    {showPriceHistory(product.prices).map(element => (
                      <tr key={Math.floor(Math.random() * 5000)}>
                        <td>{`N${element.price}`}</td>
                        <td>{dateFormatter(element.date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </Fragment>
            </div>
          ) : (
            <EditableProductCard
              key={product.id}
              name={product.name}
              price={fetchCurrentPrice(product.prices)}
              onName={e => this.handleChange(e, "name")}
              onPrice={e => this.handleChange(e, "price")}
              onSave={() => this.handleSave(product.id)}
              onCancel={() => this.handleCancel(product.id)}
            />
          )
        )}
        </div>
      </div>
    );
  }
}

export default connect(null, { setAlert })(List);
