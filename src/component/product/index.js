import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../feature/product/product";
import ListItem from "./ListItem";
import "./style.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="listing">
      {items &&
        items.map((item) => {
          return <ListItem key={`item_${item.id}`} {...item} />;
        })}
    </div>
  );
};

export default ProductList;
