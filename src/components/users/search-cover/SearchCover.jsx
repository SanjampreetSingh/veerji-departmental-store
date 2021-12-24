import milkCover from "../../../assets/images/milk-cover.png"

export default function SearchCover() {
  return (
    <>
      <div className="col-lg-5 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Milk Subscriptions</h1>
        <p className="lead">
          Check daily milk delivered to your doorstep. Get the pending bill of
          your milk subscription. Pay your outstanding payments.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
      </div>
      <div className="col-lg-7 p-0 mb-3 overflow-hidden shadow-lg d-none d-lg-block">
        <img
          className="rounded-lg-3"
          src={milkCover}
          alt="milkCover"
          width="740"
        />
      </div>
    </>
  )
}
