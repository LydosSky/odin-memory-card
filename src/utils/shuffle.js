/*
 * Shuffles given array using fisher-yates
 * shuffle algorithm
 *
 * link: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param {array<number>}
 * @returns {array<number>}
 */
export default function (cards) {
  let shuffled = [];
  let i = 0;
  while (i < cards.length) {
    const j = randomInt(0, i);
    if (i !== j) shuffled[i] = shuffled[j];
    shuffled[j] = cards[i];
    i += 1;
  }

  return shuffled;
}

/*
 * Generates random number in range [min, max)
 *
 * @param  {number} Integer
 * @param  {number} Integer
 * @return {number} Integer
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
