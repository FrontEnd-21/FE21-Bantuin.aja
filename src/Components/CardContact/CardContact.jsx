import React from "react";

// Image
import mitra from "../../assets/IMAGE/mitra.svg";

// CSS
import "../../assets/CSS/CardContact.css";
import Button from "react-bootstrap/Button";

// Bootstrap
import Card from "react-bootstrap/Card";

// Images
import card2 from "../../assets/IMAGE/card2.jpg";

const CardContact = () => {
  return (
    
    <Card className='Contact'>
      <span className='img-blur'></span>
      <Card.Body className='Wrap-Contact'>
        <Card.Title className='Contact-Title'>
          <h2>Ingin bergabung menjadi mitra kami</h2>
        </Card.Title>
        <Button className='C-btn'>Daftar</Button>
      </Card.Body>

      <Card.Img src={card2} className='C-img' />
    </Card>
  
  );
};

export default CardContact;
