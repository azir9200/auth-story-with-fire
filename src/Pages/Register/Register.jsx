import { Link } from "react-router-dom";


const Register = () => {

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }

  return (
    <div>

      <div>
        <h2 className=" text-center text-3xl my-10 ">Please Register here..</h2>
        <form onSubmit={handleRegister} className=" mx-auto md:w-3/4 lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name..." className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered" placeholder="Email" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot your password ?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">Already have  have an account <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
      </div>

    </div>
  );
};

export default Register;