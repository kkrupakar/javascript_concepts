
const updateClicks = (function(){
    const choices = [];
    return {
        addChoice: function(choice){
            choices.push(choice);
        },
        getChoices: function(){
            return [...choices];
        }
    }
})();

updateClicks.addChoice('burger');
updateClicks.addChoice('pizza');
updateClicks.addChoice('coke');

console.log(updateClicks.getChoices());