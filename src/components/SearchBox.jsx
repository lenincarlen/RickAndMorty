import { useState } from "react";
import LocationContainer from "./LocationContainer";

import ResidentContainer from "./ResidentContainer";
import SearchResults from "./SearchResults";

const query = Math.floor(Math.random() * 126) + 1;

const SearchBox = () => {
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );

  const [search, setSearch] = useState("");

  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };

  return (

    <>
     
     
      <input
        type="text"
        value={search}
        placeholder="Choose a location"
        onChange={(e) => setSearch(e.target.value)}
      />

      {search !== "" && (
        <SearchResults
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handleSearch={handleSearch}
        />
      )}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </>
  );
};

export default SearchBox;