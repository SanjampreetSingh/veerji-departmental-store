import Form from "./Form"
import milkCover from "../../../assets/images/milk-cover.png"

export default function Bills(props) {
  return (
    <>
      <div class="container mb-5">
        <div class="row p-4 pb-0 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">Milk Subscriptions</h1>
            <p class="lead">
              Check daily milk delivered to your doorstep. Get pending bill of
              milk subscription. Pay your outstanding bills.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div class="col-lg-7 p-0 overflow-hidden shadow-lg d-none d-lg-block">
            <img
              class="rounded-lg-3"
              src={milkCover}
              alt="milkCover"
              width="740"
            />
          </div>
          <div className="border-top" />
          <Form />
        </div>
      </div>
    </>
  )
}
