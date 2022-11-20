var Parent = require("./Parent");
class Killer extends Parent {
    constructor(x, y) {
        super(x,y);
        this.energy = 8
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) { 
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newkiller = new Killer(newX, newY);
            killerArr.push(newkiller);
            this.energy = 8
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        var emptyCells2 = this.chooseCell(2);
        var newCell2 = random(emptyCells2);
        var emptyCells3 = this.chooseCell(1);
        var newCell3 = random(emptyCells3);
        var emptyCells4 = this.chooseCell(4);
        var newCell4 = random(emptyCells4);


        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 12) {
                this.mul()
            }
        } else if(newCell2){
            this.eatGrassEater()
        } else {
            this.move()
        }
    }
    eatGrassEater() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 12) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    eatPredator() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 12) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    eatGrass() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 12) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    eatHunter() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in hunterArr) {
                if (newX == hunterArr[i].x && newY == hunterArr[i].y) {
                    hunterArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 12) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in killerArr) {
            if (this.x == killerArr[i].x && this.y == killerArr[i].y) {
                killerArr.splice(i, 1);
                break;
            }
        }
    }
}
