export default function LoginComponent(props) {
  // TODO: handle error message
  const { handleChange, handleSubmit, error, submitError } = props
  return (
    <>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="name@example.com"
          autoFocus
          autoComplete="email"
          onChange={handleChange}
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          autoComplete="password"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button
        className="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </button>
    </>
  )
}
