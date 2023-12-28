/* Fetch API performs http request */
const request = fetch('https://api.breakingbadquotes.xyz/v1/quotes');

request
  .then((response) => response.json())
  .then(([data]) => {
    const { quote, author } = data;
    const rootElement = document.querySelector('#root');
    const pElement = document.createElement('p');
    const qElement = document.createElement('q');

    pElement.textContent = author + ': ';
    qElement.textContent = quote;

    pElement.appendChild(qElement);

    rootElement.appendChild(pElement);
  });