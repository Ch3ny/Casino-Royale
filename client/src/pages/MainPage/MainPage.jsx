import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>


    <div className="LoginButton">

    <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
     
      <Link to={"/roulette"}>
      <div className="container">
      <img className="imag" src="https://bloximages.chicago2.vip.townnews.com/atlanticcityweekly.com/content/tncms/assets/v3/editorial/6/d2/6d205506-7342-50de-8faf-c3ec2f73d78a/5f8dee9f79743.image.jpg?resize=667%2C500" />
  <p className="title">Roulette</p>
  <div className="overlay"></div>
  <div className="button"><a href="#"> Click here </a></div>
</div>

      </Link>
    </div>

    <div className="dropdown">
  <button className="dropbtn">INFORMATION</button>
  <div className="dropdown-content">
    <a href="#"> <Link to={"/login"}>
        <p className="textColor">Login</p>
      </Link></a>
    <a href="#"><Link to={"/about"}>About us</Link></a>
    <a href="#"><Link to={"/TOS"}>Terms of Service</Link></a>
  </div>
</div>

<Link to={"/slot"}>
      <div className="cont">
      <img className="imagee" src="https://www.thoughtco.com/thmb/yrcZskzPOTFyP3yvOuYKQp7RH1U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/illuminated-slot-machines-in-darkroom-948708294-afaf089a8c7b4299aae1e1d70643a14c.jpg" />
  <p className="tit">Slot</p>
  <div className="over"></div>
  <div className="btn"><a href="#"> Click here </a></div>
</div>
</Link>

<Link to={"/guess"}>
<div className="contt">
      <img className="imageee" src="https://global.discourse-cdn.com/business4/uploads/thunkable/original/3X/e/f/efc3ca99e9133da184ae8eb1dcc5ed3e6623b3ef.png"></img>
  <p className="guess">Guess number</p>
  <div className="overr"></div>
  <div className="btnn"><a href="#"> Click here </a></div>
</div></Link>

<Link to={"/scratch"}><div className="overr">STIRACI LOSY</div></Link>
      
   </>
  );
}
