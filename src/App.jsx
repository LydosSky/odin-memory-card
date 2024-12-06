import { useEffect, useState } from 'react';
import fetcher from './utils/fetcher';
import data from './utils/mockData';
import Cards from './components/Cards';
import GameDisplay from './components/GameDisplay';
import './styles/app.css';

/**
 * App
 * - Makes call to deckofcardsapi and gets deck and holds deck in state
 * - Chooses number of cards holds in state
 * - Sends selected number of card to children component
 * */
function App() {
  const URI = 'https://deckofcardsapi.com/api/deck/';
  const [decks, setDecks] = useState(data.deck_id);
  const [numberOfCards, setNumberOfCards] = useState(12);
  const [cards, setCards] = useState(data.cards.slice(0, 12));
  const [score, setScore] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  // useEffect(function () {
  //   fetcher(`${URI}/new/shuffle/?deck_count=1`).then((deck) => setDecks(deck));
  // }, []);

  // useEffect(
  //   function () {
  //     fetcher(`${URI}/${decks.deck_id}/draw/?count=${numberOfCards}`).then(
  //       (cards) => setCards(cards),
  //     );
  //   },
  //   [decks, numberOfCards],
  // );

  return (
    <>
      <div className="main-container">
        <GameDisplay
          score={score}
          highestScore={highestScore}
          numberOfCards={numberOfCards}
          setNumberOfCards={setNumberOfCards}
        />
        <Cards
          score={score}
          setScore={setScore}
          cards={cards}
          setCards={setCards}
          numberOfCards={numberOfCards}
        />
      </div>
    </>
  );
}

export default App;
