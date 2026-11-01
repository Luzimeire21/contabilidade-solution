export function Footer() {
  return (
    <footer className="bg-[#061824] px-6 py-9 text-center text-sm text-slate-400">
      <p>SOLUTION — Contabilidade e Consultoria Tributária</p>

      <div className="mt-3 flex items-center justify-center gap-3">
        <span>By Luzi Coutinho</span>

        <a
          href="https://github.com/Luzimeire21/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-amber-400"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.81 0c2.22-1.5 3.19-1.19 3.19-1.19.62 1.58.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.42-2.68 5.39-5.24 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
      </div>

      <p className="mt-2">© 2026. Todos os direitos reservados.</p>
    </footer>
  );
}