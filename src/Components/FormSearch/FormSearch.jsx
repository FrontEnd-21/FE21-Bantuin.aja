import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "../../assets/CSS/formsearch.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Router
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const FormSearch = () => {
  const [data, setData] = useState([]);

  const getApi = () => {
    axios
      .get("https://be-9.up.railway.app/bantuan/")
      .then((response) => {
        const allData = response.data.data;
        setData(allData);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  useEffect(() => {
    getApi();
  }, [1]);
  console.log(data.slice(0, 3));

  return (
    <div>
      <Container fluid className='FormC'>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
          />
        </Form>
      </Container>

      <Link className='kategori'>
        <Link to='#' className='kategori-2'>
          Semua
        </Link>
        <Link to='#' className='kategori-2'>
          Pendidikan
        </Link>
        <Link to='#' className='kategori-2'>
          Sembako
        </Link>
        <Link to='#' className='kategori-2'>
          Dana Tunai
        </Link>
      </Link>

      <div className='tampil-data'>
        {data.map((item) => {
          return (
            <div className='main'>
              <Link to='/detail_bantuan'>
                <img src={item.image_bantuan} alt='Gambar' className='img' />
              </Link>

              <Card className='info'>
                <span>{item.nama_bantuan}</span>
                <span>{item.description}</span>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormSearch;
