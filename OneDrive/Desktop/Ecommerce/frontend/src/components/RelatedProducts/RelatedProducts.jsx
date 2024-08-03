import React from 'react';
import './RelatedProduct.css';
import data_products from '../Assets/all_product';
import Item from '../Item/Item';

function RelatedProducts() {
  return (
    <div className='relatedproduct'>
      <h1>Related products</h1>
      <hr/>
      <div className="relatedproduct-item">
        {data_products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
