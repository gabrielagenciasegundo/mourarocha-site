import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/ui/ContactCTA";
import SobreContent from "./SobreContent";

export const metadata: Metadata = {
  title: "Quem Somos | Moura Rocha Advogados",
  description:
    "Conheça a Moura Rocha: escritório especializado em direito digital, propriedade intelectual, LGPD e empresarial para startups, agências e negócios de tecnologia desde 2007.",
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow=""
          titleLight="Prezamos pela assertividade"
          titleBold="em todas as resoluções."
          subtitle="Formados por uma equipe multidisciplinar, somos o escritório jurídico especializado em negócios que criam, inovam e crescem no digital."
          breadcrumb={[{ label: "Quem Somos", href: "/sobre" }]}
        />
        <SobreContent />
        <ContactCTA
          title="Pronto para proteger o seu negócio?"
          subtitle="Fale com nossa equipe e entenda como a Moura Rocha pode ser a parceira jurídica estratégica da sua empresa."
          buttonLabel="Falar com a equipe"
          buttonHref="/#contato"
        />
      </main>
      <Footer />
    </>
  );
}
