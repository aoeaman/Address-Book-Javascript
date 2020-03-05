var id = 1;
var selectedcontact;
var Element;
var isNameVAlid = false;
var isEmailVAlid = false;
var isMobileVAlid = false;

window.onload = function () { Validate(); }

function wrongInput(e){
	e.style.borderWidth = "thin thick";
	e.style.borderColor = "red";
}
function correctInput(e){
	e.style.borderWidth = "thin thick";
	e.style.borderColor = "green";
}

function Validate() {
    let namefield = document.getElementById("enteredname");
    let emailfield = document.getElementById("email");
    let mobilefield = document.getElementById("mobile");

    namefield.addEventListener('input', checkName);
    emailfield.addEventListener('input', checkEmail);
    mobilefield.addEventListener('input', CheckMobile);

    namefield.addEventListener('focus', checkName);
    emailfield.addEventListener('focus', checkEmail);
    mobilefield.addEventListener('focus', CheckMobile);
}

function checkName() {
    if (ValidateName(this.value))
    {
		isNameVAlid = true;
        correctInput(this);
    }
    else
    {
        isNameVAlid = false;
        wrongInput(this);
    }
}

function checkEmail()
{
    if (Validateemail(this.value))
    {
        isEmailVAlid = true;
        correctInput(this);
    }
    else
    {
        isEmailVAlid = false;
        wrongInput(this);
    }
}

function CheckMobile() {
    if (Validatephonenumber(this.value))
    {
        isMobileVAlid = true;
        correctInput(this);
    }
    else
    {
        isMobileVAlid = false;
        wrongInput(this);
    }
}