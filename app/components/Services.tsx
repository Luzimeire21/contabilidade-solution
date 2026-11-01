const servicos = [
  {
    numero: "01",
    titulo: "Abertura, alteração e baixa de empresas",
    descricao:
      "Assessoria completa para abrir, alterar ou encerrar sua empresa com segurança, agilidade e conformidade legal.",
  },
  {
    numero: "02",
    titulo: "Fiscal",
    descricao:
      "Apuração de impostos, emissão de guias, entrega de obrigações acessórias e acompanhamento da regularidade fiscal.",
  },
  {
    numero: "03",
    titulo: "Contábil",
    descricao:
      "Escrituração contábil, elaboração de demonstrativos e informações claras para apoiar as decisões da empresa.",
  },
  {
    numero: "04",
    titulo: "Departamento pessoal",
    descricao:
      "Gestão de admissões, folha de pagamento, férias, rescisões e demais obrigações trabalhistas.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-stone-200 px-6 py-20 md:py-28"
      data-testid="section-services"
    >
      <div className="mx-auto max-w-7xl" data-testid="services-container">
        <p
          className="text-xs font-bold uppercase tracking-widest text-amber-700"
          data-testid="services-label"
        >
          Serviços especializados
        </p>

        <h2
          className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl text-amber-600"
          data-testid="services-title"
        >
         Soluções contábeis para cada etapa da sua empresa.
        </h2>

        <div
          className="mt-14 grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          data-testid="services-list"
        >
          {servicos.map((servico, index) => (
            <article
              key={servico.titulo}
              className="border border-stone-300 bg-white p-8 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-amber-400 focus-within:shadow-lg outline-none"
              tabIndex={0}
              role="region"
              aria-label={servico.titulo}
              data-testid={`service-item-${index + 1}`}
            >
              <div className="flex items-center gap-4" data-testid={`service-header-${index + 1}`}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400 text-sm font-semibold text-amber-700"
                  data-testid={`service-number-${index + 1}`}
                >
                  {servico.numero}
                </span>

                <h3
                  className="font-serif text-2xl text-amber-600"
                  data-testid={`service-title-${index + 1}`}
                >
                  {servico.titulo}
                </h3>
              </div>

              <p
                className="mt-4 text-sm leading-7 text-slate-600"
                data-testid={`service-description-${index + 1}`}
              >
                {servico.descricao}
              </p>

              <a
                href="#contato"
                className="mt-7 inline-block text-sm font-bold text-amber-600 underline underline-offset-4 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                data-testid={`service-link-${index + 1}`}
              >
                Saiba mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
