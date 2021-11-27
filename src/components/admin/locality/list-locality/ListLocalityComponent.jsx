import React from "react"
import { Link } from "react-router-dom"

export default function ListLocalityComponent() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>
                <span
                  className="d-inline-block"
                  data-bs-toggle="popover"
                  title="Find on google maps"
                  data-bs-trigger="hover focus"
                >
                  <a
                    href="http://maps.google.com/?q=Some Address to visit"
                    target="_blank"
                  >
                    Some Address to visit
                  </a>
                </span>
              </td>
            </tr>
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
