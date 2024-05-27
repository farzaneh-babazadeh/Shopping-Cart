import React,{useContext} from 'react';

//Styles
import styles from "./Cart.module.css"

//Context
import { cartContext } from '../../context/CartContexProvider';
//functions
import { shorten } from '../../helpers/functions';

//Icons
import trasIcon from "../../assets/icon/recycle-bin-icon.svg"

const Cart = (props) => {
    const{image, title, price, quantity} = props.data;
    const{dispatch}=useContext(cartContext)
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product'/>
            <div lassName={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
                <div>
                    <span className={styles.quantity}>{quantity}</span>
                </div>
                <div className={styles.buttonContainer}>
                     {
                        quantity >1 ?
                        <button onClick={()=> dispatch({type:"DECREASE" , payload:props.data})}>-</button>
                        :<button onClick={()=> dispatch({type:"REMOVE-ITEM" , payload:props.data})}><img src={trasIcon} alt='trash' style={{width:"20px"}}/></button>
                     }
                       <button onClick={()=> dispatch({type:"INCREASE" , payload:props.data})}>+</button>
                </div>
            
        </div>
    );
};

export default Cart;