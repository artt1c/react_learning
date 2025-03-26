import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = { flag: boolean }

const Pagination:FC<PaginationProps> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page:'1'});

    const onclickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 1) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    }

    const onclickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    }

    return (
        <div>
            <button  onClick={onclickPrevHandler}>prev</button>
            <button onClick={onclickNextHandler} disabled={flag}>next</button>
        </div>
    );
};

export default Pagination;