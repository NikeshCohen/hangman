# Hangman Game

This is a simple Hangman game built using React. It allows players to guess letters to uncover a hidden word. If the player makes too many incorrect guesses, the game ends.

## How to Play

1. Start by pressing any key or using the on-screen keyboard to guess letters.
2. If the letter is in the word, it will be revealed. Otherwise, a part of the hangman drawing will be added.
3. Keep guessing until you either uncover the entire word or make too many incorrect guesses.

## Features

- On-screen keyboard for easy letter selection.
- Hangman drawing that updates based on incorrect guesses.
- Game over messages for winning and losing.
- Press Enter to restart the game.

## Installation

1. Install dependencies:

   ```bash
   npm i
   ```

## Keyboard Component

Responsible for rendering the keyboard based on wither the user would like to use it

## Hangman drawing

Draws hangman depending on the number of incorrect answers

## Hangman Word

Responsible for rendering the word to the DOM aswell as all the styling and logic, such as hiding and showing the word.
