let person = {

    "name" : "Fabio",
    "surname" : "Santangelo",
    "age" : "20 Years old",
    "greet" : function greetName() {
    console.log(
        "Hello", this.name, "how are you today?"
    );       
},
};

person.greet();



   