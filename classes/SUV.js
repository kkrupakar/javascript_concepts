import Car from "./Car.js";

class SUV extends Car{

    constructor(doors,engine,color){
        super(doors,engine,color);
        this._brand = "NA";
        this.wheels = 4;
        this.ac = true;
    }

    get getBrand(){
        return this._brand;
    }

    /**
     * @param {(arg0: string) => void} brand
     */
    set setBrand(brand){
        this._brand = brand;
    }

}

const cx5 = new SUV(4,'V6','Grey');

console.log(cx5.getBrand);
cx5.setBrand = 'Mazda';

console.log(cx5);
console.log(cx5.carStats());

console.log(cx5.getBrand);

cx5.setBrand = 'BMW';
console.log(cx5.getBrand);
console.log(cx5);

export default SUV; 