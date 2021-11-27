import GeoLocationIcon from "../../../../assets/icons/GeoLocationIcon"
import HomeIcon from "../../../../assets/icons/HomeIcon"
import PhoneIcon from "../../../../assets/icons/PhoneIcon"

export default function AddLocality() {
  return (
    <>
      <div className="container">
        <div className="py-5 text-center">
          <GeoLocationIcon width="72" height="57" />
          <h2>Please add locality</h2>
        </div>
        <form>
          <div className="mb-3 row">
            <label htmlFor="locality" className="col-sm-12 col-form-label">
              Locality
            </label>
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-text">
                  <GeoLocationIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="locality"
                  id="locality"
                  placeholder="Please enter locality"
                />
              </div>
              <small id="customerTelephone" className="form-text text-muted">
                Please enter locality
              </small>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Please enter new locality
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
