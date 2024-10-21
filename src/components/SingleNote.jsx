export default function SingleNote({ note, setNotes }) {
  function handleDelete() {
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
  }

  return (
    <li className="rounded bg-green-200 p-4 text-center">
      <p className="font-bold">{note.text}</p>
      <p className="hover:cursor-pointer" onClick={handleDelete}>
        x
      </p>
    </li>
  );
}
