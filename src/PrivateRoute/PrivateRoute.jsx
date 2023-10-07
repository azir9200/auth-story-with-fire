import { useContext } from "react";

const PrivateRoute = () => {
  const { user } = useContext(Auth)
  return (
    <div>

    </div>
  );
};

export default PrivateRoute;