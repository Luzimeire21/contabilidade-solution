"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

const linkWhatsapp = "https://wa.me/5581996214777?text=Olá!%20Encontrei%20a%20SOLUTION%20através%20do%20website%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20os%20serviços%20contábeis%20oferecidos.%20Poderiam%20me%20ajudar%3F";

export function Contact() {
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  async function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");

    const formulario = event.currentTarget;
    const dados = new FormData(formulario);

    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.get("nome"),
          email: dados.get("email"),
          telefone: dados.get("telefone"),
          servico: dados.get("servico"),
          mensagem: dados.get("mensagem"),
        }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível enviar.");
      }

      setStatus("Mensagem enviada! Em breve entraremos em contato.");
      formulario.reset();
    } catch (erro) {
      setStatus(erro instanceof Error ? erro.message : "Não foi possível enviar a mensagem.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section
      id="contato"
      className="scroll-mt-20 bg-[#0b293b] px-6 py-20 text-white md:py-28"
      data-testid="section-contato"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2" data-testid="contato-container">
        <div data-testid="contato-info">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400" data-testid="contato-label">
            Entre em contato
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl" data-testid="contato-title">
            Vamos conversar sobre sua empresa?
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-slate-300" data-testid="contato-description">
            Preencha o formulário ou fale diretamente pelo WhatsApp.
          </p>

          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded bg-[#25D366] px-7 py-4 text-sm font-bold text-white hover:bg-[#1ebe5d]"
            data-testid="contato-whatsapp-link"
          >
            <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
            WhatsApp: (81) 99621-4777
          </a>
        </div>

        <form
          onSubmit={enviarFormulario}
          className="rounded-xl bg-white p-7 text-slate-900 shadow-2xl md:p-9"
          data-testid="contato-form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold" data-testid="label-nome">
              Nome
              <input
                name="nome"
                required
                maxLength={100}
                placeholder="Seu nome"
                className="mt-2 w-full rounded border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
                data-testid="input-nome"
              />
            </label>
            <label className="text-sm font-bold" data-testid="label-email">
              E-mail
              <input
                name="email"
                type="email"
                required
                maxLength={150}
                placeholder="seuemail@exemplo.com"
                className="mt-2 w-full rounded border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
                data-testid="input-email"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold" data-testid="label-telefone">
              Telefone
              <input
                name="telefone"
                required
                maxLength={30}
                placeholder="(00) 00000-0000"
                className="mt-2 w-full rounded border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
                data-testid="input-telefone"
              />
            </label>

            <label className="text-sm font-bold" data-testid="label-servico">
              Serviço
              <select
                name="servico"
                required
                defaultValue=""
                className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-amber-500"
                data-testid="select-servico"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="Abertura, alteração e baixa de empresas">Abertura, alteração e baixa de empresas</option>
                <option value="Fiscal">Fiscal</option>
                <option value="Contábil">Contábil</option>
                <option value="Departamento pessoal">Departamento pessoal</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold" data-testid="label-mensagem">
            Mensagem
            <textarea
              name="mensagem"
              required
              maxLength={1500}
              rows={5}
              placeholder="Conte brevemente como podemos ajudar"
              className="mt-2 w-full resize-none rounded border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
              data-testid="textarea-mensagem"
            />
          </label>

          <button
            type="submit"
            disabled={enviando}
            className="mt-6 w-full rounded bg-amber-500 px-7 py-4 text-sm font-bold text-slate-900 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            data-testid="botao-enviar"
          >
            {enviando ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm" role="status" data-testid="status-mensagem">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
