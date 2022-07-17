import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);

  const [actualPage, setActualPage] = useState(1);

  const residentPerPage = 10;

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setResidents(res.data.residents);
      setActualPage(1);
    });
  }, [url]);
  console.log(residents);
  /*Página actual*/

  const lastResidentIndex = actualPage * residentPerPage;
  const firstResidentIndex = lastResidentIndex - residentPerPage;
  const actualResidentPage = residents.slice(
    firstResidentIndex,
    lastResidentIndex
  );

  /* Cambio de página*/

  const pageChange = (numberOfPage) => setActualPage(numberOfPage);

  return (
    <>
      <h3>Residents</h3>
      <div className="row">
        {actualResidentPage.map((url) => (
          <ResidentCard key={url.substring(42)} url={url} />
        ))}
      </div>

      <Pagination
        residentPerPage={residentPerPage}
        totalResidents={residents.length}
        pageChange={pageChange}
        actualPage={actualPage}
      />
    </>
  );
};

export default ResidentContainer;