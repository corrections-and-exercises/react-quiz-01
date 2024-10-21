import { useState } from "react";
export default function NotesInput({ setNotes }) {
  const inititalState = {
    id: "",
    text: "",
    date: "",
  };
  const [input, setInput] = useState(inititalState);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.text) return;
    setNotes((prev) => [...prev, input]);
    setInput(inititalState);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-flow-col">
      <label htmlFor="note">
        Enter Note
        <input
          onChange={(e) =>
            setInput((prev) => ({
              ...prev,
              text: e.target.value,
              id: crypto.randomUUID(),
              date: new Date(),
            }))
          }
          type="text"
          name="note"
          id="note"
          value={input.text}
          className="mx-2"
        />
      </label>
      <button>Add Note</button>
    </form>
  );
}
