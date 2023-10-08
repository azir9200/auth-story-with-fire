import { useParams } from "react-router-dom";


const EventCard = ({ event }) => {

  const { title, pic } = useParams();
  console.log(title);

  return (
    <div className="card card-side bg-green-300 shadow-xl">
      <figure><img src={pic} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p>Click the button to Book this event.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;