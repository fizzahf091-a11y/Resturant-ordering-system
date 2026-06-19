import React from 'react'
import { product } from "../../data";
import productImage1 from "../../assets/images/juice.jpeg"
import productImage2 from "../../assets/images/creamy  strawbery ice cream.jpeg"
import productImage3 from "../../assets/images/desserts.jpg"
const Product = () => {
      const productItems = [
        { name: "juice", price: 399, originalPrice: 499, img: productImage1, },
        { name: "creamy  strawbery ice cream", price: 399, originalPrice: 499, img: productImage2, },
        { name: "desserts", price: 599, originalPrice: 699, img: productImage3, },
      ];
  return (
    <>
      <section className='products' id='products'>
        <h1 className='heading'>
            our <span>product</span>
        </h1>
        <div className="box-container">
          {productItems.map((item, index)=>(
            <div className='box' key={index}>
              <div className='icons'>
                <a href="#" className='bi bi-cart3'></a>
                <a href="#" className='bi bi-heart'></a>
                <a href="#" className='bi bi-eye'></a>
              </div>
              <div className='image'>
                <img src={item.img} alt={item.name} />
              </div>
              <div className='content'>
                <h3>{item.name}</h3>
                <div className='stars'>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i className='bi bi-star-half'></i>
                </div>
              </div>
              <div className='price'>
                Only RS: {item.price}/- <span>{item.originalPrice}/-</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Product