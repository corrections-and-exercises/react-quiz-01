export default function Header({ username }) {
  return <>{username ? <p>Hello {username}</p> : <p>Hello Guest</p>}</>;
}
