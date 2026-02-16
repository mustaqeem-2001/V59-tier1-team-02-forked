import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CardHomepage from "../components/CardHomepage";

export default function Home() {
  return (
    <>
      <header>
        {/* Import Header here */}
        <br />
        <Link to="/roles">Roles Page</Link>
        <br />
        <Link to="/questions">Questions Page</Link>
      </header>

      <h1>Home Page</h1>
      <p>Pathfinder is blah blah</p>
      <CardHomepage title="Tailored Questions" description="blah blah" />
      <CardHomepage title="Real-time Feedback" description="blah blah" />
      <CardHomepage title="Chingu-Powered" description="blah blah" />
      <CardHomepage title="Fully Responsive" description="blah blah" />
      <Link to="/roles">Get Started</Link>

      <footer>{/* Import Footer here */}</footer>
    </>
  );
}
