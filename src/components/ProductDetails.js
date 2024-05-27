import React,{ useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// Style
import styles from './ProductDetails.module.css'

//Context
import { ProductsContext } from '../context/ProductContext';


const ProductDetails = () => {
   const { id } = useParams();
   const data = useContext(ProductsContext);
   const product= data[id-1];
   const {image,title,price,description,category}=product;
    
    return (
        <div className={styles.container }>
           <img className={styles.image} src={image} alt='product'/>
           <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category:</span>{category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/product">Back to shop</Link>
            </div>
           </div>

       </div>
    );
};

export default ProductDetails;