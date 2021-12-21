export default function RecurringProductComponent(props) {
  const { product } = props
  return (
    <div className="row align-items-md-stretch">
      <div className="col">
        <div className="h-100 p-5 bg-light border rounded-3">
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
                <select className="form-control" name="" id="">
                  <option defaultValue value="">
                    Please select a product
                  </option>
                  {product?.map((value, index) => (
                    <option key={index} value={value?.name}>
                      {value?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Please enter quantity"
                  min={0}
                />
              </div>
              <div className="col-md-1">
                <button className="btn btn-danger">X</button>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <button className="btn btn-primary">Update</button>
              </div>
              <div className="col" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
