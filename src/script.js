// Define an object with quote components
const quoteComponents = {
  beginning: [
    "Believe in yourself",
    "Dream big",
    "Embrace challenges",
    "Find your passion",
    "Take risks",
    "Never give up",
    "Stay positive",
    "Be kind to yourself",
    "Focus on the good",
    "Trust the process",
  ],
  middle: [
    "and you will succeed",
    "and make it happen",
    "and reach for the stars",
    "and overcome any obstacle",
    "and discover your true potential",
    "and create your own destiny",
    "and inspire others",
    "and let your light shine",
    "and find joy in the journey",
    "and embrace change",
  ],
  end: [
    "because you're worth it",
    "because you have what it takes",
    "because the world needs your talents",
    "because you are capable of greatness",
    "because you deserve happiness",
    "because you are stronger than you think",
    "because you can make a difference",
    "because you are unique and special",
    "because you are enough",
    "because today is a new beginning",
  ],
};

// Function to generate a random inspirational quote
function generateQuote() {
  // Retrieve random pieces of data for each category
  const beginning = getRandomElement(quoteComponents.beginning);
  const middle = getRandomElement(quoteComponents.middle);
  const end = getRandomElement(quoteComponents.end);

  // Construct the quote
  const quote = `${beginning} ${middle} ${end}`;

  // Get the quote container element
  const quoteContainer = document.getElementById("quote-container");

  // Clear the previous content
  quoteContainer.innerHTML = "";

  // Create a new quote paragraph element
  const quoteParagraph = document.createElement("p");
  quoteParagraph.textContent = quote;

  // Append the quote paragraph to the quote container
  quoteContainer.appendChild(quoteParagraph);
}

// Function to get a random element from an array
function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Generate and display a random inspirational quote when the page loads
generateQuote();

// Generate and display a random inspirational quote when the button is clicked
const generateButton = document.getElementById("btn");
generateButton.addEventListener("click", generateQuote);
