import { useParams, Link } from "react-router-dom";

export default function NewAccount() {
  const { id } = useParams();

  return (
    <>
      <p>Account created: {id}</p>
      <Link to={`/account/${id}`}>
        <p>Main Page</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
