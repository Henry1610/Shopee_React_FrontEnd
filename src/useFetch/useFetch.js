import { useState, useEffect } from "react";
 
 function useFetch(url) {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
 
     useEffect(() => {
         const fetchData = async () => {
             try {
                 console.log("Fetching data from:", url);
                 setLoading(true);
                 const response = await fetch(url);
 
                 
 
                 const result = await response.json();
                 setData(result);
             } catch (err) {
                 console.error("Fetch error:", err.message);
                 setError(err.message);
             } finally {
                 setLoading(false);
             }
         };
         fetchData()
     }, [url]);
 
     return { data, loading, error };
 }
 
 export default useFetch;