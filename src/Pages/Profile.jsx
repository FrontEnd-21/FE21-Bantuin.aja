import React, { useState } from "react";
import "../assets/CSS/Profile.css";
import fto from "../assets/IMAGE/123.png";
import ds from "../assets/IMAGE/description.svg";
import dc from "../assets/IMAGE/check_circle_outline.svg";
import lock from "../assets/IMAGE/lock.svg";
import DataPribadi from "../Components/CardProfile/DataPribadi";
import KontakPribadi from "../Components/CardProfile/KontakPribadi";
import LengkapiDokumen from "../Components/CardProfile/LengkapiDokumen";
import { Link } from "react-router-dom";

function Profile() {
  const [showContent, setShowContent] = useState(true)
  const [show, setShow] = useState(false);
  const [data, setData] = useState('ikan')
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  console.log(showContent);

  function toggle1() {
    setShow(true);
    setShow1(false);
  }
  function toggle2() {
    setShow1(true);
    setShow(false);
  }
  
  return (
    <div className='profile'>
      <div className='left'>
        <div className='card-foto'>
          <img src={fto} alt='' />
          <p>
            Soe hard to <br />
            30 Tahun
          </p>
        </div>
        <div className='menu-samping'>
          <div className='item'>
            <img src={ds} alt='' id='color' />
            <a href=''>Lengkapi Dokumen</a>
          </div> 
          <Link to={"/status_Bantuan"} className='item'>
            <img src={dc} alt='' />
            <a href=''>Status Bantuan</a>
          </Link>
          <div className='item'>
            <img src={lock} alt='' />
            <a href=''>Reset Password</a>
          </div>
        </div>
      </div>
      
      
      <div className='right r-content'>
      
      { showContent && 
      <>
          <div className='head'>
            <h1>Lihat/Edit Profil</h1>
          </div>
          
            <div className='content'>
              <div onClick={toggle1} className={show ? "aktif" : ""}>
                <p>Kontak Pribadi</p>
              </div>
              <div onClick={toggle2} className={show1 ? "aktif" : ""}>
                <p>Data Pribadi</p>
              </div>
            </div>
      
          <div className='isi-content'>
            {show1 && <DataPribadi />}
            {show && <KontakPribadi />}
          </div>
          </>
      }
      </div>

    </div>
  );
}

export default Profile;
