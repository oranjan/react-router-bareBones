import { NavLink } from "react-router-dom";

function HostVans() {
    return (
      <div className="host-navbar"> 
        <h1>your listed vans </h1>
      <nav className="column">
        {<NavLink to="1">Van 1</NavLink>}

        {<NavLink to="2">Van 2</NavLink>}

        {<NavLink to="3">Van 3</NavLink>}
      </nav>
      </div>
    )
  }
  
  export default HostVans
  