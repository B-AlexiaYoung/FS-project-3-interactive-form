//variables
const other = document.getElementById("other-title")
const selectColor = document.getElementById("design");
const activities = document.getElementsByClassName("activities");
const payment = document.getElementById("payment");
const regEx = /[^@]+@[^@.]+\.[a-z]+$/i;
const zipregEx = /^\d{5}$/;
const cvvregEx = /^\d{3}$/;


let totalCostActivities = 0;
let colors = document.getElementById("colors-js-puns");
let total = document.getElementsByClassName("total");
let jsFrameworks = document.getElementsByName("js-frameworks")
let jsLibs = document.getElementsByName("js-libs")
let express = document.getElementsByName("express")
let node = document.getElementsByName("node")
let buildTools = document.getElementsByName("build-tools")
let npm = document.getElementsByName("npm")
let all = document.getElementsByName("all")
let creditCard = document.getElementById("credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");
let name = document.getElementById("name");
let button = document.getElementsByTagName("button");
let check = false;
let ccStringValue;
let ccError;
let charCheck;


//hide text input for other job role
other.style.display = "none";
//hide t-shirt color selection
color.style.display = "none";

//******************************************* */
//              EVENT LISTENERS
//******************************************* */


//function to display input text field if other job role selected
const job = document.getElementById("title");
job.addEventListener("change", (event) => {
    if (job.value === "other") {
        other.style.display = "block";
    }
})

//function to show colors avaiable per t-shirt style 

selectColor.addEventListener("change", (event) => {
    color.style.display = "block";
    let tomato = document.querySelector('[value=tomato]');
    let steelblue = document.querySelector('[value=steelblue]');
    let dimgrey = document.querySelector('[value=dimgrey]');
    let cornflowerblue = document.querySelector('[value=cornflowerblue]');
    let darkslategrey = document.querySelector('[value=darkslategrey]');
    let gold = document.querySelector('[value=gold]');
    if (selectColor.value === "js puns") {

        cornflowerblue.style.display = "block";
        darkslategrey.style.display = "block";
        gold.style.display = "block";
        tomato.style.display = "none";
        steelblue.style.display = "none";
        dimgrey.style.display = "none";
    }
    if (selectColor.value === "heart js") {
        tomato.style.display = "block";
        steelblue.style.display = "block";
        dimgrey.style.display = "block";
        cornflowerblue.style.display = "none";
        darkslategrey.style.display = "none";
        gold.style.display = "none";
    }
})


