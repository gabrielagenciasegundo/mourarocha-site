import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/ui/ContactCTA";
import BlogPostContent from "./BlogPostContent";
import { posts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Moura Rocha Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <Navbar />
      <main>
        <BlogPostContent post={post} related={related} />
        <ContactCTA
          title="Tem alguma dúvida jurídica?"
          subtitle="Fale com nossa equipe e receba orientação especializada para o seu caso."
          buttonLabel="Falar com a equipe"
          buttonHref="/#contato"
        />
      </main>
      <Footer />
    </>
  );
}
