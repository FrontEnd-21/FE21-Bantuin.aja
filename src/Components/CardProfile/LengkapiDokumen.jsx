import React from 'react'
import Card from "react-bootstrap/Card";
import '../../assets/CSS/Lengkapi.css'
import { FaChevronLeft } from "react-icons/fa";
import { useState } from 'react';
import DataPribadi from './DataPribadi';
import Profile from '../../Pages/Profile';

function LengkapiDokumen() {
  
  return (
    <>    
    
    
    <div className='konten'>
      <div className="back">
        <FaChevronLeft className='icon'/>
        <p>Kembali</p>
      </div>
       <Card className='LD-Wrap'>
        <Card.Title className='LD-Title-2'>LENGKAPI DOKUMEN</Card.Title>
        <span className='Black-Line'></span>
        <Card.Text className='LD-Context'>
          Lengkapi dokumenmu untuk dapat mendaftar pada bantuan yang diinginkan
        </Card.Text>
      </Card>

      <Card className='LD-Wrap-File'>
        <Card.Body className='Wrap-File'>
          <Card.Title className='File-Title'>
            Kartu Tanda Penduduk <strong>Wajib</strong>
          </Card.Title>
          <Card.Text className='File-Sub'>
            Upload File dalam Bentuk Pdf Dengan Bentuk Ukuran Maksimal 5 MB.
          </Card.Text>

          <div className='image-upload-wrap'>
            <input
              className='file-upload-input'
              type='file'
              onchange='readURL(this);'
            />
            <div className='drag-text'>
              <h3>Drag and drop a file</h3>
            </div>
          </div>
          <button
            className='file-upload-btn'
            type='button'
            onclick="$('.file-upload-input').trigger( 'click' )"
          >
            Unggah File
          </button>

          <div className='file-upload-content'>
            <img className='file-upload-image' src='#' alt='your image' />
            <div className='image-title-wrap'>
              <button
                type='button'
                onclick='removeUpload()'
                className='remove-image'
              >
                Remove <span className='image-title'>Uploaded Image</span>
              </button>
            </div>
          </div>
        </Card.Body>

        <hr className='Gray-Line' />

        <Card.Body className='Wrap-File'>
          <Card.Title className='File-Title'>
            Surat Keterangan Tidak Mampu <strong>Wajib</strong>
          </Card.Title>
          <Card.Text className='File-Sub'>
            Upload File dalam Bentuk Pdf Dengan Bentuk Ukuran Maksimal 5 MB.
          </Card.Text>

          <div className='image-upload-wrap'>
            <input
              className='file-upload-input'
              type='file'
              onchange='readURL(this);'
            />
            <div className='drag-text'>
              <h3>Drag and drop a file</h3>
            </div>
          </div>
          <button
            className='file-upload-btn'
            type='button'
            onclick="$('.file-upload-input').trigger( 'click' )"
          >
            Unggah File
          </button>
          <div className='file-upload-content'>
            <img className='file-upload-image' src='#' alt='your image' />
            <div className='image-title-wrap'>
              <button
                type='button'
                onclick='removeUpload()'
                className='remove-image'
              >
                Remove <span className='image-title'>Uploaded Image</span>
              </button>
            </div>
          </div>
        </Card.Body>
        <div className='sub'>
          <button>SIMPAN</button>
        </div>
      </Card>
    </div>
    </>

  )
}

export default LengkapiDokumen