import React from "react";

export default function Itinerario(){
    return(
        <div className="itinerario-bg w-full h-screen py-3">
            <h1 className="elegant text-8xl text-center font-normal">Itinerario</h1>
            <div className="w-full p-10">
                <div className="background-opacity mb-10 w-full flex items-center justify-center p-8 relative">
                    <img src="/img/church.svg" className="absolute w-14 icon-absolute" alt="" />
                    <p className="font-semibold mt-2">Iglesia</p>
                </div>
                <div className="background-opacity mb-10 w-full flex items-center justify-center p-8 relative">
                    <img src="/img/guitar.svg" className="absolute w-14 icon-absolute" alt="" />
                    <p className="font-semibold mt-2">Música</p>
                </div>
                <div className="background-opacity mb-10 w-full flex items-center justify-center p-8 relative">
                    <img src="/img/cheers.svg" className="absolute w-14 icon-absolute" alt="" />
                    <p className="font-semibold mt-2">Fiesta</p>
                </div>
                <div className="background-opacity w-full flex items-center justify-center p-8 relative">
                    <img src="/img/food.svg" className="absolute w-14 icon-absolute" alt="" />
                    <p className="font-semibold mt-2">Cena</p>
                </div>
            </div>
        </div>
    );
}