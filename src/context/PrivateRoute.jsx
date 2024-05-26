import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to={"/login"} /> : <RouteComponent {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
