import React from 'react';
import {useStore} from "../Store";

const HomePage = () => {

  const useStore1 = useStore();

  console.log(useStore1);

  return (
    <div>
      Home page
    </div>
  );
};

export default HomePage;