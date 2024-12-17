let mixin = {
    madeIn(){
        console.log('This car was made this year');
    }
}

const carMixin = {
    __proto__: mixin,

    madeIn(){
        super.madeIn();
    }
}

export default carMixin;