import CartIcon from "../../assets/icons/CartIcon"

export default function Form() {
  return (
    <form>
      <div className="mb-4">
        <CartIcon width="72" height="57" />
      </div>
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="floatingInput"
          placeholder="Happy Singh"
          required
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control form-control-sm"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control form-control-sm"
          id="floatingInput"
          placeholder="9999999999"
          pattern="[0-9]{10}"
          maxlength="10"
          required
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
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="floatingInput"
          maxlength="7"
          placeholder="79 A"
          required
        />
        <label htmlFor="floatingInput">House Number</label>
      </div>
      <div className="form-floating mb-3">
        <select className="form-control" name="" id="">
          <option></option>
          <option></option>
          <option></option>
        </select>
        <label htmlFor="floatingInput">Locality</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign up
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2019–2021</p>
    </form>
  )
}
