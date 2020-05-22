import React from "react";
import ProductCard from "./ProductCard";
import ProductsData from "../fake-api/products";

const HomePage = props => {
  return (
    <div className="col-lg-10 mx-auto py-3">
      <h1 className="display-4 text-center">Home Page</h1>
      <div className="row mx-auto">
        {ProductsData.map((product, i) => (
          <div className="col-lg-4 mt-2" key={i}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
