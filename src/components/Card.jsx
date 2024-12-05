import '../styles/card.css';

export default function Card({ card }) {
  return (
    <div className="card">
      <img src={card.images.svg} />
    </div>
  );
}
