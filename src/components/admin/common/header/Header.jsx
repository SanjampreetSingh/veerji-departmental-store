import { Link } from "react-router-dom"
// internal
import ShopIcon from "../../../../assets/icons/ShopIcon"

export default function Header() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
          to="/admin/home"
        >
          <span className="d-lg-none">
            <ShopIcon height="19" width="19" />
          </span>
          <span className="d-none d-md-block"> Veerji Departmental Store</span>
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search customers by name, contact and address"
          aria-label="Search"
          spellCheck="false"
          data-ms-editor="true"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link px-3" to="/">
              Sign out
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
