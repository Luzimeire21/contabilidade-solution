"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const linkWhatsapp = "https://wa.me/5581996214777?text=Olá%2C%20SOLUTION!";

export default function HeaderClient() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <>
      <header
        className="relative z-50 bg-[#071c2b] px-5 py-5 text-white md:px-6"
        data-testid="header"
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between"
          data-testid="header-container"
        >
          <Link
            href="#"
            aria-label="SOLUTION Contabilidade"
            className="flex items-center gap-3 bg-black px-3 py-2 rounded"
            data-testid="link-logo"
          >
          
            <div data-testid="logo-text">
              <strong
                className="block font-sans text-2xl font-bold uppercase text-amber-400"
                data-testid="logo-title"
              >
                SOLUTION
              </strong>
              <span
                className="block text-xs tracking-widest text-amber-400"
                data-testid="logo-subtitle"
              >
                CONTABILIDADE
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded border border-amber-400 md:hidden"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            data-testid="button-menu-toggle"
          >
            <span
              className={`h-0.5 w-6 bg-amber-400 transition ${
                menuAberto ? "translate-y-2 rotate-45" : ""
              }`}
              data-testid="burger-line-1"
            />
            <span
              className={`h-0.5 w-6 bg-amber-400 transition ${
                menuAberto ? "opacity-0" : ""
              }`}
              data-testid="burger-line-2"
            />
            <span
              className={`h-0.5 w-6 bg-amber-400 transition ${
                menuAberto ? "-translate-y-2 -rotate-45" : ""
              }`}
              data-testid="burger-line-3"
            />
          </button>

          <nav
  className={`absolute left-0 top-full w-full flex-col gap-2 bg-[#071c2b] px-6 pb-6 shadow-xl text-white ${
    menuAberto ? "flex" : "hidden"
  } md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:text-white md:shadow-none md:border-0`}
  data-testid="nav-menu"
>
  <Link
    href="#sobre"
    onClick={fecharMenu}
    className="border-b border-slate-700 py-4 text-white hover:text-amber-400 md:border-0 md:py-0"
    data-testid="menu-link-sobre"
  >
    Sobre nós
  </Link>

  <Link
    href="#servicos"
    onClick={fecharMenu}
    className="border-b border-slate-700 py-4 text-white hover:text-amber-400 md:border-0 md:py-0"
    data-testid="menu-link-servicos"
  >
    Serviços
  </Link>

  <Link
    href="#contato"
    onClick={fecharMenu}
    className="mt-3 rounded-full border border-amber-400 px-5 py-3 text-center text-white transition hover:bg-amber-400 hover:text-slate-900 md:mt-0 md:py-2"
    data-testid="menu-link-contato"
  >
    Fale conosco
  </Link>
</nav>
        </div>
      </header>

      <a
        href={linkWhatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com SOLUTION pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 hover:bg-[#1ebe5d]"
        data-testid="whatsapp-floating-button"
      >
        <FaWhatsapp className="h-9 w-9" aria-hidden="true" />
      </a>
    </>
  );
}
