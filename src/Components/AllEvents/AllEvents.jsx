import { NavLink } from "react-router-dom";


const AllEvents = ({ event }) => {
  const { id, pic, price, title, event_time } = event || {}


  return (
    <div className="card  shadow-xl">
      <figure className="">
        <img src={pic} alt="event" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title bg-green-300 px-4 border rounded-md "> Event Name: {title} </h2>
        <h2 className="card-title bg-green-300 px-4 border rounded-md "> Price: {price} </h2>

        <p className="text-2xl font-medium rounded bg-blue-300" >Vanue Date:  {event_time}</p>
        <div className="card-actions">
          <button className="btn btn-primary text-xl"><NavLink to={`/events/${id}`} >View Details</NavLink> </button>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;