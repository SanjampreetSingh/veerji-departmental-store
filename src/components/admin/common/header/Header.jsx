import { Link } from "react-router-dom"

// internal
import ShopIcon from "../../../../assets/icons/ShopIcon"
import NavMenu from "./NavMenu"
import UserDropdown from "./UserDropdown"

export default function Header() {
  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/admin/home"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <ShopIcon width="40" height="32" />
            </Link>

            <NavMenu />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}
