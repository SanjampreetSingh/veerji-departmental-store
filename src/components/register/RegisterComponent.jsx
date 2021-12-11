export default function RegisterComponent(props) {
  let { locality, error, updateFormState, formState, onSubmit, submitStatus } =
    props
  return (
    // TODO: Add validations in UI
    <>
      {/* <span>{submitStatus}</span> */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Happy Singh"
          required
          onChange={e => updateFormState("name", e.target.value)}
          value={formState?.name}
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control form-control-sm"
          placeholder="name@example.com"
          required
          onChange={e => updateFormState("email", e.target.value)}
          value={formState?.email}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control form-control-sm"
          placeholder="9999999999"
          pattern="[0-9]{10}"
          maxLength="10"
          required
          onChange={e => updateFormState("phone", e.target.value)}
          value={formState?.phone}
        />
        <label htmlFor="floatingInput">Phone Number</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control form-control-sm"
          id="floatingPassword"
          placeholder="Password"
          required
          onChange={e => updateFormState("password", e.target.value)}
          value={formState?.password}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          maxLength="7"
          placeholder="79 A"
          required
          onChange={e => updateFormState("house_number", e.target.value)}
          value={formState?.house_number}
        />
        <label htmlFor="floatingInput">House Number</label>
      </div>
      <div className="form-floating mb-5">
        <select
          className="form-select"
          onChange={e => updateFormState("locality", e.target.value)}
          value={formState?.locality}
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
        type="button"
        onClick={onSubmit}
      >
        Sign up
      </button>
    </>
  )
}
