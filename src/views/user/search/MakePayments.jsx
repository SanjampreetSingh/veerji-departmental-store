import SearchCover from "../../../components/users/search-cover/SearchCover"
import UserCard from "../../../components/users/user-card/UserCard"
import UserPaymentCard from "../../../components/users/user-payment-card/UserPaymentCard"

export default function MakePayments(params) {
  return (
    <>
      <div className="container mb-5">
        <div className="row p-4 pb-0 align-items-center rounded-3 border shadow-lg">
          <SearchCover />
          <div className="border-top row" />
          <div className="my-3 d-flex gap-4">
            <div className="col-lg-6">
              <UserCard />
            </div>
            <div className="col-lg-4">
              <UserPaymentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
