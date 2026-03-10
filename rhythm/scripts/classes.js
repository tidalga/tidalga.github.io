/*
Referenced w3schools for learning how to use JavaScript classes
Link: https://www.w3schools.com/js/js_class_inheritance.asp
*/
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

    drawCircle(){
        circle(this._xPos, this._yPos, this._circRadius);
    }
}