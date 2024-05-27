import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from './Navbar.module.css'

//Context
import { cartContext } from '../context/CartContexProvider';

//Icons
import shopIcon from "../assets/icon/cart-icon.svg";

const Navbar = () => {
    const {state} = useContext(cartContext);
    return (
        <div className={styles.mainContainer}>
           <div className={styles.container}>
             <Link className={styles.productLink} to="/product">Products</Link>
             <div className={styles.iconContainer}>
                <Link to="/cart"><img src={shopIcon} alt='shop' style={{width:"30px"}}/></Link>
                <span>{state.itemsCounter}</span>
             </div>
           </div> 
        </div>
    );
};

export default Navbar;