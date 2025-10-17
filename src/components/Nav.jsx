import { Scale } from 'lucide-react';

export default function Nav() {
    return(
        <div className="flex items-center justify-around bg-[#2f313b] w-80 h-[40px] rounded-full shadow-lg shadow-[#060915]/50 hover:w-90 transition-all duration-500 ease-in-out">
      {["Home", "Serviços", "Sobre", "Contatos"].map((item, index) => (
        <button
          key={index}
          className="text-white font-medium text-sm px-3 py-1 rounded-full hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          {item}
        </button>
      ))}
    </div>
    )
}