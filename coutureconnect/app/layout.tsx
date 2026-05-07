import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoutureConnect — Trouvez votre couturier au Bénin",
  description: "La première plateforme de mise en relation entre couturiers et clients au Bénin. Géolocalisez, comparez et commandez vos tenues sur mesure.",
  keywords: "couturier, Cotonou, Bénin, tenue sur mesure, couture africaine, Calavi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
