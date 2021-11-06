import { Link } from "react-router-dom"
// internal component
import CustomerIcon from "../../../../assets/icons/CustomerIcon"
import FeatherHomeIcon from "../../../../assets/icons/FeatherHomeIcon"

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/admin/home"
            >
              <FeatherHomeIcon />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/customer">
              <CustomerIcon />
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
