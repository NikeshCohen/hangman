// Importing the keys array from the data/keys module
import { keys } from "../data/keys";

// Functional component that renders the keyboard with buttons for each letter
function Keyboard({
  activeLetters, // Array of letters that are active (have not been guessed yet)
  inactiveLetters, // Array of letters that are inactive (have been guessed)
  addGuessedLetter, // Function to add a guessed letter to the guessedLetters array
  disabled, // Boolean indicating whether the keyboard should be disabled
}) {
  return (
    <div className="keyboard">
      {/* Map over the keys array to render a button for each letter */}
      {keys.map((key) => {
        const isActive = activeLetters.includes(key); // Check if the letter is active
        const isInactive = inactiveLetters.includes(key); // Check if the letter is inactive

        return (
          <button
            // Set the class name of the button based on its active/inactive status
            className={isActive ? "active" : isInactive ? "inactive" : ""}
            // Handle click event to add the guessed letter to the guessedLetters array
            onClick={() => addGuessedLetter(key)}
            // Disable the button if it's already active, inactive, or the keyboard is disabled
            disabled={isActive || isInactive || disabled}
            key={key} // Set the key prop for React to track each button
          >
            {key} {/* Display the letter on the button */}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
