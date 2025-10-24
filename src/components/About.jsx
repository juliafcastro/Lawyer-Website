import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import adv from "./../assets/adv.jpg";
import { Scale, Handshake, MessageSquare } from "lucide-react";

// ===============================================================
// ✅ Contador Animado
// ===============================================================
const AnimatedCounter = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// ===============================================================
// ✅ Animação de Revelar no Scroll
// ===============================================================
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// ===============================================================
// ✅ Seção "Sobre"
// ===============================================================
export default function About() {
  return (
    <section className="bg-azul-escuro py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* ==== LADO ESQUERDO (TEXTO) ==== */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <RevealOnScroll delay={0.1}>
            <p className="text-[#c47b40] font-semibold tracking-wide">
              Confiança. Experiência. Resultado.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-cobre-claro font-[merriweather]">
              SOBRE O ADVOGADO
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-white leading-relaxed text-base text-justify">
              Com mais de{" "}
              <span className="font-[merriweather]">
                25 anos de experiência
              </span>
              , Julecir de Oliveira Castro{" "}
              <span className="font-[merriweather]">(OAB/RS 098893)</span> é
              advogado previdenciário especializado na proteção dos direitos dos
              segurados e beneficiários do INSS. Atua com precisão técnica,
              ética e comprometimento, oferecendo
              <span className="font-[merriweather]">
                {" "}
                soluções eficazes em aposentadorias, auxílios e revisões
                previdenciárias.
              </span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            {" "}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 sm:gap-2 sm:min-w-sm">
              {" "}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                {" "}
                <Scale className="text-[#c47b40] mb-3" size={36} />{" "}
                <h4 className="font-[merriweather] text-light">
                  Conhecimento Local
                </h4>{" "}
                <p className="text-sm text-light mt-2">
                  {" "}
                  Profundo entendimento das leis e práticas jurídicas regionais.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                {" "}
                <Handshake className="text-[#c47b40] mb-3" size={36} />{" "}
                <h4 className="font-[merriweather] text-white">
                  Atendimento Personalizado
                </h4>{" "}
                <p className="text-sm text-light mt-2">
                  {" "}
                  Estratégias únicas adaptadas à situação de cada cliente.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                {" "}
                <MessageSquare className="text-[#c47b40] mb-3" size={36} />{" "}
                <h4 className="font-[merriweather] text-white">
                  Comunicação Clara
                </h4>{" "}
                <p className="text-sm text-white mt-2">
                  {" "}
                  Transparência total sobre opções e andamento dos processos.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="grid grid-cols-3 gap-6 text-center mt-10">
              <div>
                <p className="md:text-3xl text-2xl font-bold text-[#c47b40] font-[merriweather]">
                  +<AnimatedCounter to={25} />
                </p>
                <p className="text-white text-sm mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="md:text-3xl text-2xl font-bold text-[#c47b40] font-[merriweather]">
                  3
                </p>
                <p className="text-white text-sm mt-1">Áreas de atuação</p>
              </div>
              <div>
                <p className="md:text-3xl text-2xl font-bold text-[#c47b40] font-[merriweather]">
                  1999
                </p>
                <p className="text-white text-sm mt-1">Formado em Direito</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ==== LADO DIREITO (IMAGEM) ==== */}
        {/* ==== LADO DIREITO (IMAGEM) ==== */}
        <div className="flex-1 flex justify-center md:justify-end lg:max-w-100">
          <RevealOnScroll delay={0.3}>
            {/* REMOVA w-[80%] e max-w-* daqui */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 border-2 border-[#c47b40] w-full h-full"></div>
              <img
                src={adv}
                alt="Julecir de Oliveira Castro"
                className="relative z-10 shadow-xl object-cover w-full" /* Talvez precise ajustar object-position */
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
