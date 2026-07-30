import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BankingProvider } from "@/features/banking/BankingProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "NexaBank - Audit-Grade Core Banking OS",
  description: "Brutalist Next.js banking dashboard with instant transfers, card rules, and transaction ledger.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f1ea] text-[#0a0a0a] selection:bg-[#e8ff00] selection:text-[#0a0a0a]">
        <BankingProvider>{children}</BankingProvider>
      </body>
    </html>
  );
}
