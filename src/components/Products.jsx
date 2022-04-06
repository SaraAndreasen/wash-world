import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";

export default function Products(data) {
  useEffect(() => {
    axios.get(info.backendUrl + "/products/" + data.lpn).then((result) => {
      data.setProducts(result.data.response.products);
    });
  }, []);
  return (
    <div className="component blue-page">
      <h2 className="products--h2">Vælg program</h2>
      {data.products.map((product) => {
        return (
          <div
            key={product.productid}
            className="products"
            id={"products-" + product.productid}
          >
            <div className="products-body">
              <h5 className="products-name">{product.name}</h5>
              <p className="products-description">{product.description}</p>
              <p className="prodtucts-text">{product.price}</p>
              <button
                className="btn btn-active btn-card"
                onClick={data.chooseWash}
                value={product.program}
              >
                Program {product.name}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