// function to track activites and calculate total cost
activities[0].addEventListener("change", (event) => {
    activityCheck = event.target;
    if (activityCheck.name === "js-frameworks") {
        if (activityCheck.checked === true) {
            express[0].setAttribute("disabled", true);
            express[0].checked = false;
            express[0].parentNode.classList.add("disabled");
            increaseCost(100);
        } else {
            express[0].removeAttribute("disabled");
            express[0].parentNode.classList.remove("disabled");
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "express") {

        if (activityCheck.checked === true) {
            jsFrameworks[0].setAttribute("disabled", true);
            jsFrameworks[0].checked = false;
            jsFrameworks[0].parentNode.classList.add("disabled");
            increaseCost(100);
        } else {
            jsFrameworks[0].removeAttribute("disabled");
            jsFrameworks[0].parentNode.classList.remove("disabled");
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "js-libs") {

        if (activityCheck.checked === true) {
            node[0].setAttribute("disabled", true);
            node[0].checked = false;
            node[0].parentNode.classList.add("disabled");
            increaseCost(100);
        } else {
            node[0].removeAttribute("disabled");
            node[0].parentNode.classList.remove("disabled");
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "node") {

        if (activityCheck.checked === true) {
            jsLibs[0].setAttribute("disabled", true);
            jsLibs[0].checked = false;
            jsLibs[0].parentNode.classList.add("disabled");
            increaseCost(100);
        } else {
            jsLibs[0].removeAttribute("disabled");
            jsLibs[0].parentNode.classList.remove("disabled");
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "all") {
        if (activityCheck.checked === true) {
            increaseCost(200);
        } else {
            decreaseCost(200);
        }
    }
    if (activityCheck.name === "build-tools" || activityCheck.name === "npm") {

        if (activityCheck.checked === true) {

            increaseCost(100);
        } else {
            decreaseCost(100);
        }
    }

})

//payment onption for default credit card display
paypal.style.display = "none";
bitcoin.style.display = "none";

//listener on payment section
payment.addEventListener("change", (event) => {

    let paymentType = payment.value;
    if (paymentType === "paypal") {
        paypal.style.display = "block";
        creditCard.style.display = "none";
        bitcoin.style.display = "none";

    } else if (paymentType === "bitcoin") {
        bitcoin.style.display = "block";
        creditCard.style.display = "none";
        paypal.style.display = "none";
    } else {
        creditCard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    }
});

// listener validation for credit card number
const cardListener = document.getElementById("cc-num");

cardListener.addEventListener("input", (event, para) => {
    ccStringValue = event.target.value;
    ccError = Number(ccStringValue);
    if (isNaN(ccError) && check === false) {
        createCCError();
    }
    /*else if (isNaN(ccError) && check === true) {

       } */
    else if (!isNaN(ccError) && check === false) {} else if (ccStringValue.indexOf(" ") != -1 && check === false) {
        check = true;
        createCCError();

    } else {
        let removePara = document.getElementById("ccID");
        removePara.remove();
        check = false;
    }
    return ccStringValue;
});

// listener register button  Validation
button[0].addEventListener("click", (event) => {

    // //validation for name
    let nameCheck = validateName();
    //validation for email
    let emailCheck = validateEmail();

    //validation one checkbox must be checked
    let boxCheck = validateCheckbox();

    //validation for credit card length
    if (ccStringValue === undefined) {
        ccStringValue = "";
    };
    let ccCheck = validateCreditCard(ccStringValue);

    //validation for zip 
    let zipCheck = validateZip();

    //validation for cvv
    let cvvCheck = validateCvv();


    let paymentCheck = false;
    if (payment.selected === "credit card") {
        if (ccCheck === true &&
            zipCheck === true &&
            cvvCheck === true) {
            paymentCheck = true;
        }
    } else {
        paymentCheck = true;
    }
    // final check 
    if (nameCheck === true &&
        emailCheck === true &&
        boxCheck === true &&
        paymentCheck === true

    ) {
        // form.submit();
    } else {
        event.preventDefault();
    }
}) //end listener on register button - validation




//*********************************** */
//    helper functions for listeners
//*********************************** */

const increaseCost = (cost) => {
    totalCostActivities += cost;
    total[0].innerHTML = "Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
}
const decreaseCost = (cost) => {
    totalCostActivities -= cost;
    total[0].innerHTML = "Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
}
const validateName = () => {
    //validation for name
    if (name.value === "") {
        name.setAttribute("placeholder", "Please enter your name");
        name.setAttribute("class", "error");
        nameCheck = false;
    } else {
        nameCheck = true;
        name.setAttribute("placeholder", "");
        name.removeAttribute("class", "error");

    }
    return nameCheck;
}

const validateEmail = (mail) => {
    mail = document.getElementById("mail");
    if (regEx.test(mail.value) === true) {
        emailCheck = true;
        mail.setAttribute("placeholder", "");
        mail.removeAttribute("class", "error");
    } else {
        mail.setAttribute("placeholder", "Please enter a valid email ")
        mail.setAttribute("class", "error");
        emailCheck = false;
    }
    return (emailCheck);

}

//validation one checkbox must be checked
const validateCheckbox = () => {
    let actCheckbox = document.querySelectorAll("input[type='checkbox']");
    countchecked = 0;
    let legend = document.getElementsByTagName("legend");
    legend[2].style.color = "#184f68";
    legend[2].textContent = "Register for Activities";
    for (let i = 0; i < actCheckbox.length; i++) {

        if (actCheckbox[i].checked) {
            countchecked++;
        }
        boxCheck = true;

    }
    if (countchecked === 0) {
        for (j = 0; j < legend.length; j++) {
            if (legend[j].textContent === "Register for Activities") {
                legend[j].textContent = "Register for Activities:  Please choose an activity"
                legend[j].style.color = "red";
            }
        }
        boxCheck = false;
    }
    return boxCheck;
}

//validation credit card
const validateCreditCard = (ccStringValue) => {

    let cardError = document.getElementById("cc-num");
    cardError.value = "";
    if (ccStringValue.length < 13) {
        cardError.setAttribute("placeholder", "the number you entered was too short")
        ccCard = false;
    } else if (ccStringValue.length > 16) {

        let cardError = document.getElementById("cc-num");
        cardError.value = "";
        cardError.setAttribute("placeholder", "the number you entered was too long")
        ccCard = false;
    } else {
        ccCard = true;
        cardError.setAttribute("placeholder", "");
    }
    return ccCard;
}
// helper function for cc live validation
//create error message
const createCCError = () => {
    let para = document.createElement("span");

    let ccDiv = document.getElementById("cc-num");
    if (para) {
        let parent = ccDiv.parentNode;
        parent.insertBefore(para, ccDiv);
        para.classList.add("tool");
        para.setAttribute("id", "ccID");
        para.innerHTML = "enter only numbers";
        check = true;
        return check;
    }
}



//validation on zip
const validateZip = () => {
    const zip = document.getElementById("zip");
    if (zipregEx.test(zip.value) === false) {
        zip.style.borderColor = "red";
        zipCheck = false;
    } else {
        zipCheck = true;
        zip.style.borderColor = "transparent";
    }

    return zipCheck;
};


//validation on cvv
const validateCvv = () => {
    const cvv = document.getElementById("cvv");
    //let  cvvError=Number(cvv.value);
    if (cvvregEx.test(cvv.value) === false) {
        cvv.style.borderColor = "red";
        cvvCheck = false;
    } else {
        cvvCheck = true;
        cvv.style.borderColor = "transparent";
    }

    return cvvCheck;

};