import UserPaymentModal from "./UserPaymentModal"

export default function UserPaymentCard() {
  return (
    <>
      <div className="card text-center">
        <h4 className="card-header bg-white fw-bold">Payment</h4>
        <div className="card-body">
          <h1 className="card-title my-4">
            ₹ <b>100</b>
          </h1>
          <div className="border-top my-1" />
          <button
            className="btn btn-primary my-1"
            data-bs-toggle="modal"
            data-bs-target="#paymentModal"
          >
            Make Payment
          </button>
        </div>
      </div>
      <UserPaymentModal />
    </>
  )
}
