import Logo from "./Logo";
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-azul-escuro text-cinza-claro p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-start text-center md:text-left break-words">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>

        {/* OAB & CNPJ */}
        <ul>
          <li className="font-[merriweather] text-cobre-claro font-medium mb-1">
            OAB & CNPJ
          </li>
          <li><strong>OAB/RS</strong> 98.893</li>
          <li><strong>OAB/RS</strong> 7.201</li>
          <li><strong>CNPJ:</strong> 28.769.613/0001-07</li>
        </ul>

        {/* WhatsApp */}
        <ul>
          <li className="font-[merriweather] text-cobre-claro font-medium mb-1">
            WhatsApp
          </li>
          <li><strong>51</strong> 98111-3381</li>
          <li><strong>51</strong> 99880-3090</li>
        </ul>

        {/* E-mail */}
        <ul>
          <li className="font-[merriweather] text-cobre-claro font-medium mb-1">
            E-mail
          </li>
          <li>castroconsultores@yahoo.com.br</li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="mt-5 border-t border-cinza-claro/30 pt-3 text-center">
        <p className="font-[merriweather] text-sm">
          © Copyright - Castro Sociedade Individual de Advocacia
        </p>
      </div>
    </footer>
  );
}
