import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/ui/ContactCTA";
import BlogArchiveContent from "./BlogArchiveContent";

export const metadata: Metadata = {
  title: "Blog | Moura Rocha Advogados",
  description:
    "Insights, análises e conteúdo jurídico para quem empreende no digital. Propriedade intelectual, LGPD, direito societário e muito mais.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogArchiveContent />
        <ContactCTA
          title="Proteja o que você construiu."
          subtitle="Entre em contato com a Moura Rocha e descubra como estruturar a segurança jurídica do seu negócio."
          buttonLabel="Falar com a equipe"
          buttonHref="/#contato"
        />
      </main>
      <Footer />
    </>
  );
}
