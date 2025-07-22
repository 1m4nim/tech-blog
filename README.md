# 作業ログ

## 2025-07-21

- Next.jsブログのMarkdown記事読み込み機能を実装
- `lib/posts.ts`でMarkdownファイルのメタ情報取得とHTML変換を実装
- 個別記事ページ（`app/blog/[slug]/page.tsx`）でMarkdown → HTMLを表示できるように修正
- ブログ一覧ページ（`app/page.tsx`）を作成し、記事のタイトルやメタ情報を一覧表示
- Markdownファイルのディレクトリパスやファイル名に関するエラーを解決

## 2025-07-22

- Markdownの内容をHTMLに変換し、個別記事ページで本文を読みやすく表示する仕組みを完成
- ブログ一覧ページにカテゴリ・タグ・日付情報をわかりやすく表示
- `getAllPostsMeta`関数の戻り値にカテゴリ・タグも含めるように拡張し、一覧表示を改善
- `dangerouslySetInnerHTML`を使って記事本文のHTMLを安全にレンダリング
- 投稿データの型定義を整備し、TypeScriptエラーを修正
- Markdownファイルのサンプル（`hello-world.md`）を作成し、ブログの動作確認を実施
