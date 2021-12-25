import { Link } from "react-router-dom"

import CartIcon from "../../../../assets/icons/CartIcon"

export default function Header() {
  let uri = window.location.href.split("/").pop()

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
          to="/admin/home"
        >
          <span className="d-lg-none">
            <CartIcon height="19" width="19" />
          </span>
          <span className="d-none d-md-block">Veerji Departmental Store</span>
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
        {uri === "customer" ? (
          <input
            className="form-control form-control w-100"
            type="text"
            placeholder="Search customers by name, house number and contact"
            aria-label="Search"
            spellCheck="false"
            data-ms-editor="true"
          />
        ) : null}

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link
              className="nav-link px-2 me-2 border border-white rounded"
              to="/logout"
            >
              Sign out
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
