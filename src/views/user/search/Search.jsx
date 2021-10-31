import SearchCover from "../../../components/users/search-cover/SearchCover"
import SearchForm from "../../../components/users/search-form/SearchForm"

export default function Search() {
  return (
    <>
      <div class="container mb-5">
        <div class="row p-4 pb-0 align-items-center rounded-3 border shadow-lg">
          <SearchCover />
          <div className="border-top" />
          <SearchForm />
        </div>
      </div>
    </>
  )
}
