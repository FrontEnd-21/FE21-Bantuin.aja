import React from 'react'
import '../../assets/CSS/DataPribadi.css'

function KontakPribadi() {
  return (
    <div className='form'>
    <form action="">
      <div className="input">
        <label htmlFor="Nama">Email</label>
        <input type="Email" placeholder="Asep12@gmail,com" />
      </div>
      <div className="input">
        <label htmlFor="Nama">Nomor Hp</label>
        <input type="text" placeholder="Bandungan" />
      </div>
      <div className="input">
        <label htmlFor="Nama">Alamat Pribadi</label>
        <input type="text" placeholder="Jl.Nunggak galik no 12, Bandungan" />
      </div>
      <div className="input">
        <label htmlFor="Nama">Kontak Darurat ( Kerabat Dekat )</label>
        <input type="text" placeholder="1891 002949900087" />
      </div>
      <button>Simpan</button>
    </form>
  </div>
  )
}

export default KontakPribadi