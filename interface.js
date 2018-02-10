function greetingMessage(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
;
var osoro = {
    firstName: "Lawrence",
    lastName: "moindi"
};
document.body.innerHTML = greetingMessage(osoro);
