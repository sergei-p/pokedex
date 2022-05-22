import "./css/Card.css";

function Card() {
  return(
    <div className="card">
    <img className="cardImg" src="https://picsum.photos/200/300" alt="Image" />
    <div className="cardContainer">
      <h2><b>PokemonName</b></h2>
      <p>ability</p>
      <button class="cardButton">More Info</button>
    </div>
  </div>
  )
}

export default Card;