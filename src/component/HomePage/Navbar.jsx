import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center pb-2">
      <nav className="bg-white py-5 px-8 rounded-3xl flex gap-6 shadow-xl border">
        <Link to="/" title="Home">
          <img
            src="/Home/home.png"
            alt="Home"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px] "
          />
        </Link>
        <Link to="/about" title="About Us">
          <img
            src="/Home/user.png"
            alt="About"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px] "
          />
        </Link>
        <Link to="/project" title="Projects">
          <img
            src="/Home/briefing.png"
            alt="Projects"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px] "
          />
        </Link>
        <Link to="/contact" title="Contact">
          <img
            src="/Home/email.png"
            alt="Contact"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px] "
          />
        </Link>
      </nav>
    </div>
  );
}
