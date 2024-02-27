import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function DropdownMenu({isLoggedIn, setIsLoggedIn}) {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const nav = [
      {name: "Login", path: "/login"}
    ];
    const loggedInNav = [
      {name:"Orders", path:"/myorders"},
    ];
    setNavLinks(isLoggedIn ? loggedInNav : nav);
  }, []);

  const handleLogOut = async () => {
    try {
      await axios.post('/api/auth/logout');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
          
          </a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              
              { isLoggedIn ?
                <div>
                  <li>
                    <button class="dropdown-item" type="button" onClick={handleLogOut}>
                      Logout
                          </button>
                  </li>
                  <Link to={"/myorders"}>
                    <button class="dropdown-item" type="button">
                      Orders
                    </button>
                  </Link>
                  <Link to={"/me"}>
                    <button class="dropdown-item" type="button">
                      My Profile
                    </button>
                  </Link>
                </div>
                :
                navLinks.map((d, i) => (
                  <li key={i}>
                    <Link to={d.path}>
                      <button class="dropdown-item" type="button">
                        {d.name}
                      </button>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;