/* Async - await procedures makes asynchronous code to synchronous */
export async function getRandomQuote() {
  const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const [data] = await response.json();
  return data;
}

// getRandomQuote();