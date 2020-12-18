const ticTac = {
    myHeading: document.getElementById("heading"),
    clearBoard: document.getElementById("clearBoard"),
    square: document.getElementsByClassName("square"),
    player: 1,
    cell: [document.getElementById("sq0"), document.getElementById("sq1"), document.getElementById("sq2"), document.getElementById("sq3"), document.getElementById("sq4"), document.getElementById("sq5"), document.getElementById("sq6"), document.getElementById("sq7"), document.getElementById("sq8")],
    cellCheckArr: ["empty","empty","empty","empty","empty","empty","empty","empty","empty"],
    winCheckArr: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    winner: function(winnerName) {
        this.myHeading.innerHTML = `${winnerName} won!`;
    },
    drawCheck: function(squareCon) {
        squareCon != "empty";
    },
    winCheck: function() {
        for (i = 0; i < 8; i++) {
            if (this.cellCheckArr[this.winCheckArr[i][0]] === "Noughts" && this.cellCheckArr[this.winCheckArr[i][1]] === "Noughts" && this.cellCheckArr[this.winCheckArr[i][2]] === "Noughts") {
                this.winner("Noughts");
            } else if (this.cellCheckArr[this.winCheckArr[i][0]] === "Crosses" && this.cellCheckArr[this.winCheckArr[i][1]] === "Crosses" && this.cellCheckArr[this.winCheckArr[i][2]] === "Crosses") {
                this.winner("Crosses");
            }
        }
        if (this.cellCheckArr.every(this.drawCheck)) {
            this.winner("Nobody");
        }
    },
    turnFun: function(squareNum) {
        if (this.cellCheckArr[squareNum] === "empty") {
            if (this.player === 1) {
                this.cellCheckArr[squareNum] = "Crosses";
                this.cell[squareNum].style.backgroundImage = "url('./assets/cross.png')";
                this.winCheck();
                this.player = 2;
                console.log(this.cellCheckArr);
        } else {
            this.cellCheckArr[squareNum] = "Noughts";
            this.cell[squareNum].style.backgroundImage = "url('./assets/circle.png')";;
            this.winCheck();
            this.player = 1;
            console.log(this.cellCheckArr);
        }
    }
    },
}

ticTac.cell[0].addEventListener("click", () => {
    ticTac.turnFun(0);
});

ticTac.cell[1].addEventListener("click", () => {
    ticTac.turnFun(1);
})
ticTac.cell[2].addEventListener("click", () => {
    ticTac.turnFun(2);
})
ticTac.cell[3].addEventListener("click", () => {
    ticTac.turnFun(3);
})
ticTac.cell[4].addEventListener("click", () => {
    ticTac.turnFun(4);
})
ticTac.cell[5].addEventListener("click", () => {
    ticTac.turnFun(5);
})
ticTac.cell[6].addEventListener("click", () => {
    ticTac.turnFun(6);
})
ticTac.cell[7].addEventListener("click", () => {
    ticTac.turnFun(7);
})
ticTac.cell[8].addEventListener("click", () => {
    ticTac.turnFun(8);
})