import { useState } from "react";
import SingleNote from "./SingleNote";
import NotesInput from "./NotesInput";

import { notes as notelist } from "../services/data";

export default function Notes() {
  const [notes, setNotes] = useState(notelist);

  return (
    <>
      <NotesInput setNotes={setNotes} />
      {!notes.length > 0 ? (
        <p>No notes</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <SingleNote key={note.id} note={note} setNotes={setNotes} />
          ))}
        </ul>
      )}
    </>
  );
}
