import { useHistory } from "react-router-dom"
import ShopIcon from "../../../assets/icons/ShopIcon"

export default function Heroes() {
  const history = useHistory()

  return (
    <div className="text-center">
      <div className="fs-2 d-block mx-auto mb-4">
        <ShopIcon />
      </div>
      <h1 className="display-5 fw-bold">Veerji Departmental Store</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to our Online initiative, where you can pay your milk
          subscription online and order from Veerji Food Court too.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={() => history.push("/user/search")}
          >
            Milk Subscriptions
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => history.push("/")}
          >
            Food Court
          </button>
        </div>
      </div>
    </div>
  )
}
