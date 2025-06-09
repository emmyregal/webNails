//this file will be used to store all the functions we'll right
//we'll include this file in all HTML files similar to the way 
//the include header is used in C

function getName() {
    //document represents the entire loaded website/page
    const name = document.getElementById("name").value;

    //temp alerts to make sure its working
    alert("Name entered: " + name);
}

function getPhoneNumber() {
    const phoneNumber =document.getElementById("phoneNumber").value;
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    alert("Phone number entered: " + phoneNumber);
}