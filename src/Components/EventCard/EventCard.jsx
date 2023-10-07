import { useParams } from "react-router-dom";


const EventCard = () => {
  const { pic, id } = useParams();

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={pic} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{id} </h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;