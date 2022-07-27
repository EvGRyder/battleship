
const { createShip } = require("./Ship.js")

const Gameboard = function (size) {

    let gameboard = {}

    let board = [] 
    for (let i = 0; i < size; i++) {
        let row = new Array(size).fill("empty")
        board.push(row)
    }

    gameboard.setShip = function (length, xcoord, ycoord, direction) {
        let Ship = createShip(length)


        if (direction == "horizontal") {
            // Placement size check
            if (xcoord + length > size) return console.log("ship too big bruh");
            for (let i = 0; i < length; i++) {
                if (board[ycoord][xcoord+i] !== "empty") return console.log("bruh, it's occupied")
            }

            // Placement
            for (let i = 0; i < length; i++) {
                board[ycoord][xcoord+i] = [Ship, i]
            }

            for (let j = -1; j < 2; j++) {
                for (let i = -1; i < length + 1; i++) {
                    occupied(ycoord+j, xcoord+i)
                }
            }
        }

        if (direction == "vertical"){
            // Placement size check
            if (ycoord + length > size) return console.log("ship too big bruh");
            for (let j = 0; j < length; j++) {
                if (board[ycoord+j][xcoord] !== "empty") return console.log("bruh, it's occupied")
            }

            // Placement
            for (let i = 0; i < length; i++) {
                board[ycoord+i][xcoord] = [Ship, i]
            }

            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < length + 1; j++) {
                    occupied(ycoord+j, xcoord+i)
                }
            }
        }

        function occupied (y, x) {
            if (x < 0) x = 0
            if (x > size - 1) x = size - 1
            if (y < 0) y = 0
            if (y > size - 1) y = size - 1
            if (board[y][x] == "empty") board[y][x] = "occupied"
        }


    }

    gameboard.board = board

    return (
        gameboard
    )
}

let Board1 = Gameboard(8)
Board1.setShip(1, 0, 0, "vertical")
Board1.setShip(1, 7, 7, "vertical")
//console.log(Board1);
console.log(Board1.board);