

const AllEvents = ({ event }) => {
  const { pic, title, event_time } = event || {}


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={pic} alt="event" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title bg-gradient-to-r from-green-500 to-red-500 rounded-md ">{title} </h2>
        <p className=" rounded bg-gradient-to-r from-yellow-800 to-blue-500" >{event_time}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;