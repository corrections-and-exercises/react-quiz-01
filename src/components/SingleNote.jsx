export default function SingleNote({ note, setNotes }) {
  function handleDelete() {
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
  }

  return (
    <>
      {note ? (
        <li className="rounded bg-green-200 p-4 text-center">
          <p className="font-bold">{note.text}</p>
          <button className="hover:cursor-pointer" onClick={handleDelete}>
            delete
          </button>
        </li>
      ) : (
        ""
      )}
    </>
  );
}
