import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderClient from "./components/HeaderClient"; // componente cliente separado

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOLUTION Contabilidade | Assessoria Contábil",
  description:
    "Soluções contábeis, abertura de empresas, planejamento tributário e gestão financeira para seu negócio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-slate-900">
        <HeaderClient />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
