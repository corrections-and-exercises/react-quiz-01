import { useState } from "react";
import { notes as exampleNotes } from "../services/data.js";
import SingleNote from "./SingleNote.jsx";
import NotesInput from "./NotesInput.jsx";

export default function Notes() {
  const [notes, setNotes] = useState(exampleNotes);
  return (
    <>
      <NotesInput setNotes={setNotes} />
      <p>No notes</p>
    </>
  );
}
