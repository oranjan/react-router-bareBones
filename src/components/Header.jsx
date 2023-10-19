import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      
      {<NavLink
       to="."
      //  className={({isActive})=>isActive?"active":""}
       > 
      <h1>Vans life</h1>
       </NavLink>}

      <nav>
       { <NavLink
        to="/host" 
        // className={({isActive})=>isActive?"active":""}
        >
          Host
       </NavLink>}

       { <NavLink to="/about">
        About
       </NavLink>}

        {<NavLink 
        to="/vans">
          Vans
          </NavLink>}

      </nav>
    </div>
  )
}

export default Header
