import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import image3 from "../images/img3.jpg"
import image4 from "../images/img4.jpg"
import image5 from "../images/img5.jpg"
import image6 from "../images/img6.jpg"
import image7 from "../images/img7.jpg"
import image8 from "../images/img8.jpg"
import image9 from "../images/img9.jpg"

export default function FigJam() {
  return (
    <div className="fig-jam">
      <div className="fig-jam--column">
        <img src={image1} id="fig-jam--image1" alt="fig jam 1" />
      </div>
      <div className="fig-jam--column">
        <img src={image2} id="fig-jam--image2" alt="fig jam 2" />
        <img src={image3} id="fig-jam--image3" alt="fig jam 3" />
      </div>
      <div className="fig-jam--column">
        <img src={image4} id="fig-jam--image4" alt="fig jam 4" />
        <img src={image5} id="fig-jam--image5" alt="fig jam 5" />
      </div>
      <div className="fig-jam--column">
        <img src={image6} id="fig-jam--image6" alt="fig jam 6" />
        <img src={image7} id="fig-jam--image7" alt="fig jam 7" />
      </div>
      <div className="fig-jam--column">
        <img src={image8} id="fig-jam--image8" alt="fig jam 8" />
        <img src={image9} id="fig-jam--image9" alt="fig jam 9" />
      </div>
    </div>
  )
}
