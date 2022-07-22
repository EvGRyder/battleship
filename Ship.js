

function createShip (size) {

    let hitArray = new Array(size)

    return {
        size,
        hitArray,
        sunk: false,

        hit(a) {
            hitArray[a] = "hit";
            this.isSunk()
        },

        isSunk() {
            if (hitArray.filter(word => word == "hit").length == size) {
                sunk = true;
                console.log("it's sunk!");
            } else {
                console.log("not sunk!");
            }
        }
    }
}
