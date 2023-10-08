import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventCard = () => {

  const [event, setEvent] = useState({});
  const { id } = useParams()
  const events = useLoaderData();

  useEffect(() => {
    const findEvents = events?.find((event) => event.id === id);
    setEvent(findEvents);
  }, [id, events]);
  console.log(event);

  const { title } = event || {}

  return (
    <div className="card card-side bg-green-300 shadow-xl">
      {/* <figure><img src={pic} alt="Movie" /></figure> */}
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p> </p>
        <p>Click the button to Book this event.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;