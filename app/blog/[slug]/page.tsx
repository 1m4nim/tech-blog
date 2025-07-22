// app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { marked } from "marked";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "#888" }}>{post.date}</p>
      <article
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        style={{ marginTop: "2rem" }}
      />
    </main>
  );
}
