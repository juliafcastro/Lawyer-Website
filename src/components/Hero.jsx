import justice from "../assets/justice.png";
import Nav from "./Nav";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center px-20 items-start"
      style={{ backgroundImage: `url(${justice})` }}
    >
      <div className="fixed top-0 mt-4">
        <Nav />
      </div>

      <h1 className="font-[merriweather] text-[#fcf4e6] font-bold max-w-110 text-3xl mb-5">
        Defendendo seus direitos previdenciários com experiência e compromisso.
      </h1>
      <h4 className="font-sans text-[#fcf4e6] max-w-80">
        Especialista em aposentadorias, auxílios e revisões do INSS.
      </h4>

      <button
  className="
    relative group
    px-6 py-2
    text-[18px] font-semibold
    text-[#d48550]
    border-2 border-[#d48550]
    rounded-full
    bg-transparent
    mt-4
    overflow-hidden
    transition-all duration-300
    ease-[cubic-bezier(0.23,2,0.32,2)]
    hover:scale-110
    hover:text-white
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    cursor-pointer
  "
>
  <span className="relative z-10">Agende uma consulta</span>

  
  <span
    className="
      absolute inset-0
      m-auto
      w-20 h-[50px]
      rounded-full
      bg-[#d48550]
      scale-0
      transition-all duration-1200
      ease-[cubic-bezier(0.23,1,0.32,1)]
      group-hover:scale-[3]
      z-0
    "
  ></span>
</button>

    </div>
  );
}
