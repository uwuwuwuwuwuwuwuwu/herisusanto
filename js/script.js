const quoteEndpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const imageEndpoint = 'https://source.unsplash.com/random/1920x1080';

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

  const tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

function changeBackground(url) {
  document.body.style.background = `url(${url}) no-repeat`;
}

function getQuote() {
  fetch(quoteEndpoint)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayQuote(data.message);
    })
    .catch(() => {
      console.log('An error occurred');
    });
}

function getBackground() {
  fetch(imageEndpoint)
    .then(response => {
      return response;
    })
    .then(data => {
      changeBackground(data.url);
    })
    .catch(() => {
      console.log('An error occurred');
    });
}

function generate() {
  getQuote();
  getBackground();
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', generate);

getQuote();
getBackground();
