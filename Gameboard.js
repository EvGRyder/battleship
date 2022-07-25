
const { createShip } = require("./Ship.js")

const Gameboard = function (size) {

    let gameboard = {}

    let board = [] 
    for (let i = 0; i < size; i++) {
        let row = new Array(size)
        board.push(row)
    }

    gameboard.setShip = function (size, xcoord, ycoord, direction) {
        let Ship = createShip(size)
        if (direction == "horizontal") {
            for (let i = 0; i < size; i++) {
                board[ycoord][xcoord+i] = Ship
            }
        }
        if (direction == "vertical"){
            for (let i = 0; i < size; i++) {
                board[ycoord+i][xcoord] = Ship
            }
        }
    }

    gameboard.board = board

    return (
        gameboard
    )
}


let Board1 = Gameboard(5)
Board1.setShip(3, 1, 1, "horizontal")
console.log(Board1);