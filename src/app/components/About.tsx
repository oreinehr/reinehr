export default function About() {
  return (
    <section className="w-full bg-black text-white">
      {/* Texto principal */}
      <div className="px-6 md:px-16 py-20">
        <h1 className="max-w-5xl text-2xl md:text-4xl font-light leading-snug">
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
          I’m Guilherme Reinehr – a multidisciplinary designer based in Brazil,
          working worldwide with a focus in{" "}
          <span className="font-semibold">UX/UI, prototype & motion.</span>
          <br />
          i’m currently creating beauty at{" "}
          <span className="font-semibold">tgr.</span>
        </h1>
      </div>

      {/* Card com disciplinas e áreas */}
      <div className="relative w-full bg-gradient-to-b from-[#F82D00] to-[#000000] flex justify-center items-center py-20">
        <div className="relative max-w-3xl w-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-8 py-10 shadow-xl">
          <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
            {/* Coluna 1 */}
            <div>
              <h3 className="mb-4 font-medium text-white/80">
                (Disciplines of focus)
              </h3>
              <ul className="space-y-2 text-white">
                <li>AI</li>
                <li>Art direction</li>
                <li>Branding</li>
                <li>Graphic design</li>
                <li>Identity</li>
                <li>Interactive design</li>
                <li>Motion design</li>
                <li>Prototype</li>
                <li>UX/UI</li>
              </ul>
            </div>

            {/* Coluna 2 */}
            <div>
              <h3 className="mb-4 font-medium text-white/80">
                (Areas of interest)
              </h3>
              <ul className="space-y-2 text-white">
                <li>Art</li>
                <li>Automotive</li>
                <li>Fashion & Lifestyle</li>
                <li>Technology</li>
                <li>Music</li>
                <li>Media & Entertainment</li>
                <li>Sports</li>
                <li>Movie</li>
              </ul>
            </div>
          </div>

          {/* Círculos decorativos */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
