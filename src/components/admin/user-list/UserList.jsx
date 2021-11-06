import { Link } from "react-router-dom"

export default function UserList() {
  return (
    <>
      <div className="row">
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col">
          <label htmlFor="Sorting" className="form-label">
            Sort by
          </label>
          <select className="form-select" aria-label="Sort by">
            <option defaultValue disabled value="">
              Sort by
            </option>
            <option value="1">Name: A-Z</option>
            <option value="2">Name: Z-A</option>
            <option value="3">Contact</option>
            <option value="4">Address</option>
            <option value="5">Payment</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="locality" className="form-label">
            Select locality
          </label>
          <select className="form-select" aria-label="Select locality">
            <option defaultValue disabled value="">
              Open to select locality
            </option>
            <option value=""></option>
            <option value="1">A-Z</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <Link to={"/admin/user/details/" + "User 1"}>User 1</Link>
              </td>
              <td>
                <span
                  class="d-inline-block"
                  tabindex="0"
                  data-bs-toggle="popover"
                  title={"Call on " + "+91-12345-12345"}
                  data-bs-trigger="hover focus"
                >
                  <a href="tel:+91-12345-12345" target="_blank">
                    +91-12345-12345
                  </a>
                </span>
              </td>
              <td>
                <span
                  class="d-inline-block"
                  tabindex="0"
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
              <td>
                ₹ <b>100</b>
              </td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
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
