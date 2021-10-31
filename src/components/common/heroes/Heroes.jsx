import { useHistory } from "react-router-dom"
import ShopIcon from "../../../assets/icons/ShopIcon"

export default function Heroes() {
  const history = useHistory()

  return (
    <div class="text-center">
      <div class="fs-2 d-block mx-auto mb-4">
        <ShopIcon />
      </div>
      <h1 class="display-5 fw-bold">Veerji Departmental Store</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Welcome to our Online initiative, where you can pay your milk
          subscription online and order from Veerji Food Court too.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
            onClick={() => history.push("/user/search")}
          >
            Milk Subscriptions
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            onClick={() => history.push("/")}
          >
            Food Court
          </button>
        </div>
      </div>
    </div>
  )
}
