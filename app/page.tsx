"use client";

import Image from "next/image";


export default function Home() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const email = "carlinhosescap@hotmail.com";

    const subject = encodeURIComponent("Contato pelo site - Carlinhos Escap");
    const body = encodeURIComponent(
      `Nome: ${name}\nTelefone: ${phone}\nMensagem:\n${message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  }

  return (
    <div className="bg-darkBg min-h-screen text-gray-100">

      {/* HERO DARK */}
      <section className="relative px-6 md:px-12 py-24 overflow-hidden">
        {/* Fundo com metálico azul/vermelho */}
        <div className="absolute inset-0 bg-gradient-to-br from-darkSecondary via-brandBlue/20 to-brandRed/20 opacity-60"></div>

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
              Serviço Profissional de Escapamentos
              <span className="block text-brandRed">
                em Leme-SP
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Manutenção completa, soldas, reparos, troca de escapamentos e silenciosos. 
              Atendimento rápido e especializado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5519991624362"
                className="bg-brandRed text-white px-7 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                Fale no WhatsApp
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Carlinhos+Escap+Leme+SP"
                className="bg-darkCard border border-gray-700 text-gray-200 px-7 py-3 rounded-xl shadow hover:bg-darkSecondary transition"
                target="_blank"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-60 h-60 md:w-72 md:h-72 relative drop-shadow-xl bg-darkCard/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-gray-700">
              <Image
                src="/logo.png"
                alt="Carlinhos Escap"
                width={190}
                height={190}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARDS DE SERVIÇO EM DARK */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-12">
          Atendemos todas as necessidades do escapamento do seu veículo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Troca de escapamento",
              desc: "Substituição completa, rápida e segura.",
            },
            {
              title: "Soldas e reparos",
              desc: "Correção de vazamentos e reforço estrutural.",
            },
            {
              title: "Silenciosos e abafadores",
              desc: "Manutenção e troca de componentes essenciais.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-darkCard p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-semibold text-brandRed">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO EM DARK */}
      <section className="bg-darkSecondary py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Entre em contato
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Fale com a gente diretamente ou envie sua mensagem.
        </p>
      <div className="w-full flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-gray-700"
        >
          {/* NOME */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Nome</label>
            <div className="flex items-center bg-[#2a2a2a] border border-gray-600 rounded-md px-3">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                name="name"
                placeholder="Seu nome"
                required
                className="py-2 w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          {/* TELEFONE */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Telefone</label>
            <div className="flex items-center bg-[#2a2a2a] border border-gray-600 rounded-md px-3">
              <span className="text-gray-400 mr-2">📱</span>
              <input
                name="phone"
                placeholder="(19) 99162-3462"
                required
                onInput={(e) => {
                  let value = e.currentTarget.value.replace(/\D/g, "");
                  if (value.length > 11) value = value.slice(0, 11);
                  if (value.length > 6) {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
                  } else if (value.length > 2) {
                    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
                  } else {
                    value = value.replace(/(\d{0,2})/, "($1");
                  }
                  e.currentTarget.value = value;
                }}
                className="py-2 w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          {/* MENSAGEM */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Mensagem</label>
            <div className="flex items-start bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2">
              <span className="text-gray-400 mr-2 mt-1">✉️</span>
              <textarea
                name="message"
                placeholder="Como podemos ajudar?"
                required
                className="w-full h-28 bg-transparent text-white outline-none resize-none"
              />
            </div>
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all py-3 rounded-md font-semibold text-white shadow-md shadow-red-900/40"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
        <p className="text-center text-gray-400 mt-8">
          WhatsApp:{" "}
          <a
            href="https://wa.me/5519991623462"
            className="text-brandRed font-semibold"
          >
            (19) 99162-3462
          </a>
        </p>
      </section>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5519991624362"
        className="fixed bottom-6 right-6 bg-brandRed text-white px-5 py-4 rounded-full shadow-xl text-base font-semibold hover:scale-110 transition-all cursor-pointer"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-darkBg">
        © {new Date().getFullYear()} Carlinhos Escap — Leme-SP
      </footer>
    </div>
  );
}
