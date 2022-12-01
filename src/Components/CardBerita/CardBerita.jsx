import React from "react";

// CSS
import "../../assets/CSS/CardBerita.css";

// Bootstrap
import Card from "react-bootstrap/Card";

// Icons
import { SlCalender } from "react-icons/sl";
import { AiOutlineLink } from "react-icons/ai";

// Images
import card1 from "../../assets/IMAGE/card1.jpg";

const CardBerita = () => {
  return (
    <>
      <Card>
        <img src={card1} alt='bg-card' className='Outside-box' />
        {/* <Card.Img src={card1} alt='bg-card' className='Outside-box' /> */}
        <Card.Body className='White-box'>
          <Card.Title className='News-Title'>
            <h2>Information</h2>
          </Card.Title>
          <Card.Text className='Context'>
            {" "}
            Sosialisasi bantuan melalui website bantuin.aja serta pengenalan
            mitra baru pada program bantuan pada tahun 2022 melalui platform
            zoom.
          </Card.Text>
          <br />

          <Card.Text className='Platfrom'>
            <SlCalender />
            <span>Jumat, 30 Desember 2022</span>
          </Card.Text>
          <Card.Text className='Platfrom'>
            <AiOutlineLink />
            <span>https://bit.ly/BantuinAja</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBerita;
