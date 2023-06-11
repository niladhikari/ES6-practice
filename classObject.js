// creating a class
class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color; 
        this.price = price;
        this.brand = 'Matador'
    }
}
// creating an object
const pen1 = new Pen("Marker", "Red", "$3");
const pen2 = new Pen("Bolpan", "Blue", "$4");
const pen3 = new Pen("High-School", "Black", "$5");
console.log(pen1,pen2,pen3);