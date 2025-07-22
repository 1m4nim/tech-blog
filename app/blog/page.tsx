// app/blog/page.tsx
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPostsMeta(); // 修正済み関数名

  return (
    <main style={{ padding: "2rem" }}>
      <h1>ブログ一覧</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1.5rem" }}>
            <Link href={`/blog/${post.slug}`}>
              <h2 style={{ margin: 0, color: "blue", cursor: "pointer" }}>
                {post.title}
              </h2>
            </Link>
            <p style={{ color: "#888" }}>{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
