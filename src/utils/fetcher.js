export default function fetcher(string) {
  return fetch(string).then((response) => response.json());
}
