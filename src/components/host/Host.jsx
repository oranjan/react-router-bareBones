import { NavLink,Outlet } from "react-router-dom"

function Host() {
// assuming we logged in as a van owner  the ui woul be like this for us

  return (
    <div>
      <nav className="host-navbar"> 
        <NavLink to="." end> Dashboard   </NavLink >
        <NavLink to="income"> Income  </NavLink >
        <NavLink to="vans"> Vans  </NavLink >
        <NavLink to="reviews"> Reveiws   </NavLink >
      </nav>

      {<Outlet/>}
    </div>
  )
}

export default Host
