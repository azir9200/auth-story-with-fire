import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer mt-8 p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">  <Link to='/'>Home</Link>  </header>


        <a className="link link-hover"><Link to='/blogs'>About us</Link>  </a>
        <a className="link link-hover">  <Link to='/contact'>Contact</Link> </a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;