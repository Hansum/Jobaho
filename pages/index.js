import Layout from "../components/MyLayout";
import Link from "next/link";
import myImage from "../assets/images/cherry-success.svg";

const Page = () => (
  <div className="row">
    <div className="column">
      <div className="column-left">
        <p>Bringing IT jobs closer to you!</p>
      </div>
      <div className="column-left-button">
        <Link href="/jobSection">
          <a>Get Started</a>
        </Link>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img className="card_image" src={myImage}></img>
      </div>
    </div>
  </div>
);

export default Layout(Page);
