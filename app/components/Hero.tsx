import { FaWhatsapp } from "react-icons/fa";

const linkWhatsapp = "https://wa.me/5581996214777?text=Olá%2C%20SOLUTION!";

export function Hero() {
  return (
    <section
      className="bg-[#071c2b] px-6 py-20 md:py-28"
      data-testid="hero-section"
    >
      <div
        className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        data-testid="hero-container"
      >
        <div className="max-w-150" data-testid="hero-text-container">
          <p
            className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-amber-400"
            data-testid="hero-tagline"
          >
            Contabilidade simples. Negócios mais fortes.
          </p>

          <h1
            className="font-serif text-5xl leading-tight md:text-7xl text-white"
            data-testid="hero-title"
          >
            Sua empresa organizada.
            <span className="block italic text-amber-400">Seu futuro em movimento.</span>
          </h1>

          <p
            className="mt-7 max-w-xl leading-8 text-slate-300"
            data-testid="hero-description"
          >
            Contabilidade consultiva e próxima para você ganhar tempo,
            reduzir riscos e tomar decisões com segurança.
          </p>

          <div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            data-testid="hero-buttons"
          >
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded bg-amber-400 px-7 py-4 text-center text-sm font-bold text-slate-900 hover:bg-amber-300 flex items-center justify-center gap-2"
              data-testid="hero-contact-button"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Entre em contato
            </a>

            <a
              href="#servicos"
              className="px-7 py-4 text-center text-sm underline decoration-amber-400 underline-offset-8 text-white"
              data-testid="hero-services-link"
            >
              Conheça os serviços
            </a>
          </div>
        </div>

        {/* Espaço para imagem, gráfico ou vazio */}
        <div data-testid="hero-image-placeholder"></div>
      </div>
    </section>
  );
}

export function Overview() {
  const barrasAltura = [35, 50, 43, 68, 61, 82, 95];

  return (
    <section className="bg-stone-50" data-testid="overview-section">
      <div
        className="mx-auto max-w-4xl mt-20 rounded-2xl bg-white p-8 shadow-2xl"
        data-testid="overview-card"
      >
        <div
          className="flex items-start justify-between mb-6 px-2"
          data-testid="overview-header"
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
              data-testid="overview-label"
            >
              Visão geral
            </p>
            <h2
              className="text-2xl font-serif font-bold text-slate-900"
              data-testid="overview-title"
            >
              Negócio saudável
            </h2>
          </div>

          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 text-lg"
            data-testid="overview-checkmark"
          >
            ✓
          </span>
        </div>

        <div
          className="grid grid-cols-7 gap-3 border-b border-slate-300 h-44 mb-8 items-end"
          data-testid="overview-chart"
        >
          {barrasAltura.map((altura, idx) => (
            <div
              key={idx}
              className="rounded-t bg-linear-to-t from-amber-500 to-amber-300 transition-height duration-300"
              style={{ height: `${altura}%` }}
              aria-label={`Barra ${idx + 1} altura ${altura}%`}
              data-testid={`chart-bar-${idx + 1}`}
            />
          ))}
        </div>

        <div
          className="flex flex-col gap-6 sm:flex-row sm:justify-between"
          data-testid="overview-info-panels"
        >
          <div
            className="flex items-center gap-4 border-l-4 border-amber-400 pl-4"
            data-testid="info-panel-obrigacoes"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Obrigações
              </p>
              <p className="text-4xl font-serif font-bold text-amber-600">100%</p>
              <p className="text-xs font-bold text-green-700">Em dia</p>
            </div>
          </div>

          <div
            className="flex items-center gap-4 border-l-4 border-amber-400 pl-4"
            data-testid="info-panel-planejamento"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Planejamento
              </p>
              <p className="text-3xl font-serif font-semibold text-slate-900">
                Estratégico
              </p>
              <p className="text-xs font-bold text-green-700">Decisões seguras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      {/* Outras seções... */}
    </>
  );
}
