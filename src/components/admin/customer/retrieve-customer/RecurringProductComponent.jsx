export default function RecurringProductComponent(props) {
  const {
    product,
    recurringProduct,
    handleRecurringArray,
    handleRecurringObj,
  } = props
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
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => handleRecurringArray("add")}
                >
                  Add product
                </button>
              </div>
            </div>
            {recurringProduct?.map((val, idx) => (
              <div className="mb-3 row" key={idx}>
                <div className="col">
                  <select
                    className="form-control"
                    name="productId"
                    value={val?.productId}
                    onChange={e =>
                      handleRecurringObj(
                        val?.recurringIndex,
                        e?.target?.name,
                        e?.target?.value?.trim()
                      )
                    }
                  >
                    <option defaultValue value="">
                      Please select a product
                    </option>
                    {product?.map((value, index) => (
                      <option key={index} value={value?.id}>
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
                    value={val?.quantity}
                    onChange={e =>
                      handleRecurringObj(
                        val?.recurringIndex,
                        e?.target?.name,
                        e?.target?.value?.trim()
                      )
                    }
                  />
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleRecurringArray("delete", val?.recurringIndex)
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}

            <div className="row mb-3">
              <div className="col">
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </div>
              <div className="col" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
