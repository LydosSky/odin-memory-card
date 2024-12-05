import Card from './Card';
import '../styles/cards.css';

export default function Cards({ cards, numberOfCards }) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${numberOfCards / 2}, 1fr)` }}
      className="cards-container"
    >
      {cards.map((card) => (
        <Card key={crypto.randomUUID()} card={card} />
      ))}
    </div>
  );
}
