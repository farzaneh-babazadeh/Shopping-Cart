import React,{useContext} from 'react';

// Style
import styles from '../shared/Product.module.css'

//functions
import { shorten , isInCart ,quantityCount} from '../../helpers/functions';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from '../../context/CartContexProvider';

//Icons
import trashIcon from "../../assets/icon/recycle-bin-icon.svg"

const Product = (props) => {
 const{state,dispatch} = useContext(cartContext);
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={props.productData.image} alt="product" style={{width:"200px"}}/>
            <h3>{shorten(props.productData.title)}</h3>
            <p>{props.productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/product/${props.productData.id}`}>Details</Link>
               <div>
               {quantityCount(state,props.productData.id) > 1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"DECREASE" , payload:props.productData})}>-</button>}
               {quantityCount(state,props.productData.id )===1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"REMOVE-ITEM" , payload:props.productData})}><img alt='trash' src={trashIcon} style={{width:"20px"}}/></button>}
               {quantityCount(state,props.productData.id)> 0 && <span className={styles.counter}> {quantityCount(state,props.productData.id)}</span>}
               {isInCart(state,props.productData.id)?<button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE" , payload:props.productData})}>+</button>
               :<button onClick={()=> dispatch({type:"ADD-ITEM" , payload:props.productData})}>Add to cart</button>}
               
                </div>
            </div>
        </div>
    );
};

export default Product;