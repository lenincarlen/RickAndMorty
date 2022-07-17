import React from "react";

const LocationInformation = ({ name, dimension, type, population }) => {
  return (
    <div>
      <h2 className="text-center">{name}</h2>
      <div className="row">
        <div className="col-sm-4 text-center">
          <b className="container__location__title">Type: </b>
          <b>{type}</b>
        </div>
        <div className="col-sm-4 text-center">
          <b className="container__location__title">Dimension: </b>
          <b>{dimension}</b>
        </div>
        <div className="col-sm-4 text-center">
          <b className="container__location__title">Population: </b>
          <b>{population}</b>
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;