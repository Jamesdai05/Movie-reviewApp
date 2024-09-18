import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage=20;
  const pageVisited=itemsPerPage * pageNumber;
  const IndexOfLastItemPerPage=pageVisited + itemsPerPage;

  const currentItems =


  return (<ReactPaginate />);
};

export default Paginate;
