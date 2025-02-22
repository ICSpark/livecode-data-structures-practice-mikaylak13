let Pikachu = {
    name: "Pikachu",
    type: "Electric",
    moves: ["Iron Tail", "Thunderbolt"],
    speak: function () {
        console.log("Pika pika!");
    }
};

console.log(Pikachu.name + " is an " + Pikachu.type + " type");

Pikachu.speak();