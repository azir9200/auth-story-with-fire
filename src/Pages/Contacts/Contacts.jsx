import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <div className="text-center items-center" >
        <h2 className="text-4xl">You can get more information using </h2>

        <hr className="text-blue-600" />

        <div className='p-4 mb-6'>
          <h2 className="text-6xl mb-4">Find Us on</h2>
          <a className='p-4 flex text-4xl justify-center text-blue-950 items-center border rounded-t-lg' href="">
            <FaFacebook></FaFacebook>
            <span>Facebook</span>
          </a>
          <a className='p-4 flex text-4xl justify-center text-blue-500 items-center border-x' href="">
            <FaTwitter></FaTwitter>
            <span>Twitter</span>
          </a>
          <a className='p-4 flex text-4xl justify-center text-pink-700 items-center border rounded-b-lg' href="">
            <FaInstagram className="bg-blue-300" ></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <p className="text-center mt-4">Do not have an account <Link className="text-blue-700 font-bold" to="/register">Connect with..</Link></p>
    </div>
  );
};

export default Contacts;