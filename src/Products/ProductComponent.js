import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, rating } = product;
    return (
      <NavLink to={`/product/${id}`}>
        <div className="card">
          <img src={image} alt={title} />
          <div className="card-body">
            <h5 className="card-title text-danger">{title}</h5>
            <div className="row mt-5 mb-5">
              <div className="col-md-6">
                <div class="btn btn-primary position-relative display-3">
                  {rating.rate}
                  <span className="position-absolute pt-2 pt -2 start-100 translate-middle badge rounded-pill bg-success">
                    Rating
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div class="btn btn-primary position-relative display-3">
                  {rating.count}
                  <span className="position-absolute pt-2 pt -2 start-100 translate-middle badge rounded-pill bg-warning">
                    Like
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </div>
              </div>
            </div>
            <p className="card-text text-success display-6">Rs {price}</p>
            <h2 className="h2 text-info">{category}</h2>
          </div>
        </div>
      </NavLink>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
