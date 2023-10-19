import { NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();
  //realtive is ny feult route we can mpdify it to path
  return (
    <div>
      <NavLink to=".." relative="path">
        👈🏼back to all vans{" "}
      </NavLink>

      <h1>van no: {id}</h1>
      <h2>price inr 800/day</h2>
      <h3>really cool van </h3>
      <nav>
        <NavLink to="." end>Details</NavLink>
        <NavLink to="photos">photos</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostVanDetails;
