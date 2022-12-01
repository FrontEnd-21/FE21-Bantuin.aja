import React from "react";

// CSS
import "../assets/CSS/StatusBantuan.css";

// Image
import nus from "../assets/IMAGE/NUS.svg";

// Bootstrap
import Card from "react-bootstrap/Card";

// Router
import { Link } from "react-router-dom";

// Icons
import { FaChevronLeft } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

function StatusBantuan() {
  return (
    <Card className='SB-Container'>
      <Link to='/' className=' i-SB'>
        <FaChevronLeft />
        Kembali
      </Link>

      <Card className='SB-Box1'>
        <Card.Body className='SB-Box-Wrap'>
          <Card.Img src={nus} alt='Mitra-logo' />
          <Card.Title className='Box1-Title'>Bantuan Pendidikan </Card.Title>
        </Card.Body>
        <Card.Body className='Wrap-Text'>
          <Card.Text ClassName='Box1-Context'>
            Bantuan Pendidikan <br />
            Jenjang S1
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='SB-Box2'>
        <Card.Body className='Box2-Heading'>
          <Card.Img src={nus} alt='' />
          <Card.Title className='Box2-Title'>
            Bantuan Pendidikan <br />
            Jenjang S1
          </Card.Title>
        </Card.Body>

        <Card.Body className='Box3-Status'>
          <Card.Text>
            <FaRegFileAlt className='SB-icons' />
            <Card.Text className='Status-text'>
              Melengkapi <br />
              Dokumen
            </Card.Text>
          </Card.Text>

          <Card.Text className='SB-Line'></Card.Text>
          <Card.Text>
            <MdOutlineDocumentScanner className='SB-icons' />
            <Card.Text className='Status-text'>
              Verifikasi <br />
              Dokumen
            </Card.Text>
          </Card.Text>

          <Card.Text className='SB-Line'></Card.Text>
          <Card.Text>
            <FaRegCheckCircle className='SB-icons' />
            <Card.Text className='Status-text'>
              Pengajuan <br />
              Berhasil
            </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="box4-5">
      <Card className='Box4'>
        <Card.Text className='Box4-Title'>
          Lengkapi Dokumen Anda Terlebih Dahulu
        </Card.Text>
      </Card>

      <Card className='Box5'>
        <Card.Title className='Box5-Title'>Bantuan Yang diberikan :</Card.Title>
        <ul>
          <li>SPP dan Uang Gedung Gratis Selama Perkuliahan</li>
          <li>Bantuan Uang Saku Rp 4.000.000/Semester</li>
          <li>Bantuan Dana Buku Sebesar Rp 500.00</li>
        </ul>
        <Card.Subtitle className='Box5-Sub'>
          Dokumen Yang Dibutuhkan
        </Card.Subtitle>
        <Card.Text className='Box5-Text'>
          KTP, Rapor SMA,TOEFL,Surat Keterangan Sehat,SKTM
        </Card.Text>
      </Card>
      </div>
    </Card>
  );
}

export default StatusBantuan;
