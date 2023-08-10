import "./datatable.scss";
import { Link, useLocation } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios'


const Datatable = ({columns}) => {
    // This is a cool way to get the URL you are on, for a dynamic page
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const [list, setList] = useState();

    const { data, loading, error } = useFetch(`/${path}`); 

    useEffect(() => {
        setList(data)
    }, [data])

    const handleDelete = async (id) => {
      console.log(id)
        try {
          // This path must be dynamic as well
          await axios.delete(`/${path}/${id}`)
          alert("Successfuly deleted item.")
          setList(list.filter((item) => item._id !== id));
        } catch (err) {
          console.log(err)
        }
      };


    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row._id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {path}
                <Link to={`/${path}/new`} className="link">
                    Add New {path}
                </Link>
            </div>
            <div>
                {
                    list ? 
                    <DataGrid
                        className="datagrid"
                        rows={list}
                        columns={columns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                        getRowId={row=>row._id}
                    />
                    : <p>"Loading..."</p>
                }
                {error && <div>{error}</div>}
            </div>
        </div>
    )
}

export default Datatable