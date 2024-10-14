function personalInfo(firstName, lastName, age) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };
    return person;
}
var person1 = personalInfo("Peter", "Pan", "20");
console.log(person1);
