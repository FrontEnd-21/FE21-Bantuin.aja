import React from "react";

// CSS
import "../../assets/CSS/Admin/Admin.css";

import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <div className='Admin-Nav'>
        <Link to='/admin/list' className='Admin-Nav-Link'>
          List User
        </Link>
      </div>
    </>
  );
};

export default UserNav;
