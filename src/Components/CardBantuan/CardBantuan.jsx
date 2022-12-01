import React from "react";

// Image
import bantuan from "../../assets/IMAGE/bantuan2.jpg";
import NUS from "../../assets/IMAGE/NUS.svg";

// CSS
import "../../assets/CSS/CardBantuan.css";

// Bootstrap
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";

// Icons
import { FaChevronLeft } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineTimelapse } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Link } from "react-router-dom";

const CardBantuan = () => {
  return (
    <>
      <Card className='D-Bantuan'>
        <Card.Body className='Wrap-DBantuan'>
          <Breadcrumb>
            <Breadcrumb.Item href='/Bantuan'>
              <FaChevronLeft />
              Kembali
            </Breadcrumb.Item>
          </Breadcrumb>
          <Card.Title className='DBantuan-Title'>
            Bantuan Pedidikan Jenjang S1
          </Card.Title>
          <Card.Subtitle className='DBantuan-Sub'>Pendidikan</Card.Subtitle>
          <Card.Text className='DBantuan-Time'>
            <MdOutlineTimelapse />
            12 Desember 2022
          </Card.Text>
          <Link href='/Login'>
            <Button className='btn'>Apply</Button>
          </Link>

          <Card.Img variant='right' src={bantuan} className='bimg' />
          <Card.Text className='btxt'>
            Offered BY
            <Card.Img variant='right' src={NUS} className='bob' />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='Description'>
        <Card.Body className='Wrap-Des'>
          <Card.Title className='Des-Title'>
            <strong>Deskripsi Bantuan</strong>
          </Card.Title>
          <Card.Text className='Des-Sub'>
            Bantuan pendidikan jenjang S1 Merupakan program bantuan yang
            diadakan oleh NUS University adapun bantuan yang diberikan berupa :
            <ul>
              <li>SPP dan Uang Gedung Gratis Selama Perkuliahan</li>
              <li>Bantuan Uang Saku Rp 4.000.000/Semester</li>
              <li>Bantuan Dana Buku Sebesar Rp 500.000</li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Body className='body2'>
          <Card.Title className='Des-Title'>
            <strong>Persyaratan bantuan</strong>
          </Card.Title>
          <Card.Text className='Des-Sub'>
            <ol>
              <li>KTP</li>
              <li>Rapor SMA (Sudah Legalitas) </li>
              <li>TOEFL</li>
              <li>Surat Keterangan Sehat</li>
              <li>SKTM</li>
            </ol>
          </Card.Text>

          <Card.Text className='Des-Sub'>
            <strong>*Point 1-4 Dijadikan satu File dan berbentuk ZIP</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='Stages'>
        <Card.Title className='Des-Title'>
          <strong>Tahapan Bantuan</strong>
        </Card.Title>
        <Card.Body>
          <FaRegFileAlt className='icons' />
          <Card.Text className='Itext'>
            Melengkapi <br />
            Dokumen
          </Card.Text>
          <Card.Text className='Line'></Card.Text>
          <MdOutlineDocumentScanner className='icons' />
          <Card.Text className='Itext'>
            Verifikasi <br />
            Dokumen
          </Card.Text>
          <Card.Text className='Line'></Card.Text>
          <FaRegCheckCircle className='icons' />
          <Card.Text className='Itext'>
            Pengajuan <br />
            Berhasil
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBantuan;
