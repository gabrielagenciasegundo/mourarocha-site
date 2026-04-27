import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/ui/ContactCTA";
import SolucaoContent from "./SolucaoContent";
import { solucoes, getSolucaoBySlug } from "@/lib/data/solucoes";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solucoes.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solucao = getSolucaoBySlug(slug);
  if (!solucao) return {};
  return {
    title: `${solucao.title} | Moura Rocha Advogados`,
    description: solucao.intro[0],
  };
}

export default async function SolucaoPage({ params }: Props) {
  const { slug } = await params;
  const solucao = getSolucaoBySlug(slug);
  if (!solucao) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          // eyebrow={solucao.eyebrow}
          titleLight={solucao.title.split(" ").slice(0, -1).join(" ")}
          titleBold={solucao.title.split(" ").slice(-1).join(" ")}
          subtitle={solucao.subtitle}
          breadcrumb={[
            { label: "Soluções", href: "/solucoes" },
            { label: solucao.title, href: `/solucoes/${solucao.slug}` },
          ]}
        />
        <SolucaoContent solucao={solucao} />
        <ContactCTA
          title="Fale com quem entende do seu mercado."
          subtitle={`Nossos especialistas em ${solucao.title} estão prontos para analisar o momento da sua empresa e propor o caminho mais seguro.`}
          buttonLabel="Agendar conversa"
          buttonHref="/#contato"
        />
      </main>
      <Footer />
    </>
  );
}
