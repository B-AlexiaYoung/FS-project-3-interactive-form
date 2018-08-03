//variables
const other = document.getElementById("other-title")
const selectColor = document.getElementById("design");
const activities = document.getElementsByClassName("activities");
const payment = document.getElementById("payment");
//const regEX = /[^\D\w\W]+@\.[\D]/;
const regEx = /[^@]+@[^@.]+\.[a-z]+$/i;
const ccregEX = /\d{13,16}/;
const zipregEx = /\d{5}/;
const cvvregEx = /\d{3}/;


let totalCostActivities = 0;
let colors=document.getElementById("colors-js-puns");
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
// let email= document.getElementById("name");
let button = document.getElementsByTagName("button");
let check = false;
let ccStringValue;
let ccError;
let charCheck;
//let mail= document.getElementById("mail").value;

console.log(ccStringValue);


//hide text inpurt for other job role
other.style.display = "none";
//hide t-shirt color selection
color.style.display = "none";

//******************************************* */
//              EVENT LISTENERS
//******************************************* */


//function to show colors avaiable per t-shirt style 

selectColor.addEventListener("change", (event) => {
    color.style.display="block";
    let tomato = document.querySelector('[value=tomato]');
    let steelblue = document.querySelector('[value=steelblue]');
    let dimgrey = document.querySelector('[value=dimgrey]');
    let cornflowerblue = document.querySelector('[value=cornflowerblue]');
    let darkslategrey = document.querySelector('[value=darkslategrey]');
    let gold = document.querySelector('[value=gold]');
    console.log(selectColor.value);
    if (selectColor.value === "js puns") {

        cornflowerblue.style.display = "block";
        darkslategrey.style.display = "block";
        gold.style.display = "block";
        tomato.style.display = "none";
        steelblue.style.display = "none";
        dimgrey.style.display = "none";
        console.log(tomato);
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
    //total[0]
    if (activityCheck.name === "js-frameworks") {

        if (activityCheck.checked === true) {
            express[0].setAttribute("disabled", true);
            express[0].checked = false;
            console.log(express[0].parentNode);
            express[0].parentNode.classList.add("disabled");
            // totalCostActivities += 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(100);
        } else {
            express[0].removeAttribute("disabled");
            express[0].parentNode.classList.remove("disabled");
            // totalCostActivities -= 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "express") {

        if (activityCheck.checked === true) {
            jsFrameworks[0].setAttribute("disabled", true);
            jsFrameworks[0].checked = false;
            //console.log(express[0].parentNode);
            jsFrameworks[0].parentNode.classList.add("disabled");
            // totalCostActivities += 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(100);
        } else {
            jsFrameworks[0].removeAttribute("disabled");
            jsFrameworks[0].parentNode.classList.remove("disabled");
            // totalCostActivities -= 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "js-libs") {

        if (activityCheck.checked === true) {
            node[0].setAttribute("disabled", true);
            node[0].checked = false;
            node[0].parentNode.classList.add("disabled");
            // totalCostActivities += 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(100);
        } else {
            node[0].removeAttribute("disabled");
            node[0].parentNode.classList.remove("disabled");
            // totalCostActivities -= 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "node") {

        if (activityCheck.checked === true) {
            jsLibs[0].setAttribute("disabled", true);
            jsLibs[0].checked = false;
            //console.log(express[0].parentjsLibs);
            jsLibs[0].parentNode.classList.add("disabled");
            // totalCostActivities += 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(100);
        } else {
            jsLibs[0].removeAttribute("disabled");
            jsLibs[0].parentNode.classList.remove("disabled");
            // totalCostActivities -= 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(100);
        }
    }
    if (activityCheck.name === "all") {
        if (activityCheck.checked === true) {
            //     totalCostActivities += 200;
            // total[0].innerHTML="Total &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(200);
        } else {
            // totalCostActivities -= 200;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(200);
        }
    }
    if (activityCheck.name === "build-tools" || activityCheck.name === "npm") {

        if (activityCheck.checked === true) {

            // totalCostActivities += 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            increaseCost(100);
        } else {
            // totalCostActivities -= 100;
            // total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
            decreaseCost(100);
        }
    }

})

//payment onption for default credit card display
paypal.style.display = "none";
bitcoin.style.display = "none";

//listener on payment section
payment.addEventListener("change", (event) => {
    //console.log(paypal.style.display);

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
// let ccStringValue
// let ccError
// let charCheck
// listener validation for credit card number
const cardListener = document.getElementById("cc-num");
//console.log(cardListener);


cardListener.addEventListener("input", (event, para) => {
    console.log(event.target.value);
    ccStringValue = event.target.value;
    console.log(ccStringValue);
    ccError = Number(ccStringValue);
    console.log(isNaN(ccError));
    //charCheck = /[^a-zA-Z\d]/g;
    
    console.log(ccError);
    if (isNaN(ccError) && check === false) {
        createCCError();
    } else if (isNaN(ccError) && check === true) {
       
    } else if (!isNaN(ccError) && check === false) {
        console.log("number");
    } else if (ccStringValue.indexOf(" ") != -1 && check === false) {
        console.log("space");
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
//console.log(button);
button[0].addEventListener("click", (event) => {
    // console.log("hi");
    event.preventDefault();

    //validation for name
    if (name.value === "") {
        name.setAttribute("placeholder", "Please enter your name");
        name.setAttribute("class", "error");
    }
    //validation for email
    validateEmail();

    //validation one checkbox must be checked
    validateCheckbox();

   //validation for credit card length
   if (ccStringValue === undefined){
    ccStringValue = "";
   };
    validateCreditCard(ccStringValue);
    
    //validation for zip 
    validateZip();
    
    //validation for cvv
    validateCvv();

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


const validateEmail = (mail) => {
    mail = document.getElementById("mail");
    //console.log(mail.value);
    //if (mail.value.match(regEX)) {
        if (regEx.test(mail.value)===true){

        return (true);
    } else {
        mail.setAttribute("placeholder", "Please enter a valid email ")
        mail.setAttribute("class", "error");
        //console.log("no valid");
        return (false);
    }
}
//validation one checkbox must be checked

const validateCheckbox = () => {
    let actCheckbox = document.querySelectorAll("input[type='checkbox']");
    //console.log(actCheckbox.length);
    countchecked = 0;
    for (let i = 0; i < actCheckbox.length; i++) {
        if (actCheckbox[i].checked) {
            countchecked++;
        }
    }
    if (countchecked === 0) {
        //console.log("none checked")
        let legend = document.getElementsByTagName("legend");
        //console.log(legend);
        for (j = 0; j < legend.length; j++) {
            //console.log(legend[j].textContent);
            if (legend[j].textContent === "Register for Activities") {
                legend[j].textContent = "Register for Activities:  Please choose an activity"
                legend[j].style.color = "red";
            }
        }
        //return false;    


    }
}
//validation credit card
const validateCreditCard = (ccStringValue) => {
    
    let cardError = document.getElementById("cc-num");
    console.log(cardError);
    console.log(cardError.value);
    cardError.value="";
    if (ccStringValue.length < 13) {
    console.log("under 13")
    cardError.setAttribute("placeholder", "the number you entered was too short")
    } else if (ccStringValue.length > 16) {
    console.log("over 16");
    let cardError = document.getElementById("cc-num");
        console.log(cardError.textContent);
    cardError.value="";
    cardError.setAttribute("placeholder", "the number you entered was too long")
    }
}
// helper function for cc validation
//create error message
const createCCError = () => {
    let para = document.createElement("span");

    let ccDiv = document.getElementById("cc-num");
    console.log(ccDiv);
    if (para) {
        let parent = ccDiv.parentNode;
        //ccDiv.insertBefore(para);
        parent.insertBefore(para, ccDiv);
        para.classList.add("tool");
        para.setAttribute("id", "ccID");
        para.innerHTML = "enter only numbers";

        console.log("not a num");
        check = true;
        return check;
    }
}



//validation on zip
const validateZip = () => {
const zip=document.getElementById("zip");
    console.log(zip.value);
    //let inputZip = zip.value;
    if(zipregEx.test(zip.value)=== false){
        zip.style.borderColor="red";
    }else if(zip.length != 5){
        zip.style.borderColor="red";

    }
};


//validation on cvv
const validateCvv = () => {
    const cvv=document.getElementById("cvv");
        console.log(cvv.value);
        //let inputZip = zip.value;
        if(cvvregEx.test(cvv.value)=== false){
            cvv.style.borderColor="red";
        } else if(cvv.length != 3){
            cvv.style.borderColor="red";

        }
    };
// more cc card validation
// const checkForLetter = () => {
//     let nothingButNum = ccStringValue.test(charCheck);
//     //console.log("numkjhg");
//     return nothingButNum;
// }
//checkForLetter();
//function to reset activities
// const resetActivities = () => {
//     jsFrameworks[0].removeAttribute("disabled");
//     jsLibs[0].removeAttribute("disabled");
//     express[0].removeAttribute("disabled");
//     nde[0].removeAttribute("disabled");
//     buildTools[0].removeAttribute("disabled");
//     npm[0].removeAttribute("disabled");
//     all[0].removeAttribute("disabled");
//     jsFrameworks[0].parentNode.classList.remove("disabled");
//     jsLibs[0].parentNode.classList.remove("disabled");
//     express[0].parentNode.classList.remove("disabled");
//     nde[0].parentNode.classList.remove("disabled");
//     buildTools[0].parentNode.classList.remove("disabled");
//     npm[0].parentNode.classList.remove("disabled");
//     all[0].parentNode.classList.remove("disabled");




// }