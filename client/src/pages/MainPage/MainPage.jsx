import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>

    <div className="LoginButton">
      <Link to={"/login"}>
        <p className="textColor">Login</p>
      </Link>
    </div>
      
    </>
  );
}
