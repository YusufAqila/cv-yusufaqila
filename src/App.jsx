import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>All About Me</h1>
      <h2>Personal Information</h2>
      <p>Nama: Muhammad Yusuf Aqila</p>
      <p>Tempat, Tanggal Lahir: Pati, 24 Februari 2007</p>
      <p>Alamat: Jl. Kemuning No. 8 Perum Griya Sekar Asri, Desa Winong, Pati, Jawa Tengah</p>
      <p>Kontak: 0823-2299-0172</p>
      <h2>Riwayat Pendidikan</h2>
      <p>SD IT ABU BAKAR ASH SHIDIQ PATI</p>
      <p>SMPN 3 PATI</p>
      <p>SMAN 1 PATI</p>
      <h2>Prestasi</h2>
      <p>Tidak ada</p>
      <h2>Pengalaman Organisasi</h2>
      <p>OSBIT 2021-2023</p>
      <p>ROHSI 2021-2023</p>
      <h2>Project</h2>
      <p>suaraanakpati.web.id</p>
      
    </>
  )
}

export default App
