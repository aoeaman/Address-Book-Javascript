
function Add() {
    let add = document.getElementById("add");
    let info = document.getElementById("info");
    let homepage = document.getElementById("homepage");
    document.form1.reset();
    add.style.display = "block";
    info.style.display = "none";
    homepage.style.display = "none";

    let Updatebtn = document.getElementById("update-button");
    let Addbtn = document.getElementById("add-button");
    Addbtn.style.display = "block";
    Updatebtn.style.display = "none";
}

function Home() {
    let add = document.getElementById("add");
    let info = document.getElementById("info");
    let homepage = document.getElementById("homepage");
    add.style.display = "none";
    info.style.display = "none";
    homepage.style.display = "block";
}

function Create() {
    let user = Object.create(User);
    user.Name = document.getElementById("enteredname").value;
    user.Email = document.getElementById("email").value;
    user.Mobile = document.getElementById("mobile").value;
    user.Landline = document.getElementById("landline").value;
    user.Website = document.getElementById("website").value;
    user.Address = document.getElementById("address").value;
    return user;
}
function AddDetails(Email, Name, Mobile, divNode) {

    divNode.className = "contact";
    divNode.id = id;
    divNode.tabIndex = id;
    id++;


    var email = document.createElement("label");
    email.innerText = Email;
	email.id="email"+divNode.id
    email.className = "divemail";

    var name = document.createElement("label");
    name.innerText = Name;
	name.id="name"+divNode.id
    name.className = "divname";

    var phone = document.createElement("label");
    phone.innerText = Mobile;
	phone.id="phone"+divNode.id
    phone.className = "divphone";

    divNode.appendChild(name);
    divNode.appendChild(email);
    divNode.appendChild(phone);
    document.getElementById("contactpanel").appendChild(divNode);
}

function Update() {
    Add();
    
        let user = getUser(selectedcontact);
        let Updatebtn = document.getElementById("update-button");
        let Addbtn = document.getElementById("add-button");
        Addbtn.style.display = "none";
        Updatebtn.style.display = "block";
	
        Updatebtn.onclick = function () {if (isInputValid()) 
		{ UpdateDetails(User); getDetails(User.id);updateSet(user)}
    			else {alert("Worng Inputs")} }
        
	
}
function getDetails(element) {
    let d1 = document.getElementById("add");
    let d2 = document.getElementById("info");
    let d3 = document.getElementById("homepage");
    document.form1.reset();
    d1.style.display = "none";
    d2.style.display = "block";
    d3.style.display = "none";
    selectedcontact = element;
    user=getUser(element);
    Element = document.getElementById("username");
    Element.innerText = user.Name;
    Element = document.getElementById("usermailid");
    Element.innerText = " " + user.Email;
    Element = document.getElementById("usermobile");
    Element.innerText = " " + user.Mobile;
    Element = document.getElementById("userlandline");
    Element.innerText = " " + user.Landline;
    Element = document.getElementById("userwebsite");
    Element.innerText = " " + user.Website;
    Element = document.getElementById("useraddress");
    Element.innerText = " " + user.Address;
}
function setDetails(Person){
	Element = document.getElementById("name"+selectedcontact);
    Element.innerText = Person.Name;
    Element = document.getElementById("email"+selectedcontact);
    Element.innerText = Person.Email;
    Element = document.getElementById("phone"+selectedcontact);
    Element.innerText = Person.Mobile;
}

function updateSet(user){
    Element = document.getElementById("enteredname");
    Element.value = user.Name;
    Element = document.getElementById("email");
    Element.value = user.Email;
    Element = document.getElementById("mobile");
    Element.value = user.Mobile;
    Element = document.getElementById("landline");
    Element.value = user.Landline;
    Element = document.getElementById("website");
    Element.value = user.Website;
    Element = document.getElementById("address");
    Element.value = user.Address;
}

function Insert() {
    if (isInputValid()) {
        Person = Create();
        insertContact(Person);
        let divNode = document.createElement("div");
        divNode.onclick = function () { getDetails(Person.id); }
        AddDetails(Person.Email, Person.Name, Person.Mobile, divNode);
        document.form1.reset();
    }
    else {
        alert("Worng Inputs")
    }
}

function Delete() {
    let Node = document.getElementById(selectedcontact);
    document.getElementById("contactpanel").removeChild(Node);
    deleteContact();
}
