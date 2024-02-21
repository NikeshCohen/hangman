// Functional component that renders the word to guess, with hidden or revealed letters based on guessed letters and reveal status
function HangmanWord({ word, guessedLetters, reveal }) {
  return (
    <div className="word">
      {/* Split the word into an array of letters and map over each letter */}
      {word.split("").map((letter, i) => (
        <span className="underscore" key={i}>
          <span
            // Set the visibility of the letter based on whether it has been guessed or revealed
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              // Set the color of the letter based on whether it has been guessed incorrectly and revealed
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "#b67352" // If the letter has not been guessed and the word is revealed, set the color to a specific color
                  : "#fefbf6", // Otherwise, set the color to the default color
            }}
          >
            {letter} {/* Display the letter */}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
