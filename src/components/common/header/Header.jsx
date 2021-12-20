import { Link } from "react-router-dom"

import CartIcon from "../../../assets/icons/CartIcon"

export default function Header(props) {
  const { isAuthenticated } = props

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand d-lg-none">
          <CartIcon />
        </Link>
        <Link to="/" className="navbar-brand d-none d-md-block">
          Veerji Departmental Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div className="d-flex">
            {!isAuthenticated ? (
              <>
                <Link className="btn btn-secondary" to="/register">
                  Register
                </Link>
                <Link className="btn btn-primary ms-2" to="/login">
                  Login
                </Link>
              </>
            ) : (
              <Link className="btn btn-primary ms-2" to="/logout">
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
