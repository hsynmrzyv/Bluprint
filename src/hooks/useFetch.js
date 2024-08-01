import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", body) => {
  const [fetchedData, setFetchedData] = useState();

  const fetchData = async () => {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [fetchedData, setFetchedData];
};

export default useFetch;
