import React from "react";
import { ProductsList } from "../helpers/ProductsList";
import ProductItem from "../components/ProductItem";
import "../styles/Products.css";

function ProductMenu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Products</h1>
      <div className="menuList">
        {ProductsList.map((productItem, key) => {
          return (
            <ProductItem
              key={key}
              image={productItem.image}
              name={productItem.name}
              price={productItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductMenu;
