import React, { useEffect, useState } from "react";

const DataFetchingFromApi = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      console.log("my Data ", data);
      setApiData(data)
    };
    fetchDataFromApi();

  }, []);
  return (
    <div>
      {apiData.map((data) => (
        <div key={data.id}>
          <h5 style={{border:"1px solid skyBlue",padding:"1rem",borderRadius:"10px",color:"gray",fontSize:"2rem"}}>{data.title}</h5>
        </div>
      ))}
    </div>
  )
  
};

export default DataFetchingFromApi;

// https://jsonplaceholder.typicode.com/photos
// Always when you fetch from Api then always use useEffect
