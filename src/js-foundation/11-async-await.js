/* Async - await procedures makes asynchronous code to synchronous */
async function getRandomQuote() {
  const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const [data] = await response.json();
  const { quote, author } = data;

  const rootElement = document.querySelector('#root');
  const pElement = document.createElement('p');
  const qElement = document.createElement('q');

  pElement.textContent = author + ': ';
  qElement.textContent = quote;

  pElement.appendChild(qElement);
  rootElement.appendChild(pElement);

}

getRandomQuote();