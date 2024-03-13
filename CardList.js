import './App.css';
import CardItem from './CardItem';

function CardList({deck, onCardClick}) {

  CardList.defaultProps = {
    onCardClick: () => {}
  };

  return (
    <div className='cards' >
      {
        deck.map((card, key) => (
          <CardItem key={key} card={card} onClick={() => onCardClick(key)}/>
        ))
      }
    </div>
  );
}

export default CardList;
