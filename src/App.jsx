import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Desc from './Desc';
import fotoProfil from "./assets/fotoSantai.jpg";
import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.webp";
import project3 from "./assets/project3.webp";
import project4 from "./assets/project4.webp";
import project5 from "./assets/project5.webp";
import project6 from "./assets/project6.webp";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex m-4">
        <div className="mr-10">
          <h1>All About Me</h1>
          <h2>Personal Information</h2>
          <p>Nama: Muhammad Yusuf Aqila</p>
          <p>Tempat, Tanggal Lahir: Pati, 24 Februari 2007</p>
          <p>
            Alamat: Jl. Kemuning No. 8 Perum Griya Sekar Asri, Desa Winong,
            Pati, Jawa Tengah
          </p>
          <p>Kontak: 0823-2299-0172</p>
          <h2>Riwayat Pendidikan</h2>
          <p>SD IT ABU BAKAR ASH SHIDIQ PATI</p>
          <p>SMPN 3 PATI</p>
          <p>SMAN 1 PATI</p>
          <h2>Prestasi</h2>
          <p>Tidak ada</p>
          <h2>Pengalaman Organisasi</h2>
          <p>OSBIT 2021-2023</p>
          <p>ROHIS 2021-2023</p>
          <h2>Project</h2>
          <Splide aria-label="My Project Images" options={ {
        rewind: true,
        autoplay: true,
        gap   : '1rem',
        width: '50vw',
      } }>

            <Desc img={project6} link="https://osbit.rf.gd/shop">sadad</Desc>
            <Desc img={project3} link="https://suaraanakpati.netlify.app">sadad</Desc>
            <Desc img={project4} link="https://diastra-sman-1-pati.vercel.app/">sadad</Desc>
            <Desc img={project1} link="https://clone-gform.vercel.app/">sadad</Desc>
            <Desc img={project5} link="https://osbit.rf.gd">sadad</Desc>
            <Desc img={project2} link="https://github.com/yusufaqila">sadad</Desc>
          </Splide>
          <a href={"https://github.com/yusufaqila"}>Akun GitHub</a>
          <a href={"https://suaraanakpati.netlify.app"} target={"_blank"}>
            SuaraAnakPati
          </a>
          <a href={"https://diastra-sman-1-pati.vercel.app/"} target={"_blank"}>
            DIASTRA
          </a>
          <a href={"https://clone-gform.vercel.app/"} target={"_blank"}>
            Clone Google Form
          </a>
        </div>
        <img
          src={fotoProfil}
          alt="Yusuf Aqila"
          className="w-64 h-64 rounded-full"
        />
      </div>
    </>
  );
}

export default App;
