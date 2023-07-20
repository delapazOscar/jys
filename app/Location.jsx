import React from "react";

export default function Location(){
    return (
        <div className="bg-sky-900 h-screen">
            <div className="flex justify-center items-center W-full h-32 ">
                <h1 className="elegant text-8xl font-normal">Ubicación</h1>
            </div>
            <img src="/img/location.jpg" alt="" />
            <div className="w-full px-5 py-10 bg-cyan-600">
                <div className="background-opacity py-2 px-3 flex flex-col justify-between h-40">
                    <div className="w-full">
                        <div className="flex">
                            <img className="w-5" src="/img/location.svg" alt="" />
                            <p className="elegant text-3xl ml-3">Parroquia Virgen de Guadalupe</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <p className="text-xs">Allende #1, Col. Centro, Juanacatlán, Jalisco.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <img className="w-5" src="/img/location.svg" alt="" />
                            <p className="elegant text-3xl ml-3">Terraza El Tuzo</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <p className="text-xs">16 de Septiembre S/N, Juanacatlán, Jalisco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}