import { Link } from "react-router-dom"

import CartIcon from "../../../assets/icons/CartIcon"

export default function Heroes(props) {
  const { isAuthenticated } = props

  return (
    <div className="text-center">
      <div className="fs-2 d-block mx-auto mb-4">
        <CartIcon width="72" height="57" />
      </div>
      <h1 className="display-5 fw-bold">Veerji Departmental Store</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to our Online initiative, where you can pay your milk
          subscription online and order from Veerji Food Court too.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {!isAuthenticated ? (
            <>
              {" "}
              <>
                <Link
                  className="btn  btn-outline-secondary btn-lg px-4 gap-3"
                  to="/register"
                >
                  Register
                </Link>
                <Link className="btn btn-primary btn-lg px-4" to="/login">
                  Login
                </Link>
              </>
            </>
          ) : (
            <>
              <Link
                className="btn btn-primary btn-lg px-4 gap-3"
                to="/user/search"
              >
                Milk Subscriptions
              </Link>
              {/* <Link className="btn btn-outline-secondary btn-lg px-4" to="/">
              Food Court
            </Link> */}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
