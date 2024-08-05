import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface CallToActionProps {
    homeSection: SectionsHomeAbout[];
    nameCompany: string;
    dataPhone: Phone[];
}

const CallToAction: React.FC<CallToActionProps> = ({ homeSection, nameCompany, dataPhone }) => {
    return (
        <div
            className="aspect-auto w-full h-full py-24 md:py-32 relative flex justify-center items-center before:absolute before:w-full before:h-full before:top-0 before:bg-black/80"
            style={{
                backgroundImage: `url(${homeSection?.[1]?.additionalImages?.[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-11/12 md:w-[70%] mx-auto relative z-10">
                <div className="flex items-center justify-center md:items-end gap-5 md:gap-3">
                    <i className=" fa-regular fa-helmet-safety text-5xl text-white"></i>
                    <p className="text-2xl font-medium text-gray-200 capitalize">{nameCompany}</p>
                </div>
                <h2 className="text-4xl capitalize font-bold text-white mt-5 text-center">
                    {homeSection?.[1]?.title}
                </h2>
                <div className="bg-white w-full h-full rounded-xl flex flex-col-reverse md:flex-row gap-5 md:gap-10 mt-10 px-5 py-10 md:px-10 md:py-5">
                    <div className="w-full md:w-[60%] h-full">
                        <p className="text-center md:text-justify px-5 pt-0 md:pt-5 pb-10">{homeSection?.[1]?.text}</p>
                        <div className="flex justify-center md:justify-start">
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
                                {
                                    homeSection[1].additionalImages.slice(2).map((item, index) => (
                                        <div key={index} className={index === 0 ? "block" : "hidden sm:block"}>
                                            <picture>
                                                <img
                                                    src={item}
                                                    alt="image"
                                                    className="w-full h-48 object-cover shadow-md rounded-b-full aspect-auto"
                                                    loading="lazy"
                                                />
                                            </picture>
                                        </div>
                                    ))
                                }

                                <div className="w-full h-48 bg-[#FCFAF7] flex items-center justify-center rounded-b-full border-secondary border-t-[5px]">
                                    <a
                                        href={`tel:+1${dataPhone[0].number}`}
                                        className="bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                                    >
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <picture className="w-full md:w-[40%] h-[250px] md:h-auto  shadow-md aspect-auto" >
                        <img src={homeSection?.[1]?.additionalImages?.[1]} alt="img1" className="w-full h-full object-cover rounded-xl object-center" />
                    </picture>
                </div>
            </div>

        </div>
    );
}

export default CallToAction;