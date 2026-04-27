import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/ui/ContactCTA";
import SolucoesArchiveContent from "./SolucoesArchiveContent";

export const metadata: Metadata = {
  title: "Soluções | Moura Rocha Advogados",
  description:
    "Conheça as especialidades da Moura Rocha: direito digital, propriedade intelectual, LGPD, franchising, societário e trabalhista para startups e negócios de tecnologia.",
};

export default function SolucoesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          // eyebrow="// SOLUÇÕES"
          titleLight="Saiba mais sobre"
          titleBold="nossas especialidades."
          subtitle="Do registro de marca à estrutura societária, atuamos em todas as frentes jurídicas que importam para o seu negócio."
          breadcrumb={[{ label: "Soluções", href: "/solucoes" }]}
        />
        <SolucoesArchiveContent />
        <ContactCTA
          title="Tem dúvida sobre qual solução se encaixa?"
          subtitle="Fale com nossa equipe e receba uma análise personalizada para o momento da sua empresa."
          buttonLabel="Falar com a equipe"
          buttonHref="/#contato"
        />
      </main>
      <Footer />
    </>
  );
}
