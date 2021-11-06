export default function UserList() {
  return (
    <>
      <div className="row">
        <div className="col">
          <select className="form-select" aria-label="Sort by">
            <option defaultValue disabled>
              Sort by
            </option>
            <option value="1">A-Z</option>
            <option value="2">Z-A</option>
            <option value="3">Contact</option>
            <option value="4">Address</option>
            <option value="5">Payment</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" aria-label="Address">
            <option defaultValue disabled>
              Location
            </option>
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
              <td scope="row">User 1</td>
              <td>
                <a href="tel:+91-12345-12345" target="_blank">
                  +91-12345-12345
                </a>
              </td>
              <td>
                <a
                  href="http://maps.google.com/?q=Some Address to visit"
                  target="_blank"
                >
                  Some Address to visit
                </a>
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
