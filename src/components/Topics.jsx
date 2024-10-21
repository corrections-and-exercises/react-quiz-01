export default function Topics({ topics }) {
  if (!topics) return <p>no topics available</p>;
  return (
    <>
      <ul className="flex w-fit gap-2 bg-slate-200 p-2">
        {topics.map((topic) => (
          <li key={topic}>
            <a href={`#${topic}`}>{topic}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
