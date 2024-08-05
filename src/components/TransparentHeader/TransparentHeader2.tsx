import type { ApiData, Phone, SectionsHomeAbout } from "@/interfaces/dbData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import LazyImage from "../LazyImage";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useState } from "react";
interface SlidesShowProps {
    dataBlocks: SectionsHomeAbout[];
    dataPhone?: Phone[];
    dataGlobal: ApiData;

}



const SlidesShow: React.FC<SlidesShowProps> = ({ dataBlocks, dataGlobal }) => {
    const dataPhone = dataGlobal?.dataGeneral.phones

    const [message, setMessage] = useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (dataPhone.length > 0) {
            const relmsg = message.replace(/ /g, "%20");
            const phone = dataPhone[0].number
                .replace("-", "")
                .replace("-", "");

            window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
            setMessage("");
        } else {
            console.log("Número de teléfono no disponible.");
        }
    };


    return (
        <div className="relative h-[90vh] overflow-hidden">
            <div className="absolute z-10 w-full h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false
                    }}
                    effect='fade'
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
            <div className="absolute w-full h-full top-0 left-0 z-20 bg-[#0902494b]"></div>

            <div className="relative z-20 w-4/5 mx-auto h-[85%] flex justify-between items-center gap-2 lg:gap-20 py-20 pt-[300px] pb-20 lg:py-[200px]">

                <div className="text-center">
                    <h1 className="text-white text-4xl md:text-7xl font-bold  capitalize  pb-5">{dataBlocks[0]?.title}</h1>
                    <p className="text-white text-lg">{dataBlocks[0]?.text}</p>
                    <div className="flex justify-center items-centern gap-5 py-10">
                        <div className="md:w-[40%] w-[92%] flex justify-center items-center">
                            <form onSubmit={handleSubmit} className="relative w-full">
                                <input
                                    type="text"
                                    className="w-full p-4 pr-[65px] md:pr-[180px] border rounded-full"
                                    placeholder="Write Your Message Here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1 bottom-1 bg-primary text-white py-2 px-4 rounded-full hover:bg-btnHover transition-all duration-300 ease-in-out flex items-center gap-0 md:gap-2"
                                    aria-label="Send message"
                                >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span className="font-semibold capitalize hidden md:block">Send message</span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SlidesShow;
