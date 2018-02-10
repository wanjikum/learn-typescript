interface Person{
    firstName: String,
    lastName: String
}

function greetingMessage(person: Person){
    return "Hello " + person.firstName + " " + person.lastName;
};

var osoro = {
    firstName: "Lawrence",
    lastName: "moindi"
};

document.body.innerHTML = greetingMessage(osoro);
