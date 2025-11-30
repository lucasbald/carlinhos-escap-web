import "./globals.css";
import type { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Carlinhos Escap - Leme-SP",
  description: "Troca e manutenção de escapamentos em Leme-SP. Fale conosco via WhatsApp.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-[#f3f3f3] border-b border-gray-300">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <Image src="/logo.png" alt="Carlinhos Escap" width={70} height={35} />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Carlinhos Escap</h1>
              <p className="text-xs text-gray-600">Leme - SP · Especialistas em escapamentos</p>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
