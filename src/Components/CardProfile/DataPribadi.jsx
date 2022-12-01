import React from 'react'
import '../../assets/CSS/DataPribadi.css'
function DataPribadi() {
  return (
    <div className='form'>
      <form>
        <div className="input">
          <label htmlFor="Nama">Nama Lengkap</label>
          <input type="text"/>
        </div>
        <div className="input">
        <label htmlFor="Nama">Jenis Kelamin</label>
        <select name="Kelamin" id="Kelamin">
          <option value="Pria">Pria</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        </div>
        
        <div className="input">
          <label htmlFor="Nama">Tempat Lahir</label>
          <input type="text" placeholder='Bandungan'/>
        </div>
        <div className="input">
          <label htmlFor="Nama">Tanggal Lahir</label>
          <input type="text" placeholder="17 agustus 2000" />
        </div>
        <div className="input">
          <label htmlFor="Nama">NIK</label>
          <input type="text" placeholder="1891 002949900087" />
        </div>
        <button>Simpan</button>
      </form>
    </div>
  )
}

export default DataPribadi