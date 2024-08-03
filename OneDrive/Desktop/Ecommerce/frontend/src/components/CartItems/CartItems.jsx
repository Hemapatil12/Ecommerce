import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_product_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  if (!all_product || !cartItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const quantity = cartItems[e.id];
        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitem-quantity'>
                  {quantity}
                </button>
                <p>{e.new_price * quantity}</p>
                <img
                  className='cartitem-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitem-down'>
        <div className='cartitem-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitem-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <hr />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
