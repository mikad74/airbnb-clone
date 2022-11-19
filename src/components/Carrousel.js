import Card from "./Card";

import imgPerson1 from "../images/imgPerson1.jpg";
import imgPerson2 from "../images/imgPerson2.jpg";
import imgPerson3 from "../images/imgPerson3.jpg";

const props = [
  {
    img: imgPerson1,
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life lessons with Person 1",
    price: 136,
  },
  {
    img: imgPerson2,
    rating: 5.0,
    reviewCount: 30,
    country: "USA",
    title: "Learn wedding photography",
    price: 126,
  },
  {
    img: imgPerson3,
    rating: 4.8,
    reviewCount: 2,
    country: "USA",
    title: "Group Mountain Biking",
    price: 50,
  },
];
export default function Carrousel() {
  return (
    <div className="carrousel">
      {props.map((card, idx) => 
        <Card {...card} key={idx}/>
      )}
    </div>
  );
}
