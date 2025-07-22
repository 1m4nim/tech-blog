import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

function formatDate(dateString: string) {
  if (!dateString) return "日付なし";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "日付不正";
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const posts = getAllPostsMeta();

  if (!posts.length) {
    return <p style={{ padding: "2rem" }}>記事がまだありません。</p>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>📚 ブログ一覧</h1>

      {posts.map((post) => (
        <article
          key={post.slug}
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            <Link
              href={`/blog/${post.slug}`}
              style={{ color: "#0070f3", textDecoration: "none" }}
            >
              {post.title}
            </Link>
          </h2>

          <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            🗓 {formatDate(post.date)}
          </p>

          <p style={{ margin: "0.25rem 0" }}>
            📂 <strong>カテゴリ:</strong> {post.category}
          </p>

          <p style={{ margin: "0.25rem 0" }}>
            🏷️ <strong>タグ:</strong>{" "}
            {post.tags.length > 0 ? post.tags.join(", ") : "なし"}
          </p>
        </article>
      ))}
    </main>
  );
}
