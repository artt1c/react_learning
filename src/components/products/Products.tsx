import React, {useEffect, useState} from 'react';
import {getProducts} from "../../services/api.servise";
import {IProduct} from "../../models/IProducts";
import Product from "../product/Product";

const Products = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts().then(value => setProducts(value));
  }, []);

  return (
    <div>
      {products.map((product: IProduct) => (<Product key={product.id} product={product}/>))}
    </div>
  );
};

export default Products;