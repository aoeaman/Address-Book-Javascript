
let contacts = [];
function insertContact(Person) {
        Person.id = id;
        contacts.push(Person);
        isNameVAlid = false;
        isEmailVAlid = false;
        isMobileVAlid = false;
        return Person;
}

function isInputValid() {
    return isMobileVAlid && isEmailVAlid && isNameVAlid
}

function getUser(id){
	return User = contacts.find(_ => _.id == id)
}

function deleteContact() {
    function arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            return ele != value;
        });
    }
    contacts = arrayRemove(contacts, getUser(selectedcontact));

    if (contacts.length != 0) {
        getDetails(contacts[0].id);
    }
    else {
        Home();
    }

}



function UpdateDetails(user) {
    let Person = Object.create(User);
	Person=Create(Person);
    Person.id = user.id;
    contacts[contacts.map((x, id) => [id, x]).filter(x => x[1] == user)[0][0]] = Person;
	setDetails(Person);
}