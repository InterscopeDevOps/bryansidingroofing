import type { ApiData, DataGeneral, SectionsHomeAbout, Service } from "@/interfaces/dbData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


interface ServicesHomeProps {
    dataGlobal: ApiData;
    homeSection: SectionsHomeAbout[];
    landingServices: boolean;
    dbServices: Service[];
    slidesPerView?: number;
    onePage?: boolean;
    dataGeneral?: DataGeneral;

}

const ServicesHome2: React.FC<ServicesHomeProps> = ({ dataGlobal, homeSection, landingServices, dbServices, slidesPerView = 4, onePage }) => {
    return (
        <section className="w-4/5 mx-auto py-20 md:pb-32">
            <div className="flex md:flex-row flex-col">
                <div className="w-full md:w-1/2">
                    <div className="flex gap-5 items-center">
                        {/* <PiTreeFill className="text-4xl text-primary" /> */}
                        <i className="fa-regular fa-helmet-safety text-4xl text-primary"></i>
                        <span className="text-xl font-medium dark:text-white text-primary capitalize">
                            {dataGlobal.name}
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary my-5 capitalize text-center md:text-start">
                        {homeSection[1].title}
                    </h2>
                </div>

                <div className="w-full md:w-1/2">
                    <p className="text-center md:text-justify pb-3 text-black dark:text-white">
                        {(() => {
                            const text = homeSection[1].text;
                            // Encuentra el índice del primer punto.
                            const firstPointIndex = text.indexOf('.');
                            if (firstPointIndex === -1) {
                                // No hay puntos, retorna el texto completo.
                                return text;
                            }
                            // Intenta encontrar el segundo punto.
                            const secondPointIndex = text.indexOf('.', firstPointIndex + 1);
                            if (secondPointIndex === -1) {
                                // Solo hay un punto, retorna el texto hasta el primer punto (incluido).
                                return text;
                            }
                            // Hay al menos dos puntos, retorna el texto hasta el segundo punto (incluido).
                            return text.slice(0, secondPointIndex + 1);
                        })()}
                    </p>

                    {
                        !dataGlobal.widgets.onePages && (
                            <div className="flex items-center justify-center md:justify-start gap-1" >
                                <a
                                    href="/services"
                                    className="flex items-center gap-1 text-secondary font-bold capitalize underline"
                                    aria-label="see all the services we provide"
                                >
                                    <span>see all the services we provide </span>
                                    <i className="fa-solid fa-chevrons-right text-sm"></i>
                                </a>

                            </div>
                        )
                    }

                </div>
            </div>
            <div>



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
                        <SwiperSlide key={index} className="flex flex-col items-center py-5">
                            <div
                                className="relative overflow-hidden md:w-60 w-full h-80 rounded-3xl cursor-pointer text-2xl font-bold group">
                                <picture>
                                    <img
                                        src={service?.description?.[0]?.image!}
                                        alt={service.title}
                                        className="w-full h-full object-cover z-10"
                                    >

                                    </img>
                                </picture>
                                <div className="z-10 absolute w-full h-full group top-0 bg-[#00013071]"></div>
                                <div
                                    className="z-30 absolute group-hover:-top-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-primary transition-all duration-500"
                                ></div>
                                 
                                <div
                                    className="z-30 absolute flex text-sm text-center text-primary items-end justify-end group-hover:right-0 group-hover:rounded-b-none group-hover:bottom-0 group-hover:text-white group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-primary transition-all duration-500 px-4 "
                                >
                                    {
                                        !onePage && (
                                            <p>
                                                {service?.description?.[0]?.text.slice(0, 100) + '...'}
                                            </p>
                                        )
                                    }
                                </div>
                                <div className="w-full h-full items-center justify-center flex uppercase absolute z-20 border top-0 px-2">
                                    <h3 className={`text-secondary font-bold capitalize text-white  ${onePage ? 'text-center text-xl' : 'text-center text-2xl'}`}>{service.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default ServicesHome2;