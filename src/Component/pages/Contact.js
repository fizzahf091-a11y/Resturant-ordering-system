import React from 'react';

const Contact = () => {
  return (
    <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
            <span>Contact</span> us
        </h1>
      </section>
            <div className='container'>
        <form>
          <label htmlFor="First Name">First Name</label>
          <input type="text" placeholder='Your First Name' name='firstname'/>

          <label htmlFor="Last Name">Last Name</label>
          <input type="text" placeholder='Your Last Name' name='lastname'/>

          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='Your Email' name='email'/>

          <label htmlFor="Product">Product</label>
          <select name="Order Product" id="Order Product">
            <option value="Piza">Piza</option>
            <option value="Burger">Burger</option>
            <option value="Cold Drink">Cold Drink</option>
            <option value="ice Creame">ice Creame</option>
            <option value="Biryani">Biryani</option>
          </select>
          {/* <label htmlFor="Piza">Piza</label>
          <select name="Piza" id="Piza">
              <option value="Large Piza"></option>
              <option value="Mdium Piza"></option>
              <option value="Small Piza"></option>
          </select> */}
          {/* <input type="text" placeholder='Product Name' name='Product'/><br /> */}

          <label htmlFor="Quantity">Quantity</label>
          <input type="number" placeholder='Quantity' name='quantity' min={1}/>

          <label htmlFor="Address">Address</label>
          <textarea name="Address" placeholder='Deliery Address' id=""></textarea>

          <select className="payment">
            <option value="">Select Payment</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Card">Card</option>
          </select>
          
          <button type='submit'>Place Order</button>
        </form>
      </div>
    </>
  )
}

export default Contact












// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     product: 'Piza',
//     quantity: 1,
//     address: '',
//     payment: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name.toLowerCase()]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Order placed by ${formData.firstname} for ${formData.quantity} x ${formData.product}`);
//     // yahan aap backend API call bhi kar sakti hain
//   };

//   return (
//     <>
//       <section className='contact' id='contact'>
//         <h1 className='heading'><span>Contact</span> us</h1>
//       </section>

//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <label>First Name</label>
//           <input type="text" name='firstname' placeholder='Your First Name' onChange={handleChange} required />

//           <label>Last Name</label>
//           <input type="text" name='lastname' placeholder='Your Last Name' onChange={handleChange} required />

//           <label>Email</label>
//           <input type="email" name='email' placeholder='Your Email' onChange={handleChange} required />

//           <label>Product</label>
//           <select name="product" onChange={handleChange} required>
//             <option value="Piza">Piza</option>
//             <option value="Burger">Burger</option>
//             <option value="Cold Drink">Cold Drink</option>
//             <option value="Ice Creame">Ice Creame</option>
//             <option value="Biryani">Biryani</option>
//           </select>

//           <label>Quantity</label>
//           <input type="number" name="quantity" placeholder='Quantity' min={1} onChange={handleChange} required />

//           <label>Address</label>
//           <textarea name="address" placeholder='Delivery Address' onChange={handleChange} required></textarea>

//           <label>Payment Method</label>
//           <select name="payment" onChange={handleChange} required>
//             <option value="">Select Payment</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>
//             <option value="Card">Card</option>
//           </select>

//           <button type='submit'>Place Order</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;
