
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
        board[xcoord][ycoord] = Ship
    }

    gameboard.board = board

    return (
        gameboard
    )
}


