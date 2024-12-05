import Card from './Card';
import '../styles/cards.css';

export default function Cards({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={crypto.randomUUID()} card={card} />
      ))}
    </div>
  );
}
