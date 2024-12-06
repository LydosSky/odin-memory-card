import '../styles/card.css';

export default function Card({ card, clickHandler }) {
  return (
    <div
      className="card"
      style={{
        background: `url(${card.images.png})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => clickHandler(card.code)}
    ></div>
  );
}
