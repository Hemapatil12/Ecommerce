import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    // Debugging: Log the products and props
    console.log('All products:', all_product);
    console.log('Props:', props);

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="Shop Banner" />
            <div className='shopcategory-indexsort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcategory-sort'>
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product && all_product.length > 0 ? (
                    all_product
                        .filter(item => props.category === item.category)
                        .map((item) => (
                            <Item 
                                key={item.id} 
                                id={item.id} 
                                name={item.name} 
                                image={item.image} 
                                new_price={item.new_price} 
                                old_price={item.old_price} 
                            />
                        ))
                        
                ) : (
                    <p>Loading products...</p> // Handle the case where products are not yet loaded
                )}
            </div>
            <div className='shopcategory-loadmore'>
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
