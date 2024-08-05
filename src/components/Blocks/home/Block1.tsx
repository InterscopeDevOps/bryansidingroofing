import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface HomeBlocksProps {
    homeSection: SectionsHomeAbout[];
    dataPhone: Phone[];
    onePages: boolean;
}

const Block1: React.FC<HomeBlocksProps> = ({ homeSection, dataPhone, onePages }) => {
    return (
        <div className='py-[150px]' data-aos="fade-up">
            <div className='w-[95%] md:w-[90%] mx-auto'>
                <div className='border-[10px] border-btnBorder flex flex-col-reverse md:flex-row px-1 md:px-10'>
                    <div className='w-full md:w-1/2  dark:bg-[#1e1e1e] bg-white shadow-lg mr-0 -mb-20 mt-5 md:mr-2 md:-my-20 px-10 py-12 flex flex-col justify-center text-center md:text-start'>

                        <h2 className='pb-3 text-primary capitalize font-extrabold text-5xl'>
                            {homeSection[0].title}
                        </h2>

                        <p className='pb-3 dark:text-white text-black'>
                            {homeSection[0].text}
                        </p>


                        <div>
                            {
                                onePages ? (
                                    <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${dataPhone[0].number}`} />
                                ) : (
                                    <ButtonContent_2 />
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-wrap md:w-1/2 ml-0 -mt-20 mb-0 md:ml-2 md:-my-20'>
                        <picture>
                            <img
                                className="rounded-2xl lg:mr-[5px] lg:mb-2 dark:border-[#1e1e1e] border-white border-[5px] shadow-sm md:w-[300px] h-[150px] md:h-[300px] object-center object-cover'"
                                alt="IMG1"
                                src={homeSection[0].additionalImages[0]} />

                        </picture>
                        <picture>
                            <img
                                className="rounded-2xl  lg:-mt-5 dark:border-[#1e1e1e] border-white border-[5px] shadow-sm md:w-[300px] h-[150px] md:h-[300px] object-center object-cover'"
                                alt="IMG1"
                                src={homeSection[0].additionalImages[1]} />
                        </picture>
                        <picture>
                            <img
                                className="rounded-2xl  lg:mr-[5px] lg:mt-2 dark:border-[#1e1e1e] border-white border-[5px] shadow-sm md:w-[300px] h-[150px] md:h-[300px] object-center object-cover'"
                                alt="IMG1"
                                src={homeSection[0].additionalImages[2]} />
                        </picture>
                        <picture>
                            <img
                                className="rounded-2xl lg:-mt-4 dark:border-[#1e1e1e] border-white border-[5px] shadow-sm md:w-[300px] h-[150px] md:h-[300px] object-center object-cover'"
                                alt="IMG1"
                                src={homeSection[0].additionalImages[3]} />
                        </picture>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Block1;