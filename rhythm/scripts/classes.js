
class hitCircle{
    constructor(xPos, yPos, circRadius){
        this._xPos = xPos;
        this._yPos = yPos;
        this._circRadius = circRadius;
    }

    get xPos(){
        return this._xPos;
    }

    // set xPos(x){
    //     this._xPos = x;
    // }

    get yPos(){
        return this._yPos;
    }

    // set yPos(y){
    //     this._yPos = y;
    // }

    // update(x,y){
    //     this.xPos(x);
    //     this.yPos(y);
    // }

    drawCircle(){
        circle(this._xPos, this._yPos, this._circRadius);
    }
}