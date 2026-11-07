"use client";

import { useState } from "react";

export default function NoteEditor({ initialContent }) {
  const [originalContent, setOriginalContent] = useState(initialContent);
  const [draftContent, setDraftContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div>
      {/* We'll build the UI here */}
      {isEditing ? (
        // Edit Mode
        <>
          <textarea
            value={draftContent}
            onChange={(e) => setDraftContent(e.target.value)}
          />
          {/* save */}
          <button
            onClick={() => {
              setOriginalContent(draftContent);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          {/* save */}
          <button
            onClick={() => {
              setDraftContent(originalContent);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        // View Mode
        <>
          <p>{originalContent}</p>
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button
            onClick={() => {
              const result = window.confirm(
                "Are you sure you want to delete this note?",
              );
              if (result) {
                setIsDeleted(true);
              } else {
                setIsDeleted(false);
              }
            }}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
}
