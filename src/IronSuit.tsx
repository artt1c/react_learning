import React, {FC} from "react";

type Props = {
  children: React.ReactNode
}

const IronSuit:FC<Props> = ({children}) => {
  console.log('IronSuit');
  return (
    <div>
      {children}
    </div>
  );
}

export default IronSuit;