import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/cartActions";
import { saveProducts } from "../../redux/actions/productActions";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProducts,
  history,
  ...props
}) {
  const { product, setProduct } = useState({ ...props.product });
  useEffect(() => {
    if (categories.lenght === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProducts(product).then(() => {
      history.push("/");
    });
  }

  return (
      
  )
}

export function getProductById(product, productId) {
  let product = products.find((product) => productId === productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.lenght > 0
      ? getProductById(state.productListReducer, productId)
      : {}
      return {
          product,
          products :state.productListReducer,
          categories:state.categoryListReducer
      }
}

const mapDispatchToProps = {
  getCategories,
  saveProducts,
};

export default connect(mapDispatchToProps,mapStateToProps)(AddOrUpdateProduct);
