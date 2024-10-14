function personalInfo(firstName: string, lastName: string, age: string){
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };

    return person;
}

const person1 = personalInfo("Peter", "Pan", "20");
console.log(person1); 