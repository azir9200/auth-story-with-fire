import { NavLink } from "react-router-dom";


const AllEvents = ({ event }) => {
  const { id, pic, title, event_time } = event || {}


  return (
    <div className="card  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={pic} alt="event" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title bg-green-300 p-4 border rounded-md ">{title} </h2>
        <p className=" rounded bg-blue-500" >{event_time}</p>
        <div className="card-actions">
          <button className="btn btn-primary"><NavLink to={`'/events/${id}`} >View Details</NavLink> </button>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;