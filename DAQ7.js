var person = (function() {
    var age = 25;
    return {
        name: "Nicholas",

       getAge: function() {
            return age;
        },

        growOlder: function() {
             age++;
        }
    };
}());
console.log(person.name);
person.age = 29;
console.log(person.getAge());
