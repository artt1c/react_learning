import React from 'react';
import {useLocation} from "react-router-dom";


const ProductDetailsPageState = () => {

  const {state:{data}} = useLocation();
  console.log(data);

  return (
    <div>
      {
        JSON.stringify(data)
      }
    </div>
  );
};

export default ProductDetailsPageState;