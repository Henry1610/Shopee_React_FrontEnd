import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function useSearch() {
    const [resultInput, setResultInput] = useState('');
    const [products, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const debouncedSearchTerm = useDebounce(resultInput, 500);

    useEffect(() => {
        if (!debouncedSearchTerm) {
            setProductsList([]);
            return;
        }

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedSearchTerm)}&limit=7`);
                const data = await response.json();
                setProductsList(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [debouncedSearchTerm]);

    return {
        resultInput,
        setResultInput,
        products,
        loading,
        error
    };
}

export default useSearch; 