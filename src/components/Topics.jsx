export default function Topics({ topics }) {
  return (
    <>
      {topics ? (
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic}>
                <a href={`#${topic}?`}>{topic}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>no topics available</p>
      )}
    </>
  );
}
