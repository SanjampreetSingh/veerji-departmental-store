import { Link } from "react-router-dom"
import CartIcon from "../../../assets/icons/CartIcon"

export default function Footer() {
  return (
    <div className="container position-relative bottom-0 end-0 start-0">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0">
          <a
            className="text-muted"
            href="https://g.page/veerji-departmental-store?share"
            target="_blank"
            rel="noreferrer"
          >
            &copy; {new Date().getFullYear()} Veerji Departmental Store, Ldh
          </a>
        </p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <CartIcon />
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}
