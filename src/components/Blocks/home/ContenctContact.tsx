import type { ApiData } from "@/interfaces/dbData"
import ContactForm from "../contact/ContactForm";
import LazyImage from "@/components/LazyImage";


interface ContentContactProps {
    dataGlobal: ApiData;
    bgImage: string;
}

const ContentContact: React.FC<ContentContactProps> = ({ dataGlobal, bgImage }) => {
    return (
        <div className="w-full md:w-[70%] mx-auto h-full flex flex-col md:flex-row gap-5 py-24 md:py-32 relative">
            <div className="w-full md:w-[70%]">
                <div className="flex items-center justify-center md:justify-start gap-3 pb-3 w-4/5 mx-auto md:w-full text-black dark:text-white ">
                    <i className="fa-solid fa-envelopes text-3xl"></i>
                    <p className="text-2xl font-bold capitalize">Contact Us</p>
                </div>
                <h2 className="text-4xl font-bold text-primary capitalize text-center md:text-start">Get in touch with us</h2>
                <div className="w-full h-full pt-10 pb-0 md:py-10">
                    <LazyImage
                        src={bgImage}
                        alt="Contact us"
                        className="w-full h-[300px] md:h-[650px] object-cover  shadow-xl border-r-0 border-b-[20px] md:border-b-0 md:border-r-[20px] border-secondary aspect-auto "
                        height={300}
                    />
                    {/* <img
                        src={bgImage}
                        alt="Contact us"
                        className="w-full h-[300px] md:h-[650px] object-cover  shadow-xl border-r-0 border-b-[20px] md:border-b-0 md:border-r-[20px] border-secondary aspect-auto "
                        loading="lazy"
                    /> */}
                </div>
            </div>

            <div className="w-4/5 mx-auto md:w-[50%] -mt-10  md:absolute md:right-0 md:top-20 md:mt-0">
                <ContactForm dataGlobal={dataGlobal} formStyles="bg-white shadow-sm rounded-t-0 rounded-b-xl md:rounded-xl p-5" />
            </div>
        </div>
    )

}

export default ContentContact;