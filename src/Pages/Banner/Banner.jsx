

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sj29ms2/banner1.png)' }}>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Welcome to our- Community and Cultural Event.</h1>
            <p className="mb-5">  Cultural Celebrations - The golden  image of our Socity.</p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;