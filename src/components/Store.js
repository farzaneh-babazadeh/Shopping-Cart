import React,{useContext} from 'react';

// Style
import styles from "./Store.module.css"

//Context
import { ProductsContext } from '../context/ProductContext';

//Components
import Product from './shared/Product';

const Store = () => {
     const products = useContext(ProductsContext)
    return (
        <div className={styles.container}  style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
           {
             products.map(product =><Product key={product.id} productData={product}/>)
           } 
        </div>
    );
};

export default Store;