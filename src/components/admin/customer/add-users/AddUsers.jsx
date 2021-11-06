import CustomerIcon from "../../../../assets/icons/CustomerIcon"
import HomeIcon from "../../../../assets/icons/HomeIcon"
import PhoneIcon from "../../../../assets/icons/PhoneIcon"

export default function AddUsers() {
  return (
    <>
      <div className="container">
        <div className="py-5 text-center">
          <CustomerIcon width="72" height="57" />
          <h2>Please enter new customer</h2>
        </div>
        <form>
          <div className="mb-3 row">
            <label htmlFor="customerName" className="col-sm-12 col-form-label">
              Customer name
            </label>
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-text">
                  <CustomerIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="customerName"
                  id="customerName"
                  placeholder="Please enter customer name"
                />
              </div>
              <small id="customerTelephone" className="form-text text-muted">
                Please enter customer's name
              </small>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="customerTelephone"
              className="col-sm-12 col-form-label"
            >
              Customer telephone
            </label>
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-text">
                  <PhoneIcon /> &nbsp; +91
                </span>
                <input
                  type="tel"
                  className="form-control"
                  name="customerTelephone"
                  id="customerTelephone"
                  // @ts-ignore
                  maxLength="10"
                  aria-describedby="customerTelephone"
                  placeholder="Please enter customer telephone"
                />
              </div>
            </div>
            <small id="customerTelephone" className="form-text text-muted">
              Please enter customer's telephone
            </small>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-4">
              <label htmlFor="house number" className="form-label">
                Customer house number
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <HomeIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  // @ts-ignore
                  maxLength="10"
                />
              </div>
              <div className="form-text">Please enter house number.</div>
              <div className="invalid-feedback">
                Please provide a valid house number.
              </div>
            </div>
            <div className="col-sm-8">
              <label htmlFor="customerLocality" className="form-label">
                Customer locality
              </label>
              <select className="form-select" aria-label="Select Locality">
                <option disabled defaultValue="">
                  Open to select locality
                </option>
                <option defaultValue="1">One</option>
              </select>
              <small id="customerTelephone" className="form-text text-muted">
                Please select customer's locality
              </small>
              <div className="invalid-feedback">
                Please select a valid locality.
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Please enter new customer
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
