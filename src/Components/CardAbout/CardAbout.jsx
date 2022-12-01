import React from "react";

// CSS
import "../../assets/CSS/CardAbout.css";

// Bootstrap
import Card from "react-bootstrap/Card";

// Icons
import { FaQuestion } from "react-icons/fa";

const CardAbout = () => {
  return (
    <>
      <Card className='Blue-body'>
        <Card.Body className='Wrap-context'>
          <Card.Title className='h2'>
            <h2>Tentang Bantuin.aja</h2>
          </Card.Title>
          <Card.Subtitle className='h3'>
            <h3>Apa sih Bantuin.aja itu</h3>
            <FaQuestion className='h3-icons' />
          </Card.Subtitle>

          <Card.Text className='context'>
            Bantuin Aja adalah platform yang memudahkan pengguna dalam mencari
            informasi mengenai bantuan dari berbagai jenis bantuan yang ada
            serta memudahkan mitra untuk melakukan validasi serta verifikasi
            data.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardAbout;
