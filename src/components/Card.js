import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.img} alt="person" />
      <div className="card-rating">
        <img className="card--star" src={star} alt="star" />
        {props.rating}
        <span className="grey">{`(${props.reviewCount}) · ${props.country}`}</span>
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-price">
        <span className="card--price bold">{`From $${props.price}`}</span>/
        person
      </div>
    </div>
  );
}
