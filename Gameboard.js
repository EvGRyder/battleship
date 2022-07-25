
const { createShip } = require("./Ship.js")

const Gameboard = function (size) {

    let gameboard = {}

    let board = [] 
    for (let i = 0; i < size; i++) {
        let row = new Array(size)
        board.push(row)
    }

    gameboard.setShip = function (size, xcoord, ycoord) {
        let Ship = createShip(size)
        for (let i = 0; i < size; i++) {
            board[ycoord][xcoord+i] = Ship
        }
    }

    gameboard.board = board

    return (
        gameboard
    )
}


let Board1 = Gameboard(5)
Board1.setShip(3, 1, 1)
console.log(Board1);