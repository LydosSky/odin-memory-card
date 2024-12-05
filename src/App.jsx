import { useEffect, useState } from 'react';
import fetcher from './utils/fetcher';

/**
 * App
 * - Makes call to deckofcardsapi and gets deck and holds deck in state
 * - Chooses number of cards holds in state
 * - Sends selected number of card to children component
 * */
function App() {
  const URI = 'https://deckofcardsapi.com/api/deck/';
  const [decks, setDecks] = useState({});
  const [cards, setCards] = useState({});
  const [numberOfCards, setNumberOfCards] = useState(12);

  useEffect(function () {
    fetcher(`${URI}/new/shuffle/?deck_count=1`).then((deck) => setDecks(deck));
  }, []);

  useEffect(
    function () {
      fetcher(`${URI}/${decks.deck_id}/draw/?count=${numberOfCards}`).then(
        (cards) => setCards(cards),
      );
    },
    [decks, numberOfCards],
  );

  return <h1 style={{ fontSize: '72px' }}>Hello World</h1>;
}

export default App;
