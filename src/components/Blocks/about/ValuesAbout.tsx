import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { SectionsHomeAbout, ValuesContent } from "@/interfaces/dbData";

interface ValuesAboutProps {
    dataAbout: SectionsHomeAbout[];
    nameCompany: string;
    valueContent: ValuesContent;
}

const ValuesAbout: React.FC<ValuesAboutProps> = ({ dataAbout, nameCompany, valueContent }) => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex flex-col md:flex-row gap-10 ">
                <div className="w-full md:w-1/2">
                    <div className="flex gap-5 items-center">
                        <i className="fa-solid fa-leaf text-4xl text-primary -rotate-90"></i>
                        <span className="text-xl font-medium text-primary capitalize">
                            {nameCompany}
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary mt-5 mb-0 md:my-5 capitalize text-center md:text-start">
                        {dataAbout[0].title}
                    </h2>
                    {
                        dataAbout[0].list.length > 0 && (
                            <ul className="list-disc list-inside md:grid grid-cols-1 md:grid-cols-2 hidden">
                                {dataAbout[0].list.map((item, index) => (
                                    <li key={index} className="text-lg pb-3 font-semibold">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-center md:text-justify pb-3"> {dataAbout[0].text} </p>
                    {
                        dataAbout[0].list.length > 0 && (
                            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 md:hidden">
                                {dataAbout[0].list.map((item, index) => (
                                    <li key={index} className="text-lg pb-3 font-semibold">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    <div className="text-center md:text-start py-5" >
                        <ButtonContent_2 />

                    </div>
                </div>
            </div>

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    valueContent.additionalImages.slice(0, 3).map((item, index) => (
                        <div key={index}>
                            <LazyImage src={`${item}`} alt="Values Image" height={300} className={`w-full h-[300px] md:h-[350px] object-cover shadow ${index === 0 ? 'block' : 'hidden md:block'}`} />
                        </div>
                    ))
                }
            </div>
            <div className="w-full md:w-[85%] mx-auto bg-[#FCFAF7] shadow-md grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:py-10 md:px-20 -mt-10 md:-mt-24 mb-28 relative">
                <div className="text-center" >
                    <i className="fa-light fa-wreath-laurel text-5xl text-btnHover mx-auto my-5"></i>
                    <p className="text-2xl font-bold text-secondary capitalize text-center pb-3">
                        mission
                    </p>
                    <p className="text-center">
                        {valueContent.mission}
                    </p>
                </div>
                <div
                    className="relative border aspect-auto rounded-2xl before:absolute before:w-full before:h-full before:rounded-2xl before:bg-green-900/80 before:top-0 before:left-0"
                    style={{
                        backgroundImage: `url(${valueContent.additionalImages[3]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="text-center relative p-5">

                        <i className="fa-light fa-eye text-5xl text-white mx-auto my-5"></i>
                        <p className="text-2xl font-bold text-white capitalize text-center pb-3">
                            vision
                        </p>
                        <p className="text-center text-white">
                            {valueContent.vision}
                        </p>
                    </div>
                </div>
                <div className="text-center" >
                    <i className="fa-light fa-hand-heart text-5xl text-btnHover mx-auto my-5"></i>
                    <p className="text-2xl font-bold text-secondary capitalize text-center pb-3">
                        why choose us
                    </p>
                    <p className="text-center">
                        {valueContent.whychooseUs}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ValuesAbout