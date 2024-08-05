
import type { ApiData } from "@/interfaces/dbData";
interface ValuesAbout2Props {
    nameCompany: string;
    dataGlobal: ApiData;
}

const ValuesAbout2: React.FC<ValuesAbout2Props> = ({ nameCompany, dataGlobal }) => {
    return (

        <section>
            <div className="w-full py-20" >

                <div className="md:w-2/3 w-full md:text-start text-center mx-auto px-5 md:px-0 py-10 text-black dark:text-white ">
                    <h4 className="font-bold text-[30px] md:text-[40px]">{nameCompany}</h4>
                    <h5 className="color-2 font-semibold text-[20px] md:text-[25px] text-black dark:text-primary ">{dataGlobal.slogan[1]}</h5>
                </div>


                <div className="md:w-4/5 md:mx-auto w-full flex flex-col md:flex-row">

                    <div className="md:w-[40%] w-full md:h-auto md:my-0 my-32 h-[200px] md:mt-0 mt-4 flex flex-col relative">
                        <div
                            className="w-full md:h-[500px] h-[350px] bg-cover bg-center corteromboclip md:block hidden"
                            style={{ backgroundImage: `url("${dataGlobal.valuesContent.additionalImages[0]}")` }}
                        >
                        </div>

                        <div className="md:block corteromboclip absolute  md:h-[170px] md:w-[170px] h-[90px] w-[90px] bg-primary corteromboclip2 md:-right-20 md:top-8 top-[190px] right-2 z-10"
                        >
                        </div>

                        <div className="corteromboclip absolute md:h-[170px] md:w-[170px] h-[100px]  w-[100px] bg-secondary corteromboclip2 md:left-[140px] md:bottom-12 left-2 bottom-[80px] z-10"
                        >
                        </div>

                        <div className="md:ml-10 ml-0 md:-mt-6 w-full md:h-auto  md:space-x-10 space-x-0 flex md:flex-row flex-col justify-center items-center"
                        >
                            <div className="w-auto h-auto">
                                <div
                                    className="w-[200px] h-[200px]  bg-cover bg-center corteromboclip  md:block  hidden -mt-16 "
                                    style={{ backgroundImage: `url("${dataGlobal.valuesContent.additionalImages[1]}")` }}
                                    data-aos="zoom-in" data-aos-duration="1000"
                                ></div>
                            </div>

                            <div className="w-auto h-auto">
                                <div
                                    className="w-[300px] h-[300px] bg-cover bg-center corteromboclip "
                                    style={{ backgroundImage: `url("${dataGlobal.valuesContent.additionalImages[2]}")` }}
                                ></div>
                            </div>
                        </div>

                    </div>


                    <div className="md:w-[60%] my-auto mx-auto">
                        <div
                            className="w-4/5 mx-auto text-start flex md:flex-row flex-col my-6 text-black dark:text-white "
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                                <i className="fa-light fa-wreath-laurel text-5xl text-btnHover mx-auto my-5"></i>
                                <span className="capitalize font-bold">mission</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                                <p className="md:text-start">
                                    {dataGlobal.valuesContent.mission}
                                </p>
                            </div>
                        </div>

                        <div
                            className="w-4/5 mx-auto text-start flex md:flex-row flex-col my-6 text-black dark:text-white "
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                                <i className="fa-light fa-hand-holding-seedling text-5xl text-btnHover"></i>
                                <span className="capitalize font-bold">Vision</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                                <p className="md:text-start">
                                    {dataGlobal.valuesContent.vision}
                                </p>
                            </div>
                        </div>

                        <div
                            className="w-4/5 mx-auto text-start flex md:flex-row flex-col my-6 text-black dark:text-white "
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                                <i className="fa-light fa-handshake text-5xl text-btnHover"></i>
                                <span className="capitalize font-bold">Why Choose Us</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                                <p className="md:text-start">
                                    {dataGlobal.valuesContent.whychooseUs}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Styles Embedded Here */}
            <style>{`
        .corteromboclip {
          clip-path: polygon(50% 100%, 100% 75%, 100% 25%, 50% 0, 0 25%, 0 75%);
        }

        .corteromboclip2 {
          clip-path: polygon(50% 100%, 100% 75%, 100% 25%, 50% 0, 0 25%, 0 75%, 50% 100%, 50% 98%, 2% 74%, 2% 26%, 50% 2%, 98% 26%, 98% 74%, 50% 98%);
        }
      `}</style>
        </section>

    )
}

export default ValuesAbout2