import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useEffect } from "react";

export default function BasicPagination(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log("page");
    console.log(page);
  };

  useEffect(() => {
    props.pagecallBackFun(currentPage);
  }, [currentPage]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
