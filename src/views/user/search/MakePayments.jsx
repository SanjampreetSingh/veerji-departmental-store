import SearchCover from "../../../components/users/search-cover/SearchCover"

export default function MakePayments(params) {
  return (
    <>
      <div class="container mb-5">
        <div class="row p-4 pb-0 align-items-center rounded-3 border shadow-lg">
          <SearchCover />
          <div className="border-top" />
          Name: Name
          <br />
          Phone number: Phone number
          <br />
          House number: House number
          <br />
          Amount: Amount
          <br />
        </div>
      </div>
    </>
  )
}
