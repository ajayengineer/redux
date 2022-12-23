import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Loader from "./Loader";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container mt-5 mb-5">
      {Object.keys(product).length === 0 ? <Loader /> : (
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid img-thumbnail" src={image} />
          </div>
          <div className="col-md-6">
            <h1 className="h1 mb-5">{title}</h1>
            <div class="btn btn-primary position-relative display-3">
              {price}
              <span className="position-absolute pt-2 pt -2 start-100 translate-middle badge rounded-pill bg-danger">
                New Price
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
            <h3 className="mt-4">Category: <span class="badge bg-secondary">{category}</span></h3>
            <p>{description}</p>
            <button className="btn btn-danger">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
