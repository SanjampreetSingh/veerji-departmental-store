import { Link } from "react-router-dom"
import ShopIcon from "../../../assets/icons/ShopIcon"

export default function Footer() {
  return (
    <div class="container position-relative bottom-0 end-0 start-0">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0">
          <a
            class="text-muted"
            href="https://g.page/veerji-departmental-store?share"
            target="_blank"
            rel="noreferrer"
          >
            &copy; 2021 Veerji Departmental Store, Ldh
          </a>
        </p>

        <Link
          to="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <ShopIcon />
        </Link>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/user/search" class="nav-link px-2 text-muted">
              Milk Subscriptions
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}