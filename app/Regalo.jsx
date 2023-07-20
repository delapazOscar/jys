import React from "react";
import Link from "next/link";

export default function Regalo() {
  function Alerta() {
    alert("HOla");
  }

  return (
    <div className="h-auto">
      <div className="w-100 p-5 flex justify-center bg-rose-200">
        <h1 className="elegant text-8xl text-center">Sugerencia de regalo</h1>
      </div>
      <div className="regalo-bg h-full">
        <div className="background-opacity-1 h-full">
          <div className="p-5 ">
            <div className="h-full flex flex-col items-center">
              <div className="bg-opacity h-28 mb-5 flex items-center p-5">
                <p className="text-sm text-center font-semibold">
                  Su compañía es nuestro mejor regalo, aún así, si gustan
                  obsequiarnos, dejamos estas opciones como sugerencia.
                </p>
              </div>
              <h3 className="elegant text-4xl text-center">
                Cuentas bancarias / Sobre
              </h3>
              <div className="mt-5 bg-opacity flex justify-center w-full h-24 items-center p-5">
                <p className="text-sm text-center font-semibold">Cuenta 1</p>
              </div>
              <div className="mt-5 bg-opacity flex justify-center w-full h-24 items-center p-5">
                <p className="text-sm text-center font-semibold">Cuenta 2</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full bg-rose-200 mt-5 px-4 py-14 relative">
              <h1 className="text-center elegant text-6xl">
                Sugerencia Hotel y Transporte
              </h1>
            </div>
            <div className="w-full p-5 bg-rose-200">
              <div className="flex items-center flex-col justify-center p-5 bg-slate-400">
                <img src="/img/hotel.svg" className="w-10 mb-4" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-center">Hotel Casa Blanca</p>
                  <p className="text-center m-2">Ubicación</p>
                  <a className="w-40 p-3 mt-2 bg-rose-200 rounded z-50 text-center" href={`tel:3333333333`}>Reserva aquí</a>
                </div>
              </div>
              <div className="mt-5 flex items-center flex-col justify-center p-5 bg-slate-400">
                <img src="/img/hotel.svg" className="w-10 mb-4" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-center">
                    Holiday Inn Express Carr. Chapala
                  </p>
                  <p className="text-center m-2">Ubicación</p>
                  <a className="w-40 p-3 mt-2 bg-rose-200 rounded z-50 text-center" href={`tel:3333333333`}>Reserva aquí</a>
                </div>
              </div>
              <div className="mt-5 flex items-center flex-col justify-center p-5 bg-slate-400">
                <img src="/img/car.svg" className="w-14 mb-4" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-center">Álamo</p>
                  <Link href="https://www.alamo.com.mx/es">
                    <button
                      className="w-40 p-3 mt-2 bg-rose-200 rounded z-50"
                    >
                      Reserva aquí
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
