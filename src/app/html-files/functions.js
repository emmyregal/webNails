//this file will be used to store all the functions we'll right
//we'll include this file in all HTML files similar to the way 
//the include header is used in C

function getName() {
    //document represents the entire loaded website/page
    const name = document.getElementById("name").value;

    //temp alerts to make sure its working
    alert("Name entered: " + name);

    return name;
}

function getPhoneNumber() {
    const phoneNumber =document.getElementById("phoneNumber").value;
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("please make sure you've entered ONLY 10 digits");
        return;
    }

    alert("Phone number entered: " + phoneNumber);

    return phoneNumber;
}

function addToData(name, phoneNumber) {
    //look thru whole file to see if name and phonenumber are unique
    //if so, add to file in a new line
}