// Cards.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import revisao from "./../assets/revisao.jpg"
import aposentadoriatempo from "./../assets/aposentadoria-tempo.jpg"
import representacao from "./../assets/representacao.jpg"

const cards = [
    { id: 1, title: "Auxílio Doença", image: "img1.jpg" },
    { id: 2, title: "Aposentadoria por invalidez", image: "" },
    { id: 3, title: "Aposentadoria por tempo de contribuição", image: aposentadoriatempo },
    { id: 4, title: "Revisão da vida toda", image: revisao },
    { id: 5, title: "Pensão por morte", image: "img3.jpg" },
    { id: 6, title: "Planejamento previdenciário", image: "img3.jpg" },
    { id: 7, title: "Representação judicial", image: representacao },
  ];

export default function Cards() {
    const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  

  return (
    <section className="bg-[#0f1320] text-white py-16 flex">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between mb-8">
        <div>
          <p className="text-cobre-claro text-sm uppercase tracking-wide font-[merriweather]">serviços</p>
          <h2 className="text-3xl font-semibold leading-snug font-[merriweather]">
            Diferentes casos, <span className="italic underline font-[merriweather]">diferentes serviços.</span>
          </h2>
        </div>

        {/* botões (sem estado, só animação visual) */}
        <div className="flex gap-3">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-cobre-claro hover:bg-cobre-claro cursor-pointer hover:text-[#0f1a26] transition-all">
            ←
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-cobre-claro hover:bg-cobre-claro cursor-pointer hover:text-[#0f1a26] transition-all">
            →
          </button>
        </div>
      </div>

      {/* container de scroll com animação */}
      <div className="md:w-2/3 flex gap-6 overflow-hidden mr-3">
        <AnimatePresence initial={false}>
          {cards.slice(index, index + 3).map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="relative w-[250px] h-[320px] rounded-lg overflow-hidden group flex-shrink-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-semibold font-[merriweather]">{card.title}</h3>
                <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-cobre-claro cursor-pointer transition-all duration-300">
                  <ArrowRight className="text-white group-hover:text-black w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
