# Tic Tac Toe

A responsive and interactive Tic Tac Toe game developed using **HTML5, CSS3, and Vanilla JavaScript**. The project supports two-player gameplay, turn management, winner detection, and game reset functionality.

## About the Project

This project is a web-based implementation of the classic Tic Tac Toe game.

Two players take turns placing **X** and **O** on a 3×3 game board. After each move, the application checks all possible winning combinations. When a player completes a winning pattern, the game displays a winner message and disables the board.

The project was developed to strengthen fundamental frontend development concepts such as **DOM manipulation, event handling, CSS layout, responsive design, and JavaScript game logic**.

## Features

* Two-player gameplay
* X and O turn management
* Automatic winner detection
* Winner notification overlay
* Board disabled after a player wins
* Reset Game functionality
* New Game functionality
* Responsive game board
* Clean and minimal user interface
* Prevents already-selected boxes from being clicked again

## Technologies Used

* **HTML5** — Structure and game interface
* **CSS3** — Styling, layout, and responsive design
* **JavaScript (ES6)** — Game logic and DOM manipulation

## Project Structure

```text
TicTacToe/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

## How It Works

The game uses predefined winning combinations to determine the winner.

There are eight possible winning patterns:

```javascript
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
```

After every move, the `checkWinner()` function checks these combinations.

If the values in all three positions are the same and not empty, that player is declared the winner.

## How to Play

1. Open the game in a web browser.
2. Player X starts the game.
3. Players take turns selecting an empty box.
4. The first player to complete a row, column, or diagonal wins.
5. Once a winner is detected, the board is disabled.
6. Use **NEW GAME** or **RESET GAME** to start a new match.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/TicTacToe.git
```

### Navigate to the Project

```bash
cd TicTacToe
```

### Run the Project

Open `index.html` in any modern web browser.

No external libraries, frameworks, or dependencies are required.

## Responsive Design

The application uses CSS responsive units such as:

* `vmin`
* `vh`
* `vw`

These units allow the game board and its elements to adapt to different screen sizes.

The game can be used on:

* Desktop
* Laptop
* Tablet
* Mobile devices

## Future Improvements

The following features can be added in future versions:

* Draw or tie detection
* Single-player mode with AI
* Player score tracking
* Winning animation
* Game sound effects
* Light and dark theme
* Improved UI animations
* Game statistics

## Live Demo

Add your GitHub Pages deployment link here:

```text
https://your-username.github.io/TicTacToe/
```

## Author

**Raushan Kumar**

Developed as a frontend mini-project to practice HTML, CSS, JavaScript, DOM manipulation, event handling, and responsive web design.

## License

This project is available for educational and learning purposes.

