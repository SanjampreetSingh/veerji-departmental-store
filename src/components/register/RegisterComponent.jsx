export default function RegisterComponent(props) {
  let { locality, error, handleChange, handleSubmit, submitError } = props
  return (
    // TODO: Add validations in UI
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Happy Singh"
          autoComplete="name"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          autoComplete="email"
          className="form-control form-control-sm"
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control form-control-sm"
          placeholder="9999999999"
          autoComplete="tel-national"
          pattern="[0-9]{10}"
          maxLength="10"
          name="phone"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Phone Number</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          autoComplete="new-password"
          className="form-control form-control-sm"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          maxLength="7"
          autoComplete="off"
          placeholder="79 A"
          name="house_number"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">House Number</label>
      </div>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          name="locality"
          aria-labelledby="locality"
          autoComplete="off"
          onChange={handleChange}
        >
          <option value="" defaultValue>
            Please select locality
          </option>
          {locality?.map((val, idx) => (
            <option key={idx} value={val?.id}>
              {val?.name}
            </option>
          ))}
        </select>
        <label htmlFor="floatingInput">Locality</label>
      </div>

      <button
        className="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={handleSubmit}
      >
        Sign up
      </button>
    </>
  )
}
