import { Link } from "react-router-dom";



const Blogs = () => {
  return (
    <div>

      <div>

      </div>

      <h2 className="text-2xl my-12 text-center mx-12 md:mx-18 ">An event is something which happens or takes place. An event is brief, possibly extremely brief. Contrast with a process, which takes time. Alternate meaning: an important activity, an item in a program, or the program as a whole.</h2>

      <div className="my-10 mx-12" >
        Impossible and Sure Events
        If the probability of occurrence of an event is 0, such an event is called an impossible event and if the probability of occurrence of an event is 1, it is called a sure event. In other words, the empty set ϕ is an impossible event and the sample space S is a sure event.
        <br />

        Simple Events
        Any event consisting of a single point of the sample space is known as a simple event in probability. For example, if S =  and E = then E is a simple event.

        <br />
        Compound Events
        Contrary to the simple event, if any event consists of more than one single point of the sample space then such an event is called a compound event. Considering the same example again, if E1 and E2 represent two compound events.

      </div>
      <p className="text-center mt-4"> Go to your main Page<Link className="text-blue-700 font-bold" to='/'>Home</Link></p>

    </div>

  );
};

export default Blogs;