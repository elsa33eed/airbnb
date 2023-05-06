import logo from "../Images/airbnb 1.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="sign">
            <button>
              <a href="#">Sign Up</a>
            </button>
            <button>
              <a href="#">Sign In</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
