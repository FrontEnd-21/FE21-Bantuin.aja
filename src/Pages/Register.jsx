import React, { useState } from "react";

// CSS
import "../assets/CSS/Login.css";

// Image
import imglogin from "../assets/IMAGE/Login.svg";

// Bootstrap
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

// Icons
import { FaChevronLeft } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username , setUsername] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState();
  const [status , setStatus] = useState();

  
  const handleUserName = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  
  const handleRole = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };
  const handleSubm = (e) => {
    e.preventDefault();
    axios.post('https://be-9.up.railway.app/auth/register', {
      username : username, 
      password : password,
      role : role

    })
    .then(response => {
      console.log(response.data.status);
      setStatus(response.data.status)
      
    }).catch(error => {
      console.log(error)
    })
  }

  if(status === 201){
    setStatus(true)
    alert('berhasil')
  }

  return (
    <>
      <Card className='Login'>
        <Card.Body className='Wrap-Login'>
          <Card.Img src={imglogin} alt='' className='Img'></Card.Img>
        </Card.Body>

        <Card.Body className='Wrap-Login'>
          <Link to='/login' className='i-back'>
            <FaChevronLeft />
            Kembali
          </Link>

          <Card.Title className='Login-Title'>Daftar</Card.Title>
          <Card.Subtitle className='Login-Subtitle'>
            Daftar Akun terlebih dahulu agar bisa lanjut
          </Card.Subtitle>

          <Form className='Form' onSubmit={handleSubm}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Masukan Nama Lengkap' onChange={handleUserName} />
              <Form.Text className='text-muted'>
                Kita Tidak Akan Menyebarkan Informasi Tentang Anda
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' placeholder='Password' onChange={handlePassword} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type='text'
                placeholder='Role'
                onChange={handleRole}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Ingat Saya' />
            </Form.Group>
            <div className='sub'>
              <button>Masuk</button>
              <Link to='/login' className='Daftar'>
                Sudah Punya akun? Masuk
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Register;
