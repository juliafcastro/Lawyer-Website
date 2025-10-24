import { useState, useRef } from "react";
import { MailCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Form() {

  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_8yxb4kc",
        "template_r9ehmdn",
        form.current,
        "KA-qF3E98WG4r-cza"
      )
      .then(
        (result) => {
          console.log("Email enviado!", result.text);
          setIsSending(false);
          setSendSuccess(true);
          form.current.reset();
          setTimeout(() => setSendSuccess(false), 4000);
        },
        (error) => {
          console.error("ERRO:", error.text);
          setIsSending(false);
          setSendError(true);
          setTimeout(() => setSendError(false), 4000);
        }
      );
  };

  return (
    <div className="w-full md:min-w-lg bg-white rounded-x p-6 space-y-3 border-cobre-claro border flex flex-col">
      {sendSuccess ? (
        <div className="text-center space-y-4">
          <MailCheck className="mx-auto h-12 w-12 text-cobre-claro" />
          <h2 className="text-2xl font-semibold text-gray-800 font-[merriweather]">
            Mensagem Enviada!
          </h2>
          <p className="text-gray-600">
            Obrigado por entrar em contato. Retornaremos em breve.
          </p>
        </div>
      ) : (
        <>
          <header className="text-center">
            <h6 className="text-lg md:text-xl font-bold text-gray-900 font-[merriweather]">
              Envie sua mensagem
            </h6>
            <p>Responderemos o mais breve possível.</p>
          </header>

          <form ref={form} onSubmit={sendEmail} className="space-y-2 flex flex-col">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-bold text-gray-700 mb-1 font-[merriweather]"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none  focus:border-cobre-claro transition duration-200"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-1 font-[merriweather]"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-cobre-claro transition duration-200"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700 mb-1 font-[merriweather]"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-cobre-claro transition duration-200 resize-none"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSending}
                className="relative group px-2 sm:px-4 md:-6 py-2 text-md sm:text-lg font-semibold text-cobre-claro
                  border border-cobre-claro bg-transparent mt-4 overflow-hidden
                  transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
                  hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
                  active:scale-100 cursor-pointer"
              >
                <span className="relative z-10 font-[merriweather]">
                  {isSending ? "Enviando..." : "Enviar mensagem"}
                </span>

                <span
                  className="absolute inset-0 m-auto w-20 h-[50px] rounded-full bg-cobre-claro
                    scale-0 transition-all duration-1200 ease-[cubic-bezier(0.23,1,0.32,1)]
                    group-hover:scale-[3] z-0"
                ></span>
              </button>
            </div>

            {sendError && (
              <p className="text-center text-red-600 mt-2">
                Ocorreu um erro ao enviar. Tente novamente.
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
