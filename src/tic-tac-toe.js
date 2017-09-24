class TicTacToe {
    constructor() {
        this.currentPlayerSymbol='x';
        this.field=new Array(3);
        for (var i=0; i<3; i++) {
            this.field[i]=new Array(3);
            for(var j=0;j<3;j++)
                this.field[i][j]=null;
        }
        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]===null){
            this.field[rowIndex][columnIndex]=this.currentPlayerSymbol;
            if(this.currentPlayerSymbol==='x')
                this.currentPlayerSymbol='o';
            else
                this.currentPlayerSymbol='x';
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw() || this.noMoreTurns()) 
            return true;
        return false;
    }

    getWinner() {
        for(var i=0;i<3;i++) 
            if(this.field[i][0]===this.field[i][1]&&this.field[i][0]===this.field[i][2]&&this.field[i][1])
                return this.field[i][0];
        for(var i=0;i<3;i++) 
            if(this.field[0][i]===this.field[1][i]&&this.field[0][i]===this.field[2][i]&&this.field[1][i])
                return this.field[0][i];
        
        if(this.field[0][0]===this.field[1][1]&&this.field[1][1]===this.field[2][2]&&this.field[0][0])
            return this.field[0][0];
        if(this.field[0][2]===this.field[1][1]&&this.field[1][1]===this.field[2][0]&&this.field[0][2])
            return this.field[0][2];
        return null;
    }

    noMoreTurns() {
        for(var i=0;i<3;i++)
          for(var j=0;j<3;j++)
            if(this.field[i][j]===null)
                return false;
        return true;
    }

    isDraw() {
        if(this.getWinner()===null) {
            if(this.noMoreTurns())
                return true;
            for(var i=0;i<3;i++) {
                if(this.field[i][0]===this.field[i][1])
                    return false;
                if(this.field[i][1]===this.field[i][2])
                    return false;
                if(this.field[i][0]===this.field[i][2])
                    return false;
            }
            for(var i=0;i<3;i++) {
                if(this.field[0][i]===this.field[1][i])
                    return false;
                if(this.field[1][i]===this.field[2][i])
                    return false;
                if(this.field[0][i]===this.field[2][i])
                    return false;
            }
            if(this.field[0][0]===this.field[1][1])
                return false;
            if(this.field[0][0]===this.field[2][2])
                return false;
            if(this.field[1][1]===this.field[2][2])
                return false;
            if(this.field[0][2]===this.field[1][1])
                return false;
            if(this.field[0][2]===this.field[2][0])
                return false;
            if(this.field[1][1]===this.field[2][0])
                return false;
        }
        else {
            return false;
        }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;