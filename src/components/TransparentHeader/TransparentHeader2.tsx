import type { ApiData, Phone, SectionsHomeAbout } from "@/interfaces/dbData";

import ButtonContent2 from "@/components/button/ButtonContent_2";
// import { SwiperSlide, Swiper } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import LazyImage from "../LazyImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import ContactForm from "../Blocks/contact/ContactForm";

interface SlidesShowProps {
  dataBlocks: SectionsHomeAbout[];
  dataPhone?: Phone[];
  data?: ApiData;
}

const SlidesShow: React.FC<SlidesShowProps> = ({
  dataBlocks,
  dataPhone,
  data,
}) => {
  return (
    <div className="relative h-full md:h-[100vh] overflow-hidden">
      <div className="absolute z-10 w-full h-full content_video">
        <video

          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source
            src={"https://firebasestorage.googleapis.com/v0/b/videos2-986b9.appspot.com/o/tijuana-mexico-roof-install-2023-11-27-05-00-22-utc%20(online-video-cutter.com).mp4?alt=media&token=8c9408ff-5cce-4e77-9a09-3122e2ee2c95"}
            type="video/mp4"
          />
        </video>
      </div>
      {/* content */}
      <div className="relative z-20  h-[85%] flex justify-between items-center gap-2 lg:gap-20 py-20 lg:py-[20px] md:w-[85%] mx-auto w-[95%]">

        {data?.landingLocations?.length! > 0 ? (
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-7xl font-bold  capitalize pb-5">
              {data?.landingLocations?.[0].description[0].title}
            </h1>
            <p className="text-white text-base">
              {data?.landingLocations?.[0].description[0].text}
            </p>
            <div className="flex justify-center items-centern gap-5 py-10">
              <ButtonContent2
                btnstyle="btnStyle3"
                titleBtn={data?.landingLocations?.[0].description[0].textbutton}
                linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : "Contact Us"
                  }`}
              />
            </div>
          </div>
        ) : (
          <div className=" w-full h-auto flex flex-col md:flex-row py-4">
            <div className="text-center w-full md:w-[60%] flex flex-col justify-center px-6">
              <h1 className="text-white text-4xl md:text-5xl font-bold  capitalize pb-5">
                {dataBlocks[0]?.title}
              </h1>
              <p className="text-white text-base hidden md:block">{dataBlocks[0]?.text}</p>
              <div className="flex justify-center items-centern gap-5 py-10">
                <ButtonContent2
                  btnstyle="btnStyle3"
                  titleBtn={dataPhone ? dataPhone[0].number : "Contact Us"}
                  linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : "Contact Us"
                    }`}
                />
              </div>
            </div>
            <div className="text-center w-full md:w-[35%]">
            <img src="https://firebasestorage.googleapis.com/v0/b/resource-36ef7.appspot.com/o/resource%2FEXPERIENCIA_Mesa%20de%20trabajo%201.png?alt=media&token=c0121b9a-7fe5-49e0-8402-2c1d555d9210" alt="experience" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidesShow;
