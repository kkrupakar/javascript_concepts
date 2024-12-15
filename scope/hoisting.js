warrior = 'Ninja'; //warrior initialized without declaring it 
warrior3 = 'viking';

const screamWarrior_hoist = () => {
    let warrior2 = 'Samurai';
    //warrior2 wrapped in a function now is a closure
    return {
        shootWarrior: () => {
            return console.log('HOISTING - I',warrior,warrior2);
        }
    }
}

const newWarrior = screamWarrior_hoist();

newWarrior.shootWarrior();

console.log('HOISTING - I',warrior,warrior3);

var warrior; // warrior declared here 

var warrior3; //will show undefined

