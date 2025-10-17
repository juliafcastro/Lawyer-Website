// Card.jsx
import { motion } from "framer-motion";

export default function Card({ image, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer"
    >
      <img src={image} alt={title} className="object-cover w-full h-full opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold mb-2 font-[merriweather]">{title}</h3>
        <button className="w-10 h-10 flex items-center justify-center bg-cobre-claro rounded-full hover:rotate-45 transition-transform">
          →
        </button>
      </div>
    </motion.div>
  );
}
