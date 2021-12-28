import { Link } from "react-router-dom"

import CustomerIcon from "../../../../assets/icons/CustomerIcon"
import FeatherHomeIcon from "../../../../assets/icons/FeatherHomeIcon"
import GeoLocationIcon from "../../../../assets/icons/GeoLocationIcon"
import ReceiptIcon from "../../../../assets/icons/ReceiptIcon"

export default function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/admin/dashboard"
            >
              <FeatherHomeIcon />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/customer">
              <CustomerIcon />
              Customer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/sale">
              <ReceiptIcon />
              Sales
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/locality">
              <GeoLocationIcon />
              Locality
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
