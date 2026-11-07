
export default function Loading() {
  return (
    <main className="loading-page">
      <h1>Latest Posts</h1>

      {[1, 2, 3, 4, 5].map((item) => (
        <article className="skeleton-card" key={item}>
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line short" />
        </article>
      ))}
    </main>
  );
}
