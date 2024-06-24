import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Desc = (props) => {
  return (
    <>
      <SplideSlide>
        <img src={props.img} alt="" />
        <div className="absolute bottom-0 bg-gradient-to-t from-gray-500 to-transparent h-[20%] w-full">
          <span>{props.children}</span>
          <a href={props.link} target="_blank" rel="noopener noreferrer">Cek Website</a>
        </div>
      </SplideSlide>
    </>
  );
};

export default Desc;