import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function limpar(texto: unknown) {
  return String(texto ?? "")
    .trim()
    .replace(/[<>&"']/g, "");
}

export async function POST(request: Request) {
  try {
    const dados = await request.json();

    const nome = limpar(dados.nome);
    const email = limpar(dados.email);
    const telefone = limpar(dados.telefone);
    const servico = limpar(dados.servico);
    const mensagem = limpar(dados.mensagem);

    if (!nome || !email || !telefone || !servico || !mensagem) {
      return NextResponse.json(
        { erro: "Preencha todos os campos." },
        { status: 400 },
      );
    }

    if (!email.includes("@") || mensagem.length > 1500) {
      return NextResponse.json(
        { erro: "Verifique os dados informados." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "SOLUTION Contabilidade <contato@@contabilidadesolution.com.br>",
      to: [process.env.CONTACT_EMAIL || "fabioalmeida.solution@gmail.com"],
      replyTo: email,
      subject: `Novo contato pelo site: ${servico}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { erro: "Não foi possível enviar a mensagem." },
        { status: 500 },
      );
    }

    return NextResponse.json({ sucesso: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { erro: "Ocorreu um erro ao enviar a mensagem." },
      { status: 500 },
    );
  }
}