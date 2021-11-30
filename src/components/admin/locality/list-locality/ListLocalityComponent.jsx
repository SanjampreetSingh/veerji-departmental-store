import React from "react"
import { Link } from "react-router-dom"

export default function ListLocalityComponent(props) {
  let { locality, deleteData, getError, deleteResponse } = props

  return (
    <>
      <div className="row">
        <div className="col">
          <Link
            to="/admin/locality/add"
            className="btn btn-primary mt-4"
            role="button"
          >
            Add new locality
          </Link>
        </div>
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col">
          <label htmlFor="Sorting" className="form-label">
            Sort by
          </label>
          <select className="form-select" aria-label="Sort by">
            <option defaultValue="" disabled>
              Sort by
            </option>
            <option defaultValue="1">Locality: A-Z</option>
            <option defaultValue="2">Locality: Z-A</option>
          </select>
        </div>
      </div>
      <div className="table-responsive border-top mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Locality</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {locality.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>
                  <span
                    className="d-inline-block"
                    data-bs-toggle="popover"
                    title="Find on google maps"
                    data-bs-trigger="hover focus"
                  >
                    <a
                      href={"http://maps.google.com/?q=" + data.name}
                      target="_blank"
                    >
                      {data.name}
                    </a>
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={e => deleteData(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
