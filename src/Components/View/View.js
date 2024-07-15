import React from 'react'
import './view.css'
import V3 from '../../assets/product-images/v3.jpg';
const View = () => {
  return (
    <div className='viewParentDiv'>
        <div className='imageShowDiv'>
            <img src={V3} alt='two wheeler'/>
        </div>
        <div className='rightSection'>
            <div className='productDetails'>
                <p>&#x20B9;25000</p>
                <span>YAMAHA R15 V3</span>
                <p>Two wheeler</p>
                <span>Tue May 04 2024</span>
            </div>
            <div className='contactDetails'>
                <p>Seller Details</p>
                <p>No Name</p>
                <p>123123123</p>
            </div>
        </div>
      
    </div>
  )
}


export default View
