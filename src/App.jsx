// Importing necessary hooks and components from React and other files
import { useCallback, useEffect, useState } from "react";
import icon from "./assets/hangman(white).png";
import iconFlipped from "./assets/hangman(white)-flipped.png";
import { getWord } from "./helpers";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

// Main App component
function App() {
  // State variables
  const [wordToGuess, setWordToGuess] = useState(getWord); // State for the word to guess
  const [guessedLetters, setGuessedLetters] = useState([]); // State for guessed letters
  const [showKeyboard, setShowKeyboard] = useState(false); // State for showing/hiding the keyboard

  // Calculated values
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ); // Array of incorrectly guessed letters

  const gameStarted = guessedLetters.length === 0; // Boolean indicating if the game has started
  const gameOverLost = incorrectLetters.length >= 6; // Boolean indicating if the game is over and lost
  const gameOverWon = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter)); // Boolean indicating if the game is over and won

  // Callback function to add a guessed letter
  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((curLetters) => [...curLetters, letter]);
    },
    [guessedLetters]
  );

  // Effect to listen for keypress events and add the guessed letter
  useEffect(() => {
    const handler = (event) => {
      const key = event.key;

      if (!key.match(/^[a-z]$/)) return;

      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      return document.removeEventListener("keypress", handler);
    };
  }, []);

  // Effect to listen for Enter key press to restart the game
  useEffect(() => {
    const handler = (event) => {
      const key = event.key;

      if (key !== "Enter") return;

      event.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      return document.removeEventListener("keypress", handler);
    };
  }, []);

  // Rendering the components
  return (
    <div className="App">
      <a href="https://www.wikihow.com/Play-Hangman#:~:text=The%20object%20of%20hangman%20is,the%20stick%20figure%20is%20hung.">
        HELP
      </a>
      <header>
        <img src={icon} alt="hangman" />
        <h1>Hangman</h1>
        <img src={iconFlipped} alt="hangman" />
      </header>
      <h2>
        {gameOverWon
          ? "You won! 🥳🎉 Press the enter key to restart."
          : gameOverLost
          ? "You lost!🥲 Press the enter key to have another go."
          : gameStarted
          ? "Welcome!! Press any key or use the onscreen keyboard to start playing"
          : ""}
      </h2>
      <HangmanDrawing numGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        word={wordToGuess}
        reveal={gameOverLost}
      />
      {showKeyboard && (
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={gameOverWon || gameOverLost}
        />
      )}

      <button
        className="keyboard-btn"
        onClick={() => setShowKeyboard(!showKeyboard)}
      >
        {showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
      </button>
    </div>
  );
}

export default App;
