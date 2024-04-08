interface Cube{
    length:number
}
void function Volume(){
    return [Math.pow(this.length,3)]
}
void function SurfaceArea() {
    return [6*Math.pow(this.length,2)]
}
console.log('Cube')