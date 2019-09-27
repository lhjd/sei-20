console.log("Let the game begin!");

var board = [
                [1,2,3],
                [4,5,6],
                [7,8,null]
            ];

var boardSize = 3;

var moveSquare = function(squareNumber) {
    console.log("moving square!");

    if (!squareNumber) {
        console.log("empty square is clicked!");
    }

};


var handleSquareClick = function (event, board) {
    // console.log("event: ", event);
    var squareNumber = event.target.innerText;
    console.log( "square number " + squareNumber + " is clicked!");

    moveSquare(squareNumber, board);

};



var createBoardElements = function(board, boardSize) {
    console.log("creating board elements!");
    //create board
    var boardDiv = document.createElement("div");
    boardDiv.classList.add("board");

    for (var i = 0; i < boardSize; i++) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (var j = 0; j < boardSize; j++) {
            var squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.innerText = board[i][j];
            squareDiv.addEventListener("click", function(event) {
                handleSquareClick(event, board);
            });
            rowDiv.appendChild(squareDiv);
        }
        boardDiv.appendChild(rowDiv);
    }

    var interfaceDiv = document.querySelector(".interface");
    interfaceDiv.innerHTML = "";
    interfaceDiv.appendChild(boardDiv);

};

// set up a new game
var startNewGame = function(event, board, boardSize) {
    console.log("start new game!");

    createBoardElements(board, boardSize);


};


var newGameBtn = document.querySelector("#new-game-btn");
newGameBtn.addEventListener("click", function(event) { startNewGame(event, board, boardSize); });