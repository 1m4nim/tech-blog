// app/page.tsx
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPostsMeta();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>ブログ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <p style={{ fontWeight: "bold" }}>{post.title}</p>
              <p>{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
