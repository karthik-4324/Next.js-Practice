export default async function Home() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    return (
      <main>
        <h1>Latest Posts</h1>

        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </main>
    );
  } catch (error) {
    return (
      <main>
        <h1>Something went wrong</h1>
        <p>We couldnt load the posts. Please try again later.</p>
      </main>
    );
  }
}
