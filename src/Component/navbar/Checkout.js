import React, { useState } from 'react';
import { useCart } from './context/CartContext';

const Checkout = () => {
  const { cartItems } = useCart();
  const [form, setForm] = useState({ name: '', Email:'', address: '', payment: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed by ${form.name} for Rs ${cartItems.reduce((a, i) => a + i.price * i.quantity, 0)}`);
    
  };

  return (
     <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
            <span>Contact</span> us
        </h1>
      </section>
            <div className='container'>
        <form>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder=' Enter Your Name' name='name'/>

          <label htmlFor="Email">Phone No</label>
          <input type="tel" placeholder='Your Phone Number' name='phone' id="phone"/>

          <label htmlFor="Address">Address</label>
          <textarea name="Address" placeholder='Your Address' id=""></textarea>

          <select className="payment">
            <option value="">Select Payment</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Card">Card</option>
          </select>
          
          <button type='submit'>Place Order</button>

        </form>
      </div>
    </>
   
  );
};

export default Checkout;