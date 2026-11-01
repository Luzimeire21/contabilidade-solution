export function Overview() {
  const barrasAltura = [35, 50, 43, 68, 61, 82, 95];

  return (
    <div className="relative mt-32 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl max-w-full md:max-w-225 mx-auto md:p-12">
      <div className="flex items-start justify-between mb-8 px-2 md:px-6">
        <div>
          <p className="text-sm text-slate-500">Visão geral</p>
          <h2 className="mt-1 font-serif text-3xl md:text-4xl font-semibold">
            Negócio saudável
          </h2>
        </div>

        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 text-xl md:text-2xl">
          ✓
        </span>
      </div>

      {/* Gráfico */}
      <div className="grid grid-cols-7 gap-3 border-b border-slate-200 px-2 h-58 md:h-60 md:px-6 md:mt-12">
        {barrasAltura.map((altura, index) => (
          <div
            key={index}
            className="self-end rounded-t-md bg-linear-to-t from-amber-500 to-amber-300 transition-height duration-300"
            style={{ height: `${altura}%` }}
            aria-label={`Barra ${index + 1} com altura ${altura}%`}
          />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 px-2 md:px-6">
        <div className="flex items-center gap-6 border-l-4 border-amber-400 pl-4">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              Obrigações
            </span>
            <strong className="block font-serif text-4xl text-amber-600 md:text-5xl">
              100%
            </strong>
            <span className="text-xs font-bold text-green-700">Em dia</span>
          </div>
        </div>

        <div className="flex items-center gap-6 border-l-4 border-amber-400 pl-4">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              Planejamento
            </span>
            <strong className="block font-serif text-3xl font-semibold">
              Estratégico
            </strong>
            <span className="text-xs font-bold text-green-700">Decisões seguras</span>
          </div>
        </div>
      </div>
    </div>
  );
}
