import React from "react";

// CSS
import "../assets/CSS/Footer.css";

// Image
import logo from "../assets/IMAGE/logo.svg";

//Bootstrap
import Card from "react-bootstrap/Card";

// Icons
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className='Footer'>
        <Card.Body className='Wrap-Footer'>
          <Card.Img src={logo} alt='logo' className='Footer-img'></Card.Img>

          <Card.Body className='Footer-Address'>
            <Card.Title className='Address-Title'>
              <h3>
                {" "}
                Bantuin.Aja Part of <br />
                PT.Impactbyte Teknologi Edukasi
              </h3>
            </Card.Title>
            <Card.Subtitle className='Address-Map'>
              <Card.Text className='map'>
                Jl. Kemang Raya No.10m Bangka, Mampang Prapatan,
                <br />
                Jakarta Selatan 123730m DKI Jakarta 123730, Indonesia
              </Card.Text>
            </Card.Subtitle>
          </Card.Body>

          <Card.Body className='Sosial'>
            <ul>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <BiMailSend />
              </li>
              <li>
                <FaFacebook />
              </li>
            </ul>
          </Card.Body>
        </Card.Body>
        <Card.Text className='cp'>
          @Copyright 2022 by Bantuin.aja Skilvull
        </Card.Text>
      </div>
    </>
  );
}

export default Footer;
