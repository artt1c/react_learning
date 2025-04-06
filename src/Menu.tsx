import React, {memo} from 'react';

type MemoTypes = {
  id: number;
  someFn: () => void;
  links: string[];
}

const Menu = memo(({id, someFn, links}:MemoTypes) => {

  console.log('Menu build');

  return (
    <ul>
      {
        links.map(link => (<li>{link}</li>))
      }
    </ul>
  );
});

export default Menu;