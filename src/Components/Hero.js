import Heros from "../Images/heros.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <img className="hero--photo" src={Heros} alt="Heros" />
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--content">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
