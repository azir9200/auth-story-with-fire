import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllEvents from "../../Components/AllEvents/AllEvents";


const Home = () => {
  const events = useLoaderData()
  console.log(events);

  return (
    <div>
      <Banner></Banner>
      <div className="" >
        <h2 className="mt-12 mx-14 text-4xl  text-center bg-[#D5FFD0] h-14 rounded " >Explore our all events and take a tour with your best interests.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 " >
          {
            events.map(event => <AllEvents key={event.id} event={event} > </AllEvents>)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;