"use client";
import { useState, useEffect } from "react";
import React from "react";
import Location from "../app/Location";
import Itinerario from "../app/Itinerario";
import Regalo from "../app/Regalo";
import Asistencia from "../app/Asistencia";

export default function Index() {
  const targetDate = new Date("November 25, 2023 17:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);

    return {
      days,
      hours,
      minutes,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="">
      <div className="h-screen">
        <header className="w-full h-auto p-2 bg-gray-200 flex justify-center items-center">
          <h1 className="md:text-4xl text-3xl m-4 text-center font-serif tracking-wider font-bold">
            NUESTRA BODA
          </h1>
        </header>
        <div className="">
          <div className="florero-background ">
            <div className="h-1/4 w-full z-10 background-opacity flex justify-center items-center ">
              <img src="/" alt="" />
              <h1 className="elegant font-bold text-6xl md:text-8xl text-black/100 z-10 text-center">
                Salma & Javier
              </h1>
            </div>
            <div className="my-5 flex flex-col justify-around w-full h-1/4 px-5">
              <h3 className="font-sans font-semibold text-xl md:text-2xl spacing-big text-center my-5">
                SÁBADO 25 NOVIEMBRE 2023
              </h3>
              <h3 className="font-sans font-semibold text-xl md:text-2xl tracking-widest text-center my-5">
                JUANACATLÁN, JALISCO, MÉX.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-300 px-4 py-10">
          <div className="w-100 px-10 py-2 m-2 mt-0 bg-black flex justify-between">
            <p className="text-white">DÍAS</p>
            <p className="text-white">HRS</p>
            <p className="text-white">MIN</p>
          </div>
          <div className="w-100 m-2 flex justify-between">
            <div className="bg-black w-24 flex items-center justify-center">
              <h1 className="text-white text-4xl m-2">{timeLeft.days}</h1>
            </div>
            <div className="bg-black w-24 flex items-center justify-center">
              <h1 className="text-white p-4 text-4xl m-2">{timeLeft.hours}</h1>
            </div>
            <div className="bg-black w-24 flex items-center justify-center">
              <h1 className="text-white p-4 text-4xl m-2">
                {timeLeft.minutes}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Location></Location>
      <Itinerario></Itinerario>
      <Regalo/>
      <Asistencia/>
    </div>
  );
}
