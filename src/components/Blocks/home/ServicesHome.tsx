import type { ApiData, SectionsHomeAbout, Service } from "@/interfaces/dbData";


import SliderServices from "../../Sliders/SliderServices";

interface ServicesHomeProps {
    dataGlobal: ApiData;
    homeSection: SectionsHomeAbout[];
    landingServices: boolean;
    dbServices: Service[];
}

const ServicesHome: React.FC<ServicesHomeProps> = ({ dataGlobal, homeSection, landingServices, dbServices }) => {

    return (
        <div className="w-4/5 mx-auto py-20 md:pb-32">
            <div className="flex flex-col md:flex-row gap-10 pb-10">
                <div className="w-full md:w-1/2">
                    <div className="flex gap-5 items-center">
                        {/* <PiTreeFill className="text-4xl text-primary" /> */}
                        <i className="fa-solid fa-tree-deciduous text-4xl text-primary"></i>
                        <span className="text-xl font-medium text-primary capitalize">
                            {dataGlobal.name}
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary my-5 capitalize text-center md:text-start">
                        {homeSection[1].title}
                    </h2>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-center md:text-justify pb-3">
                        {(() => {
                            const text = homeSection[1].text;
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
                        !dataGlobal.widgets.onePages && (
                            <div className="flex items-center justify-center md:justify-start gap-1" >
                                <a
                                    href="/services"
                                    className="flex items-center gap-1 text-secondary font-bold capitalize underline"
                                    aria-label="see all the services we provide"
                                >
                                    <span>see all the services we provide </span>
                                    <i className="fa-solid fa-chevrons-right text-sm"></i>
                                </a>

                            </div>
                        )
                    }

                </div>
            </div>
            <SliderServices dbServices={dbServices} landingServices={landingServices} onePage={dataGlobal.widgets.onePages} dataGeneral={dataGlobal.dataGeneral} />
        </div>
    );
}
export default ServicesHome;