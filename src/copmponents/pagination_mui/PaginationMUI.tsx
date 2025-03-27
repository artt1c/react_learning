import React, {ChangeEvent, FC} from 'react';
import {Pagination, Stack} from "@mui/material";
import {useSearchParams} from "react-router-dom";

type IProps = {
  pageCount: number;
}

const PaginationMui:FC<IProps> = ({pageCount}) => {

  const [query, setQuery] = useSearchParams({page: '1'});
  const page = query.get('page');

  const handleChange = (event: ChangeEvent<unknown>, currentPage:number) => {
    setQuery({page: currentPage.toString()})
  }

  return (
    <div>
      <Stack spacing={2} direction='row' justifyContent='center'>
        <Pagination count={pageCount} page={page? +page : 1} onChange={handleChange} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default PaginationMui;