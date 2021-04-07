class Destinations{
    constructor(name,description,price,pic){
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic
    }
}

var dest1 = new Destinations("Bora Bora","Bora Bora was discovered by Captain James Cook in 1769. It’s one of the most secluded islands on Earth. It’s halfway between Australia and the United States.",2800,"pic1.jpg");
var dest2 = new Destinations("Bali","While Bali is the name of the island, it is also a province that includes a handful of smaller islands congregated off the main island’s southeast coast.",850,"pic2.jpg");
var dest3 = new Destinations("El Nido","El Nido is arguably one of the most popular resort destinations in the Philippines",192,"pic3.jpg");
var destlist = [dest1,dest2,dest3] 
var taglist = ["tag1","tag2","tag3"]
var piclist = ["pic1","pic2","pic3"]

function fun1()
{   
    for( var i=0; destlist.length;i++){
    document.getElementById(taglist[i]).innerHTML=
    "<h3>"+destlist[i].name+"</h3><br>"+
    "<p>"+destlist[i].description+"</p><br>"+
    "<p>$"+destlist[i].price+"</p><br>";
    document.getElementById(piclist[i]).src=destlist[i].pic;
}
}

function formValidation() {
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var uemail = document.registration.email;
    var ValidateDateofBirth = document.registration.dateofbirth;
    var ufsex = document.registration.fsex;
        if (allLetter(uname)) {
            if (alphanumeric(uadd)) {
                if (ValidateEmail(uemail)) {
                    if (allnumeric(uzip)) {
                        if (validsex(umsex, ufsex)) {}
                            }
                        }
                    }
                }
                return false;
            }
        
    
    

    
function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function ValidateDateofBirth (date) {
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (pattern.test(str_input_date)) {
        alert("valid date");
        dateofbirth.focus()
        return false;
    }
    return true;

}

function allnumeric(uphone) {
    var numbers = /^[0-9]+$/;
    if (uphone.value <1 (uphone)) {
        return true;
    }
    else {
        alert ("Enter Country Code");
        uphone.focus();
        return false;
    }

}

function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
