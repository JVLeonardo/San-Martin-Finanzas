import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "San Martin Finanzas",
  description: "Plataforma digital de micropréstamos para San Martín",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
