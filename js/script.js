function Phone(brand, price, color) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("Brand of the phone is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + "pln.");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var iPhone7 = new Phone("Apple", 2900, "black");
var GalaxyNote = new Phone("Samsung", 2500, "silver");
var GalaxyA5 = new Phone("Samsung", 1650, "white");
var GalaxyS7Edge = new Phone("Samsung", 3350, "gold");

iPhone6S.printInfo();
iPhone7.printInfo();
GalaxyNote.printInfo();
GalaxyA5.printInfo();
GalaxyS7Edge.printInfo();