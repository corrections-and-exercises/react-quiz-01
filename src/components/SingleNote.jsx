export default function SingleNote({ note }) {
  return (
    <>
      {note ? (
        <>
          <p>{note.text}</p>
          <button>delete</button>
        </>
      ) : (
        ""
      )}
    </>
  );
}
