import { useState, useEffect } from "react";

function useFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return; // 🔥 Ngăn fetch nếu url là null

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

        fetchData();
    }, [url]); // 🚀 Không cần `option` trong dependency array

    return { data, loading, error };
}

export default useFetch;
