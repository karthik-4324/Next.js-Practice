
export default async function NotesPage() {
  const shouldFail = Math.random() < 0.5;

  if (shouldFail) {
    throw new Error("Temporary notes loading error");
  }

  return (
    <main>
      <h1>My Notes</h1>
      <p>Your notes loaded successfully!</p>
    </main>
  );
}
