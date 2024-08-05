import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { Phone, Service } from "@/interfaces/dbData";
import React from "react";

interface ServicesComponentProps {
  dataServices: Service[];
  onePages?: boolean;
  dataPhone?: Phone[];
}

const ServicesComponent: React.FC<ServicesComponentProps> = ({ dataServices, onePages, dataPhone }) => {
  let lastFlexClass = "flex-col-reverse md:flex-row "; // Inicializa con la clase del primer elemento.
  let lastRoundedClass = "rounded-t-full border-b-[20px] border-btnHover"; // Inicializa con la clase del primer elemento.


  return (
    <div className="w-4/5 mx-auto pt-10 pb-28">
      <div className="my-10">
      <h2 className="text-5xl font-bold text-center mb-5 text-black dark:text-white ">Our Services</h2>
      <div
      className="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"
    ></div>
      </div>
      {dataServices.map((service, serviceIndex) => (
        <div key={serviceIndex}>
          {service.description.map((desc, descIndex, descArray) => {
            // Determina si es la última descripción de este servicio.
            const isLastDescription = descIndex === descArray.length - 1;
            let flexClass;
            let roundedClass;

            if (isLastDescription) {
              // Asegura que la última descripción use una clase diferente a la última usada.
              flexClass = lastFlexClass === "flex-col-reverse md:flex-row " ?
                "flex-col-reverse md:flex-row-reverse" :
                "flex-col-reverse md:flex-row ";
              roundedClass = lastRoundedClass === "rounded-t-full border-b-[20px] border-btnHover" ?
                "rounded-t-full border-b-[20px] md:rounded-b-full md:border-t-[20px] md:rounded-t-none md:border-b-0  border-btnHover"
                : "rounded-t-full border-b-[20px] border-btnHover";
              // Actualiza lastFlexClass para el próximo servicio.
              lastFlexClass = flexClass;
              lastRoundedClass = roundedClass;
            } else {
              // Alterna normalmente si no es la última descripción.
              flexClass = descIndex % 2 === 0 ? "flex-col-reverse md:flex-row " : "flex-col-reverse md:flex-row-reverse";
              roundedClass = descIndex % 2 === 0 ? "rounded-t-full border-b-[20px] border-btnHover" : "rounded-t-full border-b-[20px] md:rounded-b-full md:border-t-[20px] md:rounded-t-none md:border-b-0  border-btnHover";
            }

            const titleVisibility = descIndex === 0 ? "block" : "hidden";

            return (
              <div
                className={`flex ${flexClass} items-center  md:p-0 px-2 my-[100px] gap-10`}
                key={descIndex}
              >
                <div className={`md:w-[50%] md:self-center md:my-[-40px] md:p-10 p-4 `}>
                  <div className={`${titleVisibility} flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 pb-5 `}>
                    <span className="text-4xl text-btnHover hidden md:block"><i className="fa-solid fa-pipe "></i></span>
                    <h3 className="text-center md:text-start capitalize text-secondary text-4xl font-bold ">
                      {service.title}
                    </h3>
                    <span className="text-4xl text-btnHover block md:hidden -mt-3"> <i className="fa-solid fa-horizontal-rule"></i></span>

                  </div>
                  <p className="text-center md:text-justify text-black dark:text-white ">{desc.text}</p>
                  <div className="py-5 flex justify-center md:justify-start">
                    {
                      onePages ? (
                        <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${dataPhone && dataPhone[0].number}`} />
                      ) : (
                        <ButtonContent_2 />
                      )
                    }
                  </div>
                </div>
                <div className="md:w-[50%] w-full flex self-center">
                  <div className={`w-full md:h-[500px] h-[350px]`}>
                    {/* Aquí iría tu imagen de fondo si es necesaria */}
                    <LazyImage
                      src={desc.image}
                      alt="Placeholder"
                      className={`w-full h-full object-cover ${roundedClass}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ServicesComponent;
