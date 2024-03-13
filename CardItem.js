import './App.css';


function CardItem({card, onClick}) {

  return (
    <div className={`card ${card.rarity}`} onClick={onClick}>
            <h2>{card.name}</h2>
            <img src={card.imageUrl} alt={card.name} />
            <p>{card.type}</p>
            <ul>
              <li>{card.rarity}</li>
            </ul>
    </div>
  );
}

export default CardItem;
