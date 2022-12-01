import React, { useState } from "react";

// CSS
import "../../assets/CSS/Admin/Admin.css";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

// Route
import BantuanNav from "./BantuanNav";
import UserNav from "./UserNav";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  function Bantuan() {
    setIsAdmin(true);
    setIsUser(false);
  }
  function User() {
    setIsUser(true);
    setIsAdmin(false);
  }
  return (
    <>
      <div>
        <Card className='Card-admin'>
          <Card.Body className='CRUD'>
            <Button onClick={Bantuan}>Data Bantuan</Button>
          </Card.Body>

          <Card.Body className='CRUD'>
            <Button onClick={User}>Data User</Button>
          </Card.Body>
        </Card>

        <Card className='Box-Nav'>
          <Card.Body>
            {isAdmin && <BantuanNav />}
            {isUser && <UserNav />}
          </Card.Body>
        </Card>

        <Card className='Box-CRUD'>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminPage;
