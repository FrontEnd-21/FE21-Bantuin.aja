import React from "react";

// CSS
import "../../assets/CSS/CardTahapan.css";

// Bootstrap
import Card from "react-bootstrap/Card";

// Icons
import { FaSearch, FaFilePdf, FaRegClock, FaCheck } from "react-icons/fa";

const CardTahapan = () => {
  return (
    <>
      <Card className='Tahapan-Card'>
        <Card.Body className='Wrap-Body'>
          <Card.Title className='h1'>Tahapan Mendapatkan Bantuan</Card.Title>
        </Card.Body>

        <Card.Body className='Wrap-Step'>
          <Card.Text>
            <Card.Text className='num'>1</Card.Text>
            <FaSearch className='span' />
            <Card.Text className='txt'>
              Memilih Program
              <br />
              Yang Ada
            </Card.Text>
          </Card.Text>

          <Card.Text>
            <Card.Text className='num'>2</Card.Text>
            <FaFilePdf className='span' />
            <Card.Text className='txt'>
              Melengkapi Dokumen
              <br />
              Persyaratan
            </Card.Text>
          </Card.Text>

          <Card.Text>
            <Card.Text className='num'>3</Card.Text>
            <FaRegClock className='span' />
            <Card.Text className='txt'>
              Menunggu
              <br />
              Pengumuman
            </Card.Text>
          </Card.Text>

          <Card.Text>
            <Card.Text className='num'>4</Card.Text>
            <FaCheck className='span' />
            <Card.Text className='txt'>
              Bantuan Siap Dikirim
              <br />
              Ke Tempat Atau Rekening Anda
            </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTahapan;
