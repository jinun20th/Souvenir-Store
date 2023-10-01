import React, {useState} from 'react';
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import "./product.css";
import CardItem from '../../components/cards/CardItem';
import StarRating from '../../components/starRating/StarRating';

const Product = () => {

    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='product__container'>
        <div className='product__info__container'>
            <div className='product__img'>
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F9.HeroHonda2017.png&w=384&q=75" />
            </div>
            <div className='product__info'>
                <form>
                    <h2>Classic Rolex Watch</h2>
                    <p>Brand:Xiaomi</p>
                    <p>Rated <StarRating/> </p>
                    
                    <div className='product__option'>
                    <h5>Option</h5>
                    <div className='radio__container'>
                        <input type='radio' name='option' id='option1'/>
                        <label htmlFor='option1'>Option1</label>
                        <input type='radio' name='option' id='option2'/>
                        <label htmlFor='option2'>Option2</label>
                        <input type='radio' name='option' id='option3'/>
                        <label htmlFor='option3'>Option3</label>
                        <input type='radio' name='option' id='option4'/>
                        <label htmlFor='option4'>Option4</label>
                    </div>
                    </div>
                    <div className='product__type'>
                    <h5>Type</h5>
                    <div className='radio__container'>
                        <input type='radio' name='type' id='type1'/>
                        <label htmlFor='type1'>type1</label>
                        <input type='radio' name='type' id='type2'/>
                        <label htmlFor='type2'>type2</label>
                        <input type='radio' name='type' id='type3'/>
                        <label htmlFor='type3'>type3</label>
                        <input type='radio' name='type' id='type4'/>
                        <label htmlFor='type4'>type4</label>
                    </div>
                    </div>
                    <p className='product__price'>250.00$</p>
                    <button className='addtocart'>Add To Cart</button>
                </form>
            </div>
        </div>
        <div className='tabs__container'>
            <div className='bloc__tab'>
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>
                Description
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>
                Review
                </button>
            </div>
            <div className='content__tab'>
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2>Specification:</h2>
                    <p>Brand: Beats</p>
                    <p>Model: S450</p>
                    <p>Wireless Bluetooth Headset</p>
                    <p>FM Frequency Response: 87.5 – 108 MHz</p>
                    <p>Feature: FM Radio, Card Supported (Micro SD / TF)</p>
                    <p>Made in China</p>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>Write a review for this product</h2>
                    <div className='customer__reviewer'>
                        <div className='customer__info'>
                        <img className='customer__img' src = "https://bazaar.ui-lib.com/assets/images/faces/7.png"/>
                        <h2 className='customer__name'>Jannie Schumm</h2>
                        <StarRating/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
                    </div>
                    <form className='review__form'>
                    <h3>Your Rating*</h3>
                    <StarRating/>
                    <h3>Your Review*</h3>
                    <textarea className='review__text' placeholder='Write a review here' required></textarea>
                    <button className='review__button' type='submit' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='recommend__container'>
        {/* <h3>Frequently Bought Together</h3>
        <h3>Also Available at</h3> */}
        <h3 className='related__product__head'>Related Product</h3>
        <div className='related__product'>
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
        </div>
    )
}

export default Product
