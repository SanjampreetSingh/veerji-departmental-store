export default function RecurringProductsComponent(props) {
  return (
    <>
      <div className="py-2 text-center">
        <h3>Recurring products</h3>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col" />
          <div className="col-md-2">
            <button className="btn btn-outline-primary">Add product</button>
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <select class="form-control" name="" id="">
              <option defaultValue value="">
                Please select a product
              </option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="quantity"
              placeholder="Please enter quantity"
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger">X</button>
          </div>
        </div>
      </form>
    </>
  )
}
