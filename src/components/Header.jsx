export default function Header({ username }) {
  return (
    <div>
      <p>Hello {username ? username : "Guest"}</p>
    </div>
  );
}
