import { Link } from "react-router-dom"

export default function NavMenu(params) {
  return (
    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
      <li>
        <Link to="#" className="nav-link text-secondary">
          <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
          Orders
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
          Products
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
          Customers
        </Link>
      </li>
    </ul>
  )
}
