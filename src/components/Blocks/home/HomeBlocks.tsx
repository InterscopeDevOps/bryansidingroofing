import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface HomeBlocksProps {
    homeSection: SectionsHomeAbout[];
    dataPhone: Phone[];
    onePages: boolean;
}


const HomeBlocks: React.FC<HomeBlocksProps> = ({ homeSection, dataPhone, onePages }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto flex flex-col-reverse md:flex-row gap-5 py-10 md:py-28">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:pr-10 md:pl-0">
                <i className="fa-solid fa-house-person-leave text-4xl text-primary text-center md:text-start"></i>
                <h2 className="text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start">
                    {homeSection[0].title}
                </h2>
                <p className="text-center md:text-justify pb-3">
                    {homeSection[0].text}
                </p>
                <div className="py-5 text-center md:text-start">
                {
                                onePages ? (
                                    <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${dataPhone[0].number}`} />
                                ) : (
                                    <ButtonContent_2 />
                                )
                            }
                </div>
            </div>
            <div className="w-full md:w-1/2 pb-10 md:pb-0">
                <div className="w-full flex items-center gap-5 relative">
                    <div
                        className="w-[55%] shadow-md h-[450px] md:h-[70vh] aspect-auto"
                        style={{
                            backgroundImage: `url("${homeSection[0].additionalImages[0]}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div
                        className="w-[45%] h-[350px] md:h-[50vh] shadow-md aspect-auto"
                        style={{
                            backgroundImage: `url("${homeSection[0].additionalImages[1]}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="absolute flex justify-center items-center w-full">
                        <div className="bg-white rounded-full p-4 shadow">
                            <a
                                href={`tel:+1${dataPhone[0].number}`}
                                className="bg-white rounded-full w-36 h-36 md:w-52 md:h-52 border-2 border-spacing-5 border-dashed border-secondary flex flex-col justify-center items-center gap-2 md:gap-5">
                                <i className="fa-solid fa-phone-rotary text-secondary text-5xl"></i>
                                <p className="text-secondary text-center font-bold capitalize text-lg md:text-2xl">
                                    Call us now
                                </p>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default HomeBlocks;