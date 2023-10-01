import React from 'react';
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import CardItem from '../../components/cards/CardItem';
import "./products.css";
import { MdChair } from "react-icons/md";
import { GiDress } from "react-icons/gi";
import { IoIosCamera } from "react-icons/io";
const Products = () => {

    return (
        <div className='products__container'>
          <div className='categories'>
            <h2>Flash Deals, Enjoy Upto 80% discounts</h2>
            <div className='filter__container'>
              <div className='filter__item'>
                <MdChair className='filter__icon'/>
                <label className='filter__label'>Furniture</label>
              </div>
              <div className='filter__item'>
                <GiDress className='filter__icon'/>
                <label className='filter__label'>Woman</label>
              </div>
              <div className='filter__item'>
                <IoIosCamera className='filter__icon'/>
                <label className='filter__label'>Electronics</label>
              </div>
              <div className='filter__item'>
                <IoIosCamera className='filter__icon'/>
                <label className='filter__label'>Comestics</label>
              </div>
            </div>
          </div>
          <div className='cards-list'>
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
            <CardItem 
            src = "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F1.CampagnoldWX-R.png&w=640&q=75"
            discount = "19"
            label = "Hero Honda"
            price = "230$"
            />
          </div>
        </div>
    )
}

export default Products