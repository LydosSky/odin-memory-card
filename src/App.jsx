import { useEffect, useState } from 'react';
import fetcher from './utils/fetcher';
import data from './utils/mockData';
import Cards from './components/Cards';
import GameDisplay from './components/GameDisplay';

/**
 * App
 * - Makes call to deckofcardsapi and gets deck and holds deck in state
 * - Chooses number of cards holds in state
 * - Sends selected number of card to children component
 * */
function App() {
  const URI = 'https://deckofcardsapi.com/api/deck/';
  const [decks, setDecks] = useState(data.deck_id);
  const [cards, setCards] = useState(data.cards.slice(0, 12));
  const [numberOfCards, setNumberOfCards] = useState(12);

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
          numberOfCards={numberOfCards}
          setNumberOfCards={setNumberOfCards}
        />
        <Cards cards={cards} />
      </div>
    </>
  );
}

export default App;
