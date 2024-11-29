import { useState } from "react";
export default function NotesInput({ setNotes }) {
  const [formData, setFormData] = useState();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: formData, date: Date.now },
    ]);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="text" id="text" />
      </form>
    </>
  );
}
