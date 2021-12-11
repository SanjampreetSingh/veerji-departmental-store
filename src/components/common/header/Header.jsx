import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import CartIcon from "../../../assets/icons/CartIcon"

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link to="/" class="navbar-brand d-lg-none">
          <CartIcon />
        </Link>
        <Link to="/" class="navbar-brand d-none d-md-block">
          Veerji Departmental Store
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div class="d-flex">
            <Link class="btn btn-secondary" to="/register">
              Register
            </Link>
            <Link class="btn btn-primary ms-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
