import { Link } from "react-router-dom"

import CustomerIcon from "../../../../assets/icons/CustomerIcon"
import FeatherHomeIcon from "../../../../assets/icons/FeatherHomeIcon"
import GeoLocationIcon from "../../../../assets/icons/GeoLocationIcon"

export default function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
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
          <li className="nav-item">
            <Link className="nav-link" to="/admin/locality">
              <GeoLocationIcon />
              Locality
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
