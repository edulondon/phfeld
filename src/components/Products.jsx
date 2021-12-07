import { useEffect, useState } from "react";
import styled from "styled-components";
import { listProducts } from "../actions/productsActions";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [
    dispatch,
  ]);
  console.log(products);

  return (
    <Container>
       {products &&
        products
          .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
