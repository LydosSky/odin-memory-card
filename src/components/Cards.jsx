import Card from './Card';
import shuffle from '../utils/shuffle';
import '../styles/cards.css';

export default function Cards({
  setScore,
  setHighestScore,
  score,
  cards,
  setCards,
  numberOfCards,
}) {
  const clickHandler = function (cardCode) {
    if (!score.includes(cardCode)) {
      setScore([...score, cardCode]);
      setHighestScore((prevScore) =>
        score.length > prevScore ? score.length : prevScore,
      );
    } else setScore([]);
    setCards(shuffle(cards));
  };

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${numberOfCards / 2}, 1fr)` }}
      className="cards-container"
    >
      {cards.map((card) => (
        <Card
          clickHandler={clickHandler}
          key={crypto.randomUUID()}
          card={card}
        />
      ))}
    </div>
  );
}
