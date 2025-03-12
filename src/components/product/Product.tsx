import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
import './Product.css'

const Product:FC<IProductModel> = ({id,title,sku,tags,shippingInformation,warrantyInformation,stock,weight,reviews,rating,price,minimumOrderQuantity,meta,images,discountPercentage,returnPolicy,dimensions,description,brand,availabilityStatus,category,thumbnail}) => {
  return (
    <div className="product">
      {id} --
      {title} --
      {description} --
      {category} --
      {price} --
      {discountPercentage} --
      {rating} --
      {stock} --
      {brand} --
      {sku} --
      {weight} --
      {warrantyInformation} --
      {shippingInformation} --
      {availabilityStatus} --
      {returnPolicy} --
      {minimumOrderQuantity} --

      <ol>
        <li><b>TAGS:</b></li>
        {tags.map(tag => <li>{tag}</li>)}
      </ol>

      <ol>
        <li><b>DIMENSIONS:</b></li>
        <li>width:	{dimensions.width}</li>
        <li>height:	{dimensions.height}</li>
        <li>depth:	{dimensions.depth}</li>
      </ol>

      <ol>
        <li><b>META:</b></li>
        <li>createdAt:	{meta.createdAt}</li>
        <li>updatedAt:	{meta.updatedAt}</li>
        <li>barcode	:	{meta.barcode}</li>
        <li><img src={meta.qrCode} alt=""/></li>
      </ol>

      <ol>
        <li><b>REVIEWS:</b></li>
        {reviews.map(review =>
          <ul>
            <li>{review.rating}</li>
            <li>{review.date}</li>
            <li>{review.reviewerName}</li>
            <li>{review.reviewerEmail}</li>
            <li>{review.comment}</li>
          </ul>
        )}
      </ol>

      <ol className={'subImg'}>
        {images.map(img => <li ><img src={img} alt=""/></li>)}
      </ol>

      <img src={thumbnail} alt={title}/>
    </div>
  );
};

export default Product;