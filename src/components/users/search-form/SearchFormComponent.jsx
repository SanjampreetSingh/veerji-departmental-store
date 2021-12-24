import HomeIcon from "../../../assets/icons/HomeIcon"
import PhoneIcon from "../../../assets/icons/PhoneIcon"

export default function SearchFormComponent(props) {
  const { locality } = props

  return (
    <div className="container my-2 p-3">
      <form className="row g-3 needs-validation">
        <h3>Check your pending payments</h3>
        <div className="col-md-6">
          <label htmlFor="locality" className="form-label">
            Select locality
          </label>
          <select className="form-select" aria-label="Select Locality">
            <option defaultValue>
              Open to select locality
            </option>
            {locality.map((data, index) => (
              <option key={index} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
          <div className="form-text">Please select one of the options.</div>
          <div className="invalid-feedback">
            Please select a valid locality.
          </div>
        </div>
        <div className="col-md-2">
          <label htmlFor="house number" className="form-label">
            House number
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <HomeIcon />
            </span>
            <input type="text" className="form-control" maxLength="10" />
          </div>
          <div className="form-text">Please enter house number.</div>
          <div className="invalid-feedback">
            Please provide a valid house number.
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="phone number" className="form-label">
            Phone Number
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <PhoneIcon /> &nbsp; +91
            </span>
            <input type="tel" className="form-control" maxLength="10" />
          </div>
          <div className="form-text">Please enter phone number.</div>
          <div className="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>
        <div className="d-grid col-8" />
        <div className="d-grid col-4">
          <button type="submit" className="btn btn-primary btn-block">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
