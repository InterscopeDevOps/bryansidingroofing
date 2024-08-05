import type { ApiData } from "@/interfaces/dbData";
import React from 'react';


interface ValuesAbout3Props {
    dataGlobal: ApiData;
    nameCompany: string;
};


const ValuesAbout3: React.FC<ValuesAbout3Props> = ({ nameCompany, dataGlobal }) => {
    return (
        <section>
            <div className="my-5">
                <div className="md:w-2/3 w-full md:text-start text-center  md:mx-auto mt-6">
                    <h2 className="text-primary font-semibold text-3xl">{nameCompany}</h2>
                    <p className="text-black dark:text-white text-xl font-semibold"> {dataGlobal.slogan[1]} </p>
                </div>
                <div className="md:w-4/5 md:mx-auto w-full flex flex-col md:flex-row md:mb-0 mb-10">
                    <div className="md:w-[60%]">

                        <div
                            className=" w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%] text-black dark:text-white " >
                                <i className="fa-light fa-wreath-laurel text-5xl text-btnHover mx-auto my-5"></i>
                                <span className="capitalize font-bold">Mission</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%] text-black dark:text-white ">
                                <p className="md:text-start">{dataGlobal.valuesContent.mission}</p>
                            </div>
                        </div>


                        <div
                            className="w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%] text-black dark:text-white ">
                                <i className="fa-light fa-hand-holding-seedling text-5xl text-btnHover"></i>
                                <span className="capitalize font-bold">Vision</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%] text-black dark:text-white ">
                                <p className="md:text-start">{dataGlobal.valuesContent.vision}</p>
                            </div>
                        </div>


                        <div
                            className=" w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
                        >
                            <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%] text-black dark:text-white ">
                                <i className="fa-light fa-handshake text-5xl text-btnHover"></i>
                                <span className="capitalize font-bold">Why Choose Us</span>
                            </div>
                            <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%] text-black dark:text-white ">
                                <p className="md:text-start">{dataGlobal.valuesContent.whychooseUs}</p>
                            </div>
                        </div>


                    </div>
                    <div className="md:w-[40%] w-full md:h-auto h-[300px] my-5 md:my-0 items-center flex">
                        <div
                            className="w-full md:h-[500px] h-[350px] bg-cover bg-center  rounded-md"
                            style={{ backgroundImage: `url("${dataGlobal.valuesContent.additionalImages[0]}")` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ValuesAbout3;