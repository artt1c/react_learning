import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service";
import {IProduct} from "../models/IProduct";

const AuthResourcesPage = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    loadAuthProducts().then(value => {
      if (value) {
        // setProducts(prevState => value);
        setProducts(value);
      }
    }).catch(reason => {
      refresh()
        .then()
    });
  }, []);

  return (
    <div>
      {
        JSON.stringify(products)
      }
    </div>
  );
};

export default AuthResourcesPage;