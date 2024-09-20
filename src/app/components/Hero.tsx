"use client";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center flex flex-col md:flex-row gap-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <img
            src="/logo.png"
            alt="Logo flutuante"
            className="w-[180px] md:w-[220px]"
          />
        </motion.div>

        <img
          src="/logo-text.png"
          alt="Play ta on"
          className="w-[200px] md:w-[300px]"
        />
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            Solução ultrarápida para seu negócio
          </h1>
          <p className="mb-5">
            Através da nossa ferramenta de gerenciamento, roteirização e
            acompanhamento (tracking), tudo em tempo real.
          </p>
          <button className="btn btn-primary ">Seja membro</button>
        </div>
      </div>
    </div>
  );
};
