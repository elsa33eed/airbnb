import Star from "../Images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.location === "Online") {
    badgeText = "online";
  }
  return (
    <div className="cards">
      <div className="container">
        <div className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img
            className="card--img"
            src={`../Imgs/${props.coverImg}`}
            alt={props.name}
          />
          <div className="card--stats">
            <img src={Star} alt="icon" className="card--star" />
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) . </span>
            <span className="gray">{props.location}</span>
          </div>
          <p className="card--title">{props.title}</p>
          <p>
            <span className="bold card--price">From ${props.price} </span>/
            person
          </p>
        </div>
      </div>
    </div>
  );
}
