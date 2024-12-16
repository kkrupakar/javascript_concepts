
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

updateClicks.addChoice('burger','pizza','coke');
console.log(updateClicks.getChoices());