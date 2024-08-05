import type { ApiData, SectionsHomeAbout } from "@/interfaces/dbData";
import { RedesIcons } from "../RedesIcons";
import EliminarCaracteresEspeciales from "@/hook/EliminarCaracteresEspeciales";
import React, { useState } from "react";
import LazyImage from "../LazyImage";

interface Footer1Props {
    dataGlobal: ApiData;
}

const Footer2: React.FC<Footer1Props> = ({ dataGlobal }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [message, setMessage] = useState('');



    const handleOpenModal = (img: string) => {
        setSelectedImage(img);
        setIsModalOpen(true);
    };

    //filtrar para obtener la section de about
    const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "about",
    );

    const homeSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "home",
    );

    const landingServices = dataGlobal.widgets.landingServices;

    const dataPhone = dataGlobal?.dataGeneral.phones
    const dataEmail = dataGlobal?.dataGeneral.emails
    const dataAddress = dataGlobal?.dataGeneral.location
    const dataOpeningHours = dataGlobal?.dataGeneral.openingHours

    const reviewsPages = dataGlobal.reviews.stateReviews && dataGlobal.reviews.viewAll;
    const videoPages = dataGlobal.widgets.landingVideos;
    const blogPages = dataGlobal.widgets.blog;

    const onePages = dataGlobal.widgets.onePages;


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
        <div>
            <div className="w-full h-auto">
                <div className="flex h-auto md:flex-row flex-col w-full justify-end items-center relative">
                    <div className="md:w-[30%] w-1/2 bg-primary h-full place-content-center place-items-start absolute left-0 z-10" style={{
                        clipPath: 'polygon(0 100%, 100% 100%, 75% 50%, 100% 0, 0 0)' // Agrega este estilo
                    }} >
                        <picture className="md:w-[35%] w-[92%] h-full ">
                            <img
                                src={dataGlobal.logos.primary}
                                className="w-11/12 md:w-[70%] mx-auto md:mx-0"
                                alt="logo"
                                loading="lazy"
                                width={200}
                                height={200}
                            />
                        </picture>
                    </div>

                    <div className="md:w-[91%] w-full  md:h-[224px] h-[120px] bg-secondary flex justify-end" style={{ clipPath: 'polygon(100% 100%, 100% 0, 25% 0, 17% 50%, 25% 100%)' }}>
                        <div className="flex w-full h-full items-center justify-end md:pr-14 pr-4 gap-5">
                            {
                                dataPhone && dataPhone.length > 0 && dataPhone.slice(0, 1).map((phone, index) => (
                                    <li key={index} className="mb-5 text-white font-medium hover:text-btnHover list-none transition-all duration-300 ease-in-out">
                                        <a
                                            href={`tel:+1${phone.number}`}
                                            className="flex items-center gap-2"
                                            aria-label="phone number"
                                        >
                                            <i className="fa-solid fa-phone text-[1.8em] bg-tertiary rounded-xl p-4"></i>
                                            <p className="md:text-[1.8em] text-[1em]">{phone.number}</p>
                                            {/* {
                                                phone.title && (
                                                    <p>
                                                        <span className="text-gray-400 mr-1">|</span>
                                                        {phone.title}
                                                    </p>
                                                )
                                            } */}
                                        </a>

                                    </li>
                                ))
                            }

                            {
                                dataEmail && dataEmail.length > 0 && dataEmail.slice(0, 1).map((email, index) => (
                                    <li key={index} className="mb-5 text-white font-medium hover:text-btnHover list-none transition-all duration-300 ease-in-out md:block hidden">
                                        <a
                                            href={`mailto:${email.email}`}
                                            className="flex items-center gap-2"
                                            aria-label="email"
                                        >
                                            <i className="fa-solid fa-envelope text-[1.8em] bg-tertiary rounded-xl p-4"></i>
                                            <p className="text-[1.8em]">{email.email}</p>
                                        </a>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full overflow-hidden relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/75"
                style={{
                    backgroundImage: `url(${homeSection[0].additionalImages[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative w-[85%] mx-auto h-full">
                    <div className="w-full h-full flex flex-col md:flex-col gap-5">

                        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center md:items-start w-full h-auto">
                            <div className="md:w-[25%] w-[92%] h-auto flex flex-col pt-3 md:pt-14">
                                <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">About Us</h3>
                                <div className="block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0"></div>

                                <p className="text-center md:text-start pb-3 text-white">
                                    {(() => {
                                        const text = aboutSection[0].text;
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
                                    dataGlobal?.redesSociales.length > 0 && (
                                        <div className="py-5 flex md:justify-start justify-center">
                                            <RedesIcons redesSociales={dataGlobal?.redesSociales} textColor="text-primary" bgColorCustom="bg-white" />
                                        </div>
                                    )
                                }

                            </div>

                            <div className="w-full md:w-[25%] pt-3 md:pt-14 pl-0 md:pl-5">
                                <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">Get In Touch</h3>
                                <div className="block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0"></div>
                                <ul>
                                    {dataAddress && dataAddress.length > 0 && (
                                        <li className="mb-5 text-white font-medium flex items-center gap-2">
                                            <i className="fa-solid fa-map-location-dot text-lg"></i>
                                            <p className="capitalize ">
                                                {dataAddress.slice(0, 4).map((address, index) => (
                                                    <span key={index}>
                                                        {index > 0 && <span className="text-gray-400 mx-1">|</span>}
                                                        {address.city}
                                                    </span>
                                                ))}
                                            </p>
                                        </li>
                                    )}
                                    {
                                        dataPhone && dataPhone.length > 0 && dataPhone.slice(0, 2).map((phone, index) => (
                                            <li key={index} className="mb-5 text-white font-medium hover:text-btnHover transition-all duration-300 ease-in-out">
                                                <a
                                                    href={`tel:+1${phone.number}`}
                                                    className="flex items-center gap-2"
                                                    aria-label="phone number"
                                                >
                                                    <i className="fa-solid fa-phone text-lg"></i>
                                                    <p>{phone.number}</p>
                                                    {
                                                        phone.title && (
                                                            <p>
                                                                <span className="text-gray-400  mr-1">|</span>
                                                                {phone.title}
                                                            </p>
                                                        )
                                                    }
                                                </a>

                                            </li>
                                        ))
                                    }
                                    {
                                        dataEmail && dataEmail.length > 0 && dataEmail.slice(0, 2).map((email, index) => (
                                            <li key={index} className="mb-5 text-white font-medium hover:text-btnHover transition-all duration-300 ease-in-out">
                                                <a
                                                    href={`mailto:${email.email}`}
                                                    className="flex items-center gap-2"
                                                    aria-label="email"
                                                >
                                                    <i className="fa-solid fa-envelope text-lg"></i>
                                                    <p>{email.email}</p>
                                                </a>
                                            </li>
                                        ))
                                    }
                                    {
                                        dataOpeningHours && dataOpeningHours.length > 0 && dataOpeningHours.slice(0, 2).map((hour, index) => {
                                            return (
                                                <li key={index} className="mb-5 text-white font-medium">
                                                    <p className="flex items-center gap-2">
                                                        <i className="fa-solid fa-calendar-clock"></i>
                                                        <span className="flex flex-col">

                                                            <span>{hour.days}</span>
                                                            <span>{hour.hours}</span>
                                                        </span>
                                                    </p>
                                                </li>
                                            )
                                        })

                                    }
                                </ul>


                            </div>

                            <div className="w-full md:w-[25%] pt-5 md:pt-14">
                                <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">Our Services</h3>
                                <div className="block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0"></div>
                                <ul>
                                    {
                                        dataGlobal.services.slice(0, 6).map((service, index) => (
                                            <li key={index} className="mb-5">
                                                <a
                                                    href={
                                                        onePages ? `tel:+1${dataPhone[0].number}` :
                                                            landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : '/services'
                                                    }
                                                    className="text-white capitalize font-medium hover:text-btnHover"
                                                    aria-label="service link"
                                                >
                                                    <i className="fa-solid fa-circle-chevron-right pr-2"></i>
                                                    {service.title}

                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="w-full md:w-[23%] pt-5 md:pt-14">
                                <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">Gallery</h3>
                                <div className="block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0"></div>
                                <div className="w-full grid grid-cols-3 gap-3">
                                    {dataGlobal.gallery.slice(0, 6).map((img, index) => (
                                        <div key={index} className="w-full h-[100px] relative group cursor-pointer" onClick={() => handleOpenModal(img)}>
                                            <picture className="w-full h-full">
                                                <LazyImage
                                                    src={img}
                                                    alt={`gallery-${index}`}
                                                    className="w-full h-full object-cover rounded-xl shadow aspect-auto"
                                                    height={200}
                                                />
                                            </picture>
                                            <div className="absolute inset-0 flex justify-center rounded-xl  items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white text-3xl font-bold">+</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-500/60 mt-10 py-5 flex flex-col md:flex-row justify-between items-center">
                        {
                            !onePages && (
                                <ul className="flex gap-3 md:hidden pb-8">
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/" className="hover:text-btnHover transition-all duration-300 ease-in-out">Home</a>
                                    </li>
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/about" className="hover:text-btnHover transition-all duration-300 ease-in-out">About</a>
                                    </li>
                                    {
                                        blogPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/blog" className="hover:text-btnHover transition-all duration-300 ease-in-out">Blog</a>
                                            </li>
                                        )
                                    }
                                    {
                                        videoPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/videos" className="hover:text-btnHover transition-all duration-300 ease-in-out">Videos</a>
                                            </li>
                                        )
                                    }
                                    {
                                        reviewsPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/reviews" className="hover:text-btnHover transition-all duration-300 ease-in-out">Reviews</a>
                                            </li>
                                        )
                                    }
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/contact" className="hover:text-btnHover transition-all duration-300 ease-in-out">Contact</a>
                                    </li>
                                </ul>
                            )
                        }

                        <p className="text-white font-semibold text-center md:text-start py-5 md:py-0">
                            <span>Copy© {new Date().getFullYear()} {dataGlobal?.name}. All Rights Reserved.</span>
                        </p>
                        {
                            !onePages && (
                                <ul className="md:flex gap-3 hidden">
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/" className="hover:text-btnHover transition-all duration-300 ease-in-out">Home</a>
                                    </li>
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/about" className="hover:text-btnHover transition-all duration-300 ease-in-out">About</a>
                                    </li>
                                    {
                                        blogPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/blog" className="hover:text-btnHover transition-all duration-300 ease-in-out">Blog</a>
                                            </li>
                                        )
                                    }
                                    {
                                        videoPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/videos" className="hover:text-btnHover transition-all duration-300 ease-in-out">Videos</a>
                                            </li>
                                        )
                                    }
                                    {
                                        reviewsPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/reviews" className="hover:text-btnHover transition-all duration-300 ease-in-out">Reviews</a>
                                            </li>
                                        )
                                    }
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/contact" className="hover:text-btnHover transition-all duration-300 ease-in-out">Contact</a>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>


                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                        <div className="bg-white p-4 rounded-lg relative">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-auto max-h-[80vh]"
                                loading="lazy"
                            />
                            <button onClick={() => setIsModalOpen(false)} className="absolute right-2 -top-14 md:-top-8 md:-right-8 px-4 py-2.5 font-bold bg-btnHover rounded-full text-white text-2xl">✕</button>
                        </div>
                    </div>
                )}


            </div>
        </div >
    );
}
export default Footer2;