"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 100;
        this.color = 'white';
    }
    drive() {
        return 'drive';
    }
    brake() {
        return 'brake';
    }
}
class Ford {
    constructor() {
        this.mileage = 1;
        this.price = 2;
        this.color = 'white';
        this.seats = 2;
        this.tire = 4;
    }
    drive() {
        return 'drive';
    }
    brake() {
        return 'break';
    }
}
const myFordCar = new Ford();
