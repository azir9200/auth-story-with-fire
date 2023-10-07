

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/thV2Nvg/banner.png)' }}>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold">Welcome to our- Community and Cultural Event.</h1>
            <p className="text-3xl font-bold text-red-700 mb-5">  Cultural Celebrations - The golden  image of our Socity.</p>
            <button className="btn btn-warning  text-blue-700 text-xl font-semibold ">Explore More</button>
            <div className="flex justify-between " >
              <div>
                <p className="text-pink-700 font-bold text-xl w-2/5"  >  Help your Community to Join our events</p>
              </div>
              <div className="flex justify-end" >
                <p className="text-pink-700 font-bold text-xl w-2/5" >Tradition, Culture, History are entering in your life. <br /> Do not miss it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>https://i.ibb.co/dDTHYcF/banner2.png</p> */}
    </div>
  );
};

export default Banner;