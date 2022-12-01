import React from "react";

// CSS
import "../../assets/CSS/Admin/Admin.css";

import { Link } from "react-router-dom";

const BantuanNav = () => {
  return (
    <>
      <div className='Admin-Nav'>
        <Link to='/admin/ListBantuan' className='Admin-Nav-Link'>
          List Bantuan
        </Link>
        <Link to='/admin/tambah' className='Admin-Nav-Link'>
          Tambah Bantuan
        </Link>
      </div>
    </>
  );
};

export default BantuanNav;
