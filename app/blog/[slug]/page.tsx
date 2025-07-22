import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <p>🗓 {post.date}</p>
      <p>📂 カテゴリ: {post.category}</p>
      <p>🏷️ タグ: {post.tags.join(", ") || "なし"}</p>
      <article
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        style={{ marginTop: "2rem", lineHeight: 1.6 }}
      />
    </main>
  );
}
