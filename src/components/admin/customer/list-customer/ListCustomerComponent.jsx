import { Link } from "react-router-dom"

export default function ListCustomerComponent(props) {
  const { user } = props
  return (
    <>
      <div className="row">
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
            <option defaultValue="1">Name: A-Z</option>
            <option defaultValue="2">Name: Z-A</option>
            <option defaultValue="3">Contact: A-Z</option>
            <option defaultValue="4">Address: A-Z</option>
            <option defaultValue="5">Payment: High to Low</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="locality" className="form-label">
            Select locality
          </label>
          <select className="form-select" aria-label="Select locality">
            <option disabled defaultValue="">
              Open to select locality
            </option>
            <option defaultValue=""></option>
            <option defaultValue="1">A-Z</option>
          </select>
        </div>
      </div>
      <div className="table-responsive border-top mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Pending Payment</th>
            </tr>
          </thead>
          <tbody>
            {user.map((value, index) => (
              <tr key={index}>
                <td scope="row">
                  <Link to={"/admin/customer/details/" + value?.id}>
                    {value?.name}
                  </Link>
                </td>
                <td>
                  <span
                    className="d-inline-block"
                    data-bs-toggle="popover"
                    title={"Call on " + "+91-12345-12345"}
                    data-bs-trigger="hover focus"
                  >
                    <a href={"tel:+91-" + value?.phone} target="_blank">
                      {"+91-" + value?.phone}
                    </a>
                  </span>
                </td>
                <td>
                  <span
                    className="d-inline-block"
                    data-bs-toggle="popover"
                    title="Find on google maps"
                    data-bs-trigger="hover focus"
                  >
                    <a
                      href={
                        "http://maps.google.com/?q=" +
                        value?.house_number +
                        " " +
                        value?.locality_name
                      }
                      target="_blank"
                    >
                      {value?.house_number + " " + value?.locality_name}
                    </a>
                  </span>
                </td>
                <td>
                  ₹ <b>100</b>
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
