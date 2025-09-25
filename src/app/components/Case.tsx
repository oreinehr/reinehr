import Image from "next/image";

export default function Cases() {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">
      {/* Título */}
      <h2 className="max-w-3xl text-2xl md:text-4xl font-light leading-snug mb-12">
        <span className="text-[#F2360C] font-medium">Crafting immersive</span>{" "}
        digital experiences through <br />
        UX/UI, Motion design & prototype.
      </h2>

      {/* Grid de imagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {/* Imagem 1 */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden group cursor-pointer">
          <Image
            src="/mac.png"
            alt="Case 1"
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Imagem 2 */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden group cursor-pointer">
          <Image
            src="/luci.png"
            alt="Case 2"
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Imagem 3 */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden group cursor-pointer">
          <Image
            src="/tgr.png"
            alt="Case 3"
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Imagem 4 */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden group cursor-pointer">
          <Image
            src="/alma.png"
            alt="Case 4"
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>

      {/* Botão */}
      <div className="flex justify-center">
        <a
          href="#"
          className="border border-[#F2360C] text-[#F2360C] font-medium px-6 py-2 rounded-full text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
        >
          See all cases
        </a>
      </div>
    </section>
  );
}
