import type { DataGeneral, Service } from "@/interfaces/dbData";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import EliminarCaracteresEspeciales from "@/hook/EliminarCaracteresEspeciales";
import LazyImage from "../LazyImage";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';


interface SliderServicesProps {
    dbServices: Service[];
    landingServices: boolean;
    slidesPerView?: number;
    onePage?: boolean;
    dataGeneral?: DataGeneral;
}

const SliderServices: React.FC<SliderServicesProps> = ({ dbServices, landingServices, slidesPerView = 4, onePage, dataGeneral }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false
            }}
            breakpoints={
                {
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: slidesPerView,
                    },
                }
            }
        >
            {dbServices.map((service, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center">
                    <div className="relative ">
                        <div className="w-full mx-auto">
                            <LazyImage
                                src={service?.description?.[0]?.image!}
                                alt={service.title}
                                height={245}
                                className="w-screen h-[250px] rounded-tl-xl rounded-tr-xl object-cover aspect-auto"
                            />
                        </div>

                        <div>
                            <a
                                href={`${onePage ? `tel:${dataGeneral?.phones[0].number}` :
                                        landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : '/services'}`}
                                aria-label="Learn More"
                                className="text-2xl bg-white text-secondary rounded-full absolute -bottom-5 left-8 px-5 py-3.5 hover:bg-secondary hover:shadow-md hover:text-white transition-all duration-300 ease-in-out"
                            >
                                {
                                    onePage ? <i className="fa-solid fa-phone"></i> : <i className="fa-regular fa-arrow-up-right"></i>
                                }

                            </a>
                        </div>

                    </div>
                    <div className="py-8 px-5 bg-[#FCFAF7] rounded-bl-xl rounded-br-xl ">
                        <h3 className={`text-secondary font-bold capitalize  ${onePage ? 'text-center text-xl' : 'text-lg'}`}>{service.title}</h3>
                        {
                            !onePage && (
                                <p>
                                    {service?.description?.[0]?.text.slice(0, 80) + '...'}
                                </p>
                            )
                        }
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices