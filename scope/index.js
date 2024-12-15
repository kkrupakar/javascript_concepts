var warrior = 'Ninja';

const screamWarrior = () => {
    let warrior2 = 'Samurai'; // block scoped varible
    warrior3 = 'Viking'; // globally scoped variable due to without any let,const 
    console.log('SCOPE - I',warrior,warrior2);
}

screamWarrior();    
console.log('SCOPE - I',warrior,warrior3);
