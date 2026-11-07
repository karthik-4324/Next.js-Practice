"use client";

export default function NotesError({ error, reset }) {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>We couldnt load your notes.</p>

      <button onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}