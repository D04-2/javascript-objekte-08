const muellerCar = {
    brand: 'BMW',
    model: 'X5',
    color: 'blue',
    mileage: 40000,
    year: 2019,
    today: new Date().getFullYear(),
    age: function () {
        return  this.today -this.year;
    }
}
console.log(muellerCar.age());



