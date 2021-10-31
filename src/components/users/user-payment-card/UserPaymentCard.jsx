export default function UserPaymentCard() {
  return (
    <div className="card text-center">
      <div className="card-header bg-white fw-bold">Payment</div>
      <div className="card-body">
        <h1 className="card-title">
          ₹ <b>100</b>
        </h1>
        <div className="border-top my-2" />
        <button className="btn btn-primary">Make Payment</button>
      </div>
    </div>
  )
}
