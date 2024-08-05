import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { ApiData, SectionsHomeAbout } from "@/interfaces/dbData";

interface AboutBlocksProps {
    dataGlobal: ApiData;
}

const AboutBlocks: React.FC<AboutBlocksProps> = ({ dataGlobal }) => {
    //filtrar para obtener la section de home
    const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "about",
    );

    return (
        <div className="w-4/5 mx-auto md:w-11/12 md:mr-auto md:ml-0 h-full flex flex-col md:flex-row justify-between relative z-20">
            <div
                className="aspect-auto h-[300px] md:h-[110vh] w-full md:w-1/2 rounded-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl shadow-2xl "
                style={{
                    backgroundImage: `url("${aboutSection[0].additionalImages[0]}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </div>
            <div className="w-full md:w-1/2 px-5 py-10 md:pt-0 md:pl-20 flex flex-col justify-center">
                <div className="pb-10">
                    <div className="flex items-center md:items-end gap-5 md:gap-1">
                        <i className="fa-light fa-seedling text-5xl text-secondary"></i>
                        <p className="text-2xl font-medium text-secondary capitalize">About {dataGlobal.name}</p>
                    </div>
                    <h2 className="text-3xl font-bold text-primary mt-5 text-center md:text-start">
                        {aboutSection[0].title}
                    </h2>
                    <p className="text-center md:text-justify mt-5">
                        {aboutSection[0].text}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[60%] pb-8 md:pb-0">
                        <ul className="pb-5">
                            {aboutSection[0].list.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-primary font-medium py-2">
                                    <i className="fa-solid fa-check bg-secondary rounded-full text-white p-2"></i>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center md:text-start">
                            {
                                dataGlobal.widgets.onePages ? (
                                    <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${dataGlobal.dataGeneral.phones[0].number}`} />
                                ) : (
                                    <ButtonContent_2 />
                                )
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] h-full flex justify-center">
                        <div className="bg-[#FCFAF7] border-t-[3px] border-primary rounded-b-full h-full px-12 w-4/5 flex flex-col justify-center  ">
                            <p className="text-center text-secondary font-bold py-2 text-4xl">{dataGlobal.yearsExperience}+</p>
                            <p className="text-center text-primary font-bold ">Years of Experience</p>
                            {
                                !dataGlobal.widgets.onePages && (
                                    <div className="flex justify-center py-5">
                                        <a
                                            href="/about"
                                            className="bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                                            aria-label="Read more about us"
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBlocks;