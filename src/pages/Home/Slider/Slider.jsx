import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../../assets/img1.jpg";
import slider2 from "../../../assets/img2.jpg";
import slider3 from "../../../assets/img3.jpg";

const Slider = () => {
  return (
    <div className="mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        className=""
      >
        <SwiperSlide>
          <div className="relative z-20 h-[60vh]">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={slider1}
              alt=""
            />
            <div className="absolute inset-0 h-full flex px-2 bg-[#0803034c] rounded-lg items-center justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
                <i>“Your New Home Is Just a Click Away”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative z-20 h-[60vh]">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={slider2}
              alt=""
            />
            <div className="absolute inset-0 h-full flex px-2 bg-[#0803034c] rounded-lg items-center justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
                <i>“Live Closer to Everything You Love”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative z-20 h-[60vh]">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={slider3}
              alt=""
            />
            <div className="absolute inset-0 h-full flex px-2 bg-[#0803034c] rounded-lg items-center justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
                <i>“Rent Smart. Live Better.”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
