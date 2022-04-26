import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    //   const request = async (...args) => {             //if has params
    setLoading(true);
    const response = await apiFunc(...args);
    // const response = await apiFunc(...args);       //if has params
    setLoading(false);

    if (!response.ok) {
      setError(true);
      console.log(response.problem);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
