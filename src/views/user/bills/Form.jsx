import HomeIcon from "../../../assets/icons/HomeIcon"
import PhoneIcon from "../../../assets/icons/PhoneIcon"

export default function Form(props) {
  return (
    <div className="container my-2 p-3">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="locality" class="form-label">
            Locality
          </label>
          <select class="form-select" aria-label="Select Locality">
            <option selected disabled value="">
              Open this select menu
            </option>
            <option value="1">One</option>
          </select>
          <div class="form-text">Please select one of the options.</div>
          <div class="invalid-feedback">Please select a valid locality.</div>
        </div>
        <div class="col-md-2">
          <label for="house number" class="form-label">
            House Number
          </label>
          <div class="input-group">
            <span class="input-group-text">
              <HomeIcon />
            </span>
            <input type="number" class="form-control" min="0" max="9999" />
          </div>
          <div class="form-text">Please enter house number.</div>
          <div class="invalid-feedback">
            Please provide a valid house number.
          </div>
        </div>
        <div class="col-md-4">
          <label for="phone number" class="form-label">
            Phone Number
          </label>
          <div class="input-group">
            <span class="input-group-text">
              <PhoneIcon /> &nbsp; +91
            </span>
            <input type="tel" class="form-control" maxLength="10" />
          </div>
          <div class="form-text">Please enter phone number.</div>
          <div class="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>
        <div class="d-grid col-4 mx-auto">
          <button type="submit" class="btn btn-primary btn-block">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
