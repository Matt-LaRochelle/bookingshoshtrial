import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
 
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url)
                setData(res.data);
                console.log("from the fetch" + JSON.stringify(res.data[0].name))
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
        // If you take away the URL then the useFetch hook uploads only when called
        // With the URL in the dependancy array, it gets called automatically as the URL
        // updates.
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url)
            setData(res.data);
            console.log("from the fetch" + res.data)
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return {data, loading, error, reFetch}
};

export default useFetch;