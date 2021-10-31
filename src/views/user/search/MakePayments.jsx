import SearchCover from "../../../components/users/search-cover/SearchCover"
import UserCard from "../../../components/users/user-card/UserCard"
import UserPaymentCard from "../../../components/users/user-payment-card/UserPaymentCard"

export default function MakePayments(params) {
  return (
    <>
      <div className="container mb-5">
        <div className="row py-4 pb-0 align-items-center rounded-3 border shadow-lg">
          <SearchCover />
          <div className="border-top row" />
          <div className="my-3 row">
            <div className="col-md-7">
              <UserCard />
            </div>
            <div className="col-md-5">
              <UserPaymentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
