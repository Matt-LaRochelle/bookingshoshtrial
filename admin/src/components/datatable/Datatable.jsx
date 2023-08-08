import "./datatable.scss";
import { Link, useLocation } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from 'react'


const Datatable = ({columns}) => {
    // This is a cool way to get the URL you are on, for a dynamic page
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const [list, setList] = useState();

    const { data, loading, error } = useFetch(`/${path}`); 

    useEffect(() => {
        setList(data)
    }, [data])

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {path}
                <Link to={`/${path}/new`} className="link">
                    Add New {path}
                </Link>
            </div>
            <div>
                <div>{list}</div>
                <div>{columns}</div>
            </div>
        </div>
    )
}

export default Datatable