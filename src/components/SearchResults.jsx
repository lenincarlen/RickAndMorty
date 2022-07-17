import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SearchResults = ({ url, handleSearch }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => setResults(res.data.results.slice(0, 7)));
    promise.catch(() => {});
  }, [url]);

 
  
  const listResult = results.map((value) => (
    <button
      onClick={() => handleSearch(value.url)}
      key={value.url.substring(50)}
    >
      {value.name}
    </button>
  ));
  
  return <div className="results">{listResult}</div>;
};

export default SearchResults;