import React, {memo} from 'react';

type MemoTypes = {
  id: number;
  someFn: () => void;
}

const Menu = memo(({id, someFn}:MemoTypes) => {

  console.log('Menu build');

  return (
    <div>
      Menu
    </div>
  );
});

export default Menu;