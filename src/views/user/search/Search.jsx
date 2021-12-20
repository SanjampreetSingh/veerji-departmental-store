import SearchCover from "../../../components/users/search-cover/SearchCover"
import SearchForm from "../../../containers/user/search-form/SearchForm"

export default function Search() {
  return (
    <div className="container mb-5">
      <div className="row p-4 pb-0 align-items-center rounded-3 border shadow-lg">
        <SearchCover />
        <div className="border-top" />
        <SearchForm />
      </div>
    </div>
  )
}
