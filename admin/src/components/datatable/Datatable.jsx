import "./datatable.scss";
import { Link, useLocation } from 'react-router-dom'


const Datatable = ({columns}) => {
    // This is a cool way to get the URL you are on, for a dynamic page
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {path}
                <Link to={`/${path}/new`} className="link">
                    Add New {path}
                </Link>
            </div>
        </div>
    )
}

export default Datatable