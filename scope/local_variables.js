const screamWarrior_local = () => {
    var warrior1 = 'Ninja';  // any declaration inside function is local scoped
    let warrior2 = 'Samurai';

    return `Our warriors are ${warrior1} and ${warrior2}`;
}

console.log('LOCAL_VARIABLE - I',screamWarrior_local());

console.log('LOCAL_VARIABLE - I',warrior1,warrior2)