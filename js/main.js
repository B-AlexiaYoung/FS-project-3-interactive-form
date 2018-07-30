//variables
const other = document.getElementById("other-title")
const selectColor = document.getElementById("design");
const activities = document.getElementsByClassName("activities");
let totalCostActivities = 0;
let total = document.getElementsByClassName("total");
let jsFrameworks = document.getElementsByName("js-frameworks")
let jsLibs = document.getElementsByName("js-libs")
let express = document.getElementsByName("express")
let node = document.getElementsByName("node")
let buildTools = document.getElementsByName("build-tools")
let npm = document.getElementsByName("npm")
let all = document.getElementsByName("all")




//hide text inpurt for other job role
other.style.display = "none";



//******************************************* */
//              EVENT LISTENERS
//******************************************* */


//function to show colors avaiable per t-shirt style 

selectColor.addEventListener("change", (event) => {
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
            totalCostActivities += 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        } else {
            express[0].removeAttribute("disabled");
            express[0].parentNode.classList.remove("disabled");
            totalCostActivities -= 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        }
    }
    if (activityCheck.name === "express") {
       
        if (activityCheck.checked === true) {
            jsFrameworks[0].setAttribute("disabled", true);
            jsFrameworks[0].checked = false;
            console.log(express[0].parentNode);
            jsFrameworks[0].parentNode.classList.add("disabled");
            totalCostActivities += 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        } else {
            jsFrameworks[0].removeAttribute("disabled");
            jsFrameworks[0].parentNode.classList.remove("disabled");
            totalCostActivities -= 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }
    }
    if (activityCheck.name === "js-libs") {
        
        if (activityCheck.checked === true) {
            node[0].setAttribute("disabled", true);
            node[0].checked = false;
            node[0].parentNode.classList.add("disabled");
            totalCostActivities += 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        } else {
            node[0].removeAttribute("disabled");
            node[0].parentNode.classList.remove("disabled");
            totalCostActivities -= 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }
    }
    if (activityCheck.name === "node") {
        
        if (activityCheck.checked === true) {
            jsLibs[0].setAttribute("disabled", true);
            jsLibs[0].checked = false;
            console.log(express[0].parentjsLibs);
            jsLibs[0].parentNode.classList.add("disabled");
            totalCostActivities += 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        } else {
            jsLibs[0].removeAttribute("disabled");
            jsLibs[0].parentNode.classList.remove("disabled");
            totalCostActivities -= 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }
    }
    if (activityCheck.name === "all") {
        if (activityCheck.checked === true){
            totalCostActivities += 200;
        total[0].innerHTML="Total &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;
        }else{
            totalCostActivities -= 200;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }
    }
    if (activityCheck.name === "build-tools" || activityCheck.name === "npm") {
        
        if (activityCheck.checked === true){

        totalCostActivities += 100;
        total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }else{
            totalCostActivities -= 100;
            total[0].innerHTML="Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    $" + totalCostActivities;

        }
    }

})
//*********************************** */
//    helper functions for listeners
//*********************************** */

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