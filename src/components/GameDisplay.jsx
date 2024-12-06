import '../styles/gamedisplay.css';

export default function GameDisplay({
  score,
  highestScore,
  numberOfCards,
  setNumberOfCards,
}) {
  const handleClick = function () {
    const input = document.querySelector('#numberOfCards');
    if (input.value > 0 && input.value <= 52) setNumberOfCards(input.value);
  };

  return (
    <div className="display-container">
      <div className="score-display">
        <p>Your Score: {score.length}</p>
        <p>Highest Score: {highestScore}</p>
      </div>
      <div className="cards-control">
        <p>Playing with {numberOfCards} cards.</p>
        <div className="input-field">
          <input
            id="numberOfCards"
            name="number"
            type="number"
            defaultValue={numberOfCards}
            min="0"
            max="52"
          />
          <button type="submit" onClick={handleClick}>
            Set
          </button>
        </div>
      </div>
    </div>
  );
}
