import React from "react";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const DataBantuan = () => {
  return (
    <>
      <Form className='Form'>
        <Form.Group className='mb-3'>
          <Form.Label>Nama Bantuan</Form.Label>
          <Form.Control type='name' placeholder='Masukan Nama Bantuan' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Deskripsi Bantuan</Form.Label>
          <Form.Control type='string' placeholder='Deskripsi Bantuan' />
        </Form.Group>

        <div className='sub'>
          <Link to='/' className='button'>
            <button type='submit' value='Login'>
              Masuk
            </button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default DataBantuan;
