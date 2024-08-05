import type { Phone, SectionsHomeAbout } from "@/interfaces/dbData";

import ButtonContent2 from "@/components/button/ButtonContent_2";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import LazyImage from "../LazyImage";





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
interface SlidesShowProps {
    dataBlocks: SectionsHomeAbout[];
    dataPhone?: Phone[];
}

const SlidesShow: React.FC<SlidesShowProps> = ({ dataBlocks, dataPhone }) => {

    return (
        <div className="relative h-full overflow-hidden">
            <div className="absolute z-10 w-full h-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false
                    }}
                    className="w-full h-full border-none"
                >
                    {
                        dataBlocks[0]?.additionalImages.map((imag, index) => (
                            <SwiperSlide key={index} className="w-full h-full">
                                <LazyImage
                                    src={imag}
                                    alt={dataBlocks[0]?.title}
                                    className="w-full h-full object-cover"
                                />

                            </SwiperSlide>
                        ))
                    }


                </Swiper>

            </div>
            {/* overlay */}
            <div className="absolute w-full h-full top-0 left-0 z-20 bg-black/70"></div>

            {/* waves */}
            <picture className="absolute bottom-[-1px] z-30" style={{ left: '-100px', width: 'calc(100% + 100px)' }}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg-2.png?alt=media&token=e9103497-704f-457e-b627-6347687a4776"
                    className="w-full animate-moveWaveLeftRight aspect-auto"
                    alt="waves"
                    loading="eager"
                    width={1920}
                    height={1080}
                />
            </picture>
            <picture className="absolute bottom-[-1px] z-30" style={{ left: '-100px', width: 'calc(100% + 100px)' }}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg.png?alt=media&token=1ddca0ae-01ae-4069-b59a-85a42f15bf34"
                    className="w-full animate-moveWaveRightLeft aspect-auto"
                    alt="waves shadows"
                    loading="eager"
                    width={1920}
                    height={1080}
                />
            </picture>

            {/* content */}
            <div className="relative z-20 w-4/5 mx-auto h-[85%] flex justify-between items-center gap-2 lg:gap-20 py-20 pt-[240px] pb-20 lg:py-[200px]">
                {/* <button
                    onClick={prevImage}
                    className="prev-button border border-white rounded-full text-lg lg:text-3xl px-2.5 py-1 lg:px-4 lg:py-3 text-white font-bold hover:bg-btnHover hover:border-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                    aria-label="Previous Slide"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button> */}
                <div className="text-center">
                    <h1 className="text-white text-4xl md:text-7xl font-bold  capitalize pb-5">{dataBlocks[0]?.title}</h1>
                    <p className="text-white text-lg">{dataBlocks[0]?.text}</p>
                    <div className="flex justify-center items-centern gap-5 py-10">
                        <ButtonContent2 btnstyle="btnStyle3" titleBtn={dataPhone ? dataPhone[0].number : 'Contact Us'} linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : 'Contact Us'}`} />
                    </div>
                </div>
                {/* <button
                    onClick={nextImage}
                    className="next-button border border-white rounded-full text-lg lg:text-3xl px-2.5 py-1 lg:px-4 lg:py-3 text-white font-bold hover:bg-btnHover hover:border-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                    aria-label="Next Slide"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button> */}
            </div>
        </div>
    );
}

export default SlidesShow;
