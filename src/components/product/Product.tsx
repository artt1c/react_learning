import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IProduct} from "../../models/IProducts";

type ProductProps = {
  product: IProduct;
}

const Product:FC<ProductProps> = ({product}) => {
  return (
    <div>
      <Link to={product.id.toString()}>{product.title}</Link>
    </div>
  );
};

export default Product;