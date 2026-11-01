export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 px-6 py-20 md:py-28" data-testid="section-sobre">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2" data-testid="about-container">
        <div
          className="flex min-h-80 items-center rounded-2xl bg-[#0b293b] p-9 text-white shadow-xl md:p-12"
          data-testid="about-left-panel"
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400"
              data-testid="about-left-label"
            >
              Consultoria especializada
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl" data-testid="about-left-title">
              SOLUTION
            </h2>

            <p className="mt-3 font-serif text-xl text-amber-300" data-testid="about-left-subtitle">
              Contabilidade e Consultoria Tributária
            </p>

            <div className="mt-9 border-t border-white/20 pt-7" data-testid="about-left-experience">
              <strong className="block text-4xl text-amber-400" data-testid="about-experience-years">
                +10 anos
              </strong>

              <span className="mt-2 block text-sm text-slate-300" data-testid="about-experience-text">
                de experiência na área tributária
              </span>
            </div>
          </div>
        </div>

        <div data-testid="about-right-panel">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700"
            data-testid="about-right-label"
          >
            Sobre nós
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl" data-testid="about-right-title">
            Conhecimento e experiência para cuidar da sua empresa.
          </h2>

          <p className="mt-7 leading-8 text-slate-600" data-testid="about-right-paragraph-1">
            Somos a SOLUTION, uma empresa especializada em Ciências Contábeis e Consultoria Tributária com mais de 10 anos de experiência.
          </p>

          <p className="mt-4 leading-8 text-slate-600" data-testid="about-right-paragraph-2">
            Nosso objetivo é oferecer um atendimento próximo, com informações claras e soluções adequadas à realidade de cada empresa.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2" data-testid="about-right-education-list">
            <div className="border-l-2 border-amber-500 pl-4" data-testid="education-item-1">
              <strong className="block" data-testid="education-title-1">Ciências Contábeis</strong>
              <span className="text-sm text-slate-500" data-testid="education-subtitle-1">Graduação</span>
            </div>

            <div className="border-l-2 border-amber-500 pl-4" data-testid="education-item-2">
              <strong className="block" data-testid="education-title-2">Planejamento Tributário</strong>
              <span className="text-sm text-slate-500" data-testid="education-subtitle-2">Pós-graduação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
