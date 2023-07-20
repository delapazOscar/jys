import React from "react";

export default function Asistencia() {
  return (
    <div>
      <div className="w-full p-5 flex justify-center bg-blue-300">
        <h1 className="elegant text-8xl text-center">Confirmar Asistencia</h1>
      </div>
      <img src="/img/asistencia.PNG" className="h-full" alt="" />
      <div className="w-full p-5 flex items-center justify-center flex-col bg-blue-300">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeVVaKw-2o-eYmASiffsX9fa2fW3HcThNtUW9oKN0hzRw05kw/viewform?usp=sf_link" className="w-36 mb-5 bg-slate-200 p-2 text-center font-bold">RSVP</a>
        <h1 className="elegant text-4xl text-center">Salma y Javier</h1>
      </div>
    </div>
  );
}
