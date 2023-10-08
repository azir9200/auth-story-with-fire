import Footer from "../Footer/Footer";


const ErrorPage = () => {
  return (
    <div className="pt-20 justify-center  text-center" >
      <p className="text-5xl text-amber-600" >Error</p>
      <p className="text-5xl text-amber-600" >404</p>
      <p className="text-5xl text-amber-600" >Page Not Found</p>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage;