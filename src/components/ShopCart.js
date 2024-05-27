import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from './ShopCart.module.css'

//Components
import Cart from"./shared/Cart";

//Context
import { cartContext } from '../context/CartContexProvider';

const ShopCart = () => {
    const{state, dispatch}=useContext(cartContext)
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                      <p><span>Total Items:</span>{ state.itemsCounter}</p>
                      <p><span>Total Payments:</span>{ state.total}</p>
                      <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=> dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={()=> dispatch({type: "CLEAR"})}>Clear</button>
                        </div>   
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check out successfully</h3>
                    <Link to="/product">Buy more</Link>
                    
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want To Buy?</h3>
                    <Link to="/product">Go back to shop</Link>
                    
                </div>
            }
        </div>
    );
};

export default ShopCart;