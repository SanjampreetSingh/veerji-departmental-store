import GeoLocationIcon from "../../../../assets/icons/GeoLocationIcon"

export default function FormLocalityComponent(props) {
  const {
    updateBool,
    response,
    error,
    handleSubmit,
    handleChange,
    submitError,
    formState,
  } = props

  return (
    <>
      <div className="container">
        <div className="py-5 text-center">
          <GeoLocationIcon width="72" height="57" />
          {updateBool ? <h2>Update locality</h2> : <h2>Add locality</h2>}
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
                  name="name"
                  placeholder="Please enter locality"
                  value={formState?.name}
                  onChange={handleChange}
                />
              </div>
              <small className="form-text text-muted">
                Please enter locality
              </small>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
