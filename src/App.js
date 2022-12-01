import "./App.css";

// Footer and Navbar Component 
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

// Router
import { Routes, Route, useLocation } from "react-router-dom";
 
// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Bantuan from "./Pages/Bantuan";
import DetailBantuan from './Pages/DetailBantuan'
import StatusBantuan from './Pages/StatusBantuan'
import LengkapiDokumen from './Pages/LengkapiDokumen'
import Profile from "./Pages/Profile";
import Admin from './Pages/admin/admin'



function App() {
  const lokasi = useLocation(
  )
  console.log(lokasi)


  return (
    <>
    {lokasi.pathname === "/register"  || lokasi.pathname === '/login' ?  null : <NavBar/>}
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bantuan' element={<Bantuan />} />
        <Route path='/detail_bantuan' element={<DetailBantuan />} />
        <Route path='/lengkapi_dokumen' element={<LengkapiDokumen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/status_bantuan' element={<StatusBantuan />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

      {lokasi.pathname === "/register"  || lokasi.pathname === '/login' ?  null : <Footer/>}

    </>
  );
}

export default App;
