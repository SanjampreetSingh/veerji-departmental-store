import CustomerIcon from "../../../../assets/icons/CustomerIcon"
import HomeIcon from "../../../../assets/icons/HomeIcon"
import PhoneIcon from "../../../../assets/icons/PhoneIcon"

export default function EditCustomerComponent(props) {
  const { setEditButton } = props
  return (
    <div className="row">
      <div className="col">
        <div className="h-100 p-5 bg-light border rounded-3">
          <div className="py-1 text-center">
            <h3>Update customer details</h3>
          </div>
          <form>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="customerName" className="form-label">
                  Customer name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <CustomerIcon />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    placeholder="Please enter customer name"
                  />
                </div>
                <small className="form-text text-muted">
                  Please enter customer's name
                </small>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="customerTelephone" className="form-label">
                  Customer telephone
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <PhoneIcon /> &nbsp; +91
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    name="customerTelephone"
                    maxLength="10"
                    aria-describedby="customerTelephone"
                    placeholder="Please enter customer telephone"
                  />
                </div>
                <small className="form-text text-muted">
                  Please enter customer's telephone
                </small>
              </div>
              <div className="col">
                <label htmlFor="customerEmail" className="form-label">
                  Customer email
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <PhoneIcon />
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    name="customerEmail"
                    maxLength="10"
                    aria-describedby="customerEmail"
                    placeholder="Please enter customer email"
                  />
                </div>
                <small className="form-text text-muted">
                  Please enter customer's email
                </small>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="house number" className="form-label">
                  Customer house number
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
              <div className="col">
                <label htmlFor="customerLocality" className="form-label">
                  Customer locality
                </label>
                <select className="form-select" aria-label="Select Locality">
                  <option disabled defaultValue="">
                    Open to select locality
                  </option>
                  <option defaultValue="1">One</option>
                </select>
                <small className="form-text text-muted">
                  Please select customer's locality
                </small>
                <div className="invalid-feedback">
                  Please select a valid locality.
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditButton(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
