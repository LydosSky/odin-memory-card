export default function GameDisplay({ numberOfCards, setNumberOfCards }) {
  const handleClick = function () {
    const input = document.querySelector('#numberOfCards');
    setNumberOfCards(input.value);
  };

  return (
    <div className="display-container">
      <p>Playing with {numberOfCards}</p>
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
  );
}
