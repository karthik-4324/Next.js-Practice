import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldnt find that page.</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
