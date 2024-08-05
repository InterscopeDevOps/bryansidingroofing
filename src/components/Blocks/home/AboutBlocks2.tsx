import ButtonContent_2 from "@/components/button/ButtonContent_2";
import LazyImage from "@/components/LazyImage";
import type { ApiData, SectionsHomeAbout } from "@/interfaces/dbData";

interface AboutBlocks2Props {
    dataGlobal: ApiData;
}

const AboutBlocks2: React.FC<AboutBlocks2Props> = ({ dataGlobal }) => {
    //filtrar para obtener la section de home
    const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "about",
    );


    const toggleDarkMode = (): void => {
        const html = document.documentElement;
        html.classList.toggle('dark');
    }

    return (
        <div className="w-4/5 mx-auto md:w-11/12  h-full flex flex-col md:flex-row justify-center relative z-20">

            <div className="w-full md:w-1/2 px-5 py-10 md:pt-0 flex flex-col justify-center">
                <div className="pb-10">
                    <div className="flex items-center md:items-end gap-5 md:gap-1">
                        <i className="fa-thin fa-bullseye-arrow text-3xl text-secondary dark:text-white"></i>
                        <p className="text-2xl font-medium text-secondary  capitalize">About {dataGlobal.name}</p>
                    </div>
                    <h2 className="text-3xl font-bold text-primary mt-5 text-center md:text-start">
                        {aboutSection[0].title}
                    </h2>
                    <p className="text-center md:text-justify mt-5 dark:text-white text-black">
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
                            {/* <button onClick={toggleDarkMode} className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
                                Cambiar Modo
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="aspect-auto flex md:flex-row md:space-x-10 space-x-0 space-y-10 md:space-y-0 flex-col h-auto md:h-full w-full md:w-1/2 justify-center items-center">
                <div className="md:w-[40%] w-full flex flex-col space-y-10">
                    <div className="w-full md:h-[40%] h-full flex justify-center">
                        <div className="bg-secondary rounded-lg h-full w-full flex justify-center py-5 space-x-4 items-center">
                            <div>
                                {
                                    !dataGlobal.widgets.onePages && (
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex justify-center py-5 items-center space-x-5">
                                                <a
                                                    href="/about"
                                                    className="bg-slate-50 text-primary rounded-lg font-bold p-4 px-5 hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                                                    aria-label="Read more about us"
                                                >
                                                    <i className="fa-regular fa-medal text-4xl"></i>
                                                </a>
                                                <p className="text-center md:text-start text-white font-bold text-5xl">{dataGlobal.yearsExperience}+</p>
                                            </div>

                                            <p className="text-center md:text-start text-2xl text-white font-bold ">Years of Experience</p>
                                        </div>

                                    )
                                }
                            </div>




                        </div>
                    </div>
                    <LazyImage className="w-full h-[60vh] rounded-lg object-cover" src={aboutSection[0].additionalImages[1]} alt="img1" height={250} />
                </div>

                <div className="md:w-[40%] w-full">
                    <LazyImage className="w-full h-[80vh] rounded-lg object-cover flex mx-auto md:mx-0" src={aboutSection[0].additionalImages[2]} alt="img1" height={250} />
                </div>

            </div>
        </div>
    );
}

export default AboutBlocks2;