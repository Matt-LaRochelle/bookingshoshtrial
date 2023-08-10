import { useLocation } from 'react-router-dom';
import './single.scss'
import useFetch from '../../hooks/useFetch';

const Single = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`/${path}/${id}`);

    console.log("path:", path)
    console.log("id:", id)
    console.log("fetched data:", data)

    return (
        <div>
            <p>Single page layout</p>
            <p>Information/Photo card</p>
            <p>Stats for last 6 months</p>
            <p>Most recent transactions</p>
        </div>
    )
}

export default Single