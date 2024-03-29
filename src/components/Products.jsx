import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  
  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get(
          cat ? `http://localhost:5000/api/products?category=${cat}`
              : "http://localhost:5000/api/products");
        setProducts(res.data)
      }
      catch(err){
        console.log(err) 
      }
    };
    getProducts()
  }, [cat]);

  useEffect(()=>{
    cat && 
    setFilteredProducts(
      products.filter((item)=>
      Object.entries(filters).every(([key, val])=>
      item[key].includes(val)
      )
      )
    )
  }, [products, cat, filters]);

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts( prev =>
        [...prev].sort((x,y) => x.createdAt - y.createdAt)
      )
    }
    else if(sort === "asc"){
      setFilteredProducts( prev =>
        [...prev].sort((x,y) => x.price - y.price)
      )
    }
    else {
      setFilteredProducts( prev =>
        [...prev].sort((x,y) => y.price - x.price)
      )
    }
  },[sort]);

  return (
    <Container>
      {cat ? 
           filteredProducts.map((item) => <Product key={item.id} item={item} />) 
           :
           products.slice(0,8).map((item) => <Product key={item.id} item={item} />)
      }
    </Container>
  );
};

export default Products;