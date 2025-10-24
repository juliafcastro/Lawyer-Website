import { Mail, Facebook, Phone } from "lucide-react";
import Form from "./Form";

export default function Contact() {



const msg = "Olá, preciso de ajuda com questões jurídicas. Como posso ser atendido?"

  return (
    <div className="bg-cinza-claro/20 min-h-max flex justify-center items-center p-2 sm:p-5 lg:p-10">
        
      <div className="max-w-5xl w-full bg-white rounded-x flex flex-col md:flex-row justify-center items-center shadow-2xl">
        {/* Lado esquerdo */}
        <div className="bg-gray-50 rounded-r-xl p-2 sm:p-5 lg:p-10">
          <Form />
        </div>
        {/* Ldo direito */}
        <div className="p-6 md:p-5 lg:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-[merriweather]">Entre em contato</h2>
          <p className="text-gray-600 mb-8">
            Escolha a forma de contato que preferir:
          </p>

          <div className="space-y-4 ">
            <a
              href="https://wa.me/5551998368987?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20Direito%20de%20Família." target="_blank"
              className="flex items-center border text-[#45C451] py-2 px-4 lg:py-3 lg:px-5 bg-transparent
    overflow-hidden
    transition-all duration-600
    hover:scale-103
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    cursor-pointer font-[merriweather]"
            >
              <Phone className="mr-2"/> Fale no WhatsApp
            </a>
            <a
              href="mailto:juliafaverodev@gmail.com"
              className="flex items-center border text-[#BA3D47] py-2 px-4 lg:py-3 lg:px-5 bg-transparent
    overflow-hidden
    transition-all duration-600
    hover:scale-103
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    cursor-pointer font-[merriweather]"
            >
              <Mail className="mr-2"/> Envie um E-mail
            </a>
            <a
              href="https://facebook.com/seuprofissional"
              target="_blank"
              className="flex items-center border text-[#2845BD] py-2 px-4 lg:py-3 lg:px-5 bg-transparent
    overflow-hidden
    transition-all duration-600
    hover:scale-103
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    cursor-pointer font-[merriweather]"
            >
              <Facebook className="mr-2"/> Fale no Facebook
            </a>
          </div>
        </div>

        {/* Lado direito */}
      </div>
    </div>
  );
}
