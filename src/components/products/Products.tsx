import React, {FC} from 'react';
import {products} from "../../data";
import Product from "../product/Product";

const Products:FC = () => {

  return (
    <div>
      <p>Products</p>
      <ul>
        {
          products.map(({id,
                          title,
                          description,
                          category,
                          price,
                          discountPercentage,
                          rating,
                          brand,
                          images,
                          meta,
                          minimumOrderQuantity,
                          sku,
                          availabilityStatus,
                          reviews,
                          shippingInformation,
                          warrantyInformation,
                          stock,
                          tags,
                          returnPolicy,
                          weight,
                          thumbnail,
                          dimensions}) =>
            <li>
              <Product
                id={id}
                availabilityStatus={availabilityStatus}
                brand={brand}
                category={category}
                description={description}
                dimensions={dimensions}
                discountPercentage={discountPercentage}
                images={images}
                meta={meta}
                minimumOrderQuantity={minimumOrderQuantity}
                price={price}
                rating={rating}
                returnPolicy={returnPolicy}
                reviews={reviews}
                sku={sku}
                shippingInformation={shippingInformation}
                stock={stock}
                tags={tags}
                thumbnail={thumbnail}
                title={title}
                warrantyInformation={warrantyInformation}
                weight={weight}/></li>)
        }
      </ul>
    </div>
  );
};

export default Products;