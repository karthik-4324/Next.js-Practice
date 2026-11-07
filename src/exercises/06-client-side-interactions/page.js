import NoteEditor from "@/exercises/06-client-side-interactions/NoteEditor";

export default function Page() {
  return (
    <main>
      <h1>Note Editor Exercise</h1>

      <NoteEditor initialContent="Learning Next.js is interesting!" />
    </main>
  );
}