import React from 'react';
import {useSearchParams} from "react-router-dom";

const SimplePagination = () => {

  const [query, setQuery] = useSearchParams({page: '1'});

  const onClickPrevHandler = () => {
    const page = query.get('page');
    if (page && +page > 1) {
      let currentPage = +page;
      setQuery({page: (--currentPage).toString()});
    }
  }

  const onClickNextHandler = () => {
    const page = query.get('page');
    if (page) {
      let currentPage = +page;
      setQuery({page: (++currentPage).toString()});
    }
  }

  return (
    <div>
      <button onClick={onClickPrevHandler}>Prev</button>
      <button onClick={onClickNextHandler}>Next</button>
    </div>
  );
};

export default SimplePagination;