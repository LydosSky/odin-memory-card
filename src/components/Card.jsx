import '../styles/card.css';

export default function Card({ card, clickHandler }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card.images.png})`,
        background: '#555fff',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={clickHandler}
    ></div>
  );
}
