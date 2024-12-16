function Item(){}
Item.prototype.type = 'floral';
Item.prototype.logItem = function(){
    console.log('%c',this.name,'font-weight: bold');
    for(let prop in this){
        console.log('',prop,': ',this[prop]);
    }
}

function Live(name, pot, quantity =1 ){
    this.name = name;
    this.pot = pot;
    this.quantity = quantity;
}

Live.prototype = new Item();
Live.prototype.storage = 'warm';

function Flower(quantity,color){
    this[color] = quantity;
}

Flower.prototype = new Item();

function Cut(){}
Cut.prototype = new Item();
Cut.prototype.storage = 'cool';


function Arrangement(name,vase,quantity =1){
    this.name = name;
    this.vase = vase;
    this.quantity = quantity;
}

Arrangement.prototype = new Cut();


function Bouquet(name,vase){
    this.name = name;
    this.vase = vase;
}

Bouquet.prototype = new Cut();
Bouquet.prototype.flowers = {
    addStem: function(name, quantity = 1,color = 'Default'){
        this[name] = new Flower(quantity,color);
    }
}