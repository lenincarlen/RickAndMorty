import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LocationInformation from "./LocationInformation";
const LocationContainer = (url) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) =>
      setLocation({
        name: res.data.name,
        dimension: res.data.dimension,
        type: res.data.type,
        population: res.data.residents.length,
      })
    );
  }, [url]);

  return (
    <LocationInformation
      name={location.name}
      dimension={location.dimension}
      type={location.type}
      population={location.population}
    />
  );
};

export default LocationContainer;