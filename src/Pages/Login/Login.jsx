import { Link } from "react-router-dom";



const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }

  return (
    <div>

      <div>
        <h2 className="text-center  text-3xl my-10 ">Please Login</h2>
        <form onSubmit={handleLogin} className="mx-auto md:w-3/4 lg:w-1/2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Do not have an account <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
      </div>

    </div>
  );
};

export default Login;