
import "react-multi-carousel/lib/styles.css";
import {
  Accessibility,
  HandCoins,
  ClockFading,
  FileClock,
  CircleDollarSign,
  ClipboardPenLine,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "DIREITO PREVIDENCIÁRIO",
    description:
      "Atuamos em aposentadorias, revisões e benefícios, garantindo os direitos previdenciários com segurança e eficiência.",
    icon: <HandCoins size={35} />,
     whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Direito Previdenciário."
  },
  {
    id: 2,
    title: "DIREITO PENAL",
    description:
      "Atuamos em aposentadorias, revisões e benefícios, garantindo os direitos previdenciários com segurança e eficiência.",
    icon: <Accessibility size={35} />,
    whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Direito Penal."
  },
  {
    id: 3,
    title: "EXECUÇÃO PENAL",
    description:
      "Prestamos acompanhamento em todas as etapas da execução de penas, assegurando cumprimento correto e orientação especializada.",
    icon: <ClockFading size={35} />,
    whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Execução Penal."
  },
  {
    id: 4,
    title: "DIREITO DE FAMÍLIA",
    description:
      "Atuamos em divórcios, guarda, pensões e inventários, proporcionando suporte jurídico sério e confiável em questões familiares.",
    icon: <FileClock size={35} />,
    whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Direito de Família."
  },
  {
    id: 5,
    title: "PROCESSO ADMINISTRATIVO",
    description:
      "Representamos clientes em recursos, sindicâncias e aposentadorias de servidores, com foco na regularidade e eficiência dos procedimentos.",
    icon: <CircleDollarSign size={35} />,
    whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Processo Administrativo."
  },
  {
    id: 6,
    title: "PREVIDÊNCIA ESPECIAL E RURAL",
    description:
      "Oferecemos orientação em salário-maternidade rural, averbações e regularizações, garantindo acesso a todos os direitos especiais do segurado.",
    icon: <ClipboardPenLine size={35} />,
    whatsappMessage: "Olá, vim pelo site e gostaria de mais informações sobre Previdência Especial e Rural."
  },
];

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Cards() {
  return (
    <section className="bg-white min-h-8xl flex flex-col w-full justify-center items-center text-white py-20 px-6 sm:px-4 md:px-2">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-x-14 md:max-w-6xl xl:max-w-8xl mx-auto">
        
          <h3 className="font-[merriweather] text-3xl text-azul-escuro text-center lg:text-left md:col-span-2 lg:col-span-1">
          Explore Nossos Serviços Previdenciários
        </h3>
        
        <p className="md:col-span-2 text-lg font-medium text-azul-escuro/80 text-justify lg:text-left md:px-20 lg:px-0">
          Orientamos em aposentadorias, auxílios e revisões, garantindo seus
          direitos com segurança e eficiência.
        </p>

        {cards.map((card) => (
          <div
            key={card.id}
            className="relative bg-azul-escuro border overflow-hidden shadow-lg hover:drop-shadow-2xl p-6 flex flex-col justify-between rounded-xs transition-all duration-400 hover:scale-103 transform
             group"
          >
            <span
              className="absolute top-[-10%] right-10 w-20 h-20 bg-white rounded-full blur-3xl opacity-60
                   transition-all duration-500 transform 
                   group-hover:translate-x-6 group-hover:-translate-y-8"
            ></span>
            <span
              className="absolute bottom-[-10%] right-16 w-24 h-24 bg-cobre-claro rounded-full blur-3xl opacity-60
                   transition-all duration-500 transform 
                   group-hover:translate-x-8 group-hover:translate-y-10"
            ></span>

            <div>
              <RevealOnScroll>
              <h4 className="text-xl font-semibold mb-3 font-[merriweather]">
                {card.title}
              </h4>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.5}><p className="text-gray-200 ">{card.description}</p></RevealOnScroll>
              
            </div>
            <hr className="border-t border-gray-600 my-5" />
            <div className="flex items-center justify-between text-[#c47b40]">
              <RevealOnScroll delay={0.5}>{card.icon && card.icon}</RevealOnScroll>
              
              <RevealOnScroll delay={0.5}><a
              href={`https://wa.me/5551981113381?text=${encodeURIComponent(card.whatsappMessage)}`}
  target="_blank"
                className="relative group p-2 text-sm font-semibold text-cobre-claro border-2 border-cobre-claro bg-transparent mt-4 overflow-hidden
             transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
             hover:scale-102 hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
             active:scale-100 cursor-pointer font-[merriweather]"
              >
                Saiba mais
                
              </a></RevealOnScroll>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
