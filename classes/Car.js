/**
 * 
 * Functions            |           Classes
 *   Hoisted            |             Not Hoisted
 *   Can be overwritten |             Can't be overwritten
 *                      |             Always runs in strict mode
 */


class Car{
    //only one constructor allowed in class
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} and beautiful ${this.color} color!`;
    }

    static totalDoors(car1,car2){
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1+doors2;
    }
}

const cx5 = new Car(4,'V6','Gray');
const civic = new Car(3,'V4','Blue');

console.log(cx5);
console.log(cx5.carStats());

console.log(civic);
console.log(civic.carStats());

console.log('Total Doors : ',Car.totalDoors(cx5,civic));


export default Car;