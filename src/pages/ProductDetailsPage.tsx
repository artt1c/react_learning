import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProduct} from "../services/api.servise";
import {IProduct} from "../models/IProducts";

const ProductDetailsPage = () => {

  const {id} = useParams();
  console.log(id);

  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    if (id) {
      getProduct(id).then(value => setProduct(value));
    }
  }, []);

  return (
    <div>
      {JSON.stringify(product)}
    </div>
  );
};

export default ProductDetailsPage;