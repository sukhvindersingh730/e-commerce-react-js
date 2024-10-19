import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link correctly
import { items } from './data';
import { Product } from './product';

export const Search = () => {
  const { term } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const result = items.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(result);
  }, [term]);

  return (
    <>
    <Product items={filteredData}/>
    </>
  );
};
