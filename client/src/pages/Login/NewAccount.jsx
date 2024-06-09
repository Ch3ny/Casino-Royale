import { Link, useParams } from "react-router-dom";

export default function NewAccount() {
  const { id } = useParams();

  return (
    <div>
      <p>Your account ID: {id}</p>

      <Link to={`/account/${id}`}>
        <p>View Account</p>
      </Link>

      <Link to="/">
        <p>Go home</p>
      </Link>
    </div>
  );
}
