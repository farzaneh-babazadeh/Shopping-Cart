import React,{createContext, useEffect,useState} from 'react';
// API
import { getProducts } from '../services/api';

export const ProductsContext=createContext();

const ProductContextProvider = (props) => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetchAPI()

    },[])
    const fetchAPI = async()=>{
           setProducts(await getProducts());
    } 
    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;