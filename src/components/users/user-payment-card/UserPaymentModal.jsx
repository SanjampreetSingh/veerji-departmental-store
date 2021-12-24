export default function UserPaymentModal() {
  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="paymentModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title bg-white fw-bold">Payment</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
