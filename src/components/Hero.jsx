import justice from "../assets/background.jpg";
import Nav from "./Nav";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover  bg-[center_right_20%] lg:bg-center flex flex-col justify-center px-20 items-start"
      style={{ backgroundImage: `url(${justice})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-azul-escuro via-azul-escuro/60 to-transparent">

      </div>
      
      <div className="relative z-10">
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
    text-[#ea7c33]
    border-2 border-[#ea7c33]
    bg-transparent
    mt-10
    overflow-hidden
    transition-all duration-600
    ease-[cubic-bezier(0.23,1,0.32,1)]
    hover:scale-110
    hover:text-white
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    cursor-pointer
  "
>
  <span className="relative z-10 font-[merriweather]"><a href="https://wa.me/5551981113381?text=Olá%2C%20gostaria%20de%20fazer%20uma%20consulta!" target="_blank">Faça uma consulta</a></span>
  <span
    className="
      absolute inset-0
      m-auto
      w-22 h-[50px]
      rounded-full
      bg-[#ea7c33]
      scale-0
      transition-all duration-1200
      ease-[cubic-bezier(0.23,1,0.32,1)]
      group-hover:scale-[3]
      z-0
    "
  ></span>
</button>
      </div>
      

    </div>
  );
}
