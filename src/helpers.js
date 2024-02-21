import words from "./data/wordsList.json";

export function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
