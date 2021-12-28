import { Link } from "react-router-dom"
import BootstrapTable from "react-bootstrap-table-next"

export default function SaleComponent(props) {
  const { sale, columns, defaultSorted } = props

  return (
    <>
      <div className="row">
        <div className="col">
          <Link
            to="/admin/sale/add"
            className="btn btn-primary mt-4"
            role="button"
          >
            Add new sale
          </Link>
        </div>
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col">
          <label htmlFor="search" className="form-label">
            Search by name, phone or email
          </label>
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            aria-describedby="search"
            placeholder="Search by name, phone or email"
            onEnter={e => console.log(e.target.value)}
          />
          <small id="search" className="form-text text-muted">
            Type and press enter for search.
          </small>
        </div>
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={sale}
        columns={columns}
        defaultSorted={defaultSorted}
      />
      {/* <div className="table-responsive border-top mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Sale</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sale.map((data, index) => (
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
                      rel="noreferrer"
                    >
                      {data.name}
                    </a>
                  </span>
                </td>
                <td>
                  <Link
                    type="button"
                    to={"/admin/sale/" + data.id}
                    className="btn btn-outline-secondary btn-sm me-2"
                  >
                    Edit
                  </Link>
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
      </div> */}
    </>
  )
}
